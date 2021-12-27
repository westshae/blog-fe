import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  display:grid;
  grid-template-columns:1fr 1fr;
`

const CardStyle = styled.div`
  background:#dfdfd7;
  margin:0.75rem;
  padding:0.5rem;
  display:grid;
  grid-template-columns:1fr 1fr;

  color: #800000;
  border: none;
  font-weight: bold;
`

interface SectionProps {
  side: string;
}

const Section = styled.div<SectionProps>`
  justify-content: ${(props) => props.side};
  
  display: grid;
  grid-template-rows:1fr 1fr;
`;



const CardTitle = styled.h1`
  font-size: 1.75rem;
`

const CardText = styled.p`
  font-size:1.25rem;;
`

interface CardProps {
  title:string,
  id:number,
  description:string,
  author:string,
  date:string,
}

const Card = (props:CardProps) =>{
  return(
    // <Link href="blog">
    <Link href={{
      pathname: "/blog/[id]",
      query: {
          id: props.id,
          }
      }}
    >
      <CardStyle>
        <Section side="left">
          <CardTitle>{props.title}</CardTitle>  
          <CardText>{props.description}</CardText>

        </Section>
        <Section side="right">
        {/* <CardText>{props.id}</CardText> */}

        <CardText>{props.author}</CardText>
        <CardText>{props.date}</CardText>

        </Section>
      </CardStyle>
    </Link>
  )
}

const Explore = () =>{
  const [blogList, setBlogList] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:5000/blog/list")
    .then((res)=>{
      setBlogList(res.data);
    })
    .catch((e)=>{
      console.error(e);
    })
  },[])

  
  return(
    <CardContainer>
      {blogList.map((value:CardProps)=>{
        return <Card title={value.title} id={value.id} description={value.description} author={value.author} date={value.date}/>
      })}
    </CardContainer>
  )
}

export default Explore;