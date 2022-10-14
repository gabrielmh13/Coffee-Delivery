import styled from "styled-components";

interface InputProps {
    inputWidth: number
}

export const Input = styled.input<InputProps>`
    width: ${props => String(props.inputWidth) + '%'};
    height: 2.625rem;
    border: 1px solid ${props => props.theme.button};
    border-radius: 4px;

    background: ${props => props.theme.input};

    padding: 0.75rem;

    font-size: 0.875rem;
    color: ${props => props.theme.text};

    &::placeholder{
        color: ${props => props.theme.label};
    }

    &:focus {
        border: 1px solid ${props => props.theme['yellow-dark']};
    }
`