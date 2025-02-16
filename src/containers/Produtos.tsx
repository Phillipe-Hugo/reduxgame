import { Game } from '../App'
import Produto from '../components/Produto'
import { useGetJogosQuery } from '../services/api'
import * as S from './styles'

/*Não vou remover, pois é um exemplo de fetch sem Redux
  type Props = {
  jogos: Game[]
}
*/

const Produtos = () => {
  const { data: jogos, isLoading } = useGetJogosQuery()

  if (isLoading) {
    return <p>Carregando...</p>
  }

  return (
    <>
      <S.Produtos>
        {jogos?.map((game) => (
          <Produto key={game.id} game={game} />
        ))}
      </S.Produtos>
    </>
  )
}

export default Produtos
