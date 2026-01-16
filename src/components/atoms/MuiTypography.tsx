import { Typography, TypographyProps } from '@mui/material';

export const MuiTypography = ({ children, ...props }: TypographyProps) => (
  <Typography {...props}>{children}</Typography>
);