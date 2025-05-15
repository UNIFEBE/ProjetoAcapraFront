import Navbar from '../componentes/Navbar/Navbar'
import InputText from '../componentes/Inputs/InputText/InputText';
import FormBuilder from '../componentes/FormBuilder/FormBuilder';
import {
    Box,
    Button,
} from '@mui/material';
export default function FormularioAdocao() {

    return (
        <div style={{ paddingTop: '70px' }}>
            <Navbar />

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    padding: 4,
                    backgroundColor: '#fff',
                    borderRadius: 4,
                    margin: 'auto',
                    width: '90%',
                    marginTop: '3%',
                    boxShadow: 3
                }}

            >

                {/* Formulário */}
                <Box sx={{ flex: 1, p: 5 }}>
                
                <FormBuilder/>

                </Box>
            </Box>
        </div>
    );
}
