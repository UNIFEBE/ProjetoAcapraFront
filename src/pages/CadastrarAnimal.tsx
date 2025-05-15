import Navbar from "../componentes/Navbar/Navbar";
import InputText from "../componentes/Inputs/InputText/InputText";
import InputLongText from "../componentes/Inputs/InputText/InputLongText";
import {
    Box,
    Button,
    Switch,
    FormControlLabel,
    Typography
} from '@mui/material';
import { useState } from 'react';
import {Pencil} from 'mdi-material-ui';

export const CadastrarAnimal = () => {
    const [vacinado, setVacinado] = useState(false);
    const [castrado, setCastrado] = useState(false);

    return (
        <div style={{ paddingTop: '70px' }}>
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
                        mr: 5
                    }}
                >
                    <Typography variant="body1" align="center">Imagem do pet</Typography>

                    <Pencil
                        sx={{
                            position: 'absolute',
                            top: 85,
                            right: 15,
                            color: '#54507E',
                            cursor: 'pointer'
                        }}
                    />
                    
                </Box>

                {/* Formulário */}
                <Box sx={{ flex: 1,}}>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>

                        <InputText htmlFor={"animal"} label={"Animal"} id={"animal"} inputLabel={"Animal"} />
                        <InputText htmlFor={"sexo"} label={"Sexo"} id={"sexo"} inputLabel={"Sexo"} />

                    </Box>                        

                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        
                        <InputText htmlFor={"raca"} label={"Raça"} id={"raca"} inputLabel={"Raça"} />
                        <InputText htmlFor={"nascimento"} label={"Data de Nascimento"} id={"nascimento"} inputLabel={"Data de Nascimento"} />
                    
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>

                        <InputText htmlFor={"pelagem"} label={"Pelagem"} id={"pelagem"} inputLabel={"Pelagem"} />
                        <InputText htmlFor={"responsavel"} label={"Nome do Responsável"} id={"responsavel"} inputLabel={"Nome do Responsável"} />

                    </Box>

                    <InputLongText htmlFor={"descricao"} label={"Descrição"} id={"descricao"} inputLabel={"Descrição"}/>

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
                        <Button variant="contained" color="warning">EDITAR</Button>
                        <Button variant="contained" color="warning">CANCELAR</Button>
                        <Button variant="contained" sx={{ backgroundColor: '#f68b1f' }}>SALVAR</Button>
                    </Box>
                </Box>
            </Box>
        </div>
    );
}

export default CadastrarAnimal;