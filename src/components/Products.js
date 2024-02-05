import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

const StyledCard = styled(Card)({
  maxWidth: 300,
  margin: '16px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease-in-out',

  '&:hover': {
    transform: 'scale(1.05)',
  },
});

const ToolList = () => {
  const tools = [
    {
      title: 'Herramienta 1',
      image: 'https://5.imimg.com/data5/SELLER/Default/2021/3/IH/VE/WN/124897195/ccmt09t304-500x500.jpg',
      description: 'Descripción de la herramienta 1',
    },
    {
      title: 'Herramienta 2',
      image: 'https://www.guhring.com/media/images/logos/products/Drills.jpg',
      description: 'Descripción de la herramienta 2',
    },
    {
      title: 'Herramienta 3',
      image: 'https://www.guhring.com/media/images/logos/products/Taps.jpg',
      description: 'Descripción de la herramienta 3',
    },
        {
      title: 'Herramienta 1',
      image: 'https://5.imimg.com/data5/SELLER/Default/2021/3/IH/VE/WN/124897195/ccmt09t304-500x500.jpg',
      description: 'Descripción de la herramienta 1',
    },
    {
      title: 'Herramienta 2',
      image: 'https://www.guhring.com/media/images/logos/products/Drills.jpg',
      description: 'Descripción de la herramienta 2',
    },
    {
      title: 'Herramienta 3',
      image: 'https://www.guhring.com/media/images/logos/products/Taps.jpg',
      description: 'Descripción de la herramienta 3',
    },
    // Agrega más herramientas según sea necesario
  ];

  const ToolCard = ({ title, image, description }) => (
    <StyledCard>
      <CardMedia
        component="img"
        height="140"
        width="140"
        image={image}
        alt={title}
        style={{ maxHeight: '50vh', margin: 'auto', height: 'auto', width: 'auto' }}
      />
      <CardContent>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </StyledCard>
  );

    const cardStyles = {
      maxWidth: '90%',
      margin: 'auto',
      marginBottom: '15px',
      padding: 16,
      borderRadius: 16,
      boxShadow: '2px 4px 8px rgba(0, 0, 0, 0.1)',
    };

  return (
    <Card style={cardStyles}>
    <Typography variant='h4' gutterBottom>
        Productos
      </Typography>
    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
      {tools.map((tool, index) => (
        <ToolCard key={index} {...tool} />
      ))}
    </div>
    </Card>
  );
};

export default ToolList;
