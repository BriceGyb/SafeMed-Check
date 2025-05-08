import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { LanguageSelector } from './LanguageSelector';

export const Analysis: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-blue-50">
      <div className="absolute top-4 right-4">
        <LanguageSelector />
      </div>
      
      <div className="w-full max-w-md flex flex-col items-center">
        <h1 className="text-2xl font-bold text-blue-700 mb-8">{t('analyzing')}</h1>
        
        <div className="bg-white rounded-xl shadow-lg p-8 w-full mb-6 flex flex-col items-center">
          <div className="w-24 h-24 relative mb-8">
            <div className="absolute inset-0 rounded-full border-4 border-blue-200 border-opacity-25"></div>
            <div className="absolute inset-0 rounded-full border-4 border-blue-500 border-t-transparent animate-spin"></div>
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
            <div className="bg-blue-500 h-2 rounded-full animate-pulse" style={{ width: '60%' }}></div>
          </div>
          
          <p className="text-gray-500 text-center text-lg">
            {t('analyzing')}
          </p>
        </div>
      </div>
    </div>
  );
};