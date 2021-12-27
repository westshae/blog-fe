import axios from 'axios'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Container, Content } from '../components/Containers'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'

interface postDataInterface{
  title?:string,
  id?:number,
  description?:string,
  author?:string,
  date?:string,
}


const Blog: NextPage = () => {
  const id = useRouter().query.id;

  const [text, setText] = useState("");
  const [postData, setPostData] = useState<postDataInterface>({});

  useEffect(()=>{
    axios.get("http://localhost:5000/blog/card", {
      params:{
        id:id
      }
    })
    .then((res)=>{
      setPostData(res.data);
    })
    .catch((e)=>{
      console.error(e);
    })
    
    axios.get("http://localhost:5000/blog/blog", {
      params:{
        id:id
      }
    })
    .then((res)=>{
      setText(res.data.text);
    })
    .catch((e)=>{
      console.error(e);
    })
  }, [])
  

  return (
    <Container>
      <Navigation/>
      <Content>
        <h1>{postData.title}</h1>
        <h1>{postData.description}</h1>
        <h1>{postData.author}</h1>
        <h1>{postData.date}</h1>
        <p>{text}</p>
      </Content>
      <Footer/>
    </Container>
  )
}

export default Blog
