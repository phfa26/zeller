import React from 'react';
import { User, UserType } from '../../types';
import UserProfile from '../UserProfile/UserProfile';
import { List } from '@mui/material';
import { StyledListItem, Title } from './styles';
import { ListDivider } from '../../common/styles';

interface UserListProps {
  users: User[];
  role: UserType;
}

const UserList: React.FC<UserListProps> = ({ users, role }) => {
  const getUserRoleTitle = (role: UserType) => {
    switch(role.toLowerCase()) {
      case 'admin':
        return 'Admin Users';
      case 'manager':
        return 'Manager Users';
      default:
        return 'Users';
    }
  };

  return (
    <>
      <Title variant="h4">{getUserRoleTitle(role)}</Title> {/* Display the title here */}
      <List>
        {users.map((user) => (
          <StyledListItem key={user.id}>
            <UserProfile user={user} />
          </StyledListItem>
        ))}
      </List>
      <ListDivider />
    </>
  );
};

export default UserList;
