import { Box, Typography, Button } from '@mui/material';
import { MapMarker } from 'mdi-material-ui';
import CardInfoPet from '../componentes/CardInfoPet/CardInfoPet';

const TelaAdocao = () => {
    return (
        <Box padding={4}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: {
                        xs: 'column',
                        md: 'row'
                    },
                    gap: 4,
                    alignItems: 'flex-start',
                }}
            >
                <Box
                    sx={{
                        width: {
                            xs: '100%',
                            md: '25%',
                        },
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
                            src="https://images.dog.ceo/breeds/retriever-golden/n02099601_3007.jpg"
                            alt="Golden Retriever Filhote"
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
                    <Typography variant="h3" color="primary" fontWeight="bold" gutterBottom>
                        Oliver
                    </Typography>
                    <Typography variant="h6" color="orange" gutterBottom>
                        Golden Retriever
                    </Typography>

                    <Box mt={2}>
                        <Typography fontWeight="bold" gutterBottom>Endereço:</Typography>
                        <Box display="flex" alignItems="center" mb={1}>
                            <MapMarker sx={{ color: 'orange', mr: 1 }} />
                            <Typography>
                                Rua das Flores, 123, Ap 401<br />
                                Centro<br />
                                88000-000<br />
                                Brusque/SC
                            </Typography>
                        </Box>
                    </Box>

                    <Box display="flex" gap={2} mt={2} mb={2}>
                        <CardInfoPet titulo="Idade:" valor="6 meses" tipo="idade" />
                        <CardInfoPet titulo="Sexo:" valor="Macho" tipo="sexoM" />
                        <CardInfoPet titulo="Castrado:" valor="Sim" tipo="castrado" />
                        <CardInfoPet titulo="Vacinado:" valor="Não" tipo="vacinado" />
                    </Box>

                    <Box
                        sx={{
                            backgroundColor: '#fff',
                            border: '1px solid #ccc',
                            borderRadius: 2,
                            padding: 2,
                            boxShadow: 2,
                            maxWidth: '600px',
                        }}
                    >
                        <Typography variant="body1">
                            Oliver é um verdadeiro raio de sol! Com sua pelagem dourada e olhar meigo, ele é a definição de lealdade e carinho. Este adorável Golden Retriever tem uma personalidade encantadora, sendo sempre amigável, brincalhão e cheio de energia. Adora passar tempo com sua família humana, seja se divertindo em uma caminhada no parque, brincando com crianças ou apenas recebendo muito carinho.
                        </Typography>
                    </Box>

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
