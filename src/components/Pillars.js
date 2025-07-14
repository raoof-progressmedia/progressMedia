import Image from "next/image";
import { FaDumbbell, FaLightbulb } from "react-icons/fa";

export default function Pillars() {
  const items = [
    {
      icon: (
        <Image
          src="/assets/tech-icon.webp"
          alt="Tech"
          width={32}
          height={32}
        />
      ),
      title: "Tech Empowerment",
      description: "We build and digitize businesses for impact.",
    },
    {
      icon: <FaDumbbell size={32} />,
      title: "Personal Growth",
      description: "We believe discipline in self leads to freedom in life.",
    },
    {
      icon: <FaLightbulb size={32} />,
      title: "Social Media Strategy",
      description: "We help your voice reach where it matters most.",
    },
  ];

  return (
    <section id="pillars" className="py-20 px-6 bg-white text-dark my-2">
      <h2 className="text-3xl font-bold text-center mb-12">Our Pillars</h2>
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="text-center border border-light p-6 rounded-xl shadow-sm hover:shadow-lg transition"
          >
            <div className="mb-4 flex justify-center text-primary">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
