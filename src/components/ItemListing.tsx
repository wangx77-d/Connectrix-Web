// src/pages/ItemListing.tsx
import React, { useState } from 'react';

const ItemListing: React.FC = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState<number | ''>('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ title, price, description });
    // Submit form data to the backend or service
  };

  return (
    <div>
      <h1>List a New Item</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Item Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
          />
        </div>
        <div>
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ItemListing;
