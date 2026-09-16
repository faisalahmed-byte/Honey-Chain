const crypto = require('crypto');

/**
 * Calculates SHA-256 hash for a block payload
 */
function calculateBlockHash({ block_index, batch_id, event_type, timestamp, actor, location, details, previous_hash }) {
  const payload = `${block_index}|${batch_id}|${event_type}|${timestamp}|${actor}|${location}|${JSON.stringify(details || '')}|${previous_hash}`;
  return crypto.createHash('sha256').update(payload).digest('hex');
}

/**
 * Verifies the integrity of an array of blocks sorted by block_index ascending
 */
function verifyBlockchainIntegrity(blocks) {
  if (!blocks || blocks.length === 0) {
    return { valid: true, message: "BLOCKCHAIN VERIFIED (EMPTY LEDGER)", brokenBlockIndex: null };
  }

  for (let i = 0; i < blocks.length; i++) {
    const currentBlock = blocks[i];
    const prevBlock = i > 0 ? blocks[i - 1] : null;

    // Check if explicitly marked tampered
    if (currentBlock.is_tampered === 1) {
      return {
        valid: false,
        message: "DATA INTEGRITY COMPROMISED",
        tamperedBlockIndex: currentBlock.block_index,
        batchId: currentBlock.batch_id,
        reason: `Block #${currentBlock.block_index} has been altered without authorization.`
      };
    }

    // 1. Verify link to previous block
    if (i === 0) {
      if (currentBlock.block_index === 1 && currentBlock.previous_hash !== '0000000000000000000000000000000000000000000000000000000000000000') {
        return {
          valid: false,
          message: "DATA INTEGRITY COMPROMISED",
          tamperedBlockIndex: currentBlock.block_index,
          batchId: currentBlock.batch_id,
          reason: `Genesis Block index #${currentBlock.block_index} has invalid previous hash reference.`
        };
      }
    } else {
      if (currentBlock.previous_hash !== prevBlock.current_hash) {
        return {
          valid: false,
          message: "DATA INTEGRITY COMPROMISED",
          tamperedBlockIndex: currentBlock.block_index,
          batchId: currentBlock.batch_id,
          reason: `Block #${currentBlock.block_index} previous_hash does not match Block #${prevBlock.block_index} current_hash.`
        };
      }
    }

    // 2. Verify self hash calculation
    let detailsObj;
    try {
      detailsObj = typeof currentBlock.details === 'string' ? JSON.parse(currentBlock.details || '{}') : currentBlock.details;
    } catch (e) {
      detailsObj = currentBlock.details;
    }

    const expectedHash = calculateBlockHash({
      block_index: currentBlock.block_index,
      batch_id: currentBlock.batch_id,
      event_type: currentBlock.event_type,
      timestamp: currentBlock.timestamp,
      actor: currentBlock.actor,
      location: currentBlock.location,
      details: detailsObj,
      previous_hash: currentBlock.previous_hash
    });

    if (currentBlock.current_hash !== expectedHash) {
      return {
        valid: false,
        message: "DATA INTEGRITY COMPROMISED",
        tamperedBlockIndex: currentBlock.block_index,
        batchId: currentBlock.batch_id,
        reason: `Block #${currentBlock.block_index} hash recalculation mismatch. Recorded: ${currentBlock.current_hash.substring(0, 10)}... Computed: ${expectedHash.substring(0, 10)}...`
      };
    }
  }

  return { valid: true, message: "BLOCKCHAIN VERIFIED", totalBlocks: blocks.length };
}

module.exports = {
  calculateBlockHash,
  verifyBlockchainIntegrity
};
