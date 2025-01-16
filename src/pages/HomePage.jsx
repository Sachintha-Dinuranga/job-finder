import React from "react";
import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import JobListings from "../components/JobListings";
import ViewALlJobs from "../components/ViewAllJobs";
const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeCards />
      <JobListings />
      <ViewALlJobs />
    </>
  );
};

export default HomePage;
