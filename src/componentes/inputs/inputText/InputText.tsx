import { FormControl, InputLabel, OutlinedInput } from '@mui/material'
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

const InputText: React.FC<InputTextProps> = ({ htmlFor, label, id, inputLabel, tamanho, onChange, chave, valor }) => {

    const tamanhoPercent = tamanho+'%';

    const inputStyle = {
        background: '#f4f1f7',
        borderRadius: 2,
        fontSize: 15,
        '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'transparent',
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#bdbdbd',
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#54507E',
            borderWidth: 2,
        },
    };

    const inputBoxStyle = {
        width: tamanhoPercent,
        marginBottom: 2
    };

    return (
        <>
            <FormControl sx={inputBoxStyle} variant="outlined" margin="dense">
                <InputLabel htmlFor={htmlFor} sx={{ color: '#54507E' }}>{label}</InputLabel>
                <OutlinedInput id={id} label={inputLabel} sx={inputStyle} onChange={onChange} key={chave} value={valor} required />
            </FormControl>
        </>
    )
}

export default InputText