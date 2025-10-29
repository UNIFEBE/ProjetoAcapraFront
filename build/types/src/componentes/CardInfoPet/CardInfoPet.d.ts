interface CardInfoPetProps {
    titulo: string;
    valor: string;
    tipo: 'idade' | 'sexoM' | 'sexoF' | 'castrado' | 'vacinado';
}
declare const CardInfoPet: React.FC<CardInfoPetProps>;
export default CardInfoPet;
