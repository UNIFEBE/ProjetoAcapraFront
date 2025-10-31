import Navbar from "../componentes/Navbar/Navbar";
import CustomFooter from "../componentes/Footer/Footer";
import InputText from "../componentes/inputs/inputText/InputText";

import {
  Box,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Snackbar,
  Alert,
} from "@mui/material";
import { useState } from "react";
import axios from "axios";

export const CadastrarVoluntario = () => {
  // const [imagemPerfil, setImagemPerfil] = useState<string | null>(null);
  const [pesquisa, setPesquisa] = useState("");
  const BaseUrl = "https://api-acapra.d309group.com.br";

  const tipoUsuario = localStorage.getItem("tipoUsuario");

  if (!tipoUsuario || tipoUsuario.toLowerCase() !== "administrador") {
    window.location.href = "/";
  }

  const [formData, setFormData] = useState({
    id: 0,
    nome: "",
    email: "",
    cpf: "",
    celular: "",
    telefone: "",
    senha: "",
    confirmarSenha: "",
    tipo_usuario: "Voluntario",
    cep: "",
    cidade: "",
    estado: "",
    bairro: "",
    endereco: "",
    complemento: "",
    numero: "",
  });

  const [originalData, setOriginalData] = useState<typeof formData | null>(null);

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<
    "success" | "error" | "info" | "warning"
  >("info");

  const handleCloseSnackbar = () => setSnackbarOpen(false);

  // const handleImagemChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = event.target.files?.[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onloadend = () => setImagemPerfil(reader.result as string);
  //     reader.readAsDataURL(file);
  //   }
  // };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handlePesquisar = async () => {
    if (!pesquisa.trim()) {
      setSnackbarMessage("Digite algo para pesquisar!");
      setSnackbarSeverity("warning");
      setSnackbarOpen(true);
      return;
    }

    try {
      const response = await axios.get(BaseUrl + "/Usuario/buscar-usuarios");
      const usuarios = Array.isArray(response.data)
        ? response.data
        : [response.data];

      const usuarioEncontrado = usuarios.find(
        (u: any) =>
          u.nome.toLowerCase().includes(pesquisa.toLowerCase()) ||
          u.email.toLowerCase().includes(pesquisa.toLowerCase()) ||
          u.cpf.replace(/\D/g, "") === pesquisa.replace(/\D/g, "")
      );

      if (usuarioEncontrado) {
        setSnackbarMessage("Usuário encontrado!");
        setSnackbarSeverity("success");
        setSnackbarOpen(true);

        const data = {
          id: usuarioEncontrado.id,
          nome: usuarioEncontrado.nome || "",
          email: usuarioEncontrado.email || "",
          cpf: usuarioEncontrado.cpf || "",
          celular: usuarioEncontrado.celular || "",
          telefone: usuarioEncontrado.telefone || "",
          senha: usuarioEncontrado.senha || "",
          confirmarSenha: usuarioEncontrado.senha || "",
          tipo_usuario: usuarioEncontrado.tipo_usuario || "Voluntario",
          cep: usuarioEncontrado.cep || "",
          cidade: usuarioEncontrado.cidade || "",
          estado: usuarioEncontrado.estado || "",
          bairro: usuarioEncontrado.bairro || "",
          endereco: usuarioEncontrado.endereco || "",
          complemento: usuarioEncontrado.complemento || "",
          numero: usuarioEncontrado.numero || "",
        };
        setFormData(data);
        setOriginalData(data);
      } else {
        setSnackbarMessage("Usuário não encontrado!");
        setSnackbarSeverity("warning");
        setSnackbarOpen(true);
      }
    } catch (error) {
      console.error("Erro ao buscar usuário:", error);
      setSnackbarMessage("Erro ao buscar usuário. Verifique a API.");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    }
  };

  const handleEditar = async () => {
    if (!originalData) {
      setSnackbarMessage("Pesquise um usuário primeiro!");
      setSnackbarSeverity("warning");
      setSnackbarOpen(true);
      return;
    }

    const camposAlterados = Object.keys(formData).some(
      (key) => (formData as any)[key] !== (originalData as any)[key]
    );

    if (!camposAlterados) {
      setSnackbarMessage("Nenhum dado foi alterado!");
      setSnackbarSeverity("info");
      setSnackbarOpen(true);
      return;
    }

    try {
      await axios.put(
        BaseUrl + `/Usuario/atualizar-usuario/${formData.id}`,
        {
          ...formData,
          ativo: true,
        }
      );
      setSnackbarMessage("Usuário atualizado com sucesso!");
      setSnackbarSeverity("success");
      setSnackbarOpen(true);
      setOriginalData(formData);
    } catch (error) {
      console.error("Erro ao atualizar usuário:", error);
      setSnackbarMessage("Erro ao atualizar usuário. Verifique a API.");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    }
  };

  const handleDeletar = async () => {
    if (!formData.id) {
      setSnackbarMessage("Pesquise um usuário antes de deletar!");
      setSnackbarSeverity("warning");
      setSnackbarOpen(true);
      return;
    }

    const confirmacao = window.confirm(
      "Tem certeza que deseja deletar este usuário?"
    );
    if (!confirmacao) return;

    try {
      await axios.delete(BaseUrl + `/Usuario/deletar-usuario/${formData.id}`);
      setSnackbarMessage("Usuário deletado com sucesso!");
      setSnackbarSeverity("success");
      setSnackbarOpen(true);

      setFormData({
        id: 0,
        nome: "",
        email: "",
        cpf: "",
        celular: "",
        telefone: "",
        senha: "",
        confirmarSenha: "",
        tipo_usuario: "Voluntario",
        cep: "",
        cidade: "",
        estado: "",
        bairro: "",
        endereco: "",
        complemento: "",
        numero: "",
      });
      setOriginalData(null);
      // setImagemPerfil(null);
    } catch (error) {
      console.error("Erro ao deletar usuário:", error);
      setSnackbarMessage("Erro ao deletar usuário. Verifique a API.");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    }
  };

  return (
    <div
      style={{
        paddingTop: "70px",
        display: "flex",
        minHeight: "100vh",
        flexDirection: "column",
      }}
    >
      <Navbar />

      {/* PESQUISAR */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 4,
          backgroundColor: "#fff",
          borderRadius: 4,
          margin: "auto",
          width: "90%",
          marginTop: "3%",
          boxShadow: 3,
          gap: 2,
        }}
      >
        <InputText
          htmlFor="pesquisarVoluntario"
          id="pesquisarVoluntario"
          label="Pesquisar Voluntário"
          inputLabel="Pesquisar Voluntário"
          tamanho="100"
          value={pesquisa}
          onChange={(e: any) => setPesquisa(e.target.value)}
        />
        <Button
          variant="contained"
          sx={{ backgroundColor: "#5a4b81" }}
          onClick={handlePesquisar}
        >
          PESQUISAR
        </Button>
      </Box>

      {/* FORMULÁRIO */}
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
          boxShadow: 3,
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <InputText id="nome" label="Nome" value={formData.nome} onChange={handleChange} tamanho="48" />
            <InputText id="email" label="E-mail" value={formData.email} onChange={handleChange} tamanho="48" />
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <InputText id="cpf" label="CPF" value={formData.cpf} onChange={handleChange} tamanho="48" />
            <InputText id="celular" label="Celular" value={formData.celular} onChange={handleChange} tamanho="48" />
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <InputText id="telefone" label="Telefone" value={formData.telefone} onChange={handleChange} tamanho="48" />
            <InputText id="cep" label="CEP" value={formData.cep} onChange={handleChange} tamanho="48" />
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <InputText id="cidade" label="Cidade" value={formData.cidade} onChange={handleChange} tamanho="48" />
            <InputText id="estado" label="Estado" value={formData.estado} onChange={handleChange} tamanho="48" />
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <InputText id="bairro" label="Bairro" value={formData.bairro} onChange={handleChange} tamanho="48" />
            <InputText id="endereco" label="Endereço" value={formData.endereco} onChange={handleChange} tamanho="48" />
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <InputText id="numero" label="Número" value={formData.numero} onChange={handleChange} tamanho="48" />
            <InputText id="complemento" label="Complemento" value={formData.complemento} onChange={handleChange} tamanho="48" />
          </Box>

          {/* COMBOBOX */}
          <Box sx={{ display: "flex", justifyContent: "start", mt: 2 }}>
            <FormControl sx={{ minWidth: 200 }}>
              <InputLabel id="tipo-usuario-label">Tipo de Usuário</InputLabel>
              <Select
                labelId="tipo-usuario-label"
                id="tipo_usuario"
                value={formData.tipo_usuario}
                label="Tipo de Usuário"
                onChange={(e) =>
                  setFormData({ ...formData, tipo_usuario: e.target.value })
                }
              >
                <MenuItem value="Voluntario">Voluntário</MenuItem>
                <MenuItem value="Adotante">Adotante</MenuItem>
                <MenuItem value="administrador">Administrador</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2, mt: 3 }}>
            <Button variant="contained" sx={{ background: "#5a4b81" }} onClick={handleEditar}>EDITAR</Button>
            <Button variant="contained" sx={{ background: "red" }} onClick={handleDeletar}>DELETAR</Button>
          </Box>
        </Box>
      </Box>

      <CustomFooter />

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
    </div>
  );
};

export default CadastrarVoluntario;
