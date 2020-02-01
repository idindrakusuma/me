import React from 'react';

import Layout from '@components/Layout';
import SkillsInfo from '@components/Skills';
import Card from '@components/Card';
import { row, intro, info, colXs12 } from '@components/Layout/styles';
import { aboutMe, introduction as TextIntroduction, skills } from '@/api/aboutData';
import { textColor } from '@/constants/color';

function AboutPage() {
  const renderInformation = () => {
    return (
      <div css={row}>
        <ul css={info}>
          {aboutMe.map((me, index) => (
            <li key={index} style={{ display: 'flex', alignItems: 'center' }}>
              <me.icon />
              <span style={{ marginLeft: '8px', color: textColor }}>
                {me.link === '' ? (
                  me.answer
                ) : (
                  <a href={me.link} target="_blank" rel="noopener noreferrer">
                    {me.answer}
                  </a>
                )}
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const renderSkills = () => {
    return skills.map((item, index) => {
      return (
        <div css={row} key={index}>
          <div css={colXs12}>
            <SkillsInfo title={item.skill} ability={item.percentage} />
          </div>
        </div>
      );
    });
  };

  return (
    <Layout title="About">
      <Card title="✨Let me introduce my self">
        <div css={row}>
          <p css={intro} dangerouslySetInnerHTML={{ __html: TextIntroduction }} />
        </div>
        {renderInformation()}
        {renderSkills()}
      </Card>
    </Layout>
  );
}

export default React.memo(AboutPage);
