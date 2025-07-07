import Head from "next/head";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Pillars from "@/components/Pillars";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Head>
        <title>Progress Media | Stop Failing</title>
      </Head>
      <Navbar />
      <main className="pt-24">
        <Hero />
        <Pillars />
        <CTA />
      </main>
    </>
  );
}