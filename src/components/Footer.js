import React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'background.paper',
        padding: 3,
        mt: 'auto',
      }}
    >
      <Typography variant="body2" color="text.secondary" align="center">
        © {new Date().getFullYear()} Solumec. Todos los derechos reservados.
      </Typography>
      <Typography variant="body2" color="text.secondary" align="center">
        Desarrollado por <Link href="https://www.linkedin.com/in/dantecostamagna/">Dante Costamagna</Link>
      </Typography>
    </Box>
  );
};

export default Footer;
