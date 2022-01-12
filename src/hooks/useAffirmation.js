import { useState } from 'react';

export default function useAffirmation() {
  const [content, setContent] = useState('Hello, world!');
  const [affirmation, setAffirmation] = useState('');

  return { setAffirmation, setContent, affirmation, content };
}
