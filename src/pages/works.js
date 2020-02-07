import React from 'react';
import Layout from '@components/Layout';
import Card from '@components/Card';
import Divider from '@components/Divider';
import { Carousel, CarouselItem } from '@components/Carousel';
import TestimonialsData from '@/api/testimonial';

function WorksPage() {
  const renderTestimonials = () => {
    return (
      <>
        <Carousel delay={7000}>
          {TestimonialsData.map((item, index) => (
            <CarouselItem key={index} title={item.title} author={item.author} text={item.text} imgUrl={item.imgUrl} />
          ))}
        </Carousel>
        <br />
        <Divider />
      </>
    );
  };

  return (
    <Layout title="My Works">
      <Card title="My works">
        <h2 style={{ fontSize: '16px', marginBottom: '20px' }}>How do they said about me? 🤔</h2>
        {renderTestimonials()}
      </Card>
    </Layout>
  );
}

export default WorksPage;
