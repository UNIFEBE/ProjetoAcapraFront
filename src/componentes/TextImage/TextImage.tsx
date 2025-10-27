
interface TextImageProps { 
    image: string; 
    altImg: string;
    imgSobreNos: string;
    altSobreNos: string;
    children?: React.ReactNode;
    isDireita: boolean;
    patinhaDireita?: 's' | 'n';

}

const TextImage: React.FC<TextImageProps> = ({ image, altImg, imgSobreNos, altSobreNos, children, isDireita, patinhaDireita }) => {

    const ImgDireita = isDireita ? 'row-reverse' : 'row';
    let opacidadePatinha = 0.3;
    const movePatinha = patinhaDireita==undefined ? opacidadePatinha = 0 : (patinhaDireita=='s' ? '30px': '800px');

    //'800px' : '30px';
    

    return (
        <>
            <div style={{ padding: "40px 20px", maxWidth: "1100px", margin: "0 auto" }}>

                {/* Bloco 1 */}
                <div style={{ position: "relative", display: "flex", flexDirection: ImgDireita, gap: "30px", alignItems: "center", marginBottom: "40px", flexWrap: "wrap"}}>
                    <img src={image} alt={altImg} style={{
                        position: "absolute",
                        top: "40px",
                        right: movePatinha,
                        width: "150px",
                        maxWidth: "30%",
                        opacity: opacidadePatinha,
                        zIndex: 0
                    }} />


                    <img src={imgSobreNos} alt={altSobreNos} style={{ width: "450px", borderRadius: "10px", maxWidth: "450px", boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}/>
                    <p style={{ textAlign: "justify", lineHeight: "1.6", fontSize: "18px", flex: "1 1 300px" }}>{children}</p>
                </div>
            </div>
        </>
    )
}

export default TextImage