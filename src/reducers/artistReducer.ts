import { ActionProps, ArtistProps } from "../state/types"

const artistReducer = (state: ArtistProps, action: ActionProps) => {
    let type = action.type

    switch(type) {
        case 'ADD_ARTIST':
            return state

        default:
            return state
    }
}

export default artistReducer