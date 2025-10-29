import { useLocation } from 'react-router-dom';
import { Box, Typography, Button, Divider, Paper } from '@mui/material';
import { MapMarker } from 'mdi-material-ui';
import CardInfoPet from '../componentes/CardInfoPet/CardInfoPet';
import Navbar from '../componentes/Navbar/Navbar';

const TelaAdocao = () => {
    const { state } = useLocation();
    const { pet } = state || {};

    if (!pet) return <Typography variant="h5">Pet não encontrado</Typography>;

    // Caso a imagem venha sem prefixo, adiciona automaticamente
    const imagemPet = pet.imagem?.startsWith("data:image")
        ? pet.imagem
        : `data:image/jpeg;base64,${pet.imagem}`;

    return (
        <Box padding={2}>
            <Navbar />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    gap: 4,
                    alignItems: 'flex-start',
                    marginTop: '100px',
                }}
            >
                {/* Imagem do pet */}
                <Box
                    sx={{
                        width: { xs: '100%', md: '30%' },
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: '40px',
                    }}
                >
                    <Box
                        sx={{
                            width: '250px',
                            borderRadius: 2,
                            border: '20px solid #5A4D9D',
                            backgroundColor: '#5A4D9D',
                            overflow: 'hidden',
                        }}
                    >
                        <img
                            src={imagemPet}
                            alt={pet.nome}
                            style={{
                                width: '100%',
                                height: '300px',
                                display: 'block',
                                objectFit: 'cover',
                            }}
                        />
                    </Box>
                </Box>

                {/* Informações do pet */}
                <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="h3" color="#FFA726" fontWeight="bold" gutterBottom>
                        {pet.nome}
                    </Typography>

                    <Divider
                        sx={{
                            width: '200px',
                            borderBottomWidth: 3,
                            borderColor: '#FFA726',
                            marginY: 1,
                        }}
                    />

                    <Typography variant="h6" color="#FFA726" gutterBottom>
                        {pet.raca} • {pet.pelagem}
                    </Typography>

                    <Box mt={2}>
                        <Typography fontWeight="bold" gutterBottom>Endereço:</Typography>
                        <Box display="flex" alignItems="center" mb={1}>
                            <MapMarker sx={{ color: 'orange', mr: 1 }} />
                            <Typography>
                                {pet.bairro || 'Bairro não informado'}<br />
                                {pet.cidade || 'Cidade não informada'}/SC
                            </Typography>
                        </Box>
                    </Box>

                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: 1,
                            justifyContent: { xs: 'center', md: 'flex-start' },
                            marginTop: 2,
                        }}
                    >
                        <CardInfoPet titulo="Idade:" valor={pet.idade} tipo="idade" />
                        <CardInfoPet
                            titulo="Sexo:"
                            valor={pet.genero === 'macho' ? 'Macho' : 'Fêmea'}
                            tipo={pet.genero === 'macho' ? 'sexoM' : 'sexoF'}
                        />
                        <CardInfoPet titulo="Castrado:" valor={pet.castrado ? 'Sim' : 'Não'} tipo="castrado" />
                        <CardInfoPet titulo="Vacinado:" valor={pet.vacinado ? 'Sim' : 'Não'} tipo="vacinado" />
                    </Box>

                    {/* Descrição do pet */}
                    <Paper
                        elevation={3}
                        sx={{
                            width: '85%',
                            marginTop: 3,
                            padding: 2,
                            borderRadius: 2,
                            fontSize: '1rem',
                            textAlign: 'justify',
                        }}
                    >
                        {pet.descricao
                            ? pet.descricao
                            : `${pet.nome} é um animal encantador e está esperando um novo lar cheio de amor!`}
                    </Paper>

                    <Box mt={3}>
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: '#FFA726',
                                color: '#fff',
                                paddingX: 4,
                                paddingY: 1,
                                fontWeight: 'bold',
                                borderRadius: 2,
                                '&:hover': {
                                    backgroundColor: '#FB8C00',
                                }
                            }}
                        >
                            ADOTE-ME
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default TelaAdocao;
