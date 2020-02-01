import React from 'react';
import { navigate } from 'gatsby';

import Layout from '@components/Layout';
import Button from '@components/Button';
import useRandomQuotes from '@/hooks/useRandomQuotes';
import { styWelcomeWrapper, styWrapper, styBtnWelcome } from '@/styles';

function AppIndex() {
  const { loading, data } = useRandomQuotes();

  const handleClickButton = () => {
    navigate('/about');
  };

  const renderQuote = () => {
    if (loading) return <h2>✨Preparing something special for you..</h2>;

    if (!data.content) return null;

    return (
      <>
        <h2>&quot;{data.content}&quot;</h2>
        <span>{`${data.author} via Quotable`}</span>
      </>
    );
  };

  return (
    <Layout title="Welcome" noWave={false}>
      <div css={styWrapper}>
        <div css={styWelcomeWrapper}>{renderQuote()}</div>
        <Button label="Let me know who is Indra.." className={styBtnWelcome} onClick={handleClickButton} />
      </div>
    </Layout>
  );
}

export default AppIndex;
