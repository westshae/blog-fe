import type { NextPage } from 'next'
import Content from "./components/Content";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Explore from './components/Explore';



const Home: NextPage = () => {
  return (
    <Container>
      <Navigation/>
      <Content>
        <Explore/>
      </Content>
      <Footer/>
    </Container>
  )
}

export default Home
