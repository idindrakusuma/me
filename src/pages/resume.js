import React from 'react';
import Layout from '@components/Layout';
import Card from '@components/Card';
import { Timeline, Event } from '@components/Timeline';
import { intro } from '@components/Layout/styles';
import data from '@/api/resumeData';

function ResumePage() {
  const renderEvents = () => {
    return data.map(event => {
      return (
        <Event interval={event.interval} title={event.title} subtitle={event.subtitle} showIcon={event.icon}>
          <div dangerouslySetInnerHTML={{ __html: event.desc }} />
        </Event>
      );
    });
  };

  return (
    <Layout title="Resume">
      <Card title="Education and Experience">
        <Timeline>{renderEvents()}</Timeline>
        <p
          css={intro}
          dangerouslySetInnerHTML={{ __html: 'Need more details? you can check my linkedin or just email me! 😃' }}
        />
      </Card>
    </Layout>
  );
}

export default ResumePage;
