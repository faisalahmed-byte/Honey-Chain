import React from 'react';
import { Play, Pause, ChevronRight, ChevronLeft, X, Sparkles } from 'lucide-react';

interface DemoStep {
  id: number;
  tab: string;
  title: string;
  actionDesc: string;
  highlightText: string;
  triggerAction?: () => void;
}

interface DemoPresentationBarProps {
  currentStep: number;
  totalSteps: number;
  stepData: DemoStep;
  nextStep: () => void;
  prevStep: () => void;
  stopDemo: () => void;
  isPlaying: boolean;
  setIsPlaying: (playing: boolean) => void;
}

export const DemoPresentationBar: React.FC<DemoPresentationBarProps> = ({
  currentStep,
  totalSteps,
  stepData,
  nextStep,
  prevStep,
  stopDemo,
  isPlaying,
  setIsPlaying
}) => {
  return (
    <div className="bg-slate-900 text-white border-b-2 border-amber-400 px-4 py-2.5 shadow-xl sticky top-28 z-30 transition-all">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        <div className="flex items-center space-x-3 w-full md:w-auto">
          <div className="bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-900 font-extrabold px-3 py-1 rounded-md text-xs tracking-wider flex items-center space-x-1 shrink-0">
            <Sparkles className="h-3.5 w-3.5" />
            <span>DEMO STEP {currentStep} / {totalSteps}</span>
          </div>

          <div>
            <h4 className="font-bold text-sm text-amber-300 flex items-center space-x-2">
              <span>{stepData.title}</span>
            </h4>
            <p className="text-xs text-slate-300">
              {stepData.actionDesc}
            </p>
          </div>
        </div>

        <div className="hidden lg:flex items-center bg-slate-800 border border-slate-700 px-3 py-1 rounded-lg text-xs font-mono text-amber-200">
          <span className="truncate max-w-xs">{stepData.highlightText}</span>
        </div>

        <div className="flex items-center space-x-2 shrink-0">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className={`px-3 py-1 rounded text-xs font-semibold flex items-center space-x-1 border transition-all ${
              isPlaying
                ? 'bg-amber-500/20 border-amber-400 text-amber-300'
                : 'bg-slate-800 border-slate-700 text-slate-300 hover:text-white'
            }`}
            title={isPlaying ? 'Pause Auto Tour' : 'Start Auto Tour (5s per step)'}
          >
            {isPlaying ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
            <span>{isPlaying ? 'Pause' : 'Auto Play'}</span>
          </button>

          <button
            onClick={prevStep}
            disabled={currentStep === 1}
            className="p-1.5 rounded bg-slate-800 hover:bg-slate-700 disabled:opacity-40 text-slate-200"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <button
            onClick={nextStep}
            className="px-3 py-1 rounded bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center space-x-1"
          >
            <span>Next Step</span>
            <ChevronRight className="h-3.5 w-3.5" />
          </button>

          <button
            onClick={stopDemo}
            className="p-1.5 rounded bg-slate-800 hover:bg-red-900/60 text-slate-400 hover:text-red-300 transition-colors ml-2"
            title="Exit Demo Mode"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
