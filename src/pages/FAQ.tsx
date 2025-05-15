import Navbar from "../componentes/Navbar/Navbar";
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { ChevronDown } from 'mdi-material-ui';
import CustomAccordion from "../componentes/Accordion/Accordion";



export const FAQ = () => {
  return (
    <div style={{ paddingTop: '70px', marginTop: '20px' }}>
      <Navbar />
      <div style={{ paddingInline: '10%', marginTop: '20px' }}>

        <CustomAccordion titulo={"Quais serviços a ACAPRA oferece?"} >
          A ACAPRA realiza resgates de animais em situação de rua ou vítimas de maus-tratos,
          priorizando casos emergenciais. Contudo, devido a limitações de recursos e pessoal,
          a ONG não possui sede própria, abrigo ou veterinários remunerados,
          dependendo de voluntários e parcerias com clínicas veterinárias para atender os animais resgatados.
        </CustomAccordion>

        <CustomAccordion titulo={"Como posso denunciar maus-tratos a animais?"}>
          As denúncias podem ser feitas diretamente à ACAPRA ou à Polícia Civil.
          A ONG, em parceria com as autoridades, avalia as situações e,
          quando necessário, realiza o resgate dos animais.
          É importante ressaltar que a ACAPRA não é obrigada a atender todas as denúncias,
          mas se esforça para ajudar dentro de suas possibilidades.
        </CustomAccordion>

        <CustomAccordion titulo={"A ACAPRA realiza eventos para arrecadar fundos?"}>
          Sim, a ACAPRA participa de feiras e eventos locais para divulgar sua causa e buscar apoio da comunidade.
          Esses eventos são essenciais para arrecadar recursos e aumentar a conscientização sobre a importância da proteção animal.
        </CustomAccordion>

        <CustomAccordion titulo={"Como posso entrar em contato com a ACAPRA?"}>
          Você pode entrar em contato por meio dos seguintes canais:
          <br />
          Telefone: (47) 9991-1652
          <br />
          Endereço: Rua Florianópolis, 1527, Bairro Primeiro de Maio, Brusque/SC - CEP 88353-501
          <br />
          E-mail: apedami@bol.com.br
        </CustomAccordion>
      </div>
    </div>
  )
}

export default FAQ;