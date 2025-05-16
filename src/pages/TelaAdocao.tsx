import { useLocation } from 'react-router-dom';
import { Box, Typography, Button, Divider, Paper } from '@mui/material';
import { MapMarker } from 'mdi-material-ui';
import CardInfoPet from '../componentes/CardInfoPet/CardInfoPet';
import Navbar from '../componentes/Navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import CustomFooter from '../componentes/Footer/Footer';

const TelaAdocao = () => {
    const { state } = useLocation();
    const { pet } = state || {};
    const navigate = useNavigate();

    const adoteMe = (pet: any) => {
        navigate('/formularioAdocao', { state: { pet } });
    };

    if (!pet) return <Typography variant="h5">Pet não encontrado</Typography>;

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', paddingTop: '70px'}}>

            <Navbar />

            <Box sx={{flex: 1, p: 2, display:'flex', flexDirection:'column'}}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        gap: 4,
                        alignItems: 'flex-start',
                        marginTop: '100px',
                    }}
                >
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
                                src={pet.imagem}
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
                            {pet.raca}
                        </Typography>

                        <Box mt={2}>
                            <Typography fontWeight="bold" gutterBottom>Endereço:</Typography>
                            <Box display="flex" alignItems="center" mb={1}>
                                <MapMarker sx={{ color: 'orange', mr: 1 }} />
                                <Typography>
                                    Rua das Flores, 123, Ap 401<br />
                                    {pet.bairro}<br />
                                    88000-000<br />
                                    {pet.cidade}/SC
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
                            <CardInfoPet titulo="Sexo:" valor={pet.genero === 'macho' ? 'Macho' : 'Fêmea'} tipo={pet.genero === 'macho' ? 'sexoM' : 'sexoF'} />
                            <CardInfoPet titulo="Castrado:" valor="Sim" tipo="castrado" />
                            <CardInfoPet titulo="Vacinado:" valor="Não" tipo="vacinado" />
                        </Box>

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
                            {pet.nome} é um verdadeiro raio de sol! Com sua pelagem dourada e olhar meigo, ele é a definição de lealdade e carinho.
                            Este adorável {pet.raca} tem uma personalidade encantadora, sendo sempre amigável, brincalhão e cheio de energia.
                            Adora passar tempo com sua família humana, seja se divertindo em uma caminhada no parque ou recebendo carinho.
                        </Paper>

                        <Box mt={3}>
                            <Button
                                variant="contained"
                                onClick={() => adoteMe (pet)}
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
            <CustomFooter />
        </div>
    );
};

export default TelaAdocao;
