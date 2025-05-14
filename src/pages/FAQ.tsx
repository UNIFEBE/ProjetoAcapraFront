import Navbar from "../componentes/Navbar/Navbar";
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {ChevronDown} from 'mdi-material-ui'; 



export const FAQ = () => {
    return (
        <div style={{ paddingTop: '70px', marginTop: '20px'}}>
            <Navbar />
            <div style={{paddingInline: '10%', marginTop: '20px'}}>
        <Accordion style={{marginTop: '10px'}}>
        <AccordionSummary
          expandIcon={<ChevronDown />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span"><u>Como posso adotar um animal?</u></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Para adotar um animal, você pode visitar nossa seção de adoção e preencher o formulário de interesse.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{marginTop: '10px'}}>
        <AccordionSummary
          expandIcon={<ChevronDown />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span"><u>Quais são os requisitos para adoção?</u></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Sim, oferecemos suporte pós-adoção para ajudar com qualquer dúvida ou problema que você possa ter.
          </Typography>
        </AccordionDetails>
      </Accordion>
            </div>
        </div>
    )
}

export default FAQ;
