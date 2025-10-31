import Navbar from "../componentes/Navbar/Navbar";
import {
    Box,
    Button,
    FormControl,
    InputLabel,
    OutlinedInput,
    Switch,
    FormControlLabel,
    Typography,
    MenuItem,
    Select,
    TextField,
    FormHelperText,
    Snackbar,
    Alert
} from "@mui/material";
import { useState } from "react";
import axios from "axios";

export const CadastrarAnimal = () => {

    const [vacinado, setVacinado] = useState(false);
    const [castrado, setCastrado] = useState(false);
    const [imagem, setImagem] = useState<File | null>(null);

    const BaseUrl = "https://api-acapra.d309group.com.br"

    const [pet, setPet] = useState({
        nome: "",
        sexo: "",
        raca: "",
        data_nascimento: "",
        pelagem: "",
        descricao: "",
        porte: "",
        status: "Disponivel"
    });

    const [errors, setErrors] = useState<Record<string, boolean>>({});

    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("");
    const [snackbarSeverity, setSnackbarSeverity] = useState<
        "success" | "error" | "warning"
    >("success");

    const showSnackbar = (message: string, severity: "success" | "error" | "warning") => {
        setSnackbarMessage(message);
        setSnackbarSeverity(severity);
        setSnackbarOpen(true);
    };

    const handleSnackbarClose = () => setSnackbarOpen(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setPet((prev) => ({ ...prev, [id]: value }));
        setErrors((prev) => ({ ...prev, [id]: false }));
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setImagem(e.target.files[0]);
        }
    };

    const validateFields = () => {
        const newErrors: Record<string, boolean> = {};
        Object.keys(pet).forEach((key) => {
            if (!pet[key as keyof typeof pet] && key !== "status") {
                newErrors[key] = true;
            }
        });
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async () => {
        if (!validateFields()) {
            showSnackbar("⚠️ Preencha todos os campos obrigatórios antes de salvar.", "warning");
            return;
        }

        try {
            const payload = {
                ...pet,
                vacinado,
                castrado,
            };

            console.log("📦 Enviando dados do pet:", payload);

            const response = await axios.post(BaseUrl + "/Pet/inserir-pet", payload);

            console.log("📩 Resposta da API de inserir Pet:", response.data);

            const petId = response.data.id;

            if (!petId) {
                showSnackbar("Erro: o ID do pet não foi retornado pela API.", "error");
                return;
            }

            if (imagem) {
                const formData = new FormData();
                formData.append("image", imagem);

                console.log("📤 Enviando imagem do pet ID:", petId);

                await axios.post(
                    `${BaseUrl}/Pet/inserir-imagem-pet/${petId}`,
                    formData,
                    {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    }
                );

                console.log("Imagem enviada com sucesso!");
            }

            showSnackbar("🐾 Pet cadastrado com sucesso!", "success");
        } catch (error) {
            console.error("Erro ao cadastrar pet:", error);
            showSnackbar("Erro ao cadastrar pet. Verifique o console.", "error");
        }
    };

    // Estilos reaproveitáveis
    const inputBoxStyle = { width: "48%", marginBottom: 2 };
    const inputStyle = {
        background: "#f4f1f7",
        borderRadius: 2,
        fontSize: 15,
        "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "transparent"
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#bdbdbd"
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#54507E",
            borderWidth: 2
        }
    };

    return (
        <div style={{ paddingTop: "70px" }}>
            <Navbar />

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    padding: 4,
                    backgroundColor: "#fff",
                    borderRadius: 4,
                    margin: "auto",
                    width: "90%",
                    marginTop: "3%",
                    boxShadow: 3

                }}
            >
                {/* Imagem */}
                <Box
                    sx={{
                        width: 250,
                        height: 350,
                        backgroundColor: "#f4f4f4",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 2,
                        boxShadow: 1,
                        mr: 5,
                        flexDirection: "column"
                    }}
                >
                    {imagem ? (
                        <img
                            src={URL.createObjectURL(imagem)}
                            alt="Pré-visualização"
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                borderRadius: "8px"
                            }}
                        />
                    ) : (
                        <Typography variant="body1" align="center">
                            Imagem do pet
                        </Typography>
                    )}
                    <Button
                        variant="contained"
                        component="label"
                        sx={{ mt: 2, mb: 2, backgroundColor: "#5a4b81" }}
                    >
                        Selecionar Imagem
                        <input type="file" hidden onChange={handleImageChange} />
                    </Button>
                </Box>

                {/* Formulário */}
                <Box sx={{ flex: 1 }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                        <FormControl sx={inputBoxStyle} variant="outlined" margin="dense" error={errors.nome}>
                            <InputLabel htmlFor="nome" sx={{ color: "#54507E" }}>
                                Nome
                            </InputLabel>
                            <OutlinedInput
                                id="nome"
                                label="Nome"
                                sx={inputStyle}
                                value={pet.nome}
                                onChange={handleChange}
                            />
                            {errors.nome && <FormHelperText>Campo obrigatório</FormHelperText>}
                        </FormControl>

                        <FormControl sx={inputBoxStyle} variant="outlined" margin="dense" error={errors.sexo}>
                            <InputLabel htmlFor="sexo" sx={{ color: "#54507E" }}>Sexo</InputLabel>
                            <Select
                                id="sexo"
                                value={pet.sexo}
                                sx={inputStyle}
                                onChange={(e) =>
                                    setPet((prev) => ({ ...prev, sexo: e.target.value }))
                                }
                            >
                                <MenuItem value="F">Fêmea</MenuItem>
                                <MenuItem value="M">Macho</MenuItem>
                            </Select>
                            {errors.sexo && <FormHelperText>Campo obrigatório</FormHelperText>}
                        </FormControl>
                    </Box>

                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                        <FormControl sx={inputBoxStyle} variant="outlined" margin="dense" error={errors.raca}>
                            <InputLabel htmlFor="raca" sx={{ color: "#54507E" }}>
                                Raça
                            </InputLabel>
                            <OutlinedInput
                                id="raca"
                                label="Raça"
                                sx={inputStyle}
                                value={pet.raca}
                                onChange={handleChange}
                            />
                            {errors.raca && <FormHelperText>Campo obrigatório</FormHelperText>}
                        </FormControl>

                        <FormControl sx={inputBoxStyle} margin="dense" error={errors.data_nascimento}>
                            <TextField
                                id="data_nascimento"
                                label="Data de Nascimento"
                                type="date"
                                sx={inputStyle}
                                value={pet.data_nascimento}
                                onChange={(e) =>
                                    setPet((prev) => ({ ...prev, data_nascimento: e.target.value }))
                                }
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            {errors.data_nascimento && <FormHelperText>Campo obrigatório</FormHelperText>}
                        </FormControl>
                    </Box>

                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                        <FormControl sx={inputBoxStyle} variant="outlined" margin="dense" error={errors.pelagem}>
                            <InputLabel htmlFor="pelagem" sx={{ color: "#54507E" }}>
                                Pelagem
                            </InputLabel>
                            <OutlinedInput
                                id="pelagem"
                                label="Pelagem"
                                sx={inputStyle}
                                value={pet.pelagem}
                                onChange={handleChange}
                            />
                            {errors.pelagem && <FormHelperText>Campo obrigatório</FormHelperText>}
                        </FormControl>

                        <FormControl sx={inputBoxStyle} variant="outlined" margin="dense" error={errors.porte}>
                            <InputLabel htmlFor="porte" sx={{ color: "#54507E" }}>
                                Porte
                            </InputLabel>
                            <OutlinedInput
                                id="porte"
                                label="Porte"
                                sx={inputStyle}
                                value={pet.porte}
                                onChange={handleChange}
                            />
                            {errors.porte && <FormHelperText>Campo obrigatório</FormHelperText>}
                        </FormControl>
                    </Box>

                    <FormControl fullWidth variant="outlined" margin="dense" error={errors.descricao}>
                        <InputLabel htmlFor="descricao" sx={{ color: "#54507E" }}>
                            Descrição
                        </InputLabel>
                        <OutlinedInput
                            id="descricao"
                            label="Descrição"
                            sx={inputStyle}
                            multiline
                            rows={4}
                            value={pet.descricao}
                            onChange={handleChange}
                        />
                        {errors.descricao && <FormHelperText>Campo obrigatório</FormHelperText>}
                    </FormControl>

                    <Box sx={{ display: "flex", justifyContent: "end", mt: 2 }}>
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={vacinado}
                                    onChange={() => setVacinado(!vacinado)}
                                />
                            }
                            label="É Vacinado?"
                        />
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={castrado}
                                    onChange={() => setCastrado(!castrado)}
                                />
                            }
                            label="É Castrado?"
                        />
                    </Box>

                    <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2, mt: 3 }}>
                        <Button variant="contained" sx={{ background: "#5a4b81" }}>
                            EDITAR
                        </Button>
                        <Button variant="contained" sx={{ background: "red" }} href="/">
                            CANCELAR
                        </Button>
                        <Button
                            variant="contained"
                            sx={{ backgroundColor: "green" }}
                            onClick={handleSubmit}
                        >
                            SALVAR
                        </Button>
                    </Box>
                </Box>
            </Box>

            <Snackbar
                open={snackbarOpen}
                autoHideDuration={3000}
                onClose={handleSnackbarClose}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
                <Alert onClose={handleSnackbarClose} severity={snackbarSeverity} sx={{ width: "100%" }}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </div>
    );
};

export default CadastrarAnimal;
