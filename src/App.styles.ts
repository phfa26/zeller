import styled from '@emotion/styled';
import { Container, Typography, RadioGroup } from '@mui/material';

export const StyledContainer = styled(Container)`
  padding: 20px;
  background-color: #f5f5f5;
`;

export const Title = styled(Typography)`
  margin-bottom: 20px;
`;

export const StyledRadioGroup = styled(RadioGroup)`
  justify-content: center;
  margin-top: 20px;
`;

export const RegularText = styled(Typography)`
`;

export const ErrorText = styled(Typography)`
  color: red;
  margin-top: 20px;
`;

export const ProfileImagePlaceholder = styled('div')`
    width: 50px;
    height: 50px;
    background-color: #bdbdbd;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    margin-right: 10px;
    font-size: 20px;
    text-transform: uppercase;
`;