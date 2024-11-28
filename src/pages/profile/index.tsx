import React from 'react';
import SidebarPanel from '@/components/profile/siderbarPanel';
import MainPanel from '@/components/profile/mainPanel';
// import FeatureListingPanel from '@/components/featureListing';
import '@/styles/profile.css';

interface ProfileProps {
  // Add any props if needed
}

const Profile: React.FC<ProfileProps> = () => {
  return (
    <div className="profile">
      <SidebarPanel />
      <MainPanel />
    </div>
  );
};

export default Profile;
