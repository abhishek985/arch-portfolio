import React from 'react';
import { Box, Grid, Card, CardContent, Typography, CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
import ApartmentIcon from '@mui/icons-material/Apartment'; // Building icon for temples (replace as necessary)
import SchoolIcon from '@mui/icons-material/School'; // Icon for schools
import Header from '../Header';


const categories = [
  { name: 'Temples & Memorials', path: 'temples', icon: <ApartmentIcon fontSize="inherit" sx={{ fontSize: '250px' }} /> },
  { name: 'Gates', path: 'gates', icon: <SchoolIcon fontSize="inherit" sx={{ fontSize: '250px' }} /> },
  { name: 'Schools', path: 'schools', icon: <SchoolIcon fontSize="inherit" sx={{ fontSize: '250px' }} /> }
];

const ProjectShowcase = () => {
  return (
    
    <div>
      <Header />
      {/* <Typography 
        variant="h3" 
        align="center" 
        sx={{
          marginBottom: '40px',  // Adds some spacing below
          fontWeight: 'bold',    // Makes the text bold
          letterSpacing: '1px',  // Adds spacing between letters
          lineHeight: '1.2',     // Adjusts the line height for better readability
          color: '#1A3D75',         // Dark grey color for a professional look
          textTransform: 'uppercase', // Uppercase for a more impactful appearance
          fontFamily: 'Roboto, Arial, sans-serif', // Sets a clean, modern font family
        }}
      >
        Our Projects Showcase
      </Typography> */}

      <Box sx={{ marginBottom: '40px' }} /> {/* Adds vertical space between Typography and Grid */}
      <Grid container spacing={3} sx={{ padding: '20px' }}>
        {categories.map((category) => (
          <Grid item xs={12} sm={6} md={4} key={category.name}>
            <Link to={`/projects/${category.path}`} style={{ textDecoration: 'none' }}>
              <Card
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.7)', // Semi-transparent white background
                  borderRadius: '8px', // Rounded corners
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Light shadow for depth
                  transition: 'transform 0.3s ease', // Smooth transition for hover effect
                  '&:hover': {
                    transform: 'scale(1.05)', // Zoom effect on hover
                  },
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%', // Ensures the card stretches vertically
                }}
              >
                <CardActionArea sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                  <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flexGrow: 1 }}>
                    {/* Icon and Name */}
                    <div style={{ marginBottom: '10px' }}>
                      {category.icon}
                    </div>
                    <Typography variant="h5">
                      {category.name}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ProjectShowcase;
