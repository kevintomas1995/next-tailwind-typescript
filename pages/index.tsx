import type { NextPage } from "next";
import Hero from "components/Hero";
import Content from "components/Content";


const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <Content />
    </>
  );
};

export default Home;
