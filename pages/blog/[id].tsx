import axios from "axios";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Content from "../components/Content";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";



interface postDataInterface {
  title?: string;
  id?: number;
  description?: string;
  author?: string;
  date?: string;
}

const DataStyle = styled.div`
  padding:1.25rem;
`

const TitleStyle = styled.h1`
  font-size: 1.6rem;

  color:#ebebeb;

  border: none;
`

const TextStyle = styled.p`
  font-size:1.75rem;
  padding-left:1.25rem;
  padding-right:1.25rem;
  margin-top:0.5rem;


  color:#ebebeb;
  border: none;

  @media only screen
    and (max-device-width: 480px){
      font-size:1.25rem;
      text-align:center;
    }
`




const Blog: NextPage<IDProp> = ({id}) => {
  const [text, setText] = useState<string[]>([]);
  const [postData, setPostData] = useState<postDataInterface>({});

  const backend_ip = "https://blog-be-production.up.railway.app"
  

  useEffect(() => {
    axios
      .get(`${backend_ip}/blog/card`, {
        // .get("http://localhost:5000/blog/card", {
        params: {
          id: id,
        },
      })
      .then((res) => {
        setPostData(res.data);
      })
      .catch((e) => {
        console.error(e);
      });

    axios
      .get(`${backend_ip}/blog/blog`, {
      // .get("http://localhost:5000/blog/blog", {
        params: {
          id: id,
        },
      })
      .then((res) => {
        const split = String(res.data.text).split("\\");
        setText(split);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  const returnText = (text:string[]) =>{
    let container = [];
    for(let current of text){
      if(current === '') continue;
      container.push(<TextStyle>{current}</TextStyle>);
    }
    return container;
  }

  return (
    <Container>
      <Navigation />
      <Content>
        <div>
          <DataStyle>
            <TitleStyle>{postData.title}</TitleStyle>
            
          </DataStyle>
          {returnText(text)}
        </div>
      </Content>
      <Footer />
    </Container>
  );
};

interface IDProp {
  id:number
}

Blog.getInitialProps = async ({ query }) => {
  const id:number = Number(query.id);

  return {id}
}

export default Blog;
