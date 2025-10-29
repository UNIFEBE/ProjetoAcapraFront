import Navbar from "../componentes/Navbar/Navbar";
import CustomFooter from "../componentes/Footer/Footer";
import InputText from "../componentes/inputs/inputText/InputText";

import {
    Box,
    Button,
    Switch,
    FormControlLabel,
    Typography
} from '@mui/material';
import { useState } from 'react';

export const CadastrarVoluntario = () => {
    
    const [admin, setAdmin] = useState(false);
    const [imagemPet, setImagemPet] = useState<string | null>(null);

    const handleImagemChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagemPet(reader.result as string);
            };
            reader.readAsDataURL(file); // transforma a imagem em uma URL temporária
        }
    };



    return (
        <div style={{ paddingTop: '70px', display: "flex", minHeight: '100vh', flexDirection: 'column' }}>
            <Navbar />

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    padding: 4,
                    backgroundColor: '#fff',
                    borderRadius: 4,
                    margin: 'auto',
                    width: '90%',
                    marginTop: '3%',
                    boxShadow: 3

                }}

            >
                <InputText htmlFor="pesquisarVoluntario" id="pesquisarVoluntario" label="Pesquisar Voluntário" inputLabel="Pesquisar Voluntário" tamanho="100"/>
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    padding: 4,
                    backgroundColor: '#fff',
                    borderRadius: 4,
                    margin: 'auto',
                    width: '90%',
                    marginTop: '3%',
                    boxShadow: 3

                }}

            >
                {/* Imagem do Pet */}
                <Box
                    sx={{
                        width: 250,
                        height: 350,
                        backgroundColor: '#f4f4f4',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 2,
                        boxShadow: 1,
                        mr: 5,
                        position: 'relative',
                        overflow: 'hidden'
                    }}
                >
                    {imagemPet ? (
                        <img
                            src={imagemPet}
                            alt="Imagem do Pet"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                borderRadius: '8px'
                            }}
                        />
                    ) : (
                        <Typography variant="body1" align="center">Imagem de Perfil</Typography>
                    )}

                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImagemChange}
                        style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            opacity: 0,
                            cursor: 'pointer'
                        }}
                    />
                </Box>

                {/* Formulário */}
                <Box sx={{ flex: 1, }}>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>

                        <InputText htmlFor={"nome"} label={"Nome"} id={"nome"} inputLabel={"Nome"} tamanho={'48'} />
                        <InputText htmlFor={"email"} label={"E-mail"} id={"email"} inputLabel={"E-mail"} tamanho={'48'} />

                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>

                        <InputText htmlFor={"senha"} label={"Senha"} id={"senha"} inputLabel={"Senha"} tamanho={'48'} />
                        <InputText htmlFor={"confirmacaoSenha"} label={"Confirmação de Senha"} id={"confirmacaoSenha"} inputLabel={"Confirmação de Senha"} tamanho={'48'} />

                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'end', mt: 2 }}>
                        <FormControlLabel
                            control={<Switch checked={admin} onChange={() => setAdmin(!admin)} />}
                            label="É Administrador?"
                        />
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mt: 3 }}>
                        <Button variant="contained" sx={{ background: '#5a4b81' }}>EDITAR</Button>
                        <Button variant="contained" sx={{ background: 'red' }} href="/">CANCELAR</Button>
                        <Button variant="contained" sx={{ backgroundColor: 'green' }}>SALVAR</Button>
                    </Box>
                </Box>
            </Box>
            <CustomFooter />
        </div>
    );
}

export default CadastrarVoluntario;