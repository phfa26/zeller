import styled from '@emotion/styled';
import { Container, Typography } from '@mui/material';

export const StyledContainer = styled(Container)`
  max-width: 400px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-left;
  padding: 20px;
  box-sizing: border-box;
`;

export const Title = styled(Typography)`
  margin-bottom: 20px;
`;

export const ErrorText = styled(Typography)`
  color: red;
  margin-top: 20px;
`;
