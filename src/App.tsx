import React, { useState, useEffect } from 'react';
import { UserType, User } from './types';
import { StyledContainer, Title, ErrorText } from './App.styles';
import { CircularProgress } from '@mui/material';
import UserTypeSelector from './components/UserTypeSelector/UserTypeSelector';
import UserList from './components/UserList/UserList';
import { fetchUsers } from './utils/api';

const App: React.FC = () => {
  const [userType, setUserType] = useState<UserType>('ADMIN');
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const fetchedUsers = await fetchUsers();
        setUsers(fetchedUsers);
      } catch (err) {
        err instanceof Error && setError(err);
      } finally {
        setLoading(false);
      }
    };

    getUsers();
  }, []);

  if (loading) return <CircularProgress />;
  if (error) return <ErrorText variant="h6" color="error">Error fetching users: {error.message}</ErrorText>;

  const filteredCustomers = users.filter(user => user.role === userType);

  return (
    <StyledContainer>
      <Title variant="h4">User Types</Title>
      <UserTypeSelector userType={userType} setUserType={setUserType} />
      {filteredCustomers.length > 0 ? (
        <UserList users={filteredCustomers} role={userType}/>
      ) : (
        <ErrorText variant="h6">No users found for selected role</ErrorText>
      )}
    </StyledContainer>
  );
};

export default App;
