'use client';

import { useEffect, useState } from 'react';
import { buildWhatsAppUrl, whatsappNumber } from '../../lib/site';

export default function ContactForm({ initialMessage = '', initialSubject = '' }) {
  const [service, setService] = useState(initialSubject || 'Microbiome analysis');
  const [message, setMessage] = useState(initialMessage);

  useEffect(() => {
    setService(initialSubject || 'Microbiome analysis');
    setMessage(initialMessage);
  }, [initialMessage, initialSubject]);

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const senderName = formData.get('name');
    const senderCompany = formData.get('company');
    const submittedService = formData.get('service');
    const submittedMessage = formData.get('message');
    const formattedMessage = [
      'Hello Rachid, I would like to discuss a bioinformatics project.',
      '',
      `Name: ${senderName}`,
      `Company or Lab: ${senderCompany || 'Not specified'}`,
      `Service Needed: ${submittedService}`,
      '',
      'Project Details:',
      submittedMessage
    ].join('\n');

    window.open(buildWhatsAppUrl(formattedMessage), '_blank', 'noopener,noreferrer');
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="whatsapp-form"
      data-whatsapp-number={whatsappNumber}
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <div className="form-floating mb-3">
        <input type="text" className="form-control" id="nameInput" name="name" placeholder="Full Name" required />
        <label htmlFor="nameInput">Full Name</label>
      </div>

      <div className="form-floating mb-3">
        <input type="text" className="form-control" id="companyInput" name="company" placeholder="Company or Lab" />
        <label htmlFor="companyInput">Company or Lab</label>
      </div>

      <div className="form-floating mb-3">
        <select
          className="form-select"
          id="serviceInput"
          name="service"
          aria-label="Service needed"
          value={service}
          onChange={(event) => setService(event.target.value)}
        >
          <option value="Microbiome analysis">Microbiome analysis</option>
          <option value="Metagenomics pipeline">Metagenomics pipeline</option>
          <option value="RNA-seq support">RNA-seq support</option>
          <option value="Sanger analysis">Sanger analysis</option>
          <option value="Phylogenetic analysis">Phylogenetic analysis</option>
          <option value="Data visualization">Data visualization</option>
          <option value="Bioinformatics consulting">Bioinformatics consulting</option>
        </select>
        <label htmlFor="serviceInput">Service Needed</label>
      </div>

      <div className="form-floating mb-3">
        <textarea
          className="form-control"
          id="messageInput"
          name="message"
          rows="5"
          placeholder="Project details"
          style={{ height: '160px' }}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          required
        />
        <label htmlFor="messageInput">Project Details</label>
      </div>

      <div className="d-grid">
        <button type="submit" className="btn-submit">
          Send to WhatsApp <i className="bi bi-whatsapp ms-2" />
        </button>
      </div>

      <p className="whatsapp-note mb-0">
        Your message opens in WhatsApp with the project brief already formatted for quick review.
      </p>
    </form>
  );
}
