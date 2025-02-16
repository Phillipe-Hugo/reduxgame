import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Game } from '../../App'

type CarrinhoState = {
  itens: Game[]
}

const initialState: CarrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionarAoCarrinho(state, action: PayloadAction<Game>) {
      const item = state.itens.find((game) => game.id === action.payload.id)
      if (item) {
        alert('Item já está no carrinho')
      } else {
        state.itens.push(action.payload)
      }
    }
  }
})

export const { adicionarAoCarrinho } = carrinhoSlice.actions
export default carrinhoSlice.reducer
