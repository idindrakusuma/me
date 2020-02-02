import { useState, useEffect } from 'react';

function usePosts(limit = 3) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const handleGetPosts = async () => {
    const rawResult = await fetch('https://indrakusuma.web.id/content.json');
    const result = await rawResult.json();
    const finalResult = [];
    /**
     * Construct the data as `limit`-ation
     */
    (result?.posts || []).some((item, index) => {
      if (index === limit) return true;

      finalResult.push({
        title: item.title,
        permalink: item.permalink,
        desc: item.excerpt,
      });

      return false;
    });

    setLoading(false);
    setData(finalResult);
  };

  const handleRefetch = () => {
    handleGetPosts();
  };

  useEffect(() => {
    setLoading(true);
    handleGetPosts();
  }, []);

  return { loading, data, refetch: handleRefetch };
}

export default usePosts;
