import React, { useState } from 'react';

const AutocorrectTextarea = ({ corrections }) => {
  const [text, setText] = useState('');

  const handleTextChange = (event) => {
    const { value } = event.target;
    const words = value.split(' ');

    const correctedWords = words.map((word, index) => {
      const correctedWord = corrections[word];
      return correctedWord ? correctedWord : word;
    });

    setText(correctedWords.join(' '));
  };

  return (
    <textarea
      data-testid="textarea"
      value={text}
      onChange={handleTextChange}
    />
  );
};

export default AutocorrectTextarea;