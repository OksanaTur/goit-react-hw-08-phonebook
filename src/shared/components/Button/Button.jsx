import { Button } from '@mui/material';

import { blue } from '@mui/material/colors';
import { styled } from '@mui/material/styles';

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(blue[200]),
  backgroundColor: blue[200],

  '&:hover': {
    backgroundColor: blue[300],
  },
}));

export const Btn = ({ children, type = 'submit', endIcon }) => {
  return (
    <ColorButton variant="contained" type={type} endIcon={endIcon}>
      {children}
    </ColorButton>
  );
};
