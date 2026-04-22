/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { Product } from '../types';
import ProductCard from './ProductCard';

interface SavedForLaterProps {
  favorites: Product[];
  onProductClick: (product: Product) => void;
  toggleFavorite: (product: Product) => void;
}

const SavedForLater: React.FC<SavedForLaterProps> = ({ favorites, onProductClick, toggleFavorite }) => {
  if (favorites.length === 0) return null;

  return (
    <section id="saved" className="py-24 px-6 md:px-12 bg-[#EBE7DE]">
      <div className="max-w-[1800px] mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-[#2C2A26] mb-4">Saved for Later</h2>
          <p className="text-sm uppercase tracking-[0.2em] text-[#5D5A53]">Your personal curation</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {favorites.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onClick={onProductClick} 
              isFavorite={true}
              onToggleFavorite={() => toggleFavorite(product)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SavedForLater;
