import { FormControl, InputLabel, OutlinedInput } from '@mui/material'

interface InputLongTextProps {

    htmlFor: string;
    label: string;
    id: string;
    inputLabel: string;

}

const InputLongText: React.FC<InputLongTextProps> = ({ htmlFor, label, id, inputLabel }) => {

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
        width: '48%',
        marginBottom: 2
    };

    return (
        <>
            <FormControl fullWidth variant="outlined" margin="dense">
                <InputLabel htmlFor={htmlFor} sx={{ color: '#54507E' }}>{label}</InputLabel>
                <OutlinedInput
                    id={id}
                    label={label}
                    sx={inputStyle}
                    multiline
                    rows={4}
                    required
                />
            </FormControl>
        </>
    )
}

export default InputLongText