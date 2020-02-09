import React, { useState, useMemo } from 'react';

import Layout from '@components/Layout';
import Card from '@components/Card';
import Divider from '@components/Divider';
import FunFacts from '@components/FunFacts';
import Button from '@components/Button';
import { Carousel, CarouselItem } from '@components/Carousel';
import { Timeline, Event } from '@components/Timeline';

import ImgPatners from '@assets/patners.jpg';
import TestimonialsData from '@/api/testimonialData';
import { awards, projects } from '@/api/worksData';
import { Typography, styFlexCenter } from '@/styles';

const TRESHOLD = 3;

function WorksPage() {
  const [isShowAllAward, setIsShowAllAward] = useState(false);
  const [isShowAllProject, setIsShowAllProject] = useState(false);

  const isShowButtonAward = useMemo(() => {
    if (!isShowAllAward && awards.length > TRESHOLD) return true;

    return false;
  }, [isShowAllAward]);

  const isShowButtonProject = useMemo(() => {
    if (!isShowAllProject && projects.length > TRESHOLD) return true;

    return false;
  }, [isShowAllProject]);

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
          <span css={styFlexCenter}>Show more awards 🤙</span>
        </Button>
      );
    }

    return null;
  };

  const renderButtonProjects = () => {
    if (isShowAllProject) {
      return (
        <Button small onClick={() => setIsShowAllProject(false)}>
          <span css={styFlexCenter}>Show less 👋</span>
        </Button>
      );
    }

    if (isShowButtonProject) {
      return (
        <Button small onClick={() => setIsShowAllProject(true)}>
          <span css={styFlexCenter}>Show more projects 👨‍💻</span>
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
            <Event key={index} interval={item.date} title={item.title} subTitle={item.location} showIcon>
              <div dangerouslySetInnerHTML={{ __html: item.desc }} />
            </Event>,
          );
        } else {
          return true;
        }
      } else {
        showItems.push(
          <Event key={index} interval={item.date} title={item.title} subTitle={item.location} showIcon>
            <div dangerouslySetInnerHTML={{ __html: item.desc }} />
          </Event>,
        );
      }

      return false;
    });

    return showItems;
  };

  const renderProjects = () => {
    const showItems = [];

    projects.some((item, index) => {
      if (!isShowAllProject) {
        if (index < TRESHOLD) {
          showItems.push(
            <Event key={index} interval={item.date} title={item.title} subTitle={item.location} showIcon>
              <div dangerouslySetInnerHTML={{ __html: item.desc }} />
            </Event>,
          );
        } else {
          return true;
        }
      } else {
        showItems.push(
          <Event key={index} interval={item.date} title={item.title} subTitle={item.location} showIcon>
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
      <Card title="Awards">
        <Timeline>{renderAwards()}</Timeline>
        <div style={{ margin: '0 auto', display: 'table' }}>{renderButtonAwards()}</div>
      </Card>
      <Divider />
      <Card title="Projects">
        <Timeline>{renderProjects()}</Timeline>
        <div style={{ margin: '0 auto', display: 'table' }}>{renderButtonProjects()}</div>
      </Card>
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
