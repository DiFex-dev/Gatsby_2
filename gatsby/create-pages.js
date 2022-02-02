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
              mobileBackgroundImage
              title
              subtitle
              downloadBtn {
                downloadFile
                btnText
                btnIcon
              }
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
              downloadBtn {
                downloadFile
                btnText
                btnIcon
              }
              cardNav {
                cardPrev {
                  image
                  arrow
                  title
                  description
                }
                cardNext {
                  image
                  arrow
                  title
                  description
                }
              }
              quoteText {
                quoteText
                quoteAuthor
              }
              menuIcon
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
