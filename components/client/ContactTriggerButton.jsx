'use client';

import { useContactModal } from './ContactModalProvider';

export default function ContactTriggerButton({
  className,
  children,
  service,
  plan,
  message,
  emailSubject
}) {
  const { openContactModal } = useContactModal();

  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        openContactModal({
          service,
          plan,
          message,
          emailSubject
        });
      }}
    >
      {children}
    </button>
  );
}
