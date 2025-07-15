import Head from "next/head";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Pillars from "@/components/Pillars";
import CTA from "@/components/CTA";
import Layout from "@/components/Layout";
import About from "@/components/About";
import Contact from "@/components/Contact";
import FAQ from "@/components/Faq";
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
        <About/>
        <FAQ/>
      <Contact/>
      </Layout>
    </>
  );
}