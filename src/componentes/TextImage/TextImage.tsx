
interface TextImageProps { 
    image: string; 
    altImg: string;
    imgSobreNos: string;
    altSobreNos: string;
    children?: React.ReactNode;
    isDireita: boolean;
    patinhaEsquerda?: 's' | 'n';

}

const TextImage: React.FC<TextImageProps> = ({ image, altImg, imgSobreNos, altSobreNos, children, isDireita, patinhaEsquerda }) => {

    const ImgDireita = isDireita ? 'row-reverse' : 'row';
    let opacidadePatinha = 0.7;
    const movePatinha = patinhaEsquerda==undefined ? opacidadePatinha = 0 : (patinhaEsquerda=='s' ? '30px': '800px');

    //'800px' : '30px';
    

    return (
        <>
            <div style={{ padding: "40px 20px", maxWidth: "1100px", margin: "0 auto" }}>

                {/* Bloco 1 */}
                <div style={{ position: "relative", display: "flex", flexDirection: ImgDireita,  gap: "30px", alignItems: "center", marginBottom: "40px" }}>
                    <img src={image} alt={altImg} style={{
                        position: "absolute",
                        top: "40px",
                        right: movePatinha,
                        width: "200px",
                        opacity: opacidadePatinha,
                        zIndex: 0
                    }} />


                    <img src={imgSobreNos} alt={altSobreNos} style={{ width: "450px", borderRadius: "10px", boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}/>
                    <p style={{ textAlign: "justify", lineHeight: "1.6", fontSize: "20px" }}>{children}</p>
                </div>
            </div>
        </>
    )
}

export default TextImage