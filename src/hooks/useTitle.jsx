import { useEffect } from 'react';

/**
 * useTitle is a function that takes a pageName as an argument and sets the document title to the
 * pageName.
 */
const useTitle = pageName => {
  useEffect(() => {
    document.title = `${pageName}`;
  }, [pageName]);
};

export default useTitle;
