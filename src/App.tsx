import { useEffect, useState } from 'react'
import Header from './components/Header'
import Produtos from './containers/Produtos'
import { GlobalStyle } from './styles'
import { Provider } from 'react-redux'
import { store } from './store'

export type Game = {
  id: number
  titulo: string
  plataformas: string[]
  precoAntigo: number
  preco: number
  categoria: string
  imagem: string
}

function App() {
  /* Não vou remover, pois é um exemplo de fetch sem Redux
  const [games, setGames] = useState<Game[]>([])
    useEffect(() => {
    fetch('/produtos')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Servidor não respondeu com sucesso')
        }
        return res.json()
      })
      .then((data) => {
        console.log('Dados recebidos:', data)
        setGames(data)
      })
      .catch((error) => {
        console.error('Captura de erro:', error)
      })
  }, [])
  */

  return (
    <Provider store={store}>
      <GlobalStyle />
      <div className="container">
        <Header />
        <Produtos />
      </div>
    </Provider>
  )
}

export default App
