import { Box } from '@mui/material';
import { Check, Close, GenderFemale, GenderMale } from 'mdi-material-ui';

interface CardInfoPetProps {
    titulo: string;
    valor: string;
    tipo: 'idade' | 'sexoM' | 'sexoF' | 'castrado' | 'vacinado';
}

const CardInfoPet: React.FC<CardInfoPetProps> = ({ titulo, valor, tipo }) => {
    const backgroundColors: Record<typeof tipo, string> = {
        idade: '#E05E4C',
        sexoM: '#2C4A86',
        sexoF: '#D5006D',
        castrado: '#E0A917',
        vacinado: '#2E7D32',
    };

    const renderValor = () => {
        if (tipo === 'castrado' || tipo === 'vacinado') {
            return valor.toLowerCase() === 'sim' ? <Check fontSize="large" /> : <Close fontSize="large" />;
        }
        if (tipo === 'sexoM') {
            return <GenderMale fontSize="large" />;
        }
        if (tipo === 'sexoF') {
            return <GenderFemale fontSize="large" />;
        }
        return valor;
    };

    return (
        <Box
            sx={{
                padding: 2,
                borderRadius: 2,
                backgroundColor: backgroundColors[tipo],
                boxShadow: 3,
                color: 'white',
                width: 80,
                height: 80,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Box
                sx={{
                    fontSize: 12,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    lineHeight: 1.2,
                }}
            >
                {titulo}
            </Box>
            <Box sx={{ fontSize: 18, mt: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {renderValor()}
            </Box>
        </Box>
    );
};

export default CardInfoPet;
