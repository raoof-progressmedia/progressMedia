import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-white w-full py-16 px-4 my-2">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Text Content */}
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold font-sans text-primary">Progress Media</h1>
          <p className="text-xl font-serif text-blue-600 mt-2 tracking-widest">
            SECRETS TO STOP FAILURE
          </p>
          <div className="w-60 h-1 bg-accent my-3 mx-auto lg:mx-0" />
          <p className="text-md font-sans font-bold text-blue-600">
            TECH, FITNESS, MINDSET
          </p>
        </div>

        {/* Icons (Right Side) */}
        <div className="flex gap-4 flex-wrap justify-center">
          <Image
            src="/assets/tech-icon.webp"
            alt="Mindset Icon"
            width={100}
            height={100}
            className="rounded-xl shadow-lg"
          />
          <Image
            src="/assets/fitness-icon.webp"
            alt="Fitness Icon"
            width={100}
            height={100}
            className="rounded-xl shadow-lg"
          />
          <Image
            src="/assets/mindset-icon.webp"
            alt="Tech Icon"
            width={100}
            height={100}
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
