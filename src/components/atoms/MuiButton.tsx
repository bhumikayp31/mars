import { Button, ButtonProps } from '@mui/material';

export const MuiButton = ({ children, ...props }: ButtonProps) => (
  <Button size="small" variant="contained" {...props}>
    {children}
  </Button>
);