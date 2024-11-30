import React, { useState, useEffect } from 'react';
import { Grid, Typography, CardMedia, IconButton } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const images = [
  '/carousel/Auditorium.jpg',
  '/carousel/Bhikshu Smarak 1.jpg',
  '/carousel/Bhikshu Smarak 2.jpg',
  '/carousel/UIT Prem Ngr 1.jpg',
  '/carousel/Ent Gate Kota.JPG',
  '/carousel/Front View Pawan Dham.JPG',
  '/carousel/Godavari Dham Temple.jpg',
  '/carousel/Godavri Dham Gate.jpg',
  '/carousel/Gyan Stambh 1.jpg',
  '/carousel/Gyan Stambh Stairs & Deck.JPG',
  '/carousel/IMG_20180908_170936.jpg',
  '/carousel/Saree Mt.jpg',
  '/carousel/Tirupati Bala Ji 1 Kota.jpg',
  '/carousel/New Sarrafa Mkt.jpg',
  '/carousel/Bhikshu Smarak 2.jpg',
  '/carousel/Front View Pawan Dham.jpg',
  '/carousel/UIT Ent Gate Kota.jpg',
  '/carousel/UIT Kota doria Mkt.jpg',
  '/carousel/UIT Tipta Gate.jpg',
  // Add more image paths here
];

const ProfileBanner = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(timer);
  }, [isPaused, currentImageIndex]);

  return (
    <div>
      <Grid container spacing={2} sx={{ backgroundColor: '#D3D3D3', padding: '20px' }}>
        <Grid item xs={12} md={8} style={{ position: 'relative' }}>
          {/* Image carousel */}
          <CardMedia
            component="img"
            image={images[currentImageIndex]}
            alt="Project Image"
            sx={{
              width: '100%',
              height: 'auto',
              maxHeight: '600px',
              margin: 'auto',
              objectFit: 'cover',
              transition: 'transform 0.5s ease-in-out',
              '&:hover': {
                transform: 'scale(1.05)',
              },
            }}
          />
          <IconButton
            onClick={() => {
              handlePrev();
              setIsPaused(true);
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            sx={{ position: 'absolute', left: 10, top: '50%', zIndex: 1 }}
          >
            <ArrowBackIosIcon />
          </IconButton>
          <IconButton
            onClick={() => {
              handleNext();
              setIsPaused(true);
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            sx={{ position: 'absolute', right: 10, top: '50%', zIndex: 1 }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Grid>
        <Grid item xs={12} md={4} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
          {/* Profile photo and description */}
          <CardMedia
            component="img"
            image="/profile.jpeg"
            alt="Profile Photo"
            sx={{ width: { xs: '100%', sm: '75%', md: '200px' }, height: 'auto', margin: 'auto', marginTop: '20px' }}
          />
          <Typography variant="h5" sx={{ marginTop: '20px', textAlign: 'center' }}>
            Rakesh Jadia
          </Typography>
          <Typography variant="body1" sx={{ marginTop: '10px', padding: { xs: '0 10px', md: '0' }, textAlign: 'justify' }}>
            We, Jadia Associates are a well established firm of Architects/Civil/ 
            Structural/ Industrial consultants. We have under taken projects in various fields like Group Housing projects, 
            Temple complex, Memorials & Towers, Auditorium, Industrial buildings, Offices, Educational Institutions,
            Market complex, Showrooms, Banks, Community buildings, Hotels/ Guest houses, 
            Hospitals, Residential banglows, Hostels, Multistory flats, Multi-level parking etc.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProfileBanner;
