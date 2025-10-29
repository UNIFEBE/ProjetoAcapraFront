import { useState, useEffect } from "react";
import axios from "axios";
import CardPet from "../componentes/CardPet/CardPet";
import Navbar from "../componentes/Navbar/Navbar";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CustomFooter from "../componentes/Footer/Footer";

export const Home = () => {
    const navigate = useNavigate();
    const [pets, setPets] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    const handleCardClick = (pet: any) => {
        navigate('/adocao', { state: { pet } });
    };

    const verificaToken = () => {
        let token = localStorage.getItem('token');
        if (!token) {
            alert('Você não está logado. Por favor, faça login para continuar.');
            navigate('/login');
            return;
        }
        const dadosToken: { [key: string]: any } = JSON.parse(atob(token.split('.')[1]));
        const exp = dadosToken.exp;
        const dataAtual = Math.floor(Date.now() / 1000);
        if (exp < dataAtual) {
            alert('Seu token expirou. Por favor, faça login novamente.');
            navigate('/login');
        } else {
            console.log('Token válido');
        }
    };

    const buscarPets = async () => {
        try {
            const response = await axios.get("http://localhost:5089/Pet/buscar-pets-disponiveis");
            const petsApi = response.data;

            // Mapeia o formato da API para o formato esperado pelo CardPet
            const petsFormatados = petsApi.map((pet: any) => ({
                id: pet.id,
                nome: pet.nome,
                raca: pet.raca,
                idade: calcularIdade(pet.data_nascimento),
                cidade: pet.cidade ?? "Não informado",
                bairro: pet.bairro ?? "Não informado",
                imagem: converterImagem(pet.imagem),
                genero: pet.sexo === "M" ? "macho" : "femea",
                descricao: pet.descricao,
                pelagem: pet.pelagem,
                vacinado: pet.vacinado,
                castrado: pet.castrado,
                porte: pet.porte
            }));

            setPets(petsFormatados);
        } catch (error) {
            console.error("Erro ao buscar pets:", error);
            alert("Não foi possível carregar os pets. Tente novamente mais tarde.");
        } finally {
            setLoading(false);
        }
    };

    // Função para converter Base64 da API em uma URL exibível no <img>
    const converterImagem = (base64: string) => {
        if (!base64) return "";
        return `data:image/jpeg;base64,${base64}`;
    };

    // Função para calcular idade com base na data de nascimento
    const calcularIdade = (dataNasc: string) => {
        if (!dataNasc) return "Idade não informada";
        const nascimento = new Date(dataNasc);
        const hoje = new Date();
        const diff = hoje.getFullYear() - nascimento.getFullYear();
        if (diff < 1) {
            const meses = hoje.getMonth() - nascimento.getMonth();
            return `${meses} meses`;
        }
        return `${diff} anos`;
    };

    useEffect(() => {
        buscarPets();
    }, []);

    return (
        <div style={{ paddingTop: '80px' }}>
            <Navbar />
            {loading ? (
                <p style={{ textAlign: 'center', marginTop: '50px' }}>Carregando pets...</p>
            ) : (
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '20px',
                        padding: '20px',
                        maxWidth: '1400px',
                        margin: '0 auto',
                        justifyItems: 'center'
                    }}
                >
                    {pets.map((pet) => (
                        <Box
                            key={pet.id}
                            onClick={() => handleCardClick(pet)}
                            sx={{
                                cursor: 'pointer',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                '&:hover': {
                                    transform: 'scale(1.05)',
                                    boxShadow: '0 12px 24px rgba(255, 167, 38, 0.4)',
                                },
                                borderRadius: 3,
                            }}
                        >
                            <CardPet
                                nome={pet.nome}
                                raca={pet.raca}
                                idade={pet.idade}
                                cidade={pet.cidade}
                                bairro={pet.bairro}
                                imagem={pet.imagem}
                                genero={pet.genero}
                            />
                        </Box>
                    ))}
                </Box>
            )}
        </div>
    );
};

export default Home;