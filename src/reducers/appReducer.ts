import { AppProps, ActionProps } from "../state/types";
import artistReducer from "./artistReducer";
import projectReducer from "./projectReducer";
import stateReducer from "./stateReducer";
import tokenReducer from "./tokenReducer";

const appReducer = (state: AppProps, action: ActionProps): AppProps => {
    return {
        token: tokenReducer(state.token, action),
        project: projectReducer(state.project, action),
        artist: artistReducer(state.artist, action),
        state: stateReducer(state.state, action),
    }
}

export default appReducer