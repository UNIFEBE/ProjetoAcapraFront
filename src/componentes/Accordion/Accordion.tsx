import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import { ChevronDown } from 'mdi-material-ui'

interface AccordionProps {
    
    titulo: string;
    children?: React.ReactNode;

}

const CustomAccordion: React.FC<AccordionProps> = ({ titulo, children }) => {

    return (
        <>
            <Accordion style={{ marginTop: '10px' }}>
                <AccordionSummary
                    expandIcon={<ChevronDown />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Typography component="span"><u>{titulo}</u></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {children}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </>
    )
}

export default CustomAccordion