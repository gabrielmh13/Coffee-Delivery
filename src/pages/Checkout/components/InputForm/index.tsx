import { Input } from "./styles"

interface InputFormProps {
    placeholder: string
    inputWidth: number
}

export function InputForm({ placeholder, inputWidth }: InputFormProps) {
    return (
        <Input inputWidth={inputWidth} type="text" placeholder={placeholder} />
    )
}