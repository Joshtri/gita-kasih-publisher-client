// import React from 'react';
import ContactMain from '../../components/Contact/ContactMain';
import Layout from '../Layout';
import DescriptionContact from '../../components/Contact/DescriptionContact';
import MapsAPISection from '../../components/Contact/MapsAPISection';

function Contact() {
  return (
    <Layout>
      {/* Home Section with animated gradient */}
      <ContactMain/>
      <DescriptionContact/>
      
      {/* <MapsAPISection/> */}
    </Layout>
  )
}

export default Contact