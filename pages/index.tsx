import Banner from "@components/Banner";
import Card from "@components/Card";
import { Footer, Header } from "@components/common";
import Navbar from "@components/common/Navbar/Navbar";
import Discover from "@components/Discover";
import Footer1 from "@components/Footer1";
import Info from "@components/Info";
import { AppConstant } from "constant/AppConstant";
import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout className="page-home">
      <Head>
        <title>{AppConstant.meta.title}</title>
        <meta name="description" content={AppConstant.meta.description} />
      </Head>
      <Header />
      {/* <Footer /> */}
      <Navbar />
      {/* <UseState /> */}

      <Banner />
      <Card />
      <Discover />
      <Info />
      <Footer1 />
    </Layout>
  );
};

export default Home;
