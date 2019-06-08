import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset};

    /* 폰트설정
    @import url(//fonts.googleapis.com/earlyaccess/nanumgothic.css);
    @import url(https://cdn.rawgit.com/openhiun/hangul/14c0f6faa2941116bb53001d6a7dcd5e82300c3f/nanumbarungothic.css);
    @import url('https://fonts.googleapis.com/css?family=Roboto+Condensed:300,400,700');
    @import url(https://fonts.googleapis.com/css?family=Roboto:400,700,500);
    @import url('https://fonts.googleapis.com/css?family=Lato:300,400,700,900|Montserrat:300,400,600');
    @import url(http://fonts.googleapis.com/earlyaccess/notosanskr.css);

    @font-face {
    font-family: 'Nanum Gothic';
    font-style: normal;
    font-weight: 400;
    src: url(//fonts.gstatic.com/ea/nanumgothic/v5/NanumGothic-Regular.eot);
    src: url(//fonts.gstatic.com/ea/nanumgothic/v5/NanumGothic-Regular.eot?#iefix) format('embedded-opentype'),
        url(//fonts.gstatic.com/ea/nanumgothic/v5/NanumGothic-Regular.woff2) format('woff2'),
        url(//fonts.gstatic.com/ea/nanumgothic/v5/NanumGothic-Regular.woff) format('woff'),
        url(//fonts.gstatic.com/ea/nanumgothic/v5/NanumGothic-Regular.ttf) format('truetype');
    }
    @font-face {
    font-family: 'Nanum Gothic';
    font-style: normal;
    font-weight: 700;
    src: url(//fonts.gstatic.com/ea/nanumgothic/v5/NanumGothic-Bold.eot);
    src: url(//fonts.gstatic.com/ea/nanumgothic/v5/NanumGothic-Bold.eot?#iefix) format('embedded-opentype'),
        url(//fonts.gstatic.com/ea/nanumgothic/v5/NanumGothic-Bold.woff2) format('woff2'),
        url(//fonts.gstatic.com/ea/nanumgothic/v5/NanumGothic-Bold.woff) format('woff'),
        url(//fonts.gstatic.com/ea/nanumgothic/v5/NanumGothic-Bold.ttf) format('truetype');
    }
    @font-face {
    font-family: 'Nanum Gothic';
    font-style: normal;
    font-weight: 800;
    src: url(//fonts.gstatic.com/ea/nanumgothic/v5/NanumGothic-ExtraBold.eot);
    src: url(//fonts.gstatic.com/ea/nanumgothic/v5/NanumGothic-ExtraBold.eot?#iefix) format('embedded-opentype'),
        url(//fonts.gstatic.com/ea/nanumgothic/v5/NanumGothic-ExtraBold.woff2) format('woff2'),
        url(//fonts.gstatic.com/ea/nanumgothic/v5/NanumGothic-ExtraBold.woff) format('woff'),
        url(//fonts.gstatic.com/ea/nanumgothic/v5/NanumGothic-ExtraBold.ttf) format('truetype');
    }
    @font-face { 
    font-family: 'Noto Sans KR'; 
    font-style: normal; 
    font-weight: 100; 
    src: url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Thin.woff2) format('woff2'), 
        url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Thin.woff) format('woff'), 
        url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Thin.otf) format('opentype'); 
    } 
    @font-face { 
    font-family: 'Noto Sans KR'; 
    font-style: normal; 
    font-weight: 300; 
    src: url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Light.woff2) format('woff2'), 
        url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Light.woff) format('woff'), 
        url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Light.otf) format('opentype'); 
    } 
    @font-face { 
    font-family: 'Noto Sans KR'; 
    font-style: normal; 
    font-weight: 400; 
    src: url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Regular.woff2) format('woff2'), 
            url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Regular.woff) format('woff'), 
            url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Regular.otf) format('opentype'); 
    } 
    @font-face { 
    font-family: 'Noto Sans KR'; 
    font-style: normal; 
    font-weight: 500; 
    src: url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Medium.woff2) format('woff2'), 
            url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Medium.woff) format('woff'), 
            url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Medium.otf) format('opentype'); 
    } 
    @font-face { 
    font-family: 'Noto Sans KR'; 
    font-style: normal; 
    font-weight: 700; 
    src: url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Bold.woff2) format('woff2'), 
            url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Bold.woff) format('woff'), 
            url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Bold.otf) format('opentype'); 
    }
    @font-face { 
    font-family: 'Noto Sans KR'; 
    font-style: normal; 
    font-weight: 900; 
    src: url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Black.woff2) format('woff2'), 
            url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Black.woff) format('woff'), 
            url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Black.otf) format('opentype'); 
    }
    */

    body {
        margin:0;
        padding:0;
        background-color:#fff;
        color:#333;
        font-style:normal;
        font-size: 12px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', 'Nanum Barun Gothic', 'Nanum Gothic', dotum, sans-serif;
        letter-spacing:-0.2px;
    }
    a {
        color: inherit;
        text-decoration: none;
    }
    div, ul, ol, li, dl, dt, dd, form, fieldset, input,textarea, button, p, h1, h2, h3, h4, h5, h6, blockquote, iframe, th, td {
        margin:0;
        padding:0;
        -webkit-text-size-adjust:none;
    }
    img {
        border: 0 none;
        vertical-align:middle;
        max-width:100%;
    }
    li {
        list-style:none;
    }
    button span {
        display:none;
    }
    h1, h2, h3, h4, h5, h6 {
        font-size:100%;
        font-style:normal;
    }
`;

export default globalStyles;
