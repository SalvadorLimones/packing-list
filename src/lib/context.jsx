import { createContext, useReducer } from "react";
import { reducer } from "./reducer";
import { getInitialItems } from "./items";

export const ItemsContext = createContext({})

const ItemsProvider = ({children}) => {
const [items,dispatch] = useReducer(reducer, getInitialItems())

    return <ItemsContext.Provider value={{items, dispatch}}>
        {children}
    </ItemsContext.Provider>
}

export default ItemsProvider