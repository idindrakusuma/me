import React from 'react';

import Card from '@components/Card';
import Layout from '@components/Layout';

import * as data from '@/api/contactData';
import { styText, styContactSocMed } from '@/styles';

function ContactPage() {
  const renderSocialMedia = () => {
    return (
      <ul>
        {data.socialMedia.map(item => (
          <li key={item.title}>
            <a href={item.url} title={item.title} target="_blank" rel="noopener noreferrer">
              <item.icon />
            </a>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <Layout title="Contact Me!" noWave={false}>
      <Card title="Get in touch">
        <div css={styText}>
          <div dangerouslySetInnerHTML={{ __html: data.description }} />
          <div css={styContactSocMed}>{renderSocialMedia()}</div>
        </div>
      </Card>
    </Layout>
  );
}

export default ContactPage;
