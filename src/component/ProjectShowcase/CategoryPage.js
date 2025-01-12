import React from 'react';
import { Box, Grid, Card, CardContent, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import Header from '../Header';

const templeData = [
  { name: 'Digamber Jain, Kota', photo: '/category/Digamber/Digamber Jain1.JPG' },
  { name: 'Digamber Jain Temple Interior', photo: '/category/Digamber/Jain Temple Interior.JPG' },
  { name: 'Digamber Jain Temple Vedi', photo: '/category/Digamber/Jain Temple Vedi.JPG' },
  { name: 'Godavari Dham Temple, Kota' , photo: '/category/Godavari/Godavari Dham Temple Kota.JPG'},
  { name: 'Godavari Dham , Kota' , photo: '/category/Godavari/Godavari Dham Kota.JPG'},
  { name: 'Godavari Dham Gate' , photo: '/category/Godavari/Godavri Dham Gate.jpg'},
  { name: 'Samvsharan Sonagirji Jain Tirth (M.P.)', photo: '/category/Samvsharan Sonagirji Jain Tirth (M.P.)/Exterior View (1).JPG' },
  { name: 'Samvsharan Sonagirji Jain Tirth (M.P.)', photo: '/category/Samvsharan Sonagirji Jain Tirth (M.P.)/Exterior View (2).JPG' },
  { name: 'Samvsharan Sonagirji Jain Tirth (M.P.) Interior View', photo: '/category/Samvsharan Sonagirji Jain Tirth (M.P.)/Interior View 1.JPG' },
  { name: 'Shri Pipajidham Ram Temple Jhalawar', photo: '/category/Shri Pipajidham Ram Temple Jhalawar/Shri Ram Temple Jhalawar (Raj).JPG' },
  { name: 'Shri Pipajidham Ram Temple Jhalawar', photo: '/category/Shri Pipajidham Ram Temple Jhalawar/2.JPG' },
  { name: 'Tirupati Bala Ji Temple Kota', photo: '/category/Tirupati Balaji Temple Kota/Tirupati Bala Ji Temple Kota.JPG' },
  { name: 'Tirupati Bala Ji Temple Kota', photo: '/category/Tirupati Balaji Temple Kota/W Chnel.JPG' },
  { name: 'Tirupati Bala Ji Temple Kota', photo: '/category/Tirupati Balaji Temple Kota/Garbh-Grah.JPG' }





  // Add more temple data here...
];

const MemorialData = [
  { name: 'Memorial 1', photo: '/path/to/memorial1.jpg' },
  { name: 'Memorial 2', photo: '/path/to/memorial2.jpg' },
  // Add more memorial data here...
];

const IndustrialData = [
  { name: 'Factory 1', photo: '/path/to/factory1.jpg' },
  { name: 'Factory 2', photo: '/path/to/factory2.jpg' },
  // Add more industrial data here...
];

const dataMap = {
  temples: templeData,
  memorials: MemorialData,
  industrial: IndustrialData,
  // Add other categories here
};

const CategoryPage = () => {
  const { category } = useParams();
  console.log('category' + category);
  const categoryData = dataMap[category] || [];

  return (
    <div>
      <Header />
      <Box sx={{ padding: '20px' }}>
        <Grid container spacing={3}>
          {categoryData.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.7)',
                  borderRadius: '8px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                  height: '400px', // Set fixed height for the card
                  display: 'flex',
                  flexDirection: 'column', // Ensures the content stays vertical
                }}
              >
                <CardContent sx={{ flex: 1 }}>
                  <img
                    src={item.photo}
                    alt={item.name}
                    style={{
                      width: '100%',
                      height: '330px', // Fixed height for images
                      objectFit: 'cover', // Ensures the image fills the space without distortion
                      borderRadius: '8px',
                    }}
                  />
                  <Typography variant="h6" sx={{ marginTop: '10px', textAlign: 'center' }}>
                    {item.name}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default CategoryPage;
