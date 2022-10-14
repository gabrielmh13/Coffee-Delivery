import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { useContext, useState } from "react";

import { Cart, UserContext } from "../../../../contexts/UserContexts";

import { CardConteiner, CartButton, DescriptionContainer, PriceContainer, PurchaseInfoContainer, Quantity, QuantityButton, QuantityContainer } from "./styles";

interface ProductCardProps {
    id: string
    name: string
    description: string
    price: number
}

export function ProductCard({ id, name, description, price }: ProductCardProps) {
    const [quantityToPurchase, setQuantityToPurchase] = useState(1)

    const { insertProductInCart } = useContext(UserContext)

    function handleIncreaseAmountButton() {
        setQuantityToPurchase(state => state + 1)
    }

    function handleDecreaseAmountButton() {
        if (quantityToPurchase > 1) {
            setQuantityToPurchase(state => state - 1)
        }
    }

    function handleInsertProductInCartButton() {
        const newProduct: Cart = {
            productID: id,
            quantity: quantityToPurchase
        }

        insertProductInCart(newProduct)
    }

    const formattedPrice = price.toFixed(2)

    return (
        <CardConteiner>
            <img src={window.location.origin + `/coffees/${id}.png`} alt="" />

            <DescriptionContainer>
                <h3>{name}</h3>
                <p>{description}</p>
            </DescriptionContainer>

            <PurchaseInfoContainer>
                <PriceContainer>
                    <p>R$ <span>{formattedPrice}</span></p>
                </PriceContainer>

                <QuantityContainer>
                    <Quantity>
                        <QuantityButton onClick={handleDecreaseAmountButton}>
                            <Minus />
                        </QuantityButton>

                        <span>{quantityToPurchase}</span>

                        <QuantityButton onClick={handleIncreaseAmountButton}>
                            <Plus />
                        </QuantityButton>
                    </Quantity>

                    <CartButton onClick={handleInsertProductInCartButton}>
                        <ShoppingCart size={20} weight="fill" />
                    </CartButton>
                </QuantityContainer>
            </PurchaseInfoContainer>
        </CardConteiner>
    )
}