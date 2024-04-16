import type { NextPage } from "next";
import Head from "next/head";
import { HomeView } from "../views";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>SolSnatcher | Feed Me Your SOL</title>
        <meta
          name="description"
          content="SolSnatcher, feed me your SOL"
        />
      </Head>
      <HomeView />
    </div>
  );
};

export default Home;
