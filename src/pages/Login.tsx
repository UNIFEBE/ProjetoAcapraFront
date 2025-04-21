import {
    Box,
    Button,
    Typography,
    Paper,
    IconButton,
    InputAdornment,
    OutlinedInput,
    InputLabel,
    FormControl,
    Link
} from '@mui/material';
import { Eye, EyeOff, Account, LockOutline } from 'mdi-material-ui';
import AcapraIcone from '../assets/acapraIcone.png'
import { useState } from 'react';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => event.preventDefault();
    const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => event.preventDefault();

    return (
        <Box
            sx={{
                minHeight: '100vh',
                backgroundImage: 'url(/path/to/your/image.png)', // Substitua com o caminho da imagem
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: 20,
                    left: 20,
                }}
            >
                <img src={AcapraIcone} alt="Logo Acapra" style={{ height: 80 }} />
            </Box>

            <Paper
                elevation={8}
                sx={{
                    backgroundColor: 'rgba(0, 0, 0, 0.65)',
                    padding: 5,
                    borderRadius: 2,
                    maxWidth: 400,
                    width: '90%',
                    color: '#fff',
                }}
            >
                <Typography variant="h4" align="center" gutterBottom>
                    Login
                </Typography>

                <FormControl fullWidth variant="outlined" margin="normal">
                    <InputLabel htmlFor="outlined-usuario" sx={{ color: '#fff' }}>
                        Usuário
                    </InputLabel>
                    <OutlinedInput
                        id="outlined-usuario"
                        type="text"
                        startAdornment={
                            <InputAdornment position="start">
                                <Account sx={{ color: 'white' }} />
                            </InputAdornment>
                        }
                        label="Usuário"
                        sx={{
                            color: '#fff',
                            '& .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#ccc',
                            },
                            '&:hover .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#fff',
                            }
                        }}
                    />
                </FormControl>

                {/* Campo de Senha */}
                <FormControl fullWidth variant="outlined" margin="normal">
                    <InputLabel htmlFor="outlined-adornment-password" sx={{ color: '#fff' }}>
                        Senha
                    </InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        startAdornment={
                            <InputAdornment position="start">
                                <LockOutline sx={{ color: 'white' }} />
                            </InputAdornment>
                        }
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    onMouseUp={handleMouseUpPassword}
                                    edge="end"
                                    sx={{ color: '#fff' }}
                                >
                                    {showPassword ? <EyeOff /> : <Eye />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Senha"
                        sx={{
                            color: '#fff',
                            '& .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#ccc',
                            },
                            '&:hover .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#fff',
                            }
                        }}
                    />
                </FormControl>

                <Link href="#" underline="hover" sx={{ color: '#ccc', fontSize: 14 }}>
                    Esqueci Minha Senha
                </Link>

                <Button
                    fullWidth
                    variant="contained"
                    sx={{
                        mt: 3,
                        backgroundColor: '#d32f2f',
                        '&:hover': {
                            backgroundColor: '#a72828',
                        },
                        fontWeight: 'bold',
                        paddingY: 1.2,
                    }}
                >
                    Entrar
                </Button>

                <Box mt={3} textAlign="center">
                    <Link href="#" underline="hover" sx={{ color: '#ccc', fontSize: 14 }}>
                        Ainda não tenho uma conta
                    </Link>
                </Box>
            </Paper>
        </Box>
    );
};

export default Login;
