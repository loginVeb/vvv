import { createGlobalStyle } from 'styled-components';

import NameOfYourFontWoff from './nameOfYourFont.woff';
import NameOfYourFontWoff2 from './nameOfYourFont.woff2';
import FonWoff2 from './Fo.woff2';
import FonWoff from './Fo.woff';
import TopSecretWoff2 from './TopSecret.woff2';
import TopSecretWoff from './TopSecret.woff';
import DSMosterWoff2 from './DSMoster.woff2';
import DSMosterWoff from './DSMoster.woff';

export default createGlobalStyle`
    @font-face {
        font-family: 'NameOfYourFontWoff2';
        src: local('NameOfYourFontWoff2'), local('NameOfYourFontWoff2'),
        url(${NameOfYourFontWoff2}) format('woff2'),
        url(${NameOfYourFontWoff}) format('woff');
        font-weight: 300;
        font-style: normal;
    }

    @font-face {
        font-family: 'FonWoff2';
        src: local('FonWoff'), local('FonWoff2'),
        url(${FonWoff2}) format('woff2'),
        url(${FonWoff}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
   
    @font-face {
        font-family: 'TopSecretWoff2';
        src: local('TopSecretWoff'), local('TopSecretWoff2'),
        url(${TopSecretWoff2}) format('woff2'),
        url(${TopSecretWoff}) format('woff');
        font-weight: 300;
        font-style: normal;
    }

    @font-face {
        font-family: 'DSMosterWoff2';
        src: local('DSMosterWoff'), local('DSMosterWoff2'),
        url(${DSMosterWoff2}) format('woff2'),
        url(${DSMosterWoff}) format('woff');
        font-weight: 300;
        font-style: normal;
    }

`;
