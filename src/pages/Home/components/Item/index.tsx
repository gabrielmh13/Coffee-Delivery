import { Timer, ShoppingCart, Package, Coffee } from 'phosphor-react'
import { IconContainer, ItemContainer } from './styles'

interface ItemProps {
    icon: string
    text: string
}

export function Item({ icon, text }: ItemProps) {
    return (
        <ItemContainer>
            {icon === 'cart' && <IconContainer backgroundColor='yellowDark'><ShoppingCart weight='fill' /></IconContainer>}
            {icon === 'timer' && <IconContainer backgroundColor='yellow'><Timer weight='fill' /></IconContainer>}
            {icon === 'package' && <IconContainer backgroundColor='text'><Package weight='fill' /></IconContainer>}
            {icon === 'coffee' && <IconContainer backgroundColor='purple'><Coffee weight='fill' /></IconContainer>}

            <p>{text}</p>
        </ItemContainer>
    )
}