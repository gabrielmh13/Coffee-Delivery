import styled from "styled-components";

export const CardConteiner = styled.div`
    width: 16rem;
    height: 19.3rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    background: ${props => props.theme['card']};

    border-radius: 6px 36px;

    img {
        width: 7.5rem;
        margin-top: -1.5rem;
    }
`

export const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;

    margin-top: 3rem;
    padding: 0 1.25rem;

    text-align: center;

    h3 {
        font-family: 'Baloo 2', cursive;
        font-size: 1.25rem;
        line-height: 130%;
        color: ${props => props.theme['subtitle']};
    }

    p {
        font-size: 0.8rem;
        line-height: 130%;
        color: ${props => props.theme['label']};
    }
`

export const PurchaseInfoContainer = styled.div`
    width: 81%;
    margin-top: 2.06rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 1.4rem;
`

export const PriceContainer = styled.div`
    line-height: 130%;

    p{
        font-size: 0.875rem;
    }

    span {
        font-family: 'Baloo 2', cursive;
        font-size: 1.5rem;
        font-weight: 800;
        color: ${props => props.theme.text};
    }
`

export const QuantityContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`

export const Quantity = styled.div`
    width: 4.5rem;
    height: 2.3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 0.5rem;

    background: ${props => props.theme.button};

    border-radius: 6px;
    line-height: 130%;
`

export const QuantityButton = styled.button`
    border: none;
    background: transparent;
    margin-top: 0.3rem;

    color: ${props => props.theme.purple};

    cursor: pointer;

    &:hover {
        color: ${props => props.theme['purple-dark']};
    }
`

export const CartButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 2.3rem;
    height: 2.3rem;

    background: ${props => props.theme['purple-dark']};
    border: none;
    border-radius: 6px;
    
    color: ${props => props.theme.card};

    cursor: pointer;

    transition: 0.5;

    &:hover {
        background: ${props => props.theme['purple']};
    }
`