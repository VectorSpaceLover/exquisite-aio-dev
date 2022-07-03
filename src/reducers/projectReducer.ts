import { ActionProps, ProjectProps } from "../state/types"

const projectReducer = (state: ProjectProps, action: ActionProps): ProjectProps => {
    let type = action.type

    switch(type) {
        case 'ADD_PROJECT':
            return state

        default:
            return state
    }
}

export default projectReducer