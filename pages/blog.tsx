import type { NextPage } from 'next'
import { Container, Content } from './components/Containers'
import Footer from './components/Footer'
import Navigation from './components/Navigation'


const Blog: NextPage = () => {
  return (
    <Container>
      <Navigation/>
      <Content>
        <h1>Blog</h1>
      </Content>
      <Footer/>
    </Container>
  )
}

export default Blog
