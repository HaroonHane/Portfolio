import React from 'react';
import { Link } from 'react-router-dom';

const EmailLink = () => {
  const recipient = 'muhammadharoonawaan@gmail.com';
  const subject = 'Hello from Capture';
  const body = 'How may I help you.';

  const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <div>
      <Link to="#" onClick={() => window.location.href = mailtoLink}>
        Email Ali
      </Link>
    </div>
  );
};

export default EmailLink;