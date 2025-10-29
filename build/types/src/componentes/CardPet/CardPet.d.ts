import React from 'react';
interface CardPetProps {
    nome: string;
    raca: string;
    idade: string;
    cidade: string;
    bairro: string;
    imagem: string;
    genero: 'macho' | 'femea';
}
declare const CardPet: React.FC<CardPetProps>;
export default CardPet;
