import React from 'react';
import Layout from '@components/Layout';
import Card from '@components/Card';
import Post from '@components/Post';
import usePosts from '@/hooks/usePosts';

import { intro } from '@/components/Layout/styles';

function WorksPage() {
  const { loading, data } = usePosts(4);

  const renderPosts = () => {
    if (loading) return <div>✨Preparing something special for you..</div>;

    if (data.length === 0) return null;

    return data.map(item => <Post title={item.title} desc={item.desc} link={item.link} />);
  };

  return (
    <Layout title="Blog Posts">
      <Card title="Blog Posts">
        <div style={{ marginTop: '2em' }}>{renderPosts()}</div>
        <p
          css={intro}
          dangerouslySetInnerHTML={{
            __html:
              'If you want to see more articles, please check <a href="https://indrakusuma.web.id">https://indrakusuma.web.id</a> 😃',
          }}
        />
      </Card>
    </Layout>
  );
}

export default WorksPage;
