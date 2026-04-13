import React from 'react';

export function DisclaimerBanner() {
  return (
    <div className="bg-amber-50 border-t border-amber-100 py-3 px-4 text-center relative z-[60]">
      <p className="text-[10px] sm:text-xs font-medium text-amber-800 leading-tight">
        ⚠️ Research Tool Only — Predictions are based on retrospective cohort analysis and published clinical evidence. Not prospectively validated. Not a medical device. Not for direct clinical decision making.
      </p>
    </div>
  );
}
