import React from 'react';
import '@/styles/home.css';

interface AboutProps {
    // Add any props if needed
}

const About: React.FC<AboutProps> = () => {
    return (
        <div className="tmp-not-available">
            Currently, this page is not available. Please check back
            later.
        </div>
    );
};

export default About;
