import { IntroContainer, HomeContainer, ItemsContainer, TextContainer, TitleContainer, ListContainer, ProductsInfoContainer } from "./styles";
import bigCoffe from '../../assets/big-coffee.png'

import { Item } from "./components/Item";
import { useContext } from "react";
import { ProductContext } from "../../contexts/ProductContexts";
import { ProductCard } from "./components/ProductCard";

export function Home() {
    const { products } = useContext(ProductContext)

    return (
        <HomeContainer>
            <IntroContainer>
                <TextContainer>
                    <TitleContainer>
                        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                        <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                    </TitleContainer>

                    <ItemsContainer>
                        <Item text="Compra simples e segura" icon="cart" />
                        <Item text="Embalagem mantém o café intacto" icon="package" />
                        <Item text="Entrega rápida e rastreada" icon="timer" />
                        <Item text="O café chega fresquinho até você" icon="coffee" />
                    </ItemsContainer>
                </TextContainer>
                <div>
                    <img src={bigCoffe} alt="" />
                </div>
            </IntroContainer>

            <ProductsInfoContainer>
                <h2>Nossos cafés</h2>

                <ListContainer>
                    {products.map((product) => {
                        return <ProductCard key={product.id} id={product.id} name={product.name} description={product.description} price={product.price} />
                    })}
                </ListContainer>
            </ProductsInfoContainer>
        </HomeContainer>
    )
}