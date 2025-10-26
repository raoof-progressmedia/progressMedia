"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import data from "@/data/questions";

export default function LearnPage() {
  const sections = Object.keys(data);
  const [sectionIndex, setSectionIndex] = useState(0);
  const [questions, setQuestions] = useState(Object.entries(data[sections[0]]));
  const [cardIndex, setCardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const currentSection = sections[sectionIndex];
  const [question, answer] = questions[cardIndex];

  const nextCard = () => {
    if (cardIndex < questions.length - 1) {
      setCardIndex(cardIndex + 1);
      setShowAnswer(false);
    } else if (sectionIndex < sections.length - 1) {
      const newIndex = sectionIndex + 1;
      setSectionIndex(newIndex);
      const nextQs = Object.entries(data[sections[newIndex]]);
      setQuestions(nextQs);
      setCardIndex(0);
      setShowAnswer(false);
    }
  };

  const prevCard = () => {
    if (cardIndex > 0) {
      setCardIndex(cardIndex - 1);
      setShowAnswer(false);
    }
  };

  return (
    <div className="min-h-screen bg-light text-dark flex flex-col items-center justify-center p-6 font-sans">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
        Learn with Flashcards ⚡
      </h1>
      <h2 className="text-lg mb-6 text-accent">
        {currentSection}
      </h2>

      <AnimatePresence mode="wait">
        <motion.div
          key={cardIndex + showAnswer}
          initial={{ rotateY: 90, opacity: 0 }}
          animate={{ rotateY: 0, opacity: 1 }}
          exit={{ rotateY: -90, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-lg bg-white shadow-2xl rounded-2xl p-6 cursor-pointer border border-gray-200"
          onClick={() => setShowAnswer(!showAnswer)}
        >
          <h3 className="text-xl font-semibold text-center">
            {showAnswer ? answer : question}
          </h3>
          <p className="text-center mt-2 text-sm text-gray-500">
            {showAnswer ? "Click to view question" : "Click to reveal answer"}
          </p>
        </motion.div>
      </AnimatePresence>

      <div className="flex gap-4 mt-8">
        <button
          onClick={prevCard}
          disabled={cardIndex === 0}
          className="btn-brand disabled:opacity-40"
        >
          ← Previous
        </button>
        <button
          onClick={nextCard}
          className="btn-brand"
        >
          Next →
        </button>
      </div>

      <p className="mt-6 text-sm text-gray-500">
        Section {sectionIndex + 1}/{sections.length} — Card {cardIndex + 1}/{questions.length}
      </p>
    </div>
  );
}

/**"use client";

import { data } from "../data/questions";
import { flattenData } from "../lib/convertData";

export default function HomePage() {
  const formatted = flattenData(data);

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Flattened Data Preview</h1>
      <ul className="space-y-3">
        {formatted.map((item, i) => (
          <li key={i} className="p-3 border rounded-lg bg-white shadow-sm">
            <p className="font-semibold">{item.question}</p>
            <p className="text-gray-700">{item.answer}</p>
            <p className="text-sm text-gray-500 mt-1">
              {item.category} {item.subcategory && `› ${item.subcategory}`}
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}
**/
