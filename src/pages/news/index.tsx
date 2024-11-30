import React from 'react';
import '@/styles/home.css';

interface NewsProps {
    // Add any props if needed
}

const News: React.FC<NewsProps> = () => {
    return (
        <div className="tmp-not-available">
            Currently, this page is not available. Please check back
            later.
        </div>
    );
};

export default News;
