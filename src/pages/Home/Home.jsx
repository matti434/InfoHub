import React from 'react'
import Hero from '../Home/Components/Hero';
import ApiLearningSection from './Components/ApiLearningSection';
import SearchBar from '../Home/Components/SearchBar';


export const Home = () => {
  return (
    <>
    <Hero/>
    <ApiLearningSection/>
    <SearchBar/>
    </>
  )
}
export default Home;