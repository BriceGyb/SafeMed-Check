import React, { useState } from 'react';
import { Home } from './components/Home';
import { ProductEntry } from './components/ProductEntry';
import { Analysis } from './components/Analysis';
import { Result } from './components/Result';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [firstProduct, setFirstProduct] = useState('');
  const [secondProduct, setSecondProduct] = useState('');

  const navigateTo = (page: string) => {
    setCurrentPage(page);
  };

  const handleStartScan = () => {
    navigateTo('firstProduct');
  };

  const handleFirstProductSelect = (product: string) => {
    setFirstProduct(product);
    navigateTo('secondProduct');
  };

  const handleSecondProductSelect = (product: string) => {
    setSecondProduct(product);
    navigateTo('analysis');
    
    // Simulate analysis time
    setTimeout(() => {
      navigateTo('result');
    }, 3000);
  };

  const handleRestart = () => {
    setFirstProduct('');
    setSecondProduct('');
    navigateTo('home');
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-blue-50">
        {currentPage === 'home' && <Home onStartScan={handleStartScan} />}
        {currentPage === 'firstProduct' && (
          <ProductEntry 
            isFirstProduct={true}
            onProductSelect={handleFirstProductSelect}
          />
        )}
        {currentPage === 'secondProduct' && (
          <ProductEntry 
            isFirstProduct={false}
            selectedProduct={firstProduct}
            onProductSelect={handleSecondProductSelect}
          />
        )}
        {currentPage === 'analysis' && <Analysis />}
        {currentPage === 'result' && (
          <Result 
            firstProduct={firstProduct} 
            secondProduct={secondProduct}
            onRestart={handleRestart}
          />
        )}
      </div>
    </LanguageProvider>
  );
}

export default App;