import Navbar from "../componentes/Navbar/Navbar";
import CustomFooter from "../componentes/Footer/Footer";
import InputText from "../componentes/inputs/inputText/InputText";

import {
  Box,
  Button,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { useState } from "react";
import axios from "axios";

export const CadastrarVoluntario = () => {
  const [imagemPerfil, setImagemPerfil] = useState<string | null>(null);
  const [pesquisa, setPesquisa] = useState("");

  const [formData, setFormData] = useState({
    id: 0, // adicionado para update
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

  // Função para carregar imagem
  const handleImagemChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImagemPerfil(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  // Atualiza os campos do formulário
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Busca o voluntário na API
  const handlePesquisar = async () => {
    if (!pesquisa.trim()) {
      alert("Digite algo para pesquisar!");
      return;
    }

    try {
      const response = await axios.get("http://localhost:5089/Usuario/buscar-usuarios"); 
      const usuarios = Array.isArray(response.data) ? response.data : [response.data]; 

      const usuarioEncontrado = usuarios.find(
        (u: any) =>
          u.nome.toLowerCase().includes(pesquisa.toLowerCase()) ||
          u.email.toLowerCase().includes(pesquisa.toLowerCase()) ||
          u.cpf.replace(/\D/g, "") === pesquisa.replace(/\D/g, "")
      );

      if (usuarioEncontrado) {
        alert("Usuário encontrado!");
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
        alert("Usuário não encontrado!");
      }
    } catch (error) {
      console.error("Erro ao buscar usuário:", error);
      alert("Erro ao buscar usuário. Verifique a API.");
    }
  };

  // Função para editar usuário
  const handleEditar = async () => {
    if (!originalData) {
      alert("Pesquise um usuário primeiro!");
      return;
    }

    const camposAlterados = Object.keys(formData).some(
      key => (formData as any)[key] !== (originalData as any)[key]
    );

    if (!camposAlterados) {
      alert("Nenhum dado foi alterado!");
      return;
    }

    try {
      await axios.put(`http://localhost:5089/Usuario/atualizar-usuario/${formData.id}`, {
        ...formData,
        ativo: true,
      });
      alert("Usuário atualizado com sucesso!");
      setOriginalData(formData);
    } catch (error) {
      console.error("Erro ao atualizar usuário:", error);
      alert("Erro ao atualizar usuário. Verifique a API.");
    }
  };

  // Função para deletar usuário
  const handleDeletar = async () => {
    if (!formData.id) {
      alert("Pesquise um usuário antes de deletar!");
      return;
    }

    const confirmacao = window.confirm("Tem certeza que deseja deletar este usuário?");
    if (!confirmacao) return;

    try {
      await axios.delete(`http://localhost:5089/Usuario/deletar-usuario/${formData.id}`);
      alert("Usuário deletado com sucesso!");
      // Limpa o formulário após exclusão
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
      setImagemPerfil(null);
    } catch (error) {
      console.error("Erro ao deletar usuário:", error);
      alert("Erro ao deletar usuário. Verifique a API.");
    }
  };

  const handleSalvar = () => {
    console.log("Dados do voluntário:", formData);
    // Aqui você pode fazer o POST
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
        {/* IMAGEM DE PERFIL */}
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
            position: "relative",
            overflow: "hidden",
          }}
        >
          {imagemPerfil ? (
            <img
              src={imagemPerfil}
              alt="Imagem do Voluntário"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
          ) : (
            <Typography variant="body1" align="center">
              Imagem de Perfil
            </Typography>
          )}

          <input
            type="file"
            accept="image/*"
            onChange={handleImagemChange}
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              opacity: 0,
              cursor: "pointer",
            }}
          />
        </Box>

        {/* CAMPOS DO FORM */}
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

          {/* COMBOBOX DE TIPO DE USUÁRIO */}
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
    </div>
  );
};

export default CadastrarVoluntario;
