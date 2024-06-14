// In src/components/HomePage.js

import React from 'react';
import Header from './Header';
import ProfileBanner from './Home/Profilebanner';
import ServicesComponent from './Home/Services';
import QualificationsComponent from './Home/Qualifications';
import ContactInformationComponent from './Home/ContactInfo';

const HomePage = () => {
  return (
    <div>
      <Header />
      <ProfileBanner />
      {/* Include any other components you want on the homepage */}
      <ServicesComponent />
      <QualificationsComponent />
      <ContactInformationComponent />
    </div>
  );
};

export default HomePage;
