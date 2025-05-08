import React, { useState } from 'react';
import { AlertTriangle, Volume2, RotateCcw } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { LanguageSelector } from './LanguageSelector';
import { getInteractionResult } from '../data/products';

interface ResultProps {
  firstProduct: string;
  secondProduct: string;
  onRestart: () => void;
}

export const Result: React.FC<ResultProps> = ({ 
  firstProduct, 
  secondProduct,
  onRestart
}) => {
  const { t, language } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(false);
  
  const interactionResult = getInteractionResult(firstProduct, secondProduct);
  
  const handleVoiceOutput = () => {
    if ('speechSynthesis' in window) {
      setIsPlaying(true);
      
      const message = new SpeechSynthesisUtterance(t(interactionResult.message));
      
      // Set language for speech
      switch(language) {
        case 'fr':
          message.lang = 'fr-FR';
          break;
        case 'en':
          message.lang = 'en-US';
          break;
        // For Mooré and Dioula, we use French as fallback since most devices won't have these languages
        default:
          message.lang = 'fr-FR';
      }
      
      message.onend = () => {
        setIsPlaying(false);
      };
      
      window.speechSynthesis.speak(message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col p-6 bg-blue-50">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-blue-700">{t('resultsTitle')}</h1>
        <LanguageSelector />
      </div>
      
      <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
        <div className="flex flex-col items-center mb-4">
          <div className="bg-red-100 p-4 rounded-full mb-4">
            <AlertTriangle className="text-red-500 w-12 h-12" />
          </div>
          <h2 className="text-xl font-bold text-red-500 text-center mb-6">
            {t('incompatible')}
          </h2>
        </div>
        
        <div className="p-4 bg-red-50 rounded-lg border border-red-200 mb-6">
          <p className="text-gray-800 text-lg">
            {t(interactionResult.message)}
          </p>
        </div>
        
        <button 
          onClick={handleVoiceOutput}
          disabled={isPlaying}
          className="w-full flex items-center justify-center bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 text-white py-3 px-4 rounded-lg mb-4 transition-colors"
        >
          <Volume2 className="w-5 h-5 mr-2" />
          <span>{t('listen')}</span>
          {isPlaying && (
            <span className="ml-2 w-4 h-4 rounded-full bg-white animate-ping"></span>
          )}
        </button>
      </div>
      
      <button 
        onClick={onRestart}
        className="flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-3 px-4 rounded-lg transition-colors mt-auto"
      >
        <RotateCcw className="w-5 h-5 mr-2" />
        <span>{t('restart')}</span>
      </button>
    </div>
  );
};