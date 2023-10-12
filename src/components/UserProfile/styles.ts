import styled from '@emotion/styled';
import { Typography } from '@mui/material';

export const ProfileImagePlaceholder = styled.div`
    width: 50px;
    height: 50px;
    background-color: #E1F5FD;
    color: #00579A;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    margin-right: 10px;
    font-size: 20px;
    text-transform: uppercase;
`;

export const UserContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: left;
  width: 100%;
`;

export const UserRoleText = styled(Typography)`
  color: lightgray;
  margin-top: 4px;
  text-align: left;
  text-transform: capitalize;`

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
`;

export const RegularText = styled(Typography)`
`;
