import React from 'react';

interface ProfileProps {
  // Add any props if needed
}

const Profile: React.FC<ProfileProps> = () => {
  return (
    <div className="profile">
      <h1>User Profile</h1>
      <p>This is the profile page for the user.</p>
      {/* Add more profile-related content here */}
    </div>
  );
};

export default Profile;
