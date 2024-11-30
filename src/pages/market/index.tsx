import React from 'react';
import '@/styles/home.css';

interface MarketProps {
    // Add any props if needed
}

const Market: React.FC<MarketProps> = () => {
    return (
        <div className="tmp-not-available">
            Currently, this page is not available. Please check back
            later.
        </div>
    );
};

export default Market;
