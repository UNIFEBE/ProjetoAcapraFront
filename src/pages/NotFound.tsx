import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            height="100vh"
            textAlign="center"
            gap={3}
        >
            <Typography variant="h2" color="error">404</Typography>
            <Typography variant="h5">Página não encontrada 😢</Typography>
            <Button variant="contained" color="primary" onClick={() => navigate("/")}>
                Voltar para o início
            </Button>
        </Box>
    );
};

export default NotFound;
