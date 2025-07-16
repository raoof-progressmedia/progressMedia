import Head from "next/head";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Pillars from "@/components/Pillars";
import CTA from "@/components/CTA";
import Layout from "@/components/Layout";
import About from "@/components/About";
import Contact from "@/components/Contact";
import FAQ from "@/components/Faq";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
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
        <Services/>
        <FAQ/>
      <Contact/>
      <Footer/>
      </Layout>
    </>
  );
}