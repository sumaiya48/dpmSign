import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const initialState = {
  items: [],
};

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existing = state.items.find(
        (p) => p.productId === action.payload.productId
      );

      if (existing) {
        return {
          ...state,
          items: state.items.map((p) =>
            p.productId === action.payload.productId
              ? {
                  ...p,
                  quantity: p.quantity + (action.payload.quantity || 1),
                }
              : p
          ),
        };
      }

      return {
        ...state,
        items: [
          ...state.items,
          {
            ...action.payload,
            quantity: action.payload.quantity || 1,
          },
        ],
      };
    }

    case "REMOVE_FROM_CART": {
      return {
        ...state,
        items: state.items.filter((p) => p.productId !== action.payload),
      };
    }

    case "INCREASE_QUANTITY": {
      return {
        ...state,
        items: state.items.map((p) =>
          p.productId === action.payload
            ? { ...p, quantity: p.quantity + 1 }
            : p
        ),
      };
    }

    case "DECREASE_QUANTITY": {
      return {
        ...state,
        items: state.items
          .map((p) =>
            p.productId === action.payload
              ? { ...p, quantity: p.quantity - 1 }
              : p
          )
          .filter((p) => p.quantity > 0),
      };
    }

    case "CLEAR_CART": {
      return { ...state, items: [] };
    }

    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const value = {
    cartItems: state.items,
    dispatch,
  };

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
