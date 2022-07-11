import styled from "styled-components"

export const GlobalContainer = styled.section`
    width: 100%;
    height: 100%;
    background-image:url("https://previews.123rf.com/images/jagcz/jagcz1702/jagcz170200134/72504512-comida-asi%C3%A1tica-servido-en-blanco-mesa-de-madera-vista-desde-arriba-el-espacio-para-el-texto-juego-d.jpg");
    background-repeat:no-repeat;
    background-size: 100% 100%;
    background-attachment: fixed;
`

export const TitleMainContainer = styled.section`
    color: ${({theme}) => theme.text.highContrast};
    font-family: 'Lobster';
    font-size: 3rem;
    height: 10%;
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 50px; border-bottom: 2px solid grey;
`

export const TablesContainer = styled.section`
    height: 90%;
    display: flex;
`

export const ShopContainer = styled.div`
    width: 60%;
    display: flex;
    overflow-y: auto;
    div {
        margin: auto;
        margin-right: 0;
        width: 90%;
        background-color: #aaa;
        div {
            width: 100%;
        }
    }
`

export const Header = styled.div`
    display: flex;
    width: 100%;
    font-size: 20px; 

    div {
        background-color: ${({theme}) => theme.colors.bgPage};
        text-align: center;
        color: ${({theme})=>theme.text.highContrast};
    }
    #product {
        width: 40%;
    }
    #quantity {
        width: 20%;
    }
    #price {
        width: 20%;
    }
    #total {
        width: 20%;
    }
`
export const Footer = styled.div``

export const OrderContainer = styled.div`
    width: 40%;
    display: flex;
`

export const OrderRealContainer = styled.div`
    border: 4px solid ${({theme})=>theme.colors.main};
    width: 60%;
    height: 80%;
    margin: auto;
    border-radius: 3rem;
    background-color: gray;
    display: flex;
`
