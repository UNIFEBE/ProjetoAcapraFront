import React from 'react';
interface InputTextProps {
    htmlFor: string;
    label: string;
    id: string;
    inputLabel: string;
    tamanho: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    valor?: string;
    chave?: number;
}
declare const InputText: React.FC<InputTextProps>;
export default InputText;
