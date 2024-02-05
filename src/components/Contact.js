import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import EmailIcon from '@mui/icons-material/Email';
import RoomIcon from '@mui/icons-material/Room';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Card from '@mui/material/Card';

import Map from './Map'

const Contacto = () => {
  const buttonStyles = {
    margin: '8px',
    borderRadius: '20px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const cardStyles = {
    maxWidth: 400,
    margin: 'auto',
    marginBottom:'10px',
    padding: 16,
    borderRadius: 16,
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const mapContainerStyles = {
    width: '100%',
    height: '400px', 
    margin: '16px auto', 
    overflow: 'hidden', 
  };

  return (
    <>
    <div style={{ textAlign: 'center' }}>

      <Card style={cardStyles}>
      <Typography variant="h4" gutterBottom>
        Contacto
      </Typography>
        <Button
          variant="contained"
          color="primary"
          style={{ ...buttonStyles, backgroundColor: '#25D366', color: '#fff' }}
          startIcon={<WhatsAppIcon />}
          onClick={() => window.open('https://wa.me/1234567890', '_blank')}
        >
          WhatsApp
        </Button>

        <Button
          variant="contained"
          color="primary"
          style={{ ...buttonStyles, backgroundColor: '#E4405F', color: '#fff' }}
          startIcon={<InstagramIcon />}
          onClick={() => window.open('https://www.instagram.com/tu_instagram/', '_blank')}
        >
          Instagram
        </Button>

        <Button
          variant="contained"
          color="primary"
          style={{ ...buttonStyles, backgroundColor: '#1877F2', color: '#fff' }}
          startIcon={<FacebookIcon />}
          onClick={() => window.open('https://www.facebook.com/tu_facebook/', '_blank')}
        >
          Facebook
        </Button>

        <div style={{ margin: '8px 0' }}>
          <Typography variant="body1" color="text.primary" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <EmailIcon style={{ marginRight: 8 }} />
            correo@ejemplo.com
          </Typography>
        </div>

        <div style={{ margin: '8px 0' }}>
          <Typography variant="body1" color="text.primary" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <RoomIcon style={{ marginRight: 8 }} />
            Dirección 1234, Rosario
          </Typography>
          
        </div>
        <div style={mapContainerStyles}>
            <Map />
          </div>
      </Card>
      
    </div>
    </>
  );
};

export default Contacto;
