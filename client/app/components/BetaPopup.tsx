"use client";

import React from "react";

interface BetaPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BetaPopup({ isOpen, onClose }: BetaPopupProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-md rounded-[40px] p-8 border border-white/20 max-w-md w-full text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-[#68A2FF] to-[#2D18FB] rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        </div>
        
        <h3 className="text-2xl font-jura font-bold text-white mb-4">
          Under Beta Development
        </h3>
        
        <p className="text-white/70 font-fustat mb-6 leading-relaxed">
          This feature is currently under development. Sign in to get notified when it becomes available.
        </p>
        
        <button
          onClick={onClose}
          className="w-full bg-gradient-to-r from-[#68A2FF] to-[#2D18FB] text-white px-6 py-3 rounded-full font-inter font-medium hover:opacity-90 transition-opacity"
        >
          Got it
        </button>
      </div>
    </div>
  );
}
