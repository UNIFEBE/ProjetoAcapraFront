import React from 'react';
import { Box } from '@mui/material';

const footerStyle: React.CSSProperties = {
  backgroundColor: '#5a4b81', 
  color: '#ffffff',          
  padding: '20px 0',          
  display: 'flex',            
  flexDirection: 'column',  
  justifyContent: 'center',   
  alignItems: 'center',       
  textAlign: 'center',        
  gap: '8px',  
  marginTop: '70px'              
};

const CustomFooter: React.FC = () => {
  return (
  <footer style={footerStyle}>
    
   {/* Contêiner em linha para as informações */}
   <Box 
     sx={{
       display: 'flex', 
       flexDirection: 'row', // lado a lado
       gap: '100px',          // distância entre colunas
       flexWrap: 'wrap',     // para quebrar em várias linhas se for mobile
       justifyContent: 'center'
     }}
   >
     {/* Cada Box aqui vira uma coluna de informação */}
     <Box>
       <strong>📞 Telefone:</strong>
       <p>(47) 99991-1652</p>
     </Box>

     <Box>
       <strong>📍 Endereço:</strong>
       <p>
         Rua Florianópolis, 1527<br />
         Bairro Primeiro de Maio<br />
         Brusque/SC – CEP 88353-501
       </p>
     </Box>

     <Box>
       <strong>✉️ E-mail:</strong>
       <p>
         <a 
           href="mailto:apedami@bol.com.br" 
           style={{ color: '#ffffff', textDecoration: 'none' }}
         >
           apedami@bol.com.br
         </a>
       </p>
     </Box>
   </Box>
   <p>© {new Date().getFullYear()} ACAPRA. Todos os direitos reservados.</p>
  </footer>
);
};

export default CustomFooter;
