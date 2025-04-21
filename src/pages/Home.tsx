import CardPet from "../componentes/CardPet/CardPet";
import Navbar from "../componentes/Navbar/Navbar";
import { Box } from "@mui/material";

const pets: {
    nome: string;
    raca: string;
    idade: string;
    cidade: string;
    bairro: string;
    imagem: string;
    genero: 'macho' | 'femea';
}[] = [
        {
            nome: "Oliver",
            raca: "Golden Retriever",
            idade: "6 Meses",
            cidade: "Brusque",
            bairro: "Centro",
            imagem: "https://images.dog.ceo/breeds/retriever-golden/n02099601_3007.jpg",
            genero: "macho"
        },
        {
            nome: "Luna",
            raca: "Bulldog Francês",
            idade: "2 Anos",
            cidade: "São Paulo",
            bairro: "Jardins",
            imagem: "https://images.dog.ceo/breeds/bulldog-french/n02108915_5201.jpg",
            genero: "femea"
        },
        {
            nome: "Toby",
            raca: "Labrador",
            idade: "1 Ano",
            cidade: "Rio de Janeiro",
            bairro: "Copacabana",
            imagem: "https://images.dog.ceo/breeds/labrador/n02099712_5008.jpg",
            genero: "macho"
        },
        {
            nome: "Mia",
            raca: "Poodle",
            idade: "3 Anos",
            cidade: "Curitiba",
            bairro: "Batel",
            imagem: "https://images.dog.ceo/breeds/poodle-toy/n02113624_9550.jpg",
            genero: "femea"
        },
        {
            nome: "Thor",
            raca: "Husky Siberiano",
            idade: "8 Meses",
            cidade: "Porto Alegre",
            bairro: "Centro",
            imagem: "https://images.dog.ceo/breeds/husky/n02110185_1469.jpg",
            genero: "macho"
        },
        {
            nome: "Bella",
            raca: "Afghan Hound",
            idade: "4 Anos",
            cidade: "Salvador",
            bairro: "Barra",
            imagem: "https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg",
            genero: "femea"
        }
    ];

export const Home = () => {
    return (
        <div style={{ paddingTop: '70px' }}>
            <Navbar />
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
                {pets.map((pet, index) => (
                    <CardPet
                        key={index}
                        nome={pet.nome}
                        raca={pet.raca}
                        idade={pet.idade}
                        cidade={pet.cidade}
                        bairro={pet.bairro}
                        imagem={pet.imagem}
                        genero={pet.genero}
                    />
                ))}
            </Box>
        </div>
    );
};

export default Home;
