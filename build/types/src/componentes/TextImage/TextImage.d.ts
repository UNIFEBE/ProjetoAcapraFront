interface TextImageProps {
    image: string;
    altImg: string;
    imgSobreNos: string;
    altSobreNos: string;
    children?: React.ReactNode;
    isDireita: boolean;
    patinhaDireita?: 's' | 'n';
}
declare const TextImage: React.FC<TextImageProps>;
export default TextImage;
