import React from 'react';
import { Pill, Scan } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { LanguageSelector } from './LanguageSelector';

interface HomeProps {
  onStartScan: () => void;
}

export const Home: React.FC<HomeProps> = ({ onStartScan }) => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-b from-blue-100 to-blue-50">
      <div className="absolute top-4 right-4">
        <LanguageSelector />
      </div>
      <div className="w-full max-w-md flex flex-col items-center">
        <div className="flex items-center justify-center mb-8">
          <Pill className="text-blue-500 w-10 h-10 mr-2" />
          <h1 className="text-3xl font-bold text-blue-700">{t('appTitle')}</h1>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-8 w-full mb-6 flex flex-col items-center">
          <Scan className="text-blue-500 w-24 h-24 mb-6" />
          <p className="text-gray-700 text-center mb-8 text-lg">
            {t('appTitle')}
          </p>
          <button 
            onClick={onStartScan}
            className="bg-blue-500 hover:bg-blue-600 transition-colors text-white text-xl py-4 px-8 rounded-full font-semibold shadow-md flex items-center justify-center w-full"
          >
            {t('startScan')}
          </button>
        </div>
      </div>
    </div>
  );
};