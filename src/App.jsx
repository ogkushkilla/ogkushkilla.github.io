import { Header } from './components/Header/Header'
import { Container } from './components/Container/Container'
import { Navigation } from './components/Nevigation/Navigation'

export const App = () => {
  return (
    <>
      <Header />

      <main>
        <Navigation>
          <Container className="navigation__container" />
        </Navigation>
        <section></section>
      </main>

      <footer></footer>
    </>
  )
}
