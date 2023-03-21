import { useState, useEffect } from 'react';

/**
 * It returns a boolean value that represents whether or not the current window size matches the media
 * query string passed to it.
 * @param mediaQueryStr - string eg: "(max-width: 75rem)"
 * @returns A boolean value.
 */

const useMatchMedia = mediaQueryStr => {
  if (!mediaQueryStr || typeof mediaQueryStr !== 'string')
    throw TypeError('Provide valid string as argument.');
  const [isCorrect, setIsCorrect] = useState(
    window.matchMedia(mediaQueryStr).matches
  );

  useEffect(() => {
    const result = () => setIsCorrect(window.matchMedia(mediaQueryStr).matches);
    window.addEventListener('resize', result);
    return () => window.removeEventListener('resize', result);
  }, [mediaQueryStr]);

  return isCorrect;
};

export default useMatchMedia;
