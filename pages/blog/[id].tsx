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

const OverallStyle = styled.div`
`;

const DataStyle = styled.div`
  background:#dfdfd7;
  margin:0.75rem;
  padding:0.5rem;
  display:grid;
  grid-template-columns:1fr 1fr;

`

interface SectionProps {
  side: string;
}

const Section = styled.div<SectionProps>`
  justify-content: ${(props) => props.side};
  
  display: grid;
  grid-template-rows:1fr 1fr;
`;

const TitleStyle = styled.h1`
  font-size: 1.75rem;

  color: #800000;
  border: none;
`

const TextStyle = styled.p`
  font-size:1.75rem;;

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
      container.push(<TextStyle>{current}</TextStyle>);
    }
    return container;
  }

  return (
    <Container>
      <Navigation />
      <Content>
        <OverallStyle>
          <DataStyle>
            <Section side="left">
            <TitleStyle>{postData.title}</TitleStyle>
            <TitleStyle>{postData.description}</TitleStyle>
            </Section>
            <Section side="right">

            <TitleStyle>{postData.author}</TitleStyle>
            <TitleStyle>{postData.date}</TitleStyle>
            </Section>
            
          </DataStyle>
          {returnText(text)}
        </OverallStyle>
      </Content>
      <Footer />
    </Container>
  );
};

export default Blog;
