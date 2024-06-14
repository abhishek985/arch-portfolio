import React from 'react';
import { Box, Grid, Typography, Card, CardContent, Avatar } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School'; // For educational qualifications
import WorkIcon from '@mui/icons-material/Work'; // For years of experience

const qualifications = [
  {
    title: 'B.E. Civil (Hons.)',
    description: '1987',
    icon: <SchoolIcon fontSize="large" />,
    color: '#0077b6', // A color that signifies trust and stability
  },
  {
    title: 'M.E. Structures',
    description: '1994',
    icon: <SchoolIcon fontSize="large" />,
    color: '#00b4d8', // A lighter shade for differentiation
  },
  {
    title: 'Years of Experience',
    description: '35 Years',
    icon: <WorkIcon fontSize="large" />,
    color: '#0096c7', // A color to signify experience and reliability
  },
];

const QualificationsComponent = () => {
  return (
    <Box sx={{ padding: '4rem 1rem', backgroundColor: '#f0f2f5' }}>
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
          Qualifications
        </Typography>
      <Grid container spacing={4}>
        {qualifications.map((qualification, index) => (
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
              <Avatar sx={{ m: 1, bgcolor: qualification.color }}>
                {qualification.icon}
              </Avatar>
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography gutterBottom variant="h5" component="div">
                  {qualification.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {qualification.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default QualificationsComponent;
