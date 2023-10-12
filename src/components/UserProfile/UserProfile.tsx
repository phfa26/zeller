import React from 'react';
import { User } from '../../types';
import { ProfileImagePlaceholder, RegularText, UserRoleText, UserContainer, UserInfo } from './styles';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

interface UserProfileProps {
  user: User;
}

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  return (
    <UserContainer>
        <ProfileImagePlaceholder>
          {user.name ? user.name[0].toUpperCase() : <AccountCircleIcon />}
        </ProfileImagePlaceholder>
      <UserInfo>
        <RegularText>{user.name ?? 'Unnamed User'}</RegularText>
        <UserRoleText variant="body2">{user.role.toLowerCase()}</UserRoleText>
      </UserInfo>
    </UserContainer>
  );
};

export default UserProfile;
