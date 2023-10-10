import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { ListZellerCustomers } from './graphql/queries';
import { User, UserType, QueryResponse } from './types';
import { Container, RadioGroup, FormControlLabel, Radio, FormControl, FormLabel, List, ListItem, CircularProgress, Typography } from '@mui/material';

const App: React.FC = () => {
    const [userType, setUserType] = useState<UserType>('Admin');
    const { loading, error, data } = useQuery<QueryResponse>(ListZellerCustomers);

    if (loading) return <CircularProgress />;
    if (error || !data || !data.listZellerCustomers) return <Typography variant="h6" color="error">No users found</Typography>;

    const filteredCustomers = data.listZellerCustomers.items.filter(
        (customer: User) => customer.role === userType
    );

    return (
        <Container>
            <FormControl component="fieldset">
                <FormLabel component="legend">User Type</FormLabel>
                <RadioGroup row value={userType} onChange={(e) => setUserType(e.target.value as UserType)}>
                    <FormControlLabel value="Admin" control={<Radio />} label="Admin" />
                    <FormControlLabel value="Manager" control={<Radio />} label="Manager" />
                </RadioGroup>
            </FormControl>

            {filteredCustomers.length > 0 ? (
                <List>
                    {filteredCustomers.map((customer) => (
                        <ListItem key={customer.id}>{customer.name}</ListItem>
                    ))}
                </List>
            ) : (
                <Typography variant="h6" color="error">No users found for selected role</Typography>
            )}
        </Container>
    );
};

export default App;
