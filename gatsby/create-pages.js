'use strict';

const path = require('path');

const createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const {
    data: {
      site: {
        siteMetadata: { homePage },
      },
    },
  } = await graphql(`
    {
      site {
        siteMetadata {
          name
          description

          homePage {
            seo {
              title
              description
              image
            }
            hero {
              backgroundImage
              sponsorLogo
              buttonIconBlack
              buttonIconWhite
              mobileBackgroundImage
              title
              subtitle
              btnText
              downloadFile
            }
            body {
              bodyTextFirst
              bodyTextSecond
              bodyTextThird
              bodyTextFourth
              bodyTextFifth
              bodyTextSixth
              bodyTextSeventh
              bodyTextEighth
              bodyTextNinth
              bodyTextTenth
              bodyTextEleventh
              bodyTextTwelve
              subTitleFirst
              subTitleSecond
              subTitleThird
              subTitleFourth
              graph {
                image
                alt
              }
              gold {
                image
                alt
              }
              stat {
                image
                alt
              }
              cardFirst
              cardSecond
              navFirst
              navSecond
              cardBtnTextPrev
              cardBtnTextNext
              cardBtnParagraphPrev
              cardBtnParagraphNext
              cardBtnInfoPrev
              cardBtnInfoNext
            }
            text {
              first
            }
          }
        }
      }
    }
  `);

  createPage({
    path: '/',
    component: path.resolve('./src/templates/HomePageTemplate/HomePageTemplate.jsx'),
    context: {
      PageData: homePage,
    },
  });
};

module.exports = createPages;
