'use client';

import React from 'react';

export const LoadingOverlay = () => {
  return (
    <div className="fixed inset-0 bg-white bg-opacity-75 flex items-center justify-center z-50">
      <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-500 border-t-transparent" />
    </div>
  );
};