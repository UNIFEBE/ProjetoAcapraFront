import Navbar from "../componentes/Navbar/Navbar";

export const FAQ = () => {
    return (
        <div style={{ paddingTop: '70px' }}>
            <Navbar />
            <div className="faq-container">
                <h1>Perguntas Frequentes</h1>
                <div className="faq-item">
                    <h2>Como posso adotar um animal?</h2>
                    <p>Para adotar um animal, você pode visitar nossa seção de adoção e preencher o formulário de interesse.</p>
                </div>
                <div className="faq-item">
                    <h2>Quais são os requisitos para adoção?</h2>
                    <p>Os requisitos incluem ter mais de 18 anos, fornecer um comprovante de residência e estar disposto a cuidar do animal.</p>
                </div>
                <div className="faq-item">
                    <h2>Vocês oferecem suporte pós-adoção?</h2>
                    <p>Sim, oferecemos suporte pós-adoção para ajudar com qualquer dúvida ou problema que você possa ter.</p>
                </div>
            </div>
        </div>
    )
}

export default FAQ;
