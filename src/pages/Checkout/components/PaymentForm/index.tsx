import { InputForm } from "../InputForm";
import { AddressContainer, FormContainer } from "./styles";

export function PaymentForm() {
    return (
        <FormContainer>
            <InputForm placeholder="CEP" inputWidth={35} />
            <InputForm placeholder="Rua" inputWidth={100} />

            <AddressContainer>
                <InputForm placeholder="Número" inputWidth={35} />
                <InputForm placeholder="Complemento" inputWidth={65} />
            </AddressContainer>

            <AddressContainer>
                <InputForm placeholder="Bairro" inputWidth={36} />
                <InputForm placeholder="Cidade" inputWidth={54} />
                <InputForm placeholder="UF" inputWidth={10} />
            </AddressContainer>
        </FormContainer>
    )
}