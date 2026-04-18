'use client';

import { useState } from 'react';

export default function FaqAccordion({ faqs, idPrefix }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="accordion project-accordion" id={`${idPrefix}-accordion`}>
      {faqs.map((faq, index) => {
        const isOpen = index === openIndex;
        const panelId = `${idPrefix}-collapse-${index + 1}`;

        return (
          <div className="accordion-item" key={faq.question}>
            <h2 className="accordion-header">
              <button
                className={`accordion-button ${isOpen ? '' : 'collapsed'}`}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
              >
                {faq.question}
              </button>
            </h2>
            <div
              id={panelId}
              className={`accordion-collapse collapse ${isOpen ? 'show' : ''}`}
            >
              <div className="accordion-body">
                <p>{faq.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
