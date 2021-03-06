import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  display:grid;
  grid-template-columns:1fr 1fr;
  @media only screen
    and (max-device-width: 480px){
      grid-template-columns:1fr;
    }
`

const CardStyle = styled.div`
  background:#292929;
  margin:0.75rem;
  padding:0.5rem;
  display:grid;
  grid-template-columns:1fr;

  justify-content:left;
  color:#ebebeb;

  border: none;
`

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
      pathname: "/[id]",
      query: {
          id: props.id,
          }
      }}
    >
      <CardStyle>
          <CardTitle>{props.title}</CardTitle>  
          <CardText>{props.description}</CardText>
          <CardText>{props.date}</CardText>

      </CardStyle>
    </Link>
  )
}

const Explore = () =>{
  const [blogList, setBlogList] = useState([]);

  const backend_ip = "https://blog-be-production.up.railway.app";
  // const backend_ip = "http://localhost:5000"

  useEffect(()=>{
    axios.get(`${backend_ip}/blog/posts`)
    .then((res)=>{
      setBlogList(res.data);
    })
    .catch((e)=>{
      console.error(e);
    })
  },[])

  
  return(
    <CardContainer>
      {blogList.slice(0).reverse().map((value:CardProps)=>{
        return <Card title={value.title} id={value.id} description={value.description} author={value.author} date={value.date}/>
      })}
    </CardContainer>
  )
}

export default Explore;