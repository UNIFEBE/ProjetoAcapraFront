import Navbar from "../componentes/Navbar/Navbar";
import CustomFooter from "../componentes/Footer/Footer";
import InputText from "../componentes/inputs/inputText/InputText";
import InputLongText from "../componentes/inputs/inputText/InputLongText";
import {
    Box,
    Button,
    Switch,
    FormControlLabel,
    Typography
} from '@mui/material';
import { useState } from 'react';

export const CadastrarAnimal = () => {
    
    const [vacinado, setVacinado] = useState(false);
    const [castrado, setCastrado] = useState(false);
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
                <InputText htmlFor="pesquisarPet" id="pesquisarPet" label="Pesquisar Pet" inputLabel="Pesquisar Pet" tamanho="100"/>
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
                        <Typography variant="body1" align="center">Imagem do pet</Typography>
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

                        <InputText htmlFor={"animal"} label={"Nome do Pet"} id={"animal"} inputLabel={"Nome do Pet"} tamanho={'48'} />
                        <InputText htmlFor={"sexo"} label={"Sexo"} id={"sexo"} inputLabel={"Sexo"} tamanho={'48'} />

                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>

                        <InputText htmlFor={"raca"} label={"Raça"} id={"raca"} inputLabel={"Raça"} tamanho={'48'} />
                        <InputText htmlFor={"nascimento"} label={"Data de Nascimento"} id={"nascimento"} inputLabel={"Data de Nascimento"} tamanho={'48'} />

                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>

                        <InputText htmlFor={"pelagem"} label={"Pelagem"} id={"pelagem"} inputLabel={"Pelagem"} tamanho={'48'} />
                        <InputText htmlFor={"responsavel"} label={"Nome do Responsável"} id={"responsavel"} inputLabel={"Nome do Responsável"} tamanho={'48'} />

                    </Box>

                    <InputLongText htmlFor={"descricao"} label={"Descrição"} id={"descricao"} inputLabel={"Descrição"} />

                    <Box sx={{ display: 'flex', justifyContent: 'end', mt: 2 }}>
                        <FormControlLabel
                            control={<Switch checked={vacinado} onChange={() => setVacinado(!vacinado)} />}
                            label="É Vacinado?"
                        />
                        <FormControlLabel
                            control={<Switch checked={castrado} onChange={() => setCastrado(!castrado)} />}
                            label="É Castrado?"
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

export default CadastrarAnimal;