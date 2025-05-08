import React from 'react';
import { Languages } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const LanguageSelector: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="flex items-center bg-white rounded-lg shadow-md px-3 py-2">
      <Languages className="text-blue-500 w-5 h-5 mr-2" />
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value as any)}
        className="bg-transparent border-none text-gray-700 focus:outline-none text-sm"
        aria-label={t('language')}
      >
        <option value="fr">Français</option>
        <option value="en">English</option>
        <option value="moore">Mooré</option>
        <option value="dioula">Dioula</option>
      </select>
    </div>
  );
};