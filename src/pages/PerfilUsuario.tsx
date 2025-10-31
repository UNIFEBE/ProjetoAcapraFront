import { useEffect, useState } from "react";
import axios from "axios";
import {
    Box,
    Button,
    FormControl,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Typography,
    IconButton,
    MenuItem,
    Select,
    FormHelperText,
    Divider,
    Snackbar,
    Alert,
} from "@mui/material";
import {
    Account,
    Eye,
    EyeOff,
    LockOutline,
    Phone,
    EmailOutline,
    HomeOutline,
    CityVariantOutline,
    MapOutline,
} from "mdi-material-ui";
import AcapraLogo from "../assets/acapraLogo.png";
import Navbar from "../componentes/Navbar/Navbar";

const PerfilUsuario = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [erros, setErros] = useState<{ [key: string]: string }>({});

    const BaseUrl = "https://api-acapra.d309group.com.br"

    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("");
    const [snackbarSeverity, setSnackbarSeverity] = useState<
        "success" | "error" | "warning"
    >("success");

    const showSnackbar = (
        message: string,
        severity: "success" | "error" | "warning"
    ) => {
        setSnackbarMessage(message);
        setSnackbarSeverity(severity);
        setSnackbarOpen(true);
    };

    const [usuario, setUsuario] = useState({
        id: 0,
        nome: "",
        cpf: "",
        email: "",
        celular: "",
        telefone: "",
        senha: "",
        tipo_usuario: "Adotante",
        ativo: true,
        cep: "",
        cidade: "",
        estado: "",
        bairro: "",
        endereco: "",
        complemento: "",
        numero: "",
    });

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) =>
        event.preventDefault();

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setUsuario({ ...usuario, [e.target.name]: e.target.value });
    };

    const handleSelectChange = (e: any) => {
        setUsuario({ ...usuario, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        const idUsuario = localStorage.getItem("userId") || "1";
        axios
            .get(`${BaseUrl}/Usuario/buscar-usuario/${idUsuario}`)
            .then((res) => {
                if (res.data && res.data.data) {
                    setUsuario(res.data.data);
                } else {
                    console.error("Formato de resposta inesperado:", res.data);
                }
            })
            .catch((err) => {
                console.error("Erro ao buscar usuário:", err);
                showSnackbar("Erro ao carregar dados do usuário.", "error");
            });
    }, []);

    const validarCampos = () => {
        const novosErros: { [key: string]: string } = {};
        Object.entries(usuario).forEach(([campo, valor]) => {
            if (!valor && campo !== "complemento" && campo !== "telefone") {
                novosErros[campo] = "Campo obrigatório";
            }
        });
        setErros(novosErros);
        return Object.keys(novosErros).length === 0;
    };

    const handleSubmit = () => {
        if (!validarCampos()) {
            showSnackbar("⚠️ Preencha todos os campos obrigatórios antes de salvar.", "warning");
            return;
        }

        axios
            .put(`${BaseUrl}/Usuario/atualizar-usuario/${usuario.id}`, usuario)
            .then(() => showSnackbar("Perfil atualizado com sucesso!", "success"))
            .catch((err) => {
                console.error("Erro ao atualizar usuário:", err);
                showSnackbar("Erro ao atualizar o perfil.", "error");
            });
    };

    const handleCloseSnackbar = (
        event?: React.SyntheticEvent | Event,
        reason?: string
    ) => {
        if (reason === "clickaway") return;
        setSnackbarOpen(false);
    };

    const todosPreenchidos = Object.entries(usuario).every(
        ([campo, valor]) =>
            valor || campo === "complemento" || campo === "telefone"
    );

    return (
        <Box
            sx={{
                minHeight: "100vh",
                backgroundColor: "#fff",
                fontFamily: "Poppins, sans-serif",
                px: { xs: 2, md: 8 },
                py: 6,
            }}
        >
            <Navbar />
            <Box textAlign="center" mb={6} mt={8}>
                <Box
                    component="img"
                    src={AcapraLogo}
                    alt="logo acapra"
                    sx={{ width: 96, mb: 2 }}
                />
                <Typography variant="h5" sx={{ fontWeight: 600, color: "#54507E" }}>
                    Meu Perfil
                </Typography>
                <Typography variant="body2" sx={{ color: "#8f8b9b" }}>
                    Veja e edite suas informações pessoais abaixo.
                </Typography>
            </Box>

            <Box
                component="form"
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 4,
                    maxWidth: 1100,
                    mx: "auto",
                }}
            >
                <Box>
                    <Typography
                        variant="subtitle1"
                        sx={{
                            fontWeight: 600,
                            color: "#54507E",
                            mb: 2,
                            borderBottom: "2px solid #e0ddec",
                            pb: 0.5,
                        }}
                    >
                        Dados Pessoais
                    </Typography>

                    <Box
                        sx={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: 2,
                            justifyContent: "space-between",
                        }}
                    >
                        {renderInput("nome", "Nome", "text", usuario.nome, erros, handleChange, <Account sx={{ color: "#54507E" }} />)}
                        {renderInput("cpf", "CPF", "text", usuario.cpf, erros, handleChange)}
                        {renderInput("celular", "Celular", "text", usuario.celular, erros, handleChange, <Phone sx={{ color: "#54507E" }} />)}
                        {renderInput("email", "E-mail", "email", usuario.email, erros, handleChange, <EmailOutline sx={{ color: "#54507E" }} />)}
                        {renderInput("telefone", "Telefone", "text", usuario.telefone ?? "", erros, handleChange)}

                        <FormControl
                            fullWidth
                            variant="outlined"
                            margin="dense"
                            error={!!erros.tipo_usuario}
                            sx={{ flex: { xs: "1 1 100%", sm: "1 1 48%" } }}
                        >
                            <InputLabel id="tipo_usuario" sx={{ color: "#54507E" }}>
                                Tipo de Usuário
                            </InputLabel>
                            <Select
                                labelId="tipo_usuario"
                                name="tipo_usuario"
                                value={usuario.tipo_usuario}
                                label="Tipo de Usuário"
                                onChange={handleSelectChange}
                                sx={outlinedInputStyles}
                            >
                                <MenuItem value="Administrador">Administrador</MenuItem>
                                <MenuItem value="Voluntario">Voluntário</MenuItem>
                                <MenuItem value="Adotante">Adotante</MenuItem>
                            </Select>
                            {erros.tipo_usuario && (
                                <FormHelperText>{erros.tipo_usuario}</FormHelperText>
                            )}
                        </FormControl>

                        <FormControl
                            fullWidth
                            variant="outlined"
                            margin="dense"
                            error={!!erros.senha}
                            sx={{ flex: { xs: "1 1 100%", sm: "1 1 48%" } }}
                        >
                            <InputLabel htmlFor="senha" sx={{ color: "#54507E" }}>
                                Senha
                            </InputLabel>
                            <OutlinedInput
                                id="senha"
                                name="senha"
                                type={showPassword ? "text" : "password"}
                                value={usuario.senha}
                                onChange={handleChange}
                                label="Senha"
                                startAdornment={
                                    <InputAdornment position="start">
                                        <LockOutline sx={{ color: "#54507E" }} />
                                    </InputAdornment>
                                }
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                            sx={{ color: "#54507E" }}
                                        >
                                            {showPassword ? <EyeOff /> : <Eye />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                sx={outlinedInputStyles}
                            />
                            {erros.senha && (
                                <FormHelperText>{erros.senha}</FormHelperText>
                            )}
                        </FormControl>
                    </Box>
                </Box>

                <Box>
                    <Typography
                        variant="subtitle1"
                        sx={{
                            fontWeight: 600,
                            color: "#54507E",
                            mb: 2,
                            borderBottom: "2px solid #e0ddec",
                            pb: 0.5,
                        }}
                    >
                        Endereço
                    </Typography>

                    <Box
                        sx={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: 2,
                            justifyContent: "space-between",
                        }}
                    >
                        {renderInput("cep", "CEP", "text", usuario.cep, erros, handleChange, <MapOutline sx={{ color: "#54507E" }} />)}
                        {renderInput("cidade", "Cidade", "text", usuario.cidade, erros, handleChange, <CityVariantOutline sx={{ color: "#54507E" }} />)}
                        {renderInput("estado", "Estado", "text", usuario.estado, erros, handleChange)}
                        {renderInput("bairro", "Bairro", "text", usuario.bairro, erros, handleChange)}
                        {renderInput("endereco", "Endereço", "text", usuario.endereco, erros, handleChange, <HomeOutline sx={{ color: "#54507E" }} />)}
                        {renderInput("numero", "Número", "text", usuario.numero, erros, handleChange)}
                        {renderInput("complemento", "Complemento", "text", usuario.complemento, erros, handleChange)}
                    </Box>
                </Box>

                <Divider sx={{ my: 3 }} />

                <Button
                    variant="contained"
                    fullWidth
                    onClick={handleSubmit}
                    disabled={!todosPreenchidos}
                    sx={{
                        mt: 3,
                        height: 52,
                        backgroundColor: todosPreenchidos ? "#54507E" : "#c3bfd0",
                        fontWeight: 500,
                        fontSize: 15,
                        borderRadius: 2,
                        "&:hover": {
                            backgroundColor: todosPreenchidos ? "#3f3b65" : "#b5b2c2",
                        },
                    }}
                >
                    Salvar Alterações
                </Button>
            </Box>

            <Snackbar
                open={snackbarOpen}
                autoHideDuration={3000}
                onClose={handleCloseSnackbar}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
                <Alert
                    onClose={handleCloseSnackbar}
                    severity={snackbarSeverity}
                    sx={{ width: "100%" }}
                >
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </Box>
    );


};

const renderInput = (
    name: string,
    label: string,
    type: string,
    value: string,
    erros: { [key: string]: string },
    handleChange: any,
    startIcon?: any
) => (
    <FormControl
        fullWidth
        variant="outlined"
        margin="dense"
        error={!!erros[name]}
        sx={{ flex: { xs: "1 1 100%", sm: "1 1 48%" } }}
    >
        <InputLabel htmlFor={name} sx={{ color: "#54507E" }}>
            {label}
        </InputLabel>
        <OutlinedInput
            id={name}
            name={name}
            type={type}
            value={value || ""}
            onChange={handleChange}
            label={label}
            startAdornment={
                startIcon && <InputAdornment position="start">{startIcon}</InputAdornment>
            }
            sx={outlinedInputStyles}
        />
        {erros[name] && <FormHelperText>{erros[name]}</FormHelperText>}
    </FormControl>
);

const outlinedInputStyles = {
    background: "#f9f6fc",
    borderRadius: 2,
    fontSize: 15,
    "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "transparent",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: "#bdbdbd",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "#54507E",
        borderWidth: 2,
    },
};

export default PerfilUsuario;