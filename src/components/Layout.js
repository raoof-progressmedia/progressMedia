import Navbar from "@/components/Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="pt-24 bg-[#ede5f2]">
        <div className=" max-w-7xl mx-auto px-4">
          {children}
        </div>
      </main>
    </>
  );
}
