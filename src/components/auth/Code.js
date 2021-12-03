import React, { useState, useEffect } from 'react';

export default function Code() {
  const [digit0, setDigit0] = useState(null);
  const [digit1, setDigit1] = useState(null);
  const [digit2, setDigit2] = useState(null);
  const [digit3, setDigit3] = useState(null);
  const [digit4, setDigit4] = useState(null);
  const [digit5, setDigit5] = useState(null);

  return (
    <div className="tw-flex tw-items-center tw-justify-between">
      <h1>code here</h1>
    </div>
  );
}
