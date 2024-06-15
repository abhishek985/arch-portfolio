import React from 'react';
import { Box, Grid, Typography, Card, CardContent } from '@mui/material';
import EngineeringIcon from '@mui/icons-material/Engineering';
import ApartmentIcon from '@mui/icons-material/Apartment';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import AssessmentIcon from '@mui/icons-material/Assessment';


const services = [
  {
    title: 'Structural Design',
    description: 'Comprehensive structural integrity solutions for buildings of all sizes.',
    icon: <EngineeringIcon fontSize="large" />,
    color: '#1e88e5',
  },
  {
    title: 'Architectural Consultancy',
    description: 'Blending functionality with aesthetic to create enduring designs.',
    icon: <ApartmentIcon fontSize="large" />,
    color: '#d32f2f',
  },
  {
    title: 'Vastu Consultation',
    description: 'Harmonize your living space with the ancient principles of Vastu.',
    icon: <EmojiObjectsIcon fontSize="large" />,
    color: '#388e3c',
  },
  {
    title: 'Registered Valuer',
    description: 'Registered Valuer for immovable properties by Income Tax deptt., Govt of India',
    icon: <AssessmentIcon fontSize="large" />,
    color: '#388e3c',
  },
];

const ServicesComponent = () => {
  return (
    <Box sx={{ padding: '4rem 1rem', backgroundColor: '#fafafa' }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '2rem' }}>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          align="center"
          sx={{
            fontWeight: 'bold',
            color: '#333',
            marginLeft: '10px',
          }}
        >
          Services
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                minHeight: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)',
                '&:hover': {
                  boxShadow: '0 16px 32px 0 rgba(0,0,0,0.2)',
                },
              }}
            >
              <Box
                sx={{
                  margin: '1rem',
                  padding: '1rem',
                  borderRadius: '50%',
                  color: 'white',
                  backgroundColor: service.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {service.icon}
              </Box>
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography gutterBottom variant="h5" component="div">
                  {service.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ServicesComponent;
