import React from 'react';

import { BodyText } from '../../components/BodyText';
import { DownloadBtn } from '../../components/DownloadBtn';
import { Hero } from '../../components/Hero';
import { Image } from '../../components/Image';
import { Layout } from '../../components/Layout';
import { Menu } from '../../components/Menu';
import { Navigation } from '../../components/Navigation';
import { Quote } from '../../components/Quote';
import styles from './HomePageTemplate.styles';

const HomePageTemplate = ({ pageContext: { PageData } }) => {
  const { hero, seo, body } = PageData;
  const { title, sponsorLogo, backgroundImage, downloadBtn: goldBtn } = hero;
  const { title: seoTitle, description, image } = seo;
  const {
    bodyTextFirst,
    bodyTextSecond,
    bodyTextThird,
    bodyTextFourth,
    bodyTextFifth,
    bodyTextSixth,
    bodyTextSeventh,
    bodyTextEighth,
    bodyTextNinth,
    bodyTextTenth,
    bodyTextEleventh,
    bodyTextTwelve,
    subTitleFirst,
    subTitleSecond,
    subTitleThird,
    subTitleFourth,
    graph: { image: graphImage, alt: graphAlt },
    gold: { image: goldImage, alt: goldAlt },
    stat: { image: statImage, alt: statAlt },
    downloadBtn: blackBtn,
    cardNav,
    mobileArrowFirst,
    mobileArrowSecond,
    quoteText,
    menu,
  } = body;

  return (
    <Layout title={seoTitle} description={description} image={image}>
      <Hero title={title} logo={sponsorLogo} background={backgroundImage} goldBtn={goldBtn} />
      <div css={styles}>
        <div className="main-section">
          <div className="mainSection-wrapper">
            <div className="menu-container">
              <Menu data={menu} />
            </div>
            <div className="content-container">
              <BodyText textFirst={bodyTextFirst} textSecond={bodyTextSecond} />
              <BodyText subtitle={subTitleFirst} textFirst={bodyTextThird} textSecond={bodyTextFourth} />
              <Image image={statImage} alt={statAlt} />
              <BodyText textFirst={bodyTextFifth} />
              <BodyText subtitle={subTitleSecond} textFirst={bodyTextSixth} textSecond={bodyTextSeventh} />
              <Image image={goldImage} alt={goldAlt} />
              <BodyText subtitle={subTitleThird} textFirst={bodyTextEighth} textSecond={bodyTextNinth} />
              <Image image={graphImage} alt={graphAlt} />
              <BodyText textFirst={bodyTextTenth} />
              <BodyText subtitle={subTitleFourth} textFirst={bodyTextEleventh} />
              <Quote data={quoteText} />
              <BodyText textFirst={bodyTextTwelve} />
              <div className="btn-dark">
                <DownloadBtn data={blackBtn} isDark={true} />
              </div>
            </div>
          </div>
        </div>
        <Navigation data={cardNav} mobileArrowFirst={mobileArrowFirst} mobileArrowSecond={mobileArrowSecond} />
      </div>
    </Layout>
  );
};

export default HomePageTemplate;
