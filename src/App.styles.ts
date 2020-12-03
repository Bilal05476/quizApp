import styled, {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html{
        height: 100%
    }
    body{
        background: linear-gradient(#403B4A, #e7e9bb); 
        margin: 0;
        padding 0 20px;
        display: fles;
        justigy-content: center;
    }
    *{
        box-sizing: border-box;
        font-family: 'Catamaran', sans-serif;
    }

`;
export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    > p {
        color: #fff;
    }
    .score {
        color: gold;
        font-size: 2rem;
        margin: 0;
    }
    h1{
        font-family: Fascinate Inline, Haettenschweiller, 'Arial Narrow Bold', sans-serif;
        color: linear-gradient(#003973, #E5E5BE);
        background-size: 100%;
        background-clip: text;
        filter: drop-shadow(2px 2px #0085a3);
        font-size: 70px;
        text-align: center;
        margin: 20px;
        font-weight: 400;

    }
    .start, .next{
        cursor: pointer;
        background: linear-gradient(#3D7EAA, #bfe9ff);
        border-radius: 10px;
        height: 40px;
        margin: 20px 0;
        padding: 0 40px;
        font-weight: bold;
    }
    .start:hover, .next:hover{
        background: linear-gradient(#bfe9ff, 
            #56B4D3 );
        transition: .5s;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
        padding: 0px 42px;
    }
    .start{
        max-width: 200px;
    }
`;