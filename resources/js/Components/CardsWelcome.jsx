import styled from "styled-components";

export default function CardsWelcome({ texto, destaque }) {
    return (
        <ConteinerCards>
            <TextoCards>{texto}</TextoCards>
            <TextoDestaque>{destaque}</TextoDestaque>
        </ConteinerCards>
    );
}

const breakpoints = {
    mobileS: "320px",
    mobileM: "375px",
    mobileL: "429px",
    tablet: "768px",
    laptop: "1024px",
    desktop: "1700px",
};
const ConteinerCards = styled.div`
    min-width: 210px;
    width: 220px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    min-height: 190px;
    align-items: center;
    margin-top: 10%;
    gap: 8px;
    padding: 16px;
    border-radius: 18px;
    @media (min-width: ${breakpoints.desktop}) {
        min-width: 250px;
        width: 250px;
        padding: 24px;
        min-height: 230px;
        gap: 12px;
    }

    @media (max-width: ${breakpoints.tablet}) {
        min-width: 180px;
        width: 180px;
    }

    @media (max-width: ${breakpoints.mobileM}) {
        min-width: 150px;
        width: 150px;
        padding: 12px;
        min-height: 150px;
    }
`;

const TextoCards = styled.p`
    font-size: 24px;
    font-weight: 300;
    width: 270px;
    color: #f3fbf6;
    text-align: center;

    @media (max-width: ${breakpoints.mobileL}) {
        font-size: 14px;
    }

    @media (max-width: ${breakpoints.mobileS}) {
        font-size: 12px;
    }
`;

const TextoDestaque = styled.h3`
    font-size: 32px;
    font-weight: bold;
    color: #4ebaf5;
    text-align: center;

    @media (max-width: ${breakpoints.mobileL}) {
        font-size: 24px;
    }

    @media (max-width: ${breakpoints.mobileS}) {
        font-size: 20px;
    }
`;
