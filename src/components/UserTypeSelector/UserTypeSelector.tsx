import React from 'react';
import { UserType } from '../../types';
import { StyledRadioGroup } from './styles';
import { FormControlLabel, Radio, FormControl, FormLabel } from '@mui/material';

interface UserTypeSelectorProps {
  userType: UserType;
  setUserType: (value: UserType) => void;
}

const UserTypeSelector: React.FC<UserTypeSelectorProps> = ({ userType, setUserType }) => {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">User Type</FormLabel>
      <StyledRadioGroup row value={userType} onChange={(e) => setUserType(e.target.value as UserType)}>
        <FormControlLabel value="ADMIN" control={<Radio />} label="Admin" />
        <FormControlLabel value="MANAGER" control={<Radio />} label="Manager" />
      </StyledRadioGroup>
    </FormControl>
  );
};

export default UserTypeSelector;
