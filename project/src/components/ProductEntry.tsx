import React from 'react';
import { ArrowLeft, Search } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { products } from '../data/products';
import { LanguageSelector } from './LanguageSelector';

interface ProductEntryProps {
  isFirstProduct: boolean;
  selectedProduct?: string;
  onProductSelect: (product: string) => void;
}

export const ProductEntry: React.FC<ProductEntryProps> = ({ 
  isFirstProduct,
  selectedProduct,
  onProductSelect
}) => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col p-6 bg-blue-50">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-blue-700">
          {isFirstProduct ? t('selectFirst') : t('selectSecond')}
        </h1>
        <LanguageSelector />
      </div>

      <div className="relative mb-6">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          className="bg-white w-full pl-10 pr-4 py-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
          placeholder={isFirstProduct ? t('selectFirst') : t('selectSecond')}
          readOnly
        />
      </div>

      <div className="grid grid-cols-1 gap-4 mb-8">
        {products.map(product => (
          <button
            key={product.id}
            onClick={() => onProductSelect(product.id)}
            disabled={!isFirstProduct && product.id === selectedProduct}
            className={`flex items-center bg-white p-4 rounded-lg shadow-md ${
              !isFirstProduct && product.id === selectedProduct 
                ? 'opacity-50 cursor-not-allowed' 
                : 'hover:bg-blue-50 active:bg-blue-100'
            }`}
          >
            <div className="w-16 h-16 bg-gray-200 rounded-md overflow-hidden mr-4">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-medium text-gray-800">
                {t(product.id)}
              </h3>
            </div>
          </button>
        ))}
      </div>

      {!isFirstProduct && (
        <div className="text-center text-gray-500 mt-4">
          <p>{t('analyze')}</p>
        </div>
      )}
    </div>
  );
};