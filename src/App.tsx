import { useEffect, useState } from 'react'
import Header from './components/Header'
import Produtos from './containers/Produtos'

import { GlobalStyle } from './styles'

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
  const [games, setGames] = useState<Game[]>([])
  const [carrinho, setCarrinho] = useState<Game[]>([])

  useEffect(() => {
    fetch('http://localhost:4000/produtos')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Erro na API: ${res.status} ${res.statusText}`)
        }
        return res.json()
      })
      .then((data) => {
        console.log('Produtos carregados:', data)
        setGames(data)
      })
      .catch((error) => {
        console.error('Erro ao buscar produtos:', error)
      })
  }, [])

  function adicionarAoCarrinho(jogo: Game) {
    if (carrinho.find((game) => game.id === jogo.id)) {
      alert('Item já adicionado')
    } else {
      setCarrinho([...carrinho, jogo])
    }
  }

  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header itensNoCarrinho={carrinho} />
        <Produtos jogos={games} adicionarAoCarrinho={adicionarAoCarrinho} />
      </div>
    </>
  )
}

export default App
