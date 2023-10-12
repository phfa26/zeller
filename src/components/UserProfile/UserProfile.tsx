import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { ProfileImagePlaceholder, RegularText } from './styles';

interface UserProfileProps {
  name?: string;
}

const UserProfile: React.FC<UserProfileProps> = ({ name }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <ProfileImagePlaceholder> 
        {name ? name[0].toUpperCase() : <AccountCircleIcon /> }
      </ProfileImagePlaceholder>
      <RegularText>{name ?? 'Unnamed User'}</RegularText>
    </div>
  );
};

export default UserProfile;
