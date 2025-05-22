import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import InputText from '../inputs/inputText/InputText';

interface Question {
  id: number;
  text: string;
}

const FormBuilder: React.FC = () => {
  // Estado para o título do formulário
  const [title, setTitle] = useState('');

  // Estado para armazenar as perguntas
  const [questions, setQuestions] = useState<Question[]>([]);

  // Handler para atualizar o título
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  // Adiciona uma nova pergunta vazia
  const handleAddQuestion = () => {
    const newQuestion: Question = {
      id: Date.now(), // ID único
      text: ''
    };
    setQuestions([...questions, newQuestion]);
  };

  // Remove a última pergunta
  const handleRemoveQuestion = () => {
    setQuestions(prev => prev.slice(0, -1));
  };

  // Atualiza o texto de uma pergunta específica
  const handleQuestionChange = (id: number, text: string) => {
    setQuestions(prev =>
      prev.map(q => (q.id === id ? { ...q, text } : q))
    );
  };

  // Simula o salvamento
  const handleSaveForm = () => {
    console.log('Formulário salvo:', { title, questions });
    alert('Formulário salvo no console!');
  };

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>Cadastrar Formulário</Typography>

      <InputText htmlFor='titulo' id='titulo' inputLabel={"Título do Formulário"} label={"Título do Formulário"} tamanho='100' valor={title} onChange={handleTitleChange}/>

      {/* Renderiza cada pergunta */}
      {questions.map((q, index) => (
        
        <InputText
            chave={q.id}
            label={`Pergunta ${index + 1}`}
            inputLabel={`Pergunta ${index + 1}`}
            id={'pergunta'}
            htmlFor={'pergunta'}
            tamanho='100'
            valor={q.text}
            onChange={(e) => handleQuestionChange(q.id, e.target.value)}
        />

      ))}

      {/* Botões de ação */}
      <Box mt={2} display="flex" gap={2}>
        <Button variant="contained" onClick={handleAddQuestion}>Adicionar Pergunta</Button>
        <Button variant="contained" sx={{background: '#FF0000'}} onClick={handleRemoveQuestion} disabled={questions.length === 0}>
          Remover Pergunta
        </Button>
        <Button variant="contained" color="success" onClick={handleSaveForm}>
          Salvar Formulário
        </Button>
      </Box>
    </Box>
  );
};

export default FormBuilder;