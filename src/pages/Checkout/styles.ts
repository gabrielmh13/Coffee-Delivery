import styled from "styled-components";

export const CheckoutContainer = styled.form`
    display: flex;
    gap: 2rem;
    margin-top: 4.5rem;
`

export const PaymentContainer = styled.div`
    width: 60%;
    height: 23.25rem;
`

export const PaymentTitle = styled.div`
    margin-bottom: 0.9rem;

    h3 {
        font-size: 1.125rem;
        font-weight: bold;
        line-height: 130%;
        color: ${props => props.theme.subtitle};
    }
`

export const PaymentHeaderContainer = styled.div`
    display: flex;
    gap: 0.715rem;
`

export const PaymentHeaderTextContainer = styled.div`
    margin-bottom: 2rem;

    p:first-child{
        color: ${props => props.theme.subtitle};
        line-height: 130%;
    }
    p:last-child {
        color: ${props => props.theme.text};
        font-size: 0.875rem;
        line-height: 130%;
    }
`

export const PaymentDetails = styled.div`
    width: 100%;
    height: 100%;
    background: ${props => props.theme['card']};

    border-radius: 6px;

    padding: 2.5rem;
    margin-bottom: 0.75rem;

    svg {
        color: ${props => props.theme['yellow-dark']};
    }
`


export const PaymentMethod = styled.div`
    width: 100%;
    height: 12.9rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    background: ${props => props.theme['card']};

    padding: 2.5rem;

    svg {
        color: ${props => props.theme.purple};
    }
`

export const PaymentMethodButtonContainer = styled.div`
    display: flex;
    align-self: center;
    gap: 0.75rem;
`

export const ItemsContainer = styled.div`
    width: 30%;
`