import styled from "styled-components";

export const ItemContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
`

const BACKGROUND_COLORS = {
    yellow: 'yellow',
    yellowDark: 'yellow-dark',
    purple: 'purple',
    text: 'text'
} as const

interface BackgroundProps {
    backgroundColor: keyof typeof BACKGROUND_COLORS
}

export const IconContainer = styled.div<BackgroundProps>`
    width: 2rem;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50%;

    background: ${props => props.theme[BACKGROUND_COLORS[props.backgroundColor]]};

    svg{
        color: ${props => props.theme.white}
    }
`