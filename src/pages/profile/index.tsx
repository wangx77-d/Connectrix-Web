import React from 'react';
import SidebarPanel from '@/components/profile/siderbarPanel';
import BioCardPanel from '@/components/profile/bioCardPanel';
// import FeatureListingPanel from '@/components/featureListing';

interface ProfileProps {
  // Add any props if needed
}

const Profile: React.FC<ProfileProps> = () => {
  return (
    <div className="profile">
      <SidebarPanel />
      <BioCardPanel />
    </div>
  );
};

export default Profile;
