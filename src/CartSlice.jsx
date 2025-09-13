import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const { name, image, cost } = action.payload; // Destructura los detalles del producto
      const existingItem = state.items.find(item => item.name === name); // Verifica si ya existe
      if (existingItem) {
        existingItem.quantity++; // Si ya existe, aumenta la cantidad
      } else {
        state.items.push({ name, image, cost, quantity: 1 }); // Si no existe, lo agrega con cantidad 1
      }
    },
    removeItem: (state, action) => {
      // Elimina un producto por su nombre
      state.items = state.items.filter(item => item.name !== action.payload);
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload; // Extrae nombre y nueva cantidad
      const itemToUpdate = state.items.find(item => item.name === name); // Busca el producto
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity; // Actualiza la cantidad
      }
    },
  },
});

// Exporta los creadores de acciones para usarlos en los componentes
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// Exporta el reducer por defecto para usarlo en store.js
export default CartSlice.reducer;
