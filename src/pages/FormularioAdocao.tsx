import { useState } from 'react';
import Navbar from '../componentes/Navbar/Navbar';
import {
    Box,
    Paper,
    Grid,
    TextField,
    Button,
    Typography,
    FormControl,
    InputLabel,
    Select,
    MenuItem
} from '@mui/material';
import { Label } from 'mdi-material-ui';

interface FormState {
    nome: string;
    telefone: string;
    cep: string;
    sexo: string;
    cpf: string;
    tipoResidencia: string;
    dataNascimento: string;
    email: string;
}

export default function FormularioAdocao() {
    const [form, setForm] = useState<FormState>({
        nome: '',
        telefone: '',
        cep: '',
        sexo: '',
        cpf: '',
        tipoResidencia: '',
        dataNascimento: '',
        email: ''
    });

    const handleChange = (e: any) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log('Enviando formulário:', form);
    };

    return (
        <div style={{ paddingTop: 70 }}>
            <Navbar />

            <Box display="flex" justifyContent="center">
                <Paper
                    elevation={3}
                    sx={{
                        width: '90%',
                        maxWidth: '1200px',
                        bgcolor: '#F5F5F5',
                        borderRadius: 2,
                        p: 4
                    }}
                >
                    <Typography variant="h4" align="center" gutterBottom>
                        Formulário de Adoção
                    </Typography>

                    <form onSubmit={handleSubmit}>
                        <Grid
                            container
                            spacing={2}
                            justifyContent="space-between"
                            alignItems="center"
                            sx={{ mb: 2 }}
                        >

                            <Grid>
                                <Grid
                                    container
                                    spacing={2}
                                    justifyContent="space-between"
                                    alignItems="center"
                                >
                                    <Grid sx={{ p: 2 }}>
                                        <TextField
                                            fullWidth
                                            label="Nome Completo"
                                            name="nome"
                                            value={form.nome}
                                            onChange={handleChange}
                                            variant="outlined"
                                            required
                                        />
                                    </Grid>
                                    <Grid sx={{ p: 2 }}>
                                        <TextField
                                            fullWidth
                                            label="CPF"
                                            name="cpf"
                                            value={form.cpf}
                                            onChange={handleChange}
                                            variant="outlined"
                                            required
                                        />
                                    </Grid>
                                </Grid>
                                <Grid
                                    container
                                    spacing={2}
                                    justifyContent="space-between"
                                    alignItems="center"
                                >
                                    <Grid sx={{ p: 2 }}>
                                        <TextField
                                            fullWidth
                                            label="E-mail"
                                            name="email"
                                            value={form.email}
                                            onChange={handleChange}
                                            variant="outlined"
                                            required
                                        />
                                    </Grid>
                                    <Grid sx={{ p: 2 }}>
                                        <TextField
                                            fullWidth
                                            label="Telefone"
                                            name="telefone"
                                            value={form.telefone}
                                            onChange={handleChange}
                                            variant="outlined"
                                            required
                                        />
                                    </Grid>
                                </Grid>
                                <Grid
                                    container
                                    spacing={2}
                                    justifyContent="space-between"
                                    alignItems="center"
                                >
                                    <Grid sx={{ p: 2 }}>
                                        <TextField
                                            fullWidth
                                            label="CEP"
                                            name="cep"
                                            value={form.cep}
                                            onChange={handleChange}
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid sx={{ p: 2 }}>
                                        <TextField
                                            fullWidth
                                            label="Tipo de Residência"
                                            name="tipoResidencia"
                                            value={form.tipoResidencia}
                                            onChange={handleChange}
                                            variant="outlined"
                                        />
                                    </Grid>
                                </Grid>
                                <Grid
                                    container
                                    spacing={2}
                                    justifyContent="space-between"
                                    alignItems="center"
                                >
                                    <Grid sx={{ p: 2 }}>
                                        <TextField
                                            fullWidth
                                            label="Data de Nascimento"
                                            name="dataNascimento"
                                            value={form.dataNascimento}
                                            onChange={handleChange}
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid sx={{ p: 2 }}>
                                        <TextField
                                            fullWidth
                                            label="Sexo"
                                            name="sexo"
                                            value={form.sexo}
                                            onChange={handleChange}
                                            variant="outlined"
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid>
                                <Grid>
                                    <Box display="flex" justifyContent="center" alignItems="center" height="100%">
                                        <img
                                            src="https://images.dog.ceo/breeds/retriever-golden/n02099601_3007.jpg"
                                            alt="Pet para adoção"
                                            style={{ width: '100%', borderRadius: 8 }}
                                        />
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid>
                            <Box textAlign="center" mt={2}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    sx={{
                                        backgroundColor: '#FF8C00',
                                        color: '#FFF',
                                        px: 4,
                                        py: 1,
                                        borderRadius: 2,
                                        textTransform: 'none'
                                    }}
                                >
                                    ADOTE-ME
                                </Button>
                            </Box>
                        </Grid>
                    </form>
                </Paper>
            </Box>
        </div>
    );
}
