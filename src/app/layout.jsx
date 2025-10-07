import "../styles/globals.css";

export const metadata = {
  title: "Progress Media",
  description: "Secrets to Stop Failure — Explore tech, fitness, and mindset.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans bg-light text-dark">
        {children}
      </body>
    </html>
  );
}
