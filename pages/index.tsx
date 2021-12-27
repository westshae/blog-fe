import type { NextPage } from 'next'
import { Container, Content } from './components/Containers'
import Explore from './components/Explore'
import Footer from './components/Footer'
import Navigation from './components/Navigation'


const Home: NextPage = () => {
  return (
    <Container>
      <Navigation/>
      <Content>
        <h1>REE</h1>
        <Explore/>
      </Content>
      <Footer/>
    </Container>
  )
}

export default Home
