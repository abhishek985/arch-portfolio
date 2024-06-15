import {React} from 'react';
import { Box, Typography, Grid, Link } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import { styled } from '@mui/material/styles';

const ContactIconBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  transition: 'transform 0.3s ease-in-out, background-color 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
    backgroundColor: theme.palette.action.hover,
  },
}));

const ContactInformationComponent = () => {
  //const [query, setQuery] = useState('');

  // const handleQueryChange = (event) => {
  //   setQuery(event.target.value);
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // Implement the submit logic, possibly sending the query to your server or via email
  //   console.log('Query submitted:', query);
  //   setQuery(''); // Reset query input after submission
  // };

  return (
    <Box sx={{ padding: '4rem 1rem', backgroundColor: '#e0f7fa', textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom sx={{ color: '#00695c' }}>
        Get in Touch
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {[
          { icon: <EmailIcon sx={{ fontSize: 40, color: '#00695c' }} />, label: 'Email', value: 'rakesh.jadia@gmail.com', href: 'mailto:rakesh.jadia@gmail.com' },
          { icon: <WhatsAppIcon sx={{ fontSize: 40, color: '#4caf50' }} />, label: 'WhatsApp', value: '+919414182751', href: 'https://wa.me/+919414182751' },
          { icon: <PhoneIcon sx={{ fontSize: 40, color: '#1e88e5' }} />, label: 'Mobile', value: '+919414182751', href: `tel:+919414182751` },
        ].map((contact, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <ContactIconBox>
              {contact.icon}
            </ContactIconBox>
            <Typography variant="h6" gutterBottom sx={{ mt: 2, color: '#004d40' }}>
              {contact.label}
            </Typography>
            <Link href={contact.href} variant="body1" sx={{ textDecoration: 'none', color: '#00796b' }}>
              {contact.value}
            </Link>
          </Grid>
        ))}
      </Grid>
      {/* <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <TextField
          label="Your Query"
          multiline
          rows={4}
          variant="outlined"
          value={query}
          onChange={handleQueryChange}
          sx={{ width: '80%', maxWidth: '500px', backgroundColor: '#ffffff' }}
        />
        <Button type="submit" variant="contained" startIcon={<SendIcon />} sx={{ mt: 2, bgcolor: '#26a69a', '&:hover': { bgcolor: '#00796b' } }}>
          Send Query
        </Button>
      </Box> */}
    </Box>
  );
};

export default ContactInformationComponent;
