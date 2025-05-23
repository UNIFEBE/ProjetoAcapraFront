
import { Button, FormControl, InputAdornment, InputLabel, Link, OutlinedInput, Paper, Typography, Box, IconButton } from "@mui/material";
import { Account, Eye, EyeOff, LockOutline } from "mdi-material-ui";
import { useState } from "react";
import AcapraLogo from '../assets/acapraLogo.png';

const CadastroUsuario = () => {
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const handleClickShowPassword1 = () => setShowPassword1((show) => !show);
  const handleClickShowPassword2 = () => setShowPassword2((show) => !show);
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => event.preventDefault();

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
          maxWidth: 720,
          width: '100%',
          textAlign: 'center',
          borderRadius: '24px',
          boxShadow: '0 10px 50px rgba(96, 68, 121, 0.1)',
          backgroundColor: '#fff',
        }}
      >
        <Box component="img" src={AcapraLogo} alt="logo acapra" sx={{ width: 96, mb: 4, mx: 'auto' }} />

        <Typography variant="h6" sx={{ fontWeight: 500, mb: 0.5 }}>
          Bem-vindo à Acapra!
        </Typography>
        <Typography variant="body2" sx={{ color: '#ada5b4', mb: 4 }}>
          Se ainda não tem uma conta, cadastre-se agora para começar essa jornada de amor e companheirismo!
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 2,
            justifyContent: 'space-between',
          }}
        >
          <Box sx={{ flex: { xs: '1 1 100%', sm: '1 1 48%' } }}>
            <FormControl fullWidth variant="outlined" margin="dense">
              <InputLabel htmlFor="nome" sx={{ color: '#54507E' }}>
                Nome
              </InputLabel>
              <OutlinedInput
                id="nome"
                type="text"
                label="Nome"
                required
                startAdornment={
                  <InputAdornment position="start">
                    <Account sx={{ color: '#54507E' }} />
                  </InputAdornment>
                }
                sx={outlinedInputStyles}
              />
            </FormControl>

            <FormControl fullWidth variant="outlined" margin="dense">
              <InputLabel htmlFor="password" sx={{ color: '#54507E' }}>
                Senha
              </InputLabel>
              <OutlinedInput
                id="password"
                type={showPassword1 ? 'text' : 'password'}
                label="Senha"
                required
                startAdornment={
                  <InputAdornment position="start">
                    <LockOutline sx={{ color: '#54507E' }} />
                  </InputAdornment>
                }
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword1}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                      sx={{ color: '#54507E' }}
                    >
                      {showPassword1 ? <EyeOff /> : <Eye />}
                    </IconButton> 
                  </InputAdornment>
                }
                sx={outlinedInputStyles}
              />
            </FormControl>
          </Box>

          {/* Coluna 2 */}
          <Box sx={{ flex: { xs: '1 1 100%', sm: '1 1 48%' } }}>
            <FormControl fullWidth variant="outlined" margin="dense">
              <InputLabel htmlFor="email" sx={{ color: '#54507E' }}>
                E-mail
              </InputLabel>
              <OutlinedInput
                id="email"
                type="email"
                label="E-mail"
                required
                startAdornment={
                  <InputAdornment position="start">
                    <Account sx={{ color: '#54507E' }} />
                  </InputAdornment>
                }
                sx={outlinedInputStyles}
              />
            </FormControl>

            <FormControl fullWidth variant="outlined" margin="dense">
              <InputLabel htmlFor="confirmpassword" sx={{ color: '#54507E' }}>
                Confirme sua senha
              </InputLabel>
              <OutlinedInput
                id="confirmpassword"
                type={showPassword2 ? 'text' : 'password'}
                label="Confirme sua senha"
                required
                startAdornment={
                  <InputAdornment position="start">
                    <LockOutline sx={{ color: '#54507E' }} />
                  </InputAdornment>
                }
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword2}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                      sx={{ color: '#54507E' }}
                    >
                      {showPassword2 ? <EyeOff /> : <Eye />}
                    </IconButton>
                  </InputAdornment>
                }
                sx={outlinedInputStyles}
              />
            </FormControl>
          </Box>
        </Box>

        <Button
          fullWidth
          variant="contained"
          sx={{
            mt: 4,
            height: 52,
            backgroundColor: '#54507E',
            fontWeight: 500,
            fontSize: 15,
            borderRadius: 2,
            '&:hover': {
              backgroundColor: '#3f3b65',
            },
          }}
        href='/'>
          Cadastrar
        </Button>

        <Link href="/login" underline="hover" sx={{ mt: 4, display: 'block', color: '#54507E' }}>
          Já tenho uma conta
        </Link>
      </Paper>
    </Box>
  );
};

const outlinedInputStyles = {
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
};

export default CadastroUsuario;
