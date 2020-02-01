import { useState, useEffect } from 'react';

/**
 * This hooks help you to get random quote from `quotable.io`
 * https://github.com/lukePeavey/quotable
 * @return {object} return loading state also the quote data
 */
function useRandomQuotes() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});

  const handleGetQuote = async () => {
    setLoading(true);

    const rawResult = await fetch('https://api.quotable.io/random');
    const result = await rawResult.json();

    /**
     * IF result from API dead, use default quotes
     */
    if (!result.content) {
      setData({ content: 'Dream. Believe. Make it Happen!', author: 'Indra Kusuma' });
    } else {
      setData(result);
    }

    /**
     * Don't forget to stop the loading state
     */
    setLoading(false);
  };

  useEffect(() => {
    handleGetQuote();
  }, []);

  return { loading, data };
}

export default useRandomQuotes;
