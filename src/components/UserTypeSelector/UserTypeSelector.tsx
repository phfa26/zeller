import React from 'react';
import { UserType } from '../../types';
import { StyledRadioGroup, StyledRadio, StyledFormControlLabel, StyledFormControl } from './styles';
import { ListDivider } from '../../common/styles';

interface UserTypeControlProps {
  userType: UserType;
  setUserType: React.Dispatch<React.SetStateAction<UserType>>;
}

const UserTypeControl: React.FC<UserTypeControlProps> = ({ userType, setUserType }) => {
  return (
    <>
      <StyledFormControl>
        <StyledRadioGroup row value={userType} onChange={(e: { target: { value: string; }; }) => setUserType(e.target.value as UserType)}>
          <StyledFormControlLabel value="ADMIN" control={<StyledRadio />} label="Admin" selected={userType === 'ADMIN'}/>
          <StyledFormControlLabel value="MANAGER" control={<StyledRadio />} label="Manager" selected={userType === 'MANAGER'}/>
        </StyledRadioGroup>
      </StyledFormControl>
      <ListDivider />
    </>
  ); 
};

export default UserTypeControl;