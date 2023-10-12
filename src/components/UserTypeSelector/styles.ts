// styles.ts or styles.js
import { styled } from '@mui/system';
import { RadioGroup, Radio, FormControlLabel, FormControl } from '@mui/material';

export const StyledFormControl = styled(FormControl)`
  margin-top: 20px;
`;

export const StyledRadioGroup = styled(RadioGroup)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StyledRadio = styled(Radio)`
  color: #E1F5FD !important;
  &.Mui-checked {
    color: #00579A !important;
  }
`;

export const StyledFormControlLabel = styled(FormControlLabel)<{ selected?: boolean }>`
  background-color: ${({ selected }) => (selected ? '#E1F5FD' : 'transparent')};
  border-radius: 8px;
`;
