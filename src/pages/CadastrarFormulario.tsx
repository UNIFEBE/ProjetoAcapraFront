import Navbar from "../componentes/Navbar/Navbar";
import CustomFooter from "../componentes/Footer/Footer";
import { Box } from '@mui/material';
import FormBuilder from "../componentes/FormBuilder/FormBuilder";

export const cadastrarFormulario = () => {

    return (
        <div style={{ paddingTop: '70px', display: "flex", minHeight: '100vh', flexDirection: 'column'}}>
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
                    
                    <FormBuilder />

                </Box>
            </Box>
            <CustomFooter/>
        </div>
    );
}

export default cadastrarFormulario;