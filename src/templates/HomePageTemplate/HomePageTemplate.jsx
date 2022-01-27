import React from 'react';

import { Hero } from '../../components/Hero';
import { Layout } from '../../components/Layout';

const HomePageTemplate = ({ pageContext: { PageData } }) => (
  <Layout title={PageData.seo.title} description={PageData.seo.description} image={PageData.seo.image}>
    <Hero
      title={PageData.hero.title}
      btnText={PageData.hero.btnText}
      logo={PageData.hero.sponsorLogo}
      background={PageData.hero.backgroundImage}
      downloadFile={PageData.hero.downloadFile}
      btnIcon={PageData.hero.buttonIcon}
    />
  </Layout>
);

export default HomePageTemplate;
