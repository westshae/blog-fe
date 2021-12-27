import styled from "styled-components";

const CardContainer = styled.div`

`

const CardStyle = styled.div`

`

const CardTitle = styled.h1`

`

const CardText = styled.p`

`

interface CardProps {
  title:string,
  text:string
}

const Card = (props:CardProps) =>{
  return(
    <CardStyle>
      <CardTitle>{props.title}</CardTitle>
      <CardText>{props.text}</CardText>
    </CardStyle>
  )
}

const Explore = () =>{
  return(
    <CardContainer>
      <Card title="Title" text="Text"/>
    </CardContainer>
  )
}

export default Explore;