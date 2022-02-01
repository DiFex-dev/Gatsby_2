import React from 'react';

import { BodyText } from '../../components/BodyText';
import { DownloadBtn } from '../../components/DownloadBtn';
import { Hero } from '../../components/Hero';
import { Image } from '../../components/Image';
import { Layout } from '../../components/Layout';
import { Navigation } from '../../components/Navigation';
import { Quote } from '../../components/Quote';
import styles from './HomePageTemplate.styles';

const HomePageTemplate = ({ pageContext: { PageData } }) => {
  const { hero, seo, body } = PageData;
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
    graph: { image: graphImage, alt: graphAlt },
    gold: { image: goldImage, alt: goldAlt },
    stat: { image: statImage, alt: statAlt },
    quoteTextFirst,
    quoteAuthor,
    cardFirst,
    cardSecond,
    navFirst,
    navSecond,
    cardBtnParagraphPrev,
    cardBtnParagraphNext,
    cardBtnInfoPrev,
    cardBtnInfoNext,
  } = body;

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
              <Quote quoteText={quoteTextFirst} quoteAuthor={quoteAuthor} />
              <BodyText textFirst={bodyTextTwelve} />
              <DownloadBtn downloadFile={downloadFile} btnText={btnText} btnIcon={buttonIconWhite} isDark={true} />
            </div>
          </div>
        </div>
        <Navigation
          cardFirst={cardFirst}
          cardSecond={cardSecond}
          navFirst={navFirst}
          navSecond={navSecond}
          cardBtnParagraphPrev={cardBtnParagraphPrev}
          cardBtnParagraphNext={cardBtnParagraphNext}
          cardBtnInfoPrev={cardBtnInfoPrev}
          cardBtnInfoNext={cardBtnInfoNext}
        />
      </div>
    </Layout>
  );
};

export default HomePageTemplate;
