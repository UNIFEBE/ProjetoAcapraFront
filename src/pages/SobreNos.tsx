import { containerClasses } from "@mui/material";
import Navbar from "../componentes/Navbar/Navbar";
import ImgSobreNos1 from "../assets/ImgSobreNos1.png"
import imgSobreNos2 from "../assets/ImgSobreNos2.png"
import imgSobreNos3 from "../assets/ImgSobreNos3.png"

export const SobreNos = () => {
      const container = {
    padding: "40px 20px",
    maxWidth: "1100px",
    margin: "0 auto",
  };
    return (

        <div style={{ paddingTop: '70px' }} >
            <Navbar />
                        <div Style={{ padding: "40px 20px", maxWidth: "1100px", margin: "0 auto" }}>

                 {/* Bloco 1 */}
                <div style={{ display: "flex", gap: "30px", alignItems: "center", marginBottom: "40px" }}>
                    <img src={ImgSobreNos1} alt="Imagem 1" style={{ width: "350px", borderRadius: "10px", boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}
                    />
                    <p style={{ textAlign: "justify", lineHeight: "1.6", fontSize: "16px" }}>A ACAPRA, atualmente denominada como Associação Brusquense de Proteção aos animais,
                        foi fundada em Março de 1999, porém funcionava como uma filial da ACAPRA – Associação Catarinense
                        de Proteção aos animais situada em Florianópolis. Esta filial foi fundada em média por treze voluntários,
                        e presidida pela Sra. Dulcinea Coelho...</p>
                </div>

                 {/* Bloco 2 */}
                <div style={{ display: "flex", flexDirection: "row-reverse", gap: "30px", alignItems: "center", marginBottom: "40px" }}>
                    <img src={imgSobreNos2} alt="Imagem 2" style={{ width: "350px", borderRadius: "10px", boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}
                    />
                    <p style={{ textAlign: "justify", lineHeight: "1.6", fontSize: "16px" }}>À medida que o tempo passava tiveram um aumento significativo de voluntários, 
                        porém o trabalho voluntariado não é tarefa fácil e por vezes os voluntários ausentavam-se, 
                        como é ainda hoje e dificultava o trabalho em um todo.
                        Por diversos momentos ocorreu a troca de integrantes da diretoria e estatutos 
                        foram modificados até que a ACAPRA deixou de ser uma filial e tornou-se uma entidade autônoma, 
                        denominada como Associação Brusquense de Proteção aos Animais e por um longo período presidida pelo Sr. Moacir Giraldi, 
                        atualmente vereador da cidade de Brusque, eleito pela população para defender a causa animal.</p>
                </div>

                 {/* Bloco 3 */}
                <div style={{ display: "flex", gap: "30px", alignItems: "center" }}>
                    <img src={imgSobreNos3} alt="Imagem 3" style={{ width: "350px", borderRadius: "10px", boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}
                    />
                    <p>Atualmente esta ONG conta com vinte voluntários e a diretoria é composta por Lílian Dressel na função de presidente, 
                        Lousiane Cunha como vice presidente, Maiara Becker como primeira tesoureira, Ana Ghislandi como segunda tesoureira, 
                        Roberta Kormann como primeira secretária, Cátia Pereira como segunda secretária, e Fernanda Belli Mafra, 
                        Neliza Becker e Thais Nunes Rosa como conselheiras fiscais.</p>
                </div>
            </div>
         </div>
        
    )
}

export default SobreNos;


