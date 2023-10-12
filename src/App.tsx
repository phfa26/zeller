import React, { useState, useEffect } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { API, graphqlOperation } from 'aws-amplify';
import { ListZellerCustomers } from './graphql/queries';
import { User, UserType, QueryResponse } from './types';
import { StyledContainer, Title, StyledRadioGroup, ErrorText, ProfileImagePlaceholder, RegularText } from './App.styles';
import { FormControlLabel, Radio, FormControl,FormLabel, List, ListItem, CircularProgress } from '@mui/material'

const App: React.FC = () => {
    const [userType, setUserType] = useState<UserType>('ADMIN');
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response: QueryResponse = await API.graphql(graphqlOperation(ListZellerCustomers));
                console.log(response.data.listZellerCustomers.items)
                setUsers(response.data.listZellerCustomers.items);
            } catch (err) {
              err instanceof Error && setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    if (loading) return <CircularProgress />;
    if (error) return <ErrorText variant="h6" color="error">Error fetching users {error.message}</ErrorText>;

    const filteredCustomers = users.filter(user => user.role === userType);

    return (
          <StyledContainer>
              <Title variant="h4">Select User Type</Title>
              <FormControl component="fieldset">
                  <FormLabel component="legend">User Type</FormLabel>
                  <StyledRadioGroup row value={userType} onChange={(e) => setUserType(e.target.value as UserType)}>
                      <FormControlLabel value="ADMIN" control={<Radio />} label="Admin" />
                      <FormControlLabel value="MANAGER" control={<Radio />} label="Manager" />
                  </StyledRadioGroup>
              </FormControl>

              {filteredCustomers.length > 0 ? (
                  <List>
                      {filteredCustomers.map((customer) => (
                        <ListItem key={customer.id} sx={{ display: 'flex', alignItems: 'center' }}>
                            <ProfileImagePlaceholder> 
                                {customer.name ? 
                                    customer.name[0].toUpperCase() : 
                                    <AccountCircleIcon /> }
                            </ProfileImagePlaceholder>
                          <RegularText>{customer.name ?? 'Unnamed User'}</RegularText>
                        </ListItem>
                      ))}
                  </List>
              ) : (
                  <ErrorText variant="h6">No users found for selected role</ErrorText>
              )}
          </StyledContainer>
  );
};

export default App;
