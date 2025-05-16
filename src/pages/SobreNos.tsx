import Navbar from "../componentes/Navbar/Navbar";
import imgSobreNos1 from "../assets/ImgSobreNos1.png"
import imgSobreNos2 from "../assets/ImgSobreNos2.png"
import imgSobreNos3 from "../assets/ImgSobreNos3.png"
import patinhas from "../assets/Patinhas.png"
import TextImage from "../componentes/TextImage/TextImage"
import CustomFooter from "../componentes/Footer/Footer";

export const SobreNos = () => {

    return (

        <div style={{ paddingTop: '70px'}} >
            <Navbar />

            <TextImage altImg={patinhas} image={patinhas} imgSobreNos={imgSobreNos1} altSobreNos={"imagem 1"} isDireita={false} patinhaEsquerda={'s'}>
                A ACAPRA, atualmente denominada como Associação Brusquense de Proteção aos animais,
                        foi fundada em Março de 1999, porém funcionava como uma filial da ACAPRA – Associação Catarinense
                        de Proteção aos animais situada em Florianópolis. Esta filial foi fundada em média por treze voluntários,
                        e presidida pela Sra. Dulcinea Coelho...
            </TextImage>

            <TextImage altImg={patinhas} image={patinhas} imgSobreNos={imgSobreNos2} altSobreNos={"imagem 2"} isDireita={true} patinhaEsquerda={'n'}>
                À medida que o tempo passava tiveram um aumento significativo de voluntários, 
                        porém o trabalho voluntariado não é tarefa fácil e por vezes os voluntários ausentavam-se, 
                        como é ainda hoje e dificultava o trabalho em um todo.
                        Por diversos momentos ocorreu a troca de integrantes da diretoria e estatutos 
                        foram modificados até que a ACAPRA deixou de ser uma filial e tornou-se uma entidade autônoma, 
                        denominada como Associação Brusquense de Proteção aos Animais e por um longo período presidida pelo Sr. Moacir Giraldi, 
                        atualmente vereador da cidade de Brusque, eleito pela população para defender a causa animal.
            </TextImage>

            <TextImage altImg={patinhas} image={patinhas} imgSobreNos={imgSobreNos3} altSobreNos={"imagem 3"} isDireita={false}>
                Atualmente esta ONG conta com vinte voluntários e a diretoria é composta por Lílian Dressel na função de presidente, 
                        Lousiane Cunha como vice presidente, Maiara Becker como primeira tesoureira, Ana Ghislandi como segunda tesoureira, 
                        Roberta Kormann como primeira secretária, Cátia Pereira como segunda secretária, e Fernanda Belli Mafra, 
                        Neliza Becker e Thais Nunes Rosa como conselheiras fiscais.
            </TextImage>
            <CustomFooter/>
         </div>
        
    )
}

export default SobreNos;
