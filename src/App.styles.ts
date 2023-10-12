import styled from '@emotion/styled';
import { Container, Typography } from '@mui/material';

export const StyledContainer = styled(Container)`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
`;

export const Title = styled(Typography)`
  margin-bottom: 20px;
`;

export const ErrorText = styled(Typography)`
  color: red;
  margin-top: 20px;
`;
