import { useState } from "react";

export default function FAQ() {
  const faqs = [
  {
    question: "What is Progress Media?",
    answer:
      "Progress Media is a purpose-driven digital brand helping individuals grow through smart tech solutions, fitness-focused content, mindset coaching, and personalized guidance."
  },
  {
    question: "Who are your services designed for?",
    answer:
      "Our services are perfect for fitness coaches, content creators, entrepreneurs, and anyone seeking clarity in mindset and strategy while building a digital presence."
  },
  {
    question: "Do you provide customized solutions?",
    answer:
      "Yes — every solution is tailored. Whether it’s a fitness brand website, content strategy, or mindset roadmap, we build around your goals."
  },
  {
    question: "How do I begin working with you?",
    answer:
      "Simply reach out via email or any social platform. We’ll schedule a free discovery call to understand your vision and map out a clear action plan."
  },
];


  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="mt-2 py-20 px-6 bg-white text-dark">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-sans font-bold mb-12 text-center text-primary">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-primary  font-sans rounded-lg shadow-md p-6 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-lg font-semibold text-white flex justify-between items-center">
                {faq.question}
                <span className="text-accent text-xl font-bold">
                  {openIndex === index ? "−" : "+"}
                </span>
              </h3>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden mt-2 ${
                  openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-white text-sm font-light">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
