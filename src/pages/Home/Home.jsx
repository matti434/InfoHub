import React from "react";
import Hero from "./sections/Hero/Hero";
import ApiLearningSection from "./sections/ApiLearningSection/ApiLearningSection";
import SearchBar from "./sections/SearchBar/SearchBar";
import "./Styles/Home.css";
import CardGrid from "./sections/HubCards/CardGrid";

export const Home = () => {
  return (
    <>
      <Hero />
      <SearchBar />
      <CardGrid />
      <ApiLearningSection/>
    </>
  );
};
export default Home;
