import styled from "styled-components";

export const HomeContainer = styled.div`
    padding: 5.6rem 0;
`
export const IntroContainer = styled.div`
    height: auto;
    width: 100;
    display: flex;
    justify-content: space-between;
    background-size: cover;
`

export const TextContainer = styled.div`
    width: 54%;
`

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h1 {
        font-family: 'Baloo 2', sans-serif;
        font-weight: 800;
        font-size: 3rem;
        line-height: 130%;
        color: ${props => props.theme.title};
    }

    p {
        font-size: 1.25rem;
        line-height: 130%;
        color: ${props => props.theme['subtitle']};
    }
`

export const ItemsContainer = styled.div`
    margin-top: 4.12rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
`

export const ProductsInfoContainer = styled.main`
    margin-top: 12.4rem;

    h2 {
        font-family: 'Baloo 2', cursive;
        font-weight: 800;
        line-height: 130%;
        font-size: 2rem;
    }
`

export const ListContainer = styled.div`
    margin-top: 3.37rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 2rem;
`