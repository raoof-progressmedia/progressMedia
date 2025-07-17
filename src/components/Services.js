import Image from "next/image";
import { FaCogs, FaBolt, FaBrain, FaRocket } from "react-icons/fa";

export default function Services() {
  const services = [
  {
    icon: <FaCogs size={28} className="text-accent" />,
    title: "Smart Tech Solutions",
    description: "From websites to web app to automation, we create digital tools that elevate your brand and simplify your workflow."
  },
  {
    icon: <FaBolt size={28} className="text-accent" />,
    title: "Fitness Optimization",
    description: "Content, programs, and strategies designed to empower fitness coaches, trainers, and enthusiasts online."
  },
  {
    icon: <FaBrain size={28} className="text-accent" />,
    title: "Mindset Engineering",
    description: "We help individuals and teams unlock clarity, focus, and confidence through mindset-first strategies."
  },
  {
    icon: <FaRocket size={28} className="text-accent" />,
    title: "Personalized Guidance",
    description: "One-on-one coaching and digital mentorship to align your vision with real-world results and growth."
  },
];


  return (
    <section id="services" className="mt-2 relative py-24 px-6 bg-gradient-to-b from-white to-primary text-dark overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/assets/bg-texture.svg')] bg-cover opacity-5 z-0"></div>
      {/* <div className="absolute -top-10 -left-10 w-[120%] h-32 bg-gradient-to-r from-primary to-accent transform -skew-y-3 z-0"></div> */}

      <div className="relative max-w-6xl mx-auto z-10">
        <h2 className="relative text-4xl font-serif font-bold mb-12 text-center text-primary z-10">
          Our Services
          <span className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full z-[-1]" />
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="relative bg-white rounded-2xl shadow-md hover:shadow-xl p-6 transition duration-300 transform hover:-translate-y-1 hover:scale-[1.02] border-t-4 border-accent"
            >
              <div className="absolute top-2 right-2 text-accent opacity-10 text-5xl">
                {service.icon}
              </div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-accent bg-opacity-10 rounded-full flex items-center justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-dark font-serif">{service.title}</h3>
              </div>
              <p className="text-sm text-gray-600 font-light leading-relaxed font-sans">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="absolute bottom-0 right-0 w-[60%] h-24 bg-gradient-to-l from-accent to-primary transform skew-y-3 z-0"></div> */}
    </section>
  );
}
