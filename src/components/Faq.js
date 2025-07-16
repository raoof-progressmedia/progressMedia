import { useState } from "react";

export default function FAQ() {
  const faqs = [
    {
      question: "What is Progress Media?",
      answer:
        "Progress Media is a digital-first company helping individuals and businesses grow through technology, personal development, and strategic content.",
    },
    {
      question: "Who can benefit from your services?",
      answer:
        "Anyone looking to transition into the digital world—entrepreneurs, small businesses, or creators aiming to build an online presence.",
    },
    {
      question: "Do you offer custom digital solutions?",
      answer:
        "Absolutely! We tailor our digital branding, web development, and content strategy solutions to your specific goals.",
    },
    {
      question: "How can I get started?",
      answer:
        "Just reach out via email or any of our social platforms. We’ll set up a time to understand your needs and propose a plan.",
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
