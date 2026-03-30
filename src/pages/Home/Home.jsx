import React from "react";
import Hero from "./sections/Hero";
import ApiLearningSection from "./sections/ApiLearningSection";
import SearchBar from "./sections/SearchBar";
import "./Styles/Home.css";
import CardGrid from "./sections/CardGrid";

export const Home = () => {
  return (
    <>
      <Hero />
      <ApiLearningSection/>
      <CardGrid />
      <SearchBar />
    </>
  );
};
export default Home;
