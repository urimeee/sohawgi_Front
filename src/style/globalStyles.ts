import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Pretendard';
        src: url('/fonts/PretendardVariable.woff2') format('woff2');
        font-weight: 100 900;
        font-display: swap;
    }

    html, body {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        overflow: auto; /* 스크롤 가능 */
        background-color: ${({ theme }) => theme.colors.Grey_01};
        font-family: 'Pretendard', 'sans-serif';
    }

    /* Webkit 기반 브라우저에서 스크롤바를 숨김 */
    ::-webkit-scrollbar {
        display: none;
    }

    /* Firefox에서 스크롤바 숨기기 */
    body {
        scrollbar-width: none; /* Firefox 전용 */
    }

    body {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #root {
        width: 100%;
        height: 100%;
    }
`;

export default GlobalStyle;
