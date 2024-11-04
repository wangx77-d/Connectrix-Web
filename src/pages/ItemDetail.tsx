import React from 'react';

interface ItemDetailProps {
  // Add any props if needed
}

const ItemDetail: React.FC<ItemDetailProps> = () => {
  return (
    <div className="item-detail">
      <h1>Item Detail</h1>
      <p>This is the detail page for a specific item.</p>
      {/* Add more item-specific content here */}
    </div>
  );
};

export default ItemDetail;
