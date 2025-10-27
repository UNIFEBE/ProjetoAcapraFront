import { useLocation } from 'react-router-dom';
import CustomFooter from '../componentes/Footer/Footer';
import Navbar from '../componentes/Navbar/Navbar'
import InputText from '../componentes/inputs/inputText/InputText';
import { Box, Button } from '@mui/material';
import CardPet from '../componentes/CardPet/CardPet';


export default function FormularioAdocao() {

    const { state } = useLocation();
    const { pet } = state || {};

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

                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>

                        <InputText htmlFor={"nome"} label={"Nome Completo"} id={"nome"} inputLabel={"Nome Completo"} tamanho={'48'} />
                        <InputText htmlFor={"cpf"} label={"CPF"} id={"cpf"} inputLabel={"CPF"} tamanho={'48'} />

                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>

                        <InputText htmlFor={"email"} label={"E-mail"} id={"email"} inputLabel={"E-mail"} tamanho={'48'} />
                        <InputText htmlFor={"telefone"} label={"Telefone"} id={"telefone"} inputLabel={"Telefone"} tamanho={'48'} />

                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>

                        <InputText htmlFor={"cep"} label={"CEP"} id={"cep"} inputLabel={"CEP"} tamanho={'48'} />
                        <InputText htmlFor={"tipoResidencia"} label={"Tipo de Residência"} id={"tipoResidencia"} inputLabel={"Tipo de Residência"} tamanho={'48'} />

                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>

                        <InputText htmlFor={"dataNascimento"} label={"Data de Nascimento"} id={"dataNascimento"} inputLabel={"Data de Nascimento"} tamanho={'48'} />
                        <InputText htmlFor={"sexo"} label={"Sexo"} id={"sexo"} inputLabel={"Sexo"} tamanho={'48'} />

                    </Box>


                </Box>
                {/* Imagem do Pet */}
                <Box>
                    <Box>
                        <Box display="flex" justifyContent="center" alignItems="center" height="50%">
                            <CardPet
                            nome={pet.nome}
                            raca={pet.raca}
                            idade={pet.idade}
                            cidade={pet.cidade}
                            bairro={pet.bairro}
                            imagem={pet.imagem}
                            genero={pet.genero}
                        />
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mt: 3 }}>
                            <Button variant="contained" sx={{ backgroundColor: '#f68b1f' }}>ADOTE-ME</Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <CustomFooter />
        </div>
    );
}
