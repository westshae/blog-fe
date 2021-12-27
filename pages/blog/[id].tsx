import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { Container, Content } from '../components/Containers'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'


const Blog: NextPage = () => {
  const id = useRouter().query.id;

  return (
    <Container>
      <Navigation/>
      <Content>
        <h1>Blog</h1>
        <h1>
          {
          }
        </h1>
      </Content>
      <Footer/>
    </Container>
  )
}

export default Blog
