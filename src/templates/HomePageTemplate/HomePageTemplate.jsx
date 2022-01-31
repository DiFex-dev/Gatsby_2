import React from 'react';

import { BodyText } from '../../components/BodyText';
import DownloadBtn from '../../components/DownloadBtn/DownloadBtn';
import { Hero } from '../../components/Hero';
import { Image } from '../../components/Image';
import { Layout } from '../../components/Layout';
import styles from './HomePageTemplate.styles';

const HomePageTemplate = ({ pageContext: { PageData } }) => {
  const { hero, seo, body, graph, gold, stat } = PageData;
  const { title, btnText, sponsorLogo, backgroundImage, downloadFile, buttonIconBlack, buttonIconWhite } = hero;
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
  } = body;
  const { image: graphImage, alt: graphAlt } = graph;
  const { image: goldImage, alt: goldAlt } = gold;
  const { image: statImage, alt: statAlt } = stat;

  return (
    <Layout title={seoTitle} description={description} image={image}>
      <Hero
        title={title}
        btnText={btnText}
        logo={sponsorLogo}
        background={backgroundImage}
        downloadFile={downloadFile}
        btnIcon={buttonIconBlack}
      />
      <div css={styles}>
        <div className="main-section">
          <div className="mainSection-wrapper">
            <div className="menu-container">
              <p>MENUfgdsfgfsdgdsfgfdgfdsgfsdgfsgsfdgfdsgfdgfsdgfdgfsdgsfd</p>
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
              <BodyText textFirst={bodyTextTwelve} />
              <DownloadBtn downloadFile={downloadFile} btnText={btnText} btnIcon={buttonIconWhite} propsDark={true}/>
            </div>
          </div>
        </div>
        <div className="cardContent">
          <div className="cardContent-container">
            <div className="cardNav"></div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePageTemplate;
