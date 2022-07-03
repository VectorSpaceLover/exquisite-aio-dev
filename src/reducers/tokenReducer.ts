import { ActionProps, TokenProps } from "../state/types"

const tokenReducer = (state: TokenProps, action: ActionProps) => {
    let type = action.type

    switch(type) {
        case 'ADD_TOKEN':
            return state

        default:
            return state
    }
}

export default tokenReducer