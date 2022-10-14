import { MapPin, ShoppingCart } from 'phosphor-react'

import { ButtonContainer, CartButton, HeaderContainer, ItemsNumberContainer, LocalizationButton } from "./styles";
import logo from '../../assets/logo.png'
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContexts';
import { NavLink } from 'react-router-dom';

export function Header() {
    const { userLocation, cartProducts } = useContext(UserContext)

    const numberOfItems = cartProducts.reduce((initialValue, nextValue) => {
        return initialValue + nextValue.quantity
    }, 0)

    return (
        <HeaderContainer>
            <img src={logo} alt="" />

            <ButtonContainer>
                <LocalizationButton>
                    <MapPin size={21} weight='fill' />{userLocation}
                </LocalizationButton>
                <CartButton>
                    <NavLink to="/checkout" title='checkout'>
                        <ShoppingCart size={21} weight='fill' />
                    </NavLink>
                    {
                        numberOfItems > 0 &&
                        <ItemsNumberContainer>
                            <span>{numberOfItems}</span>
                        </ItemsNumberContainer>
                    }
                </CartButton>
            </ButtonContainer>
        </HeaderContainer>
    )
}