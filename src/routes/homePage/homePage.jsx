import React from 'react'
import Navigation from '../../components/navigation/Navigation';
import Header from '../../components/header/Header';
import Banner from '../../components/banner/Banner';
import Cards from '../../components/cards/Cards';
import { cardDetails } from "../../lib/dummyData";
import { healthNews } from "../../lib/dummyData";
import Footer from '../../components/footer/Footer';

const HomePage = () => {
  return (
    <div>
      <Header title="Bayer Healthcare" />
      <Navigation />
      <Banner
        title="Your Health, Our Priority"
        desc="Explore the latest health information and resources from Bayer Healthcare"
      />
      {cardDetails && (
        <div className="featuredSection p-4">
          <h4 className="fw-bold pb-2">Featured Health Topics</h4>
          <div className="featuredCardWrapper d-flex flex-wrap gap-4 flex-column flex-md-row">
            {cardDetails.map((card) => (
              <Cards
                cardTitle={card.title}
                cardDesc={card.desc}
                cardLink={card.link}
                buttonText="Learn More"
              />
            ))}
          </div>
        </div>
      )}

      {healthNews && (
        <div className="healthNewsSection p-4">
          <h4 className="fw-bold pb-2">Latest Health News</h4>
          <div className="healthNewsWrapper d-flex flex-column gap-4">
            {healthNews.map((healthNewslist) => (
              <Cards
                cardTitle={healthNewslist.title}
                cardDesc={healthNewslist.desc}
                cardLink={healthNewslist.link}
                buttonText="Read Full Article"
              />
            ))}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default HomePage