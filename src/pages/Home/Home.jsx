import React from "react";
import Hero from "./sections/Hero";
import ApiLearningSection from "./sections/ApiLearningSection";
import SearchBar from "./sections/SearchBar";
import "./Styles/Home.css";

export const Home = () => {
  return (
    <>
      <Hero />
      <ApiLearningSection />
      <SearchBar />
    </>
  );
};
export default Home;
