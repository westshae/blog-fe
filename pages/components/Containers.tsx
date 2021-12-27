import styled from "styled-components";

//Overall container for all components on the page, wraps around navbar and content
const Container = styled.div`
    background-color:#212121;
    display:flex;
    flex-direction:column;
    overflow:visible;
    height: 100vh;
    width: 100vw;
`

const Content = styled.div`
    margin-bottom:3%;
    background-clip:margin-box;
    background-color:transparent;
    display:flex;
    flex-direction:column;
    overflow-x:hidden;
    overflow-y:scroll;
    padding-left:20%;
    padding-right:20%;

    
    @media only screen
    and (max-device-width: 480px){
      padding:0px;
    }
`



export {Container, Content};