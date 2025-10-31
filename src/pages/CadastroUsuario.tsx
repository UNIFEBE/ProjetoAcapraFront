import {
  Box,
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Paper,
  Typography,
  IconButton,
  Snackbar,
  Alert,
  Link,
} from "@mui/material";
import { Account, Eye, EyeOff, LockOutline, Email, Phone, Home, MapMarker } from "mdi-material-ui";
import { useState } from "react";
import axios from "axios";
import AcapraLogo from "../assets/acapraLogo.png";

const CadastroUsuario = () => {
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [loading, setLoading] = useState(false);
  const BaseUrl = "https://api-acapra.d309group.com.br"

  // Snackbar
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<
    "success" | "error" | "info" | "warning"
  >("info");

  // Campos
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    cpf: "",
    celular: "",
    telefone: "",
    senha: "",
    confirmarSenha: "",
    tipo_usuario: "adotante",
    cep: "",
    cidade: "",
    estado: "",
    bairro: "",
    endereco: "",
    complemento: "",
    numero: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleClickShowPassword1 = () => setShowPassword1((show) => !show);
  const handleClickShowPassword2 = () => setShowPassword2((show) => !show);
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => event.preventDefault();

  const handleCloseSnackbar = () => setSnackbarOpen(false);

  const handleSubmit = async () => {
    if (formData.senha !== formData.confirmarSenha) {
      setSnackbarMessage("As senhas não coincidem.");
      setSnackbarSeverity("warning");
      setSnackbarOpen(true);
      return;
    }

    try {
      setLoading(true);

      const payload = {
        id: 0,
        nome: formData.nome,
        email: formData.email,
        cpf: formData.cpf,
        celular: formData.celular,
        telefone: formData.telefone,
        senha: formData.senha,
        tipo_usuario: formData.tipo_usuario,
        ativo: true,
        cep: formData.cep,
        cidade: formData.cidade,
        estado: formData.estado,
        bairro: formData.bairro,
        endereco: formData.endereco,
        complemento: formData.complemento,
        numero: formData.numero,
      };

      const response = await axios.post(
        BaseUrl + "/Usuario/cadastrar-usuario",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Usuário cadastrado com sucesso:", response.data);

      setSnackbarMessage("Cadastro realizado com sucesso!");
      setSnackbarSeverity("success");
      setSnackbarOpen(true);

      // Exemplo: redirecionar após 2s
      // setTimeout(() => (window.location.href = "/login"), 2000);
    } catch (error: any) {
      console.error("Erro:", error.response);
      const errorMsg =
        error.response?.data?.message ||
        error.response?.data?.title ||
        "Falha ao cadastrar. Verifique os dados e tente novamente.";

      setSnackbarMessage(`Erro: ${errorMsg}`);
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f9f6fc",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      {/* Blob SVG */}
      <Box
        component="svg"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "100vw",
          maxWidth: 1500,
          transform: "translate(-50%, -50%)",
          zIndex: 1,
        }}
      >
        <path
          fill="#54507E"
          d="M41.1,-72.4C52.5,-64.7,60.3,-52,53.6,-39.1C47,-26.2,25.8,-13.1,28.6,1.6C31.4,16.3,58.1,32.6,60.9,38.8C63.7,45,42.5,41,28.4,47C14.3,53,7.1,68.9,1.2,66.7C-4.6,64.6,-9.3,44.4,-21.7,37.4C-34.1,30.4,-54.2,36.7,-68.1,32.6C-82,28.6,-89.8,14.3,-89,0.4C-88.2,-13.4,-78.9,-26.8,-66.1,-32.7C-53.2,-38.6,-36.8,-36.9,-25.2,-44.6C-13.6,-52.2,-6.8,-69,4,-76C14.9,-83,29.8,-80.2,41.1,-72.4Z"
          transform="translate(100 100)"
        />
      </Box>

      {/* Card */}
      <Paper
        elevation={6}
        sx={{
          position: "relative",
          zIndex: 2,
          p: "48px 32px",
          maxWidth: 800,
          width: "100%",
          borderRadius: "24px",
          textAlign: "center",
          boxShadow: "0 10px 50px rgba(96, 68, 121, 0.1)",
        }}
      >
        <Box component="img" src={AcapraLogo} alt="logo acapra" sx={{ width: 96, mb: 3, mx: "auto" }} />
        <Typography variant="h6" sx={{ fontWeight: 500, mb: 0.5 }}>
          Crie sua conta
        </Typography>
        <Typography variant="body2" sx={{ color: "#ada5b4", mb: 4 }}>
          Preencha os dados abaixo para se cadastrar.
        </Typography>

        {/* Campos */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
            gap: 2,
          }}
        >
          <FormControl fullWidth variant="outlined" margin="dense">
            <InputLabel htmlFor="nome">Nome</InputLabel>
            <OutlinedInput id="nome" label="Nome" value={formData.nome} onChange={handleChange} sx={outlinedInputStyles}
              startAdornment={<InputAdornment position="start"><Account sx={{ color: "#54507E" }} /></InputAdornment>} />
          </FormControl>

          <FormControl fullWidth variant="outlined" margin="dense">
            <InputLabel htmlFor="email">E-mail</InputLabel>
            <OutlinedInput id="email" label="E-mail" value={formData.email} onChange={handleChange} sx={outlinedInputStyles}
              startAdornment={<InputAdornment position="start"><Email sx={{ color: "#54507E" }} /></InputAdornment>} />
          </FormControl>

          <FormControl fullWidth variant="outlined" margin="dense">
            <InputLabel htmlFor="cpf">CPF</InputLabel>
            <OutlinedInput id="cpf" label="CPF" value={formData.cpf} onChange={handleChange} sx={outlinedInputStyles} />
          </FormControl>

          <FormControl fullWidth variant="outlined" margin="dense">
            <InputLabel htmlFor="celular">Celular</InputLabel>
            <OutlinedInput id="celular" label="Celular" value={formData.celular} onChange={handleChange} sx={outlinedInputStyles}
              startAdornment={<InputAdornment position="start"><Phone sx={{ color: "#54507E" }} /></InputAdornment>} />
          </FormControl>

          <FormControl fullWidth variant="outlined" margin="dense">
            <InputLabel htmlFor="telefone">Telefone</InputLabel>
            <OutlinedInput id="telefone" label="Telefone" value={formData.telefone} onChange={handleChange} sx={outlinedInputStyles} />
          </FormControl>

          <FormControl fullWidth variant="outlined" margin="dense">
            <InputLabel htmlFor="cep">CEP</InputLabel>
            <OutlinedInput id="cep" label="CEP" value={formData.cep} onChange={handleChange} sx={outlinedInputStyles} />
          </FormControl>

          <FormControl fullWidth variant="outlined" margin="dense">
            <InputLabel htmlFor="cidade">Cidade</InputLabel>
            <OutlinedInput id="cidade" label="Cidade" value={formData.cidade} onChange={handleChange} sx={outlinedInputStyles} />
          </FormControl>

          <FormControl fullWidth variant="outlined" margin="dense">
            <InputLabel htmlFor="estado">Estado</InputLabel>
            <OutlinedInput id="estado" label="Estado" value={formData.estado} onChange={handleChange} sx={outlinedInputStyles} />
          </FormControl>

          <FormControl fullWidth variant="outlined" margin="dense">
            <InputLabel htmlFor="bairro">Bairro</InputLabel>
            <OutlinedInput id="bairro" label="Bairro" value={formData.bairro} onChange={handleChange} sx={outlinedInputStyles} />
          </FormControl>

          <FormControl fullWidth variant="outlined" margin="dense">
            <InputLabel htmlFor="endereco">Endereço</InputLabel>
            <OutlinedInput id="endereco" label="Endereço" value={formData.endereco} onChange={handleChange} sx={outlinedInputStyles}
              startAdornment={<InputAdornment position="start"><Home sx={{ color: "#54507E" }} /></InputAdornment>} />
          </FormControl>

          <FormControl fullWidth variant="outlined" margin="dense">
            <InputLabel htmlFor="numero">Número</InputLabel>
            <OutlinedInput id="numero" label="Número" value={formData.numero} onChange={handleChange} sx={outlinedInputStyles} />
          </FormControl>

          <FormControl fullWidth variant="outlined" margin="dense">
            <InputLabel htmlFor="complemento">Complemento</InputLabel>
            <OutlinedInput id="complemento" label="Complemento" value={formData.complemento} onChange={handleChange} sx={outlinedInputStyles} />
          </FormControl>

          <FormControl fullWidth variant="outlined" margin="dense">
            <InputLabel htmlFor="senha">Senha</InputLabel>
            <OutlinedInput
              id="senha"
              type={showPassword1 ? "text" : "password"}
              label="Senha"
              value={formData.senha}
              onChange={handleChange}
              sx={outlinedInputStyles}
              startAdornment={<InputAdornment position="start"><LockOutline sx={{ color: "#54507E" }} /></InputAdornment>}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={handleClickShowPassword1} onMouseDown={handleMouseDownPassword}>
                    {showPassword1 ? <EyeOff /> : <Eye />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>

          <FormControl fullWidth variant="outlined" margin="dense">
            <InputLabel htmlFor="confirmarSenha">Confirmar Senha</InputLabel>
            <OutlinedInput
              id="confirmarSenha"
              type={showPassword2 ? "text" : "password"}
              label="Confirmar Senha"
              value={formData.confirmarSenha}
              onChange={handleChange}
              sx={outlinedInputStyles}
              startAdornment={<InputAdornment position="start"><LockOutline sx={{ color: "#54507E" }} /></InputAdornment>}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={handleClickShowPassword2} onMouseDown={handleMouseDownPassword}>
                    {showPassword2 ? <EyeOff /> : <Eye />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </Box>

        <Button
          fullWidth
          variant="contained"
          onClick={handleSubmit}
          disabled={loading}
          sx={{
            mt: 4,
            height: 52,
            backgroundColor: "#54507E",
            fontWeight: 500,
            fontSize: 15,
            borderRadius: 2,
            "&:hover": { backgroundColor: "#3f3b65" },
          }}
        >
          {loading ? "Cadastrando..." : "Cadastrar"}
        </Button>

        <Link href="/login" underline="hover" sx={{ mt: 3, display: "block", color: "#54507E" }}>
          Já tenho uma conta
        </Link>
      </Paper>

      {/* Snackbar */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} variant="filled" sx={{ width: "100%" }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

const outlinedInputStyles = {
  background: "#f4f1f7",
  borderRadius: 2,
  fontSize: 15,
  "& .MuiOutlinedInput-notchedOutline": { borderColor: "transparent" },
  "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "#bdbdbd" },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "#54507E", borderWidth: 2 },
};

export default CadastroUsuario;
