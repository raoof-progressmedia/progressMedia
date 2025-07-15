import Image from "next/image";
import { FaCogs, FaBolt, FaBrain, FaRocket } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      icon: <FaCogs size={28} className="text-accent" />,
      title: "Custom Web Solutions",
      description: "Tailored websites and tools to bring your brand to life online with performance and purpose."
    },
    {
      icon: <FaBolt size={28} className="text-accent" />,
      title: "Performance Branding",
      description: "From content to campaigns, we shape your brand into an unforgettable digital experience."
    },
    {
      icon: <FaBrain size={28} className="text-accent" />,
      title: "Mindset-Based Strategy",
      description: "We guide individuals and teams in structuring their mindset to lead with clarity and confidence."
    },
    {
      icon: <FaRocket size={28} className="text-accent" />,
      title: "Social Media Launch Kits",
      description: "Everything you need to ignite your digital presence—from content pillars to audience strategy."
    },
  ];

  return (
    <section id="services" className="relative py-24 px-6 bg-gradient-to-b from-white to-light text-dark overflow-hidden">
      <div className="absolute -top-10 -left-10 w-[120%] h-32 bg-gradient-to-r from-primary to-accent transform -skew-y-3 z-0"></div>

      <div className="relative max-w-6xl mx-auto z-10">
        <h2 className="text-4xl font-serif font-bold mb-12 text-center text-primary">Our Services</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-md hover:shadow-xl p-6 transition duration-300 border-t-4 border-accent">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-accent bg-opacity-10 rounded-full flex items-center justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-dark font-sans">{service.title}</h3>
              </div>
              <p className="text-sm text-gray-600 font-light leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 right-0 w-[60%] h-24 bg-gradient-to-l from-accent to-primary transform skew-y-3 z-0"></div>
    </section>
  );
}
