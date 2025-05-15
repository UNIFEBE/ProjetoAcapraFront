// FormBuilder.tsx
import React, { useState } from "react";
import { TextField, Button, Box, Typography, IconButton } from "@mui/material";
import InputText from "../Inputs/InputText/InputText";

interface Question {
    id: number;
    text: string;
}

const FormBuilder: React.FC = () => {
    // 1. Estado para o título do formulário
    const [title, setTitle] = useState("");

    // 2. Estado para as perguntas, iniciando com uma pergunta vazia
    const [questions, setQuestions] = useState<Question[]>([
        { id: 1, text: "" },
    ]);

    // 3. Handler para atualizar o título
    const handleTitleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setTitle(e.target.value);
    };

    // 4. Handler para atualizar o texto de uma pergunta pelo seu id
    const handleQuestionChange = (
        id: number,
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setQuestions((prev) =>
            prev.map((q) =>
                q.id === id
                    ? { ...q, text: e.target.value } // só alteramos a pergunta certa
                    : q
            )
        );
    };

    // 5. Adicionar nova pergunta com id único (incremental)
    const addQuestion = () => {
        const nextId = questions.length
            ? Math.max(...questions.map((q) => q.id)) + 1
            : 1;
        setQuestions((prev) => [...prev, { id: nextId, text: "" }]);
    };

    // 6. (Opcional) Remover uma pergunta
    const removeQuestion = (id: number) => {
        setQuestions((prev) => prev.filter((q) => q.id !== id));
    };

    // 7. (Opcional) Função de “salvar” (por enquanto, apenas logar)
    const handleSave = () => {
        console.log({ title, questions });
        alert("Veja o console com título e perguntas!");
    };

    return (
        <Box sx={{ maxWidth: 600, mx: "auto", p: 2 }}>
            <Typography variant="h5" gutterBottom>
                Criar novo formulário
            </Typography>

            {/* Campo do título */}
            <InputText htmlFor={"tituloForm"} id={"tituloForm"} inputLabel={"Título do Formulário"} label={"Título do Formulário"} tamanho={'100'}/>

            {/* Campos de perguntas dinâmicas */}
            {questions.map((q) => (
                <Box
                    key={q.id}
                    sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 1, mt: 2 }}
                >
                    
                    <InputText htmlFor={"pergunta"} id={"pergunta"} inputLabel={`Pergunta ${q.id}`} label={`Pergunta ${q.id}`} tamanho={'100'}/>
                    {/* Botão para remover, se quiser */}
                    {questions.length > 1 && (
                        <IconButton
                            aria-label="remover"
                            onClick={() => removeQuestion(q.id)}
                        >
                            
                        </IconButton>
                    )}
                </Box>
            ))}

            {/* Botão para adicionar nova pergunta */}
            <Button onClick={() => removeQuestion(q.id)} variant="contained" color="warning">- Remover pergunta</Button>
            <Button onClick={addQuestion} variant="contained" color="warning">+ Adicionar pergunta</Button>

            {/* Botão para “salvar” */}
            <Button
                variant="contained" sx={{ backgroundColor: '#f68b1f' }} onClick={handleSave}>Salvar formulário</Button>
        </Box>
    );
};

export default FormBuilder;
