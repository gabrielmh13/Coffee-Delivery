import { Bank, CreditCard, Money } from 'phosphor-react'

import { Button } from "./styles";

interface MethodButtonProps {
    text: string
}

export function MethodButton({ text }: MethodButtonProps) {
    return (
        <Button>
            {text === 'CARTÃO DE CRÉDITO' && <CreditCard size={15} />}
            {text === 'CARTÃO DE DÉBITO' && <CreditCard size={15} />}
            {text === 'DINHEIRO' && <CreditCard size={15} />}
            {text}
        </Button>
    )
}