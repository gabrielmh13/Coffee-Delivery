import { createContext, ReactNode, useState } from "react";

export interface Cart {
    productID: string
    quantity: number
}

interface UserContextType {
    userLocation: string
    cartProducts: Cart[]
    insertProductInCart: (product: Cart) => void
}

export const UserContext = createContext({} as UserContextType)

interface UserContextProviderProps {
    children: ReactNode
}

export function UserContextProvider({ children }: UserContextProviderProps) {
    const [userLocation, setUserLocation] = useState('')
    const [cartProducts, setCartProducts] = useState<Cart[]>([])

    function insertProductInCart(product: Cart) {
        const productIndex = cartProducts.findIndex(cartProduct => cartProduct.productID === product.productID)

        if (productIndex >= 0) {
            let newCartProducts = [...cartProducts]
            newCartProducts[productIndex].quantity = newCartProducts[productIndex].quantity + product.quantity

            setCartProducts(newCartProducts)
        }
        else {
            setCartProducts(state => {
                return [...state, product]
            })
        }
    }

    return (
        <UserContext.Provider value={{ userLocation, cartProducts, insertProductInCart }}>
            {children}
        </UserContext.Provider>
    )
}