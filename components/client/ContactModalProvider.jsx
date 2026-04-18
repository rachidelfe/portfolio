'use client';

import Link from 'next/link';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const ContactModalContext = createContext(null);

function buildContactHref(subject, message) {
  const searchParams = new URLSearchParams();

  if (subject) {
    searchParams.set('subject', subject);
  }

  if (message) {
    searchParams.set('message', message);
  }

  const queryString = searchParams.toString();

  return queryString ? `/contact?${queryString}` : '/contact';
}

export function ContactModalProvider({ children }) {
  const [modalState, setModalState] = useState(null);

  useEffect(() => {
    function handleEscapeKey(event) {
      if (event.key === 'Escape') {
        setModalState(null);
      }
    }

    if (!modalState) {
      return undefined;
    }

    document.body.classList.add('modal-open');
    window.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.body.classList.remove('modal-open');
      window.removeEventListener('keydown', handleEscapeKey);
    };
  }, [modalState]);

  const contextValue = useMemo(
    () => ({
      openContactModal(config) {
        setModalState({
          service: config.service || 'Bioinformatics Service',
          plan: config.plan || 'General Inquiry',
          message: config.message || `Hello, I am interested in ${config.service || 'Bioinformatics Service'}${config.plan ? ` - ${config.plan}` : ''}.`,
          emailSubject: config.emailSubject || `Service Request: ${config.service || 'Bioinformatics Service'}${config.plan ? ` - ${config.plan}` : ''}`
        });
      },
      closeContactModal() {
        setModalState(null);
      }
    }),
    []
  );

  const modalTitle = modalState ? `${modalState.service}${modalState.plan ? ` - ${modalState.plan}` : ''}` : '';

  return (
    <ContactModalContext.Provider value={contextValue}>
      {children}

      {modalState ? (
        <div className="contact-choice-modal-shell" role="presentation">
          <button
            type="button"
            className="contact-choice-backdrop"
            aria-label="Close contact options"
            onClick={() => setModalState(null)}
          />

          <div
            className="contact-choice-modal modal fade show"
            role="dialog"
            aria-modal="true"
            aria-labelledby="contactChoiceModalLabel"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <div>
                    <h5 className="modal-title" id="contactChoiceModalLabel">How would you like to proceed?</h5>
                    <p className="mb-0 mt-2">Choose how you would like to continue for {modalTitle}.</p>
                  </div>
                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={() => setModalState(null)}
                  />
                </div>
                <div className="modal-body">
                  <div className="contact-choice-actions">
                    <Link
                      href={buildContactHref(modalState.emailSubject, modalState.message)}
                      className="contact-choice-btn contact-choice-whatsapp"
                      onClick={() => setModalState(null)}
                    >
                      <i className="bi bi-chat-dots" />
                      <strong>Contact Form</strong>
                      <span>Use the contact page to send a direct project inquiry.</span>
                    </Link>
                    <a
                      href={`mailto:rachid.elfermi@gmail.com?subject=${encodeURIComponent(modalState.emailSubject)}`}
                      className="contact-choice-btn contact-choice-email"
                    >
                      <i className="bi bi-envelope" />
                      <strong>Email</strong>
                      <span>Use email if you want to send a more detailed request or supporting context.</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </ContactModalContext.Provider>
  );
}

export function useContactModal() {
  const contextValue = useContext(ContactModalContext);

  if (!contextValue) {
    throw new Error('useContactModal must be used within ContactModalProvider.');
  }

  return contextValue;
}
