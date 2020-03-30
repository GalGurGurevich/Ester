import React from 'react';

export default function AnimatedText({ text }) {
    const [value, setValue] = React.useState('');
    React.useEffect(() => {
      let idx = 0;
      let timeout;
      (function updateValue() {
        setValue(text.slice(0, idx));
        if (idx < text.length) {
          idx++;
          timeout = setTimeout(updateValue, 150);
        }
      })();
      return () => clearTimeout(timeout);
    }, [text]);
    return value;
  }
