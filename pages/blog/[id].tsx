import axios from "axios";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Container, Content } from "../components/Containers";
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
  display:grid;
  grid-template-columns:1fr 1fr;

`

const TitleStyle = styled.h1`
  font-size: 1.6rem;

  color: #800000;
  border: none;
`

const TextStyle = styled.p`
  font-size:1.75rem;
  padding-left:1.25rem;
  margin-top:0.5rem;


  color: #800000;
  border: none;
`

const Blog: NextPage = () => {
  const id = useRouter().query.id;

  const [text, setText] = useState<string[]>([]);
  const [postData, setPostData] = useState<postDataInterface>({});
  

  useEffect(() => {
    axios
      .get("http://localhost:5000/blog/card", {
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
      .get("http://localhost:5000/blog/blog", {
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

export default Blog;
