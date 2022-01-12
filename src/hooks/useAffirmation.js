import { useState, useEffect } from 'react';

export default function useAffirmation({ bgColor, fgColor }) {
  const [affirmation, setAffirmation] = useState('');

  useEffect(() => {
    const affirmations = [
      'Great choice!',
      'I love that color!',
      'Looks good!',
      'What a great color combo!',
      'Ooh la la, so fancy',
    ];

    const randomIndex = Math.floor(Math.random() * affirmations.length);
    setAffirmation(affirmations[randomIndex]);
  }, [bgColor, fgColor]);

  return { affirmation };
}
