import {
    Box,
    Button,
    Typography,
    OutlinedInput,
    InputLabel,
    InputAdornment,
    IconButton,
    FormControl,
    Paper,
    CircularProgress,
    Alert,
} from '@mui/material';
import { Eye, EyeOff, LockOutline } from 'mdi-material-ui';
import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import AcapraLogo from '../assets/acapraLogo.png';
import axios from 'axios';

const RedefinirSenha = () => {
    const [showNovaSenha, setShowNovaSenha] = useState(false);
    const [showConfirmaSenha, setShowConfirmaSenha] = useState(false);

    const BaseUrl = "https://api-acapra.d309group.com.br"

    const [token, setToken] = useState<string | null>(null);
    const [novaSenha, setNovaSenha] = useState('');
    const [confirmaSenha, setConfirmaSenha] = useState('');
    const [loading, setLoading] = useState(true);
    const [tokenValido, setTokenValido] = useState(false);
    const [mensagem, setMensagem] = useState<string | null>(null);
    const [erro, setErro] = useState<string | null>(null);

    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    function decodeTokenBase64(tokenBase64: string): Date | null {
        try {
            const decoded = decodeURIComponent(escape(window.atob(tokenBase64)));

            if (!decoded.includes('acapraApi')) {
                console.warn('Token inválido.');
                return null;
            }

            const dataString = decoded.replace('acapraApi', '');
            const data = new Date(dataString);

            if (isNaN(data.getTime())) {
                console.warn('Token inválido.');
                return null;
            }

            return data;
        } catch (err) {
            console.error('Erro ao decodificar token:', err);
            return null;
        }
    }

    function tokenAindaValido(tokenBase64: string): boolean {
        const dataExpiracao = decodeTokenBase64(tokenBase64);
        if (!dataExpiracao) return false;
        const agora = new Date();
        return agora <= dataExpiracao;
    }

    useEffect(() => {
        const tokenParam = searchParams.get('token');
        setToken(tokenParam);

        if (!tokenParam) {
            setErro('Token ausente ou inválido.');
            setLoading(false);
            setTimeout(() => navigate('/login', { replace: true }), 2000);
            return;
        }

        const valido = tokenAindaValido(tokenParam);

        setTimeout(() => {
            if (valido) {
                setTokenValido(true);
            } else {
                setErro('Token expirado. Solicite uma nova redefinição de senha.');
                setTimeout(() => navigate('/login', { replace: true }), 2000);
            }
            setLoading(false);
        }, 800);
    }, []);

    const handleAlterarSenha = async () => {
        setErro(null);
        setMensagem(null);

        if (novaSenha !== confirmaSenha) {
            setErro('As senhas não coincidem.');
            return;
        }

        const email = localStorage.getItem('email');
        if (!email) {
            setErro('E-mail não encontrado. Faça login novamente.');
            return;
        }

        try {
            setLoading(true);

            const response = await axios.put(
                `${BaseUrl}/Usuario/redefinir-senha`,
                {
                    email,
                    novaSenha,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

            if (response.status === 200) {
                setMensagem('Senha alterada com sucesso! Você já pode fazer login.');
                localStorage.removeItem('email');
                setTimeout(() => navigate('/login', { replace: true }), 2000);
            } else {
                setErro('Não foi possível alterar a senha. Tente novamente.');
            }
        } catch (err: any) {
            console.error('Erro ao alterar senha:', err);
            const msg = 'Erro ao alterar a senha. Verifique os dados e tente novamente.';
            setErro(msg);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Box
            sx={{
                minHeight: '100vh',
                backgroundColor: '#f9f6fc',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
                fontFamily: 'Poppins, sans-serif',
            }}
        >
            <Box
                component="svg"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: '100vw',
                    maxWidth: 1500,
                    transform: 'translate(-50%, -50%)',
                    zIndex: 1,
                }}
            >
                <path
                    fill="#54507E"
                    d="M41.1,-72.4C52.5,-64.7,60.3,-52,53.6,-39.1C47,-26.2,25.8,-13.1,28.6,1.6C31.4,16.3,58.1,32.6,60.9,38.8C63.7,45,42.5,41,28.4,47C14.3,53,7.1,68.9,1.2,66.7C-4.6,64.6,-9.3,44.4,-21.7,37.4C-34.1,30.4,-54.2,36.7,-68.1,32.6C-82,28.6,-89.8,14.3,-89,0.4C-88.2,-13.4,-78.9,-26.8,-66.1,-32.7C-53.2,-38.6,-36.8,-36.9,-25.2,-44.6C-13.6,-52.2,-6.8,-69,4,-76C14.9,-83,29.8,-80.2,41.1,-72.4Z"
                    transform="translate(100 100)"
                />
            </Box>

            <Paper
                elevation={6}
                sx={{
                    position: 'relative',
                    zIndex: 2,
                    padding: '72px 32px 48px',
                    width: 340,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    borderRadius: '24px',
                    boxShadow: '0 10px 50px rgba(96, 68, 121, 0.1)',
                    backgroundColor: '#fff',
                }}
            >
                <Box component="img" src={AcapraLogo} alt="logo acapra" sx={{ width: 96, mb: 4 }} />

                {loading ? (
                    <CircularProgress sx={{ color: '#54507E' }} />
                ) : erro ? (
                    <Alert severity="error" sx={{ mb: 2 }}>
                        {erro}
                    </Alert>
                ) : mensagem ? (
                    <Alert severity="success" sx={{ mb: 2 }}>
                        {mensagem}
                    </Alert>
                ) : tokenValido ? (
                    <>
                        <Typography variant="h6" sx={{ fontWeight: 500, mb: 0.5 }}>
                            Alteração de Senha
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#ada5b4', mb: 4 }}>
                            Insira a sua nova senha abaixo
                        </Typography>

                        <FormControl fullWidth variant="outlined" margin="dense">
                            <InputLabel htmlFor="novaSenha" sx={{ color: '#54507E' }}>
                                Nova Senha
                            </InputLabel>
                            <OutlinedInput
                                id="novaSenha"
                                type={showNovaSenha ? 'text' : 'password'}
                                value={novaSenha}
                                onChange={(e) => setNovaSenha(e.target.value)}
                                label="Nova Senha"
                                startAdornment={
                                    <InputAdornment position="start">
                                        <LockOutline sx={{ color: '#54507E' }} />
                                    </InputAdornment>
                                }
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={() => setShowNovaSenha(!showNovaSenha)}
                                            onMouseDown={(e) => e.preventDefault()}
                                            edge="end"
                                            sx={{ color: '#54507E' }}
                                        >
                                            {showNovaSenha ? <EyeOff /> : <Eye />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                sx={{
                                    background: '#f4f1f7',
                                    borderRadius: 2,
                                    fontSize: 15,
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        borderColor: 'transparent',
                                    },
                                    '&:hover .MuiOutlinedInput-notchedOutline': {
                                        borderColor: '#bdbdbd',
                                    },
                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                        borderColor: '#54507E',
                                        borderWidth: 2,
                                    },
                                }}
                            />
                        </FormControl>

                        <FormControl fullWidth variant="outlined" margin="dense">
                            <InputLabel htmlFor="confirmaSenha" sx={{ color: '#54507E' }}>
                                Confirmar Senha
                            </InputLabel>
                            <OutlinedInput
                                id="confirmaSenha"
                                type={showConfirmaSenha ? 'text' : 'password'}
                                value={confirmaSenha}
                                onChange={(e) => setConfirmaSenha(e.target.value)}
                                label="Confirmar Senha"
                                startAdornment={
                                    <InputAdornment position="start">
                                        <LockOutline sx={{ color: '#54507E' }} />
                                    </InputAdornment>
                                }
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={() => setShowConfirmaSenha(!showConfirmaSenha)}
                                            onMouseDown={(e) => e.preventDefault()}
                                            edge="end"
                                            sx={{ color: '#54507E' }}
                                        >
                                            {showConfirmaSenha ? <EyeOff /> : <Eye />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                sx={{
                                    background: '#f4f1f7',
                                    borderRadius: 2,
                                    fontSize: 15,
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        borderColor: 'transparent',
                                    },
                                    '&:hover .MuiOutlinedInput-notchedOutline': {
                                        borderColor: '#bdbdbd',
                                    },
                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                        borderColor: '#54507E',
                                        borderWidth: 2,
                                    },
                                }}
                            />
                        </FormControl>

                        <Button
                            fullWidth
                            variant="contained"
                            disabled={loading}
                            onClick={handleAlterarSenha}
                            sx={{
                                mt: 3,
                                height: 52,
                                backgroundColor: '#54507E',
                                fontWeight: 500,
                                fontSize: 15,
                                borderRadius: 2,
                                '&:hover': {
                                    backgroundColor: '#3f3b65',
                                },
                            }}
                        >
                            {loading ? <CircularProgress size={24} sx={{ color: '#fff' }} /> : 'Alterar Senha'}
                        </Button>
                    </>
                ) : null}
            </Paper>
        </Box>
    );
};

export default RedefinirSenha;
