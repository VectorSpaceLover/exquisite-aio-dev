import { ActionProps, AppStateProps } from "../state/types"

const stateReducer = (state: AppStateProps, action: ActionProps): AppStateProps => {
    let type = action.type

    switch(type) {
        default:
            return state
    }
}

export default stateReducer