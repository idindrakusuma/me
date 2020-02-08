import React from 'react';
import Layout from '@components/Layout';
import Card from '@components/Card';
import Divider from '@components/Divider';
import FunFacts from '@components/FunFacts';
import { Carousel, CarouselItem } from '@components/Carousel';
import ImgPatners from '@assets/patners.jpg';
import TestimonialsData from '@/api/testimonial';
import { Typography } from '@/styles';

function WorksPage() {
  const renderTitle = (title, margin) => {
    return <h2 style={{ fontSize: '16px', margin }}>{title}</h2>;
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
