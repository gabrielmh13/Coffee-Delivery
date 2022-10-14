import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 2rem;
`

export const ButtonContainer = styled.div`
    display: flex;
    gap: 0.75rem;
`

const BaseButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    width: auto;
    height: 2.3rem;
    padding: 0.5rem;

    border: none;
    border-radius: 6px;

    cursor: pointer;
`

export const LocalizationButton = styled(BaseButton)`
    background: ${props => props.theme["purple-light"]};
    color: ${props => props.theme['purple-dark']};
    gap: 0.5rem;

    svg{
        color: ${props => props.theme.purple};
    }
`

export const CartButton = styled(BaseButton)`
    background: ${props => props.theme["yellow-light"]};

    svg{
        color: ${props => props.theme['yellow-dark']};
    }
`

export const ItemsNumberContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.25rem;
    height: 1.25rem;

    background: ${props => props.theme['yellow-dark']};

    border-radius: 50%;

    position: absolute;
    margin-top: -2rem;
    margin-right: -2rem;

    span {
        color: ${props => props.theme.white};
        font-size: 0.75rem;
        font-weight: bold;
    }
`