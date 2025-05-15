import Navbar from '../componentes/Navbar/Navbar'
import InputText from '../componentes/Inputs/inputText/InputText';
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

                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>

                        <InputText htmlFor={"nome"} label={"Nome Completo"} id={"nome"} inputLabel={"Nome Completo"} />
                        <InputText htmlFor={"cpf"} label={"CPF"} id={"cpf"} inputLabel={"CPF"} />

                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>

                        <InputText htmlFor={"email"} label={"E-mail"} id={"email"} inputLabel={"E-mail"} />
                        <InputText htmlFor={"telefone"} label={"Telefone"} id={"telefone"} inputLabel={"Telefone"} />

                    </Box>
s
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>

                        <InputText htmlFor={"cep"} label={"CEP"} id={"cep"} inputLabel={"CEP"} />
                        <InputText htmlFor={"tipoResidencia"} label={"Tipo de Residência"} id={"tipoResidencia"} inputLabel={"Tipo de Residência"} />

                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>

                        <InputText htmlFor={"dataNascimento"} label={"Data de Nascimento"} id={"dataNascimento"} inputLabel={"Data de Nascimento"} />
                        <InputText htmlFor={"sexo"} label={"Sexo"} id={"sexo"} inputLabel={"Sexo"} />

                    </Box>


                </Box>
                {/* Imagem do Pet */}
                <Box>
                    <Box>
                        <Box display="flex" justifyContent="center" alignItems="center" height="50%">
                            <img
                                src="https://images.dog.ceo/breeds/retriever-golden/n02099601_3007.jpg"
                                alt="Pet para adoção"
                                style={{ width: '100%', borderRadius: 8 }}
                            />

                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mt: 3 }}>
                            <Button variant="contained" sx={{ backgroundColor: '#f68b1f' }}>ADOTE-ME</Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </div>
    );
}
