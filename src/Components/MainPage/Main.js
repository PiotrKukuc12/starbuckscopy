import React from 'react';
import { Alink, MainContainer } from './Main.style';
import leftStar from './images/leftStar.png';
import coctail from './images/coctail.png';
import coffe2 from './images/coffe2.png';
import order from './images/order.png';
import order2 from './images/order2.png';
import employes from './images/employes.png';

import { ButtonHeader } from '../Header/Header.styles';

const Main = () => {
  
  return (
    <MainContainer>
      {/* info section */}
      <div className="learn-more">
        <div className="text">
          <p>
            Following CDC guidance, facial coverings are recommended in our
            stores for all <br />
            customers, and are required where mandated by local law.{' '}
            <Alink href="#">Learn more </Alink>
          </p>
        </div>
      </div>
      {/* items section */}
      <div className="item-section">
        <div className="first-item">
          <div className="first-left-info">
            <h1>Free coffee is tap away</h1>
            <p>Join now to start earning Rewards.*</p>
            <ButtonHeader
              backgroundColor="white"
              hoverColor="lightgrey"
              color="black"
              href="#"
            >
              Join now
            </ButtonHeader>
          </div>
          <div className="first-right-info">
            <img src={leftStar} alt="left-star" />
          </div>
        </div>
      </div>
      <div className="second-item">
        <div className="second-left-info">
          <img src={coctail} alt="right-coctail" />
        </div>
        <div className="second-right-info">
          <h1>
            STARBUCKS <br />
            REFRESHERS <br />
            BEVERAGES <br />
          </h1>
          <p>
            Quench your summer thirst with vibrant <br />
            Mango Dragonfruit, Strawberry Açaí and Kiwi <br />
            Starfruit Starbucks Refreshers® beverages.
          </p>
          <ButtonHeader
            backgroundColor="white"
            hoverColor="lightgrey"
            color="black"
            href="#"
          >
            Order iced beverages
          </ButtonHeader>
        </div>
      </div>
      <div className="third-item">
        <div className="third-left-info">
          <h1>
            Happy place <br /> Found
          </h1>
          <p>
            Our Frappuccino® drinks were made for <br />
            summer fun. Treat yourself to Mocha Cookie <br />
            Crumble or Caramel Ribbon Crunch.
          </p>
          <ButtonHeader
            backgroundColor="white"
            hoverColor="lightgrey"
            color="black"
            href="#"
          >
            Order Frappuccino drink
          </ButtonHeader>
        </div>
        <div className="third-right-info">
          <img src={coffe2} alt="two-coctail" />
        </div>
      </div>

      <div className="four-item">
        <div className="left-col">
          <div className="photo">
            <img src={order} />
          </div>
          <div className="photo-text">
            <h1>Order and pick up. Easy as that.</h1>
            <p>
              Just open the app, order your favorites, and enjoy contactless
              pay.
              <br />
              From there, choose whichever pickup method is best for you.
            </p>
            <ButtonHeader
              backgroundColor="white"
              hoverColor="lightgrey"
              color="black"
              href="#"
            >
              See pickup options
            </ButtonHeader>
          </div>
        </div>
        <div className="right-col">
          <div className="photo">
            <img src={order2} />
          </div>
          <div className="photo-text">
            <h1>Floating into summer like…</h1>
            <p>
              Keep the laid-back vibes going. Order Starbucks drinks on Uber{' '}
              <br />
              Eats.**
            </p>
            <ButtonHeader
              backgroundColor="white"
              hoverColor="lightgrey"
              color="black"
              href="#"
            >
              See pickup options
            </ButtonHeader>
          </div>
        </div>
      </div>
      <div className="bottom-info">
        <div className="left-info">
          <h1>50 years of serving communities</h1>
          <p>
            From the beginning, Starbucks has been about more than <br />
            just coffee. See how our partners (employees) and <br />
            customers strengthen our local communities.
          </p>
          <ButtonHeader
            backgroundColor="white"
            hoverColor="lightgrey"
            color="black"
            href="#"
          >
            Learn more
          </ButtonHeader>
        </div>
        <div className="right-image">
          <img src={employes} />
        </div>
      </div>
      <div className="main-footer">
        <p className="first-p">
          *At participating stores. Some restrictions apply. See
          starbucks.com/rewards.
        </p>
        <p className="second-p">
          **Menu limited. Restricted delivery area. Available in participating
          locations only. Fees subject to change. Prices for Starbucks® items
          purchased through Uber Eats may be higher than posted in stores or as
          marked. See the Uber Eats app for details.
        </p>
      </div>
    </MainContainer>
  );
};

export default Main;
