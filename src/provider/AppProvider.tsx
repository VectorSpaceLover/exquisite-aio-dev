import React, { createContext, useReducer } from 'react'
import { initialState, initialTokenState } from '../state/constants'
import { TokenProps, AppProps } from '../state/types'
import appReducer from '../reducers/appReducer'

type ContextType = {
    state: AppProps;
    dispatch: React.Dispatch<any>;
}
const AppContext = createContext<ContextType> ({
    state: initialState,
    dispatch: () => null
})

const AppProvider: React.FC = ({children}) => {
    const [state, dispatch] = useReducer(appReducer, initialState)

    return (
        <AppContext.Provider value = {{ state, dispatch }} >
            {children}
        </AppContext.Provider>
    )
}

export { AppContext, AppProvider }