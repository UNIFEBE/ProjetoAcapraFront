import React from 'react';
import styles from './CardPet.module.css';
import { GenderMale, GenderFemale, MapMarker } from 'mdi-material-ui';

interface CardPetProps {
    nome: string;
    raca: string;
    idade: string;
    cidade: string;
    bairro: string;
    imagem: string;
    genero: 'macho' | 'femea';
}

const CardPet: React.FC<CardPetProps> = ({ nome, raca, idade, cidade, bairro, imagem, genero }) => {
    const iconGenero = genero === 'macho' ? true : false;

    return (
        <div className={styles.card}>
            <img src={imagem} alt={nome} className={styles.image} />

            <div className={styles.info}>
                <span className={styles.descricao}>{raca} - {idade}</span>
                <h2 className={styles.nome}>{nome}</h2>

                <div className={styles.local}>
                    <MapMarker />
                    <span>{cidade} - {bairro}</span>
                </div>
            </div>

            <div className={`${styles.genero} ${genero === 'macho' ? styles.macho : styles.femea}`}>
                {iconGenero ? <GenderMale className={styles.iconGenero} /> : <GenderFemale className={styles.iconGenero} />}
            </div>
        </div>
    );
};

export default CardPet;
