//Package imports
import styled from "styled-components";

//CSS for footer
const StyledFooter = styled.div`
    height:5rem;
    background-color:transparent;
    display:flex;
    justify-content:center;
    align-items:center;
    position: absolute;
    width:100vw;
    bottom: 0px;
    left: 0px;
`

//Style for navigation buttons
const Button = styled.button`
    background:transparent;
    color: #322759 ;
    border:none;
    font-size:1.25em;
    font-family:Helvetica;
    :hover{
        text-decoration:underline 2px;
    }
`

const Section = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    gap:2%;
    height:100%;
`

//Component returned
const Footer = () =>{
    return(
        <StyledFooter>
            <Section>

            </Section>
        </StyledFooter>
    )
}

export default Footer;