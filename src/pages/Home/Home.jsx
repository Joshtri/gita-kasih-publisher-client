// import React from 'react';
import Layout from '../Layout';
import HomeSection from '../../components/Home/HomeSection';
import ServicesHome from '../../components/Home/ServicesHome';

function Home() {
  return (
    <Layout>
      {/* Home Section with animated gradient */}
      <HomeSection/>


      {/* About Section */}
      <ServicesHome/>

    </Layout>
  );
}

export default Home;
