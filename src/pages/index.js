import React from 'react';
import { navigate } from 'gatsby';

import Layout from '@components/Layout';
import Card from '@components/Card';
import Button from '@components/Button';
import useRandomQuotes from '@/hooks/useRandomQuotes';
import { styWelcomeWrapper, styBtnWelcome } from '@/styles';

function AppIndex() {
  const { loading, data } = useRandomQuotes();

  const handleClickButton = () => {
    navigate('/about');
  };

  const renderQuote = () => {
    /**
     * When we still waiting the data, just showing the loader
     */
    if (loading || !data.content) return <h2>✨Preparing something special for you..</h2>;

    return (
      <>
        <h2>&quot;{data.content}&quot;</h2>
        <span>{`${data.author} via Quotable`}</span>
      </>
    );
  };

  return (
    <Layout title="Welcome" noWave={false} centerContent>
      <Card>
        <div css={styWelcomeWrapper}>{renderQuote()}</div>
        <Button label="who is indra" data-testid="btnWhoIndra" className={styBtnWelcome} onClick={handleClickButton}>
          Let me know who is Indra 🤔
        </Button>
      </Card>
    </Layout>
  );
}

export default AppIndex;
