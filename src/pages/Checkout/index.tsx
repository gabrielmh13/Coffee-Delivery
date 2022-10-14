import { CurrencyDollar, MapPinLine } from "phosphor-react";
import { MethodButton } from "./components/MethodButton";
import { PaymentForm } from "./components/PaymentForm";
import { CheckoutContainer, ItemsContainer, PaymentContainer, PaymentDetails, PaymentHeaderContainer, PaymentHeaderTextContainer, PaymentMethod, PaymentMethodButtonContainer, PaymentTitle } from "./styles";

export function Checkout() {
    return (
        <CheckoutContainer>
            <PaymentContainer>
                <PaymentTitle>
                    <h3>Complete seu pedido</h3>
                </PaymentTitle>

                <PaymentDetails>
                    <PaymentHeaderContainer>
                        <MapPinLine size={20} />
                        <PaymentHeaderTextContainer>
                            <p>Endereço de entrega</p>
                            <p>Informe o endereço onde deseja receber seu pedido</p>
                        </PaymentHeaderTextContainer>
                    </PaymentHeaderContainer>

                    <PaymentForm />
                </PaymentDetails>

                <PaymentMethod>

                    <PaymentHeaderContainer>
                        <CurrencyDollar size={20} />
                        <PaymentHeaderTextContainer>
                            <p>Pagamento</p>
                            <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                        </PaymentHeaderTextContainer>
                    </PaymentHeaderContainer>

                    <PaymentMethodButtonContainer>
                        <MethodButton text="CARTÃO DE CRÉDITO" />
                        <MethodButton text="CARTÃO DE DÉBITO" />
                        <MethodButton text="DINHEIRO" />
                    </PaymentMethodButtonContainer>

                </PaymentMethod>
            </PaymentContainer>

            <ItemsContainer>
                <PaymentTitle>
                    <h3>Cafés Selecionados</h3>
                </PaymentTitle>
            </ItemsContainer>
        </CheckoutContainer>
    )
}