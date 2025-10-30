import Navbar from "../componentes/Navbar/Navbar";
import {
    Box,
    Button,
    FormControl,
    InputLabel,
    OutlinedInput,
    FormHelperText,
    Snackbar,
    Alert,
    Typography,
    RadioGroup,
    FormControlLabel,
    Radio,
    Select,
    MenuItem,
    CircularProgress,
} from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

export const FormAdocao = () => {
    const [perguntas, setPerguntas] = useState<any[]>([]);
    const [respostas, setRespostas] = useState<Record<number, string>>({});
    const [errors, setErrors] = useState<Record<number, boolean>>({});
    const [loading, setLoading] = useState(true);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("");
    const [snackbarSeverity, setSnackbarSeverity] = useState<
        "success" | "error" | "warning"
    >("success");

    // ID do usuário — pode ser substituído depois pelo usuário logado
    const idUsuario = 1;

    useEffect(() => {
        const fetchPerguntas = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:5089/FormularioPergunta/buscar-perguntas"
                );
                setPerguntas(response.data);
            } catch (error) {
                console.error("Erro ao buscar perguntas:", error);
                showSnackbar("Erro ao carregar perguntas do formulário.", "error");
            } finally {
                setLoading(false);
            }
        };
        fetchPerguntas();
    }, []);

    const showSnackbar = (
        message: string,
        severity: "success" | "error" | "warning"
    ) => {
        setSnackbarMessage(message);
        setSnackbarSeverity(severity);
        setSnackbarOpen(true);
    };

    const handleSnackbarClose = () => setSnackbarOpen(false);

    const handleChange = (id: number, value: string) => {
        setRespostas((prev) => ({ ...prev, [id]: value }));
        setErrors((prev) => ({ ...prev, [id]: false }));
    };

    const validateFields = () => {
        const newErrors: Record<number, boolean> = {};
        perguntas.forEach((p) => {
            if (p.obrigatorio && !respostas[p.id]) {
                newErrors[p.id] = true;
            }
        });
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async () => {
        if (!validateFields()) {
            showSnackbar("⚠️ Preencha todos os campos obrigatórios antes de enviar.", "warning");
            return;
        }

        const payload = perguntas.map((p) => ({
            perguntaId: p.id,
            resposta: respostas[p.id],
        }));

        console.log("📦 Enviando respostas:", payload);

        try {
            await axios.post(
                `http://localhost:5089/FormularioRespostas/cadastrar-respostas/${idUsuario}`,
                payload
            );
            showSnackbar("🐾 Formulário de adoção enviado com sucesso!", "success");
            setRespostas({});
        } catch (error) {
            console.error("Erro ao enviar respostas:", error);
            showSnackbar("Erro ao enviar respostas. Verifique o console.", "error");
        }
    };

    // Estilos
    const inputBoxStyle = { width: "100%", marginBottom: 2 };
    const inputStyle = {
        background: "#f4f1f7",
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

    if (loading) {
        return (
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh",
                }}
            >
                <CircularProgress sx={{ color: "#54507E" }} />
            </Box>
        );
    }

    return (
        <div style={{ paddingTop: "70px" }}>
            <Navbar />

            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    padding: 4,
                    backgroundColor: "#fff",
                    borderRadius: 4,
                    margin: "auto",
                    width: "90%",
                    marginTop: "3%",
                    boxShadow: 3,
                }}
            >
                <Typography variant="h5" sx={{ mb: 3, color: "#54507E" }}>
                    🐶 Formulário de Adoção
                </Typography>

                {perguntas.map((p) => (
                    <Box key={p.id} sx={{ mb: 3 }}>
                        <Typography sx={{ mb: 1, fontWeight: "bold", color: "#333" }}>
                            {p.pergunta} {p.obrigatorio && <span style={{ color: "red" }}>*</span>}
                        </Typography>

                        {/* Campo de texto */}
                        {p.tipo_resposta === "Texto" && (
                            <FormControl sx={inputBoxStyle} variant="outlined" error={errors[p.id]}>
                                <OutlinedInput
                                    id={`pergunta-${p.id}`}
                                    sx={inputStyle}
                                    value={respostas[p.id] || ""}
                                    onChange={(e) => handleChange(p.id, e.target.value)}
                                    multiline
                                    rows={2}
                                />
                                {errors[p.id] && <FormHelperText>Campo obrigatório</FormHelperText>}
                            </FormControl>
                        )}

                        {/* Booleano (Sim/Não) */}
                        {p.tipo_resposta === "Booleano" && (
                            <FormControl error={errors[p.id]}>
                                <RadioGroup
                                    row
                                    value={respostas[p.id] || ""}
                                    onChange={(e) => handleChange(p.id, e.target.value)}
                                >
                                    <FormControlLabel value="Sim" control={<Radio />} label="Sim" />
                                    <FormControlLabel value="Não" control={<Radio />} label="Não" />
                                </RadioGroup>
                                {errors[p.id] && <FormHelperText>Campo obrigatório</FormHelperText>}
                            </FormControl>
                        )}

                        {/* Selecionar (para perguntas de escolha) */}
                        {p.tipo_resposta === "Selecionar" && (
                            <FormControl sx={{ width: "50%" }} variant="outlined" error={errors[p.id]}>
                                <InputLabel sx={{ color: "#54507E" }}>Selecione</InputLabel>
                                <Select
                                    label="Selecione"
                                    value={respostas[p.id] || ""}
                                    sx={inputStyle}
                                    onChange={(e) => handleChange(p.id, e.target.value)}
                                >
                                    <MenuItem value="Sim">Sim</MenuItem>
                                    <MenuItem value="Não">Não</MenuItem>
                                    <MenuItem value="Depende">Depende</MenuItem>
                                </Select>
                                {errors[p.id] && <FormHelperText>Campo obrigatório</FormHelperText>}
                            </FormControl>
                        )}
                    </Box>
                ))}

                {/* Botões */}
                <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2, mt: 3 }}>
                    <Button variant="contained" sx={{ background: "red" }} href="/">
                        CANCELAR
                    </Button>
                    <Button
                        variant="contained"
                        sx={{ backgroundColor: "green" }}
                        onClick={handleSubmit}
                    >
                        ENVIAR
                    </Button>
                </Box>

                {/* Snackbar */}
                <Snackbar
                    open={snackbarOpen}
                    autoHideDuration={3000}
                    onClose={handleSnackbarClose}
                    anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                >
                    <Alert
                        onClose={handleSnackbarClose}
                        severity={snackbarSeverity}
                        sx={{ width: "100%" }}
                    >
                        {snackbarMessage}
                    </Alert>
                </Snackbar>
            </Box>
        </div>
    );
};

export default FormAdocao;
