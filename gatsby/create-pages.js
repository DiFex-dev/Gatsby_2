'use strict';

const path = require('path');

const createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const {
    data: {
      site: {
        siteMetadata: { homePage, secondPage, thirdPage },
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
              mobileArrowFirst
              mobileArrowSecond
              quoteText {
                quoteText
                quoteAuthor
              }
              menu {
                btnIcon
                btnText
                linkTextFirst
                linkTextSecond
                linkTextThird
                articleName
                articleInfo
              }
            }
            text {
              first
            }
          }
          secondPage {
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
              mobileArrowFirst
              mobileArrowSecond
              quoteText {
                quoteText
                quoteAuthor
              }
              menu {
                btnIcon
                btnText
                linkTextFirst
                linkTextSecond
                linkTextThird
                articleName
                articleInfo
              }
            }
            text {
              first
            }
          }
          thirdPage {
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
              mobileArrowFirst
              mobileArrowSecond
              quoteText {
                quoteText
                quoteAuthor
              }
              menu {
                btnIcon
                btnText
                linkTextFirst
                linkTextSecond
                linkTextThird
                articleName
                articleInfo
              }
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
  createPage({
    path: '/gold-demand-trends/',
    component: path.resolve('./src/templates/HomePageTemplate/HomePageTemplate.jsx'),
    context: {
      PageData: secondPage,
    },
  });
  createPage({
    path: '/gold-market-commentary/',
    component: path.resolve('./src/templates/HomePageTemplate/HomePageTemplate.jsx'),
    context: {
      PageData: thirdPage,
    },
  });
};

module.exports = createPages;
