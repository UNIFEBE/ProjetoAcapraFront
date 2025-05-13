import { Box, Card, CardContent, Typography, Grid } from '@mui/material';

const TelaAdocao = () => {
    return (
        <Box padding={4}>
            <Grid container spacing={4} alignItems="flex-start">
                {/* Imagem do Animal */}
                <Grid item xs={12} md={4}>
                    <Box
                        sx={{
                            borderRadius: 2,
                            border: '10px solid #5A4D9D',
                            backgroundColor: '#5A4D9D',
                            overflow: 'hidden',
                        }}
                    >
                        <img
                            src="https://images.dog.ceo/breeds/retriever-golden/n02099601_3007.jpg"
                            alt="Golden Retriever Filhote"
                            style={{ width: '100%', height: '300px', display: 'block', objectFit: 'cover' }}
                        />
                    </Box>
                </Grid>

                {/* Informações do Animal */}
                <Grid item xs={12} md={8}>
                    <Card variant="outlined" sx={{ borderRadius: 2 }}>
                        <CardContent>
                            <Typography variant="h5" component="div" gutterBottom>
                                Nome do Animal
                            </Typography>
                            <Typography variant="body1">Raça: Golden Retriever</Typography>
                            <Typography variant="body1">Idade: Filhote</Typography>
                            <Typography variant="body1">Cidade: Belo Horizonte</Typography>
                            <Typography variant="body1">Bairro: Savassi</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default TelaAdocao;
