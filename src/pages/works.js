import React, { useState, useMemo } from 'react';

import Layout from '@components/Layout';
import Card from '@components/Card';
import Divider from '@components/Divider';
import FunFacts from '@components/FunFacts';
import Button from '@components/Button';
import { Carousel, CarouselItem } from '@components/Carousel';
import { Timeline, Event } from '@components/Timeline';

import ImgPatners from '@assets/patners-min.jpg';
import TestimonialsData from '@/api/testimonialData';
import { awards } from '@/api/worksData';
import { Typography, styFlexCenter } from '@/styles';

const TRESHOLD = 3;

function WorksPage() {
  const [isShowAllAward, setIsShowAllAward] = useState(false);

  const isShowButtonAward = useMemo(() => {
    if (!isShowAllAward && awards.length > TRESHOLD) return true;

    return false;
  }, [isShowAllAward]);

  const renderButtonAwards = () => {
    if (isShowAllAward) {
      return (
        <Button small onClick={() => setIsShowAllAward(false)}>
          <span css={styFlexCenter}>Show less 👋</span>
        </Button>
      );
    }

    if (isShowButtonAward) {
      return (
        <Button small onClick={() => setIsShowAllAward(true)}>
          <span css={styFlexCenter}>Show more..</span>
        </Button>
      );
    }

    return null;
  };

  const renderTitle = (title, margin) => {
    return <h2 style={{ fontSize: '16px', margin }}>{title}</h2>;
  };

  const renderAwards = () => {
    const showItems = [];

    awards.some((item, index) => {
      if (!isShowAllAward) {
        if (index < TRESHOLD) {
          showItems.push(
            <Event
              showIcon
              hideBadge={false}
              key={index}
              interval={item.date}
              title={item.title}
              subtitle={item.location}
              isAward={item.isAward}
              isPortofolio={item.isPortofolio}
            >
              <div dangerouslySetInnerHTML={{ __html: item.desc }} />
            </Event>,
          );
        } else {
          return true;
        }
      } else {
        showItems.push(
          <Event
            showIcon
            hideBadge={false}
            key={index}
            interval={item.date}
            title={item.title}
            subtitle={item.location}
            isAward={item.isAward}
            isPortofolio={item.isPortofolio}
          >
            <div dangerouslySetInnerHTML={{ __html: item.desc }} />
          </Event>,
        );
      }

      return false;
    });

    return showItems;
  };

  const renderTestimonials = () => {
    return (
      <>
        <Carousel delay={7000}>
          {TestimonialsData.map((item, index) => (
            <CarouselItem key={index} title={item.title} author={item.author} text={item.text} imgUrl={item.imgUrl} />
          ))}
        </Carousel>
        <br />
      </>
    );
  };

  return (
    <Layout title="My Works">
      <FunFacts projects={30} customers={27} hours={4500} awards={7} />
      <Card>
        {renderTitle('My projects and awards 😃', '10px 0 30px 0')}
        <Timeline>{renderAwards()}</Timeline>
        <div style={{ margin: '0 auto', display: 'table' }}>{renderButtonAwards()}</div>
      </Card>
      <Divider />
      <Card>
        {renderTitle('How do they said about me? 🤔', '10px 0 30px 0')}
        {renderTestimonials()}
        <img src={ImgPatners} alt="patners indra kusuma" />
        <Divider />
        <Typography>Want something to discuss with me? Please email me! 😃</Typography>
      </Card>
    </Layout>
  );
}

export default WorksPage;
