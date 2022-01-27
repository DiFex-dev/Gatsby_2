import ScrollDepth from '@economist/fabric-components/utility/ScrollDepthTracker/ScrollDepth';
import UtilWebVitals from '@economist/fabric-components/utility/utilwebvitals/UtilWebVitals';
import React, { useEffect } from 'react';

import { appendAdditionalScripts } from '../../utils/utils/cookiesConsent';
import { PreloadStatic } from '../PreloadStatic';
import { Seo } from '../Seo';
import styles from './Layout.styles';

import '../../styles/normalize.css';
import '../../fonts/fonts.css';
import HeadImpact from "@economist/fabric-components/header/headimpact/HeadImpact";
import HeadAdvImpact from "@economist/fabric-components/header/headadvimpact/HeadAdvImpact";
import FootEconSec from "@economist/fabric-components/footer/footeconsec/FootEconSec";
import {hero} from "../../../content/home";

/**
 * @param children - used as content for layout
 * @param title - used as property for Seo component
 * @param description - used as property for Seo component
 * @param image - used as property for Seo component
 * @returns {JSX.Element}
 * @constructor
 */

const sponsorsList = [
  {
    sponsorLogo: hero.sponsorLogo,
    sponsorName: 'Desktop Logo',
    sponsorLink: 'https://www.economist.com/'
  },
];

const Layout = ({ children, title, description, image }) => {
  useEffect(() => {
    const [script, script2] = appendAdditionalScripts();

    return () => {
      document.body.removeChild(script);
      document.body.removeChild(script2);
    };
  }, []);

  return (
    <>
      <UtilWebVitals />
      <ScrollDepth />
      <Seo title={title} description={description} image={image} />
      <PreloadStatic />
      <div css={styles}>
        <div className="header-wrapper">
          <HeadImpact HorizontalRule={false} />
        </div>
        <div className="headAdvImpact-wrapper">
          <HeadAdvImpact sponsors={sponsorsList}/>
        </div>
        <main>{children}</main>
        <div className="footer-wrapper">
          <FootEconSec />
        </div>
      </div>
    </>
  );
};

export default Layout;
