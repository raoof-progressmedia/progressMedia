import Head from "next/head";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Pillars from "@/components/Pillars";
import CTA from "@/components/CTA";
import Layout from "@/components/Layout";
export default function Home() {
  return (
    <>
      <Head>
        <title>Progress Media | Stop Failing</title>
      </Head>
      <Layout>
      <Navbar />
      
        <Hero />
        <Pillars />
        <CTA />
      
      </Layout>
    </>
  );
}