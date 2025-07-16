import Image from "next/image";
import { FaDumbbell, FaLightbulb } from "react-icons/fa";

export default function Pillars() {
  const items = [
    {
      icon: (
        <Image
          src="/assets/tech-icon.webp"
          alt="Tech"
          width={80}
          height={60}
          className="rounded-xl"
        />
      ),
      title: "Tech Empowerment",
      description: "We empower businesses and individuals to thrive in the digital era",
    },
    {
      icon: (
        <Image
          src="/assets/fitness-icon.webp"
          alt="Tech"
          width={80}
          height={60}
          className="rounded-xl"
        />
      ),
      title: "Master Your Energy",
      description: "We know the body is a gateway to unlocking mental clarity and personal leadership.",
    },
    {
      icon: (
        <Image
          src="/assets/mindset-icon.webp"
          alt="Tech"
          width={80}
          height={60}
          className="rounded-xl"
        />
      ),
      title: "Rooted Mind, Rising Self",
      description: "Progress starts with awareness. Mindset is not motivation—it's structure for the soul.",
    },
  ];

  return (
    <section id="pillars" className="py-20 px-6 bg-white text-dark my-2">
      <h2 className="text-3xl font-bold text-center mb-12 text-accent">Our Pillars</h2>
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="text-center border border-accent p-6 rounded-xl shadow-sm hover:shadow-lg transition"
          >
            <div className="mb-4 flex justify-center text-primary">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2 font-sans">{item.title}</h3>
            <p className="text-sm text-gray-600 font-sans">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
