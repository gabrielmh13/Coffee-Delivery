import styled from "styled-components";

export const Button = styled.button`
    width: 11.1rem;
    height: 3.18rem;
    
    border: none;
    border-radius: 6px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.96rem;

    font-size: 0.75rem;
    line-height: 160%;
    color: ${props => props.theme.text};
`