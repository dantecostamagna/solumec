import React from 'react';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

const Section = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  flexDirection: 'column',
  padding: 16,
  textAlign: 'center',
  maxWidth: '90%',
  margin: 'auto',
  marginBottom: '15px',
  borderRadius: 16,
  boxShadow: '2px 4px 8px rgba(0, 0, 0, 0.1)',

  '@media (min-width: 600px)': {
    flexDirection: 'row',
    gap: 60, 
  },
});

const Content = styled('div')({
  maxWidth: 400,
});

const Nosotros = () => {
  return (
    <Section>
      <Content>
        <Typography variant="h4" gutterBottom>
          Quiénes Somos
        </Typography>
        <Typography variant="body1" paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam hendrerit nisl a risus
          malesuada, vel scelerisque velit efficitur. Sed vestibulum dapibus tristique. Nulla
          facilisi. Integer gravida massa ut leo ultricies, vitae interdum leo tincidunt. In hac
          habitasse platea dictumst.
        </Typography>
      </Content>
      <img
        src="https://via.placeholder.com/400"
        alt="Imagen de la empresa"
        style={{ maxWidth: '100%', height: 'auto', borderRadius: 8 }}
      />
    </Section>
  );
};

export default Nosotros;
