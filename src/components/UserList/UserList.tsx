import React from 'react';
import { User } from '../../types';
import UserProfile from '../UserProfile/UserProfile';
import { List, ListItem } from '@mui/material';

interface UserListProps {
  users: User[];
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <List>
      {users.map((user) => (
        <ListItem key={user.id}>
          <UserProfile name={user.name} />
        </ListItem>
      ))}
    </List>
  );
};

export default UserList;
