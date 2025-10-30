import { useLocation, useNavigate } from 'react-router-dom';
import { Box, Typography, Button, Divider, Paper } from '@mui/material';
import { MapMarker } from 'mdi-material-ui';
import CardInfoPet from '../componentes/CardInfoPet/CardInfoPet';
import Navbar from '../componentes/Navbar/Navbar';
import CustomFooter from '../componentes/Footer/Footer';

interface Pet {
    nome: string;
    imagem: string;
    idade: string;
    genero: string;
    raca: string;
    pelagem: string;
    castrado: boolean;
    vacinado: boolean;
    descricao?: string;
    bairro?: string;
    cidade?: string;
}

const TelaAdocao = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const state = location.state as { pet?: Pet };
    const pet = state?.pet;

    const adoteMe = (pet: Pet) => {
        navigate('/formularioAdocao', { state: { pet } });
    };

    if (!pet) return <Typography variant="h5">Pet não encontrado</Typography>;

    // Caso a imagem venha sem prefixo base64
    const imagemPet = pet.imagem?.startsWith('data:image')
        ? pet.imagem
        : `data:image/jpeg;base64,${pet.imagem}`;

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
                paddingTop: '70px',
            }}
        >
            <Navbar />

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    gap: 4,
                    alignItems: 'flex-start',
                    marginTop: '100px',
                    paddingX: { xs: 2, md: 8 },
                }}
            >
                {/* Imagem do pet */}
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        backgroundColor: '#fff',
                        borderRadius: 4,
                        width: { xs: '100%', md: '40%' },
                        boxShadow: 3,
                        p: 3,
                    }}
                >
                    <Box
                        sx={{
                            width: '100%',
                            maxWidth: 300,
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

                    {/* Endereço */}
                    <Box mt={2}>
                        <Typography fontWeight="bold" gutterBottom>
                            Endereço:
                        </Typography>
                        <Box display="flex" alignItems="center" mb={1}>
                            <MapMarker sx={{ color: 'orange', mr: 1 }} />
                            <Typography>
                                {pet.bairro || 'Bairro não informado'}
                                <br />
                                {pet.cidade || 'Cidade não informada'}/SC
                            </Typography>
                        </Box>
                    </Box>

                    {/* Informações adicionais */}
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: 2,
                            justifyContent: { xs: 'center', md: 'flex-start' },
                            marginTop: 4,
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

                    {/* Descrição */}
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

                    {/* Botão Adote-me */}
                    <Box mt={4}>
                        <Button
                            variant="contained"
                            onClick={() => adoteMe(pet)}
                            sx={{
                                backgroundColor: '#FFA726',
                                color: '#fff',
                                paddingX: 4,
                                paddingY: 1,
                                fontWeight: 'bold',
                                borderRadius: 2,
                                '&:hover': {
                                    backgroundColor: '#FB8C00',
                                },
                            }}
                        >
                            ADOTE-ME
                        </Button>
                    </Box>
                </Box>
            </Box>

            <CustomFooter />
        </div>
    );
};

export default TelaAdocao;
