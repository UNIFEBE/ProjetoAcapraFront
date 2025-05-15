import { FormControl, InputLabel, OutlinedInput } from '@mui/material'
import ImgSobreNos1 from "../assets/ImgSobreNos1.png"
import imgSobreNos2 from "../assets/ImgSobreNos2.png"
import imgSobreNos3 from "../assets/ImgSobreNos3.png"
import patinhas from "../assets/Patinhas.png"

interface TextImageProps { 
    image: string; 
    altImg: string;
    imgSobreNos: string;
    altSobreNos: string;
    texto: string;
    ImgDireita: 'row'|'row-reverse';

}

const TextImage: React.FC<TextImageProps> = ({ image, altImg, imgSobreNos, altSobreNos, texto, ImgDireita }) => {


    return (
        <>
            <div style={{ padding: "40px 20px", maxWidth: "1100px", margin: "0 auto" }}>

                {/* Bloco 1 */}
                <div style={{ position: "relative", display: "flex", flexDirection: ImgDireita,  gap: "30px", alignItems: "center", marginBottom: "40px" }}>
                    <img src={image} alt={altImg} style={{
                        position: "absolute",
                        top: "40px",
                        right: "30px",
                        width: "200px",
                        opacity: 0.7,
                        zIndex: 0
                    }} />


                    <img src={imgSobreNos} alt={altSobreNos} style={{ width: "450px", borderRadius: "10px", boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}
                    />
                    <p style={{ textAlign: "justify", lineHeight: "1.6", fontSize: "20px" }}>{texto}</p>
                </div>
            </div>
        </>
    )
}

export default TextImage