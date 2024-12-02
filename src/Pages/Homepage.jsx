import React from 'react';

import Hero from '../Component/Hero';
import HomeCards from '../Component/HomeCards'
import Servicelistingsfile from '../Component/Servicelistingsfile'
import ViewAllJobs from '../Component/ViewAllJobs';

const Homepage = () => {
  return (
    <>
      <Hero />
      <HomeCards/>
      <Servicelistingsfile isHome = {true} />
      <ViewAllJobs/>
    </>
  );
}

export default Homepage;
