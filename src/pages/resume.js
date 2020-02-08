import React from 'react';
import Layout from '@components/Layout';
import Card from '@components/Card';
import { Timeline, Event } from '@components/Timeline';
import data from '@/api/resumeData';
import { Typography } from '@/styles';

function ResumePage() {
  const renderEvents = () => {
    return data.map((event, index) => {
      return (
        <Event
          key={index}
          interval={event.interval}
          title={event.title}
          subtitle={event.subtitle}
          showIcon={event.icon}
        >
          <div dangerouslySetInnerHTML={{ __html: event.desc }} />
        </Event>
      );
    });
  };

  return (
    <Layout title="Resume">
      <Card title="Education and Experience">
        <Timeline>{renderEvents()}</Timeline>
        <Typography>Need more details? you can check my linkedin or just email me! 😃</Typography>
      </Card>
    </Layout>
  );
}

export default ResumePage;
