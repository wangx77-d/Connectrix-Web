import React from 'react';
// import '@assets/styles/Home.css';

interface HomeProps {
  // Add any props if needed
}

const Home: React.FC<HomeProps> = () => {
  return (
    <div className="home">
      <h1>Welcome to the Home Page</h1>
      <p>
        This is a basic TypeScript React component for the Home page.
      </p>
    </div>
  );
};

export default Home;
