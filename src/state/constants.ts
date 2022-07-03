import { TokenProps, ProjectProps, ArtistProps, AppProps, AppStateProps } from './types'

const initialProjectState: ProjectProps = { items: [] }
const initialArtistState: ArtistProps = { name: '' }
const initialTokenState: TokenProps = { items: [] }
const initialAppState: AppStateProps = { loading: false }
const initialState: AppProps = { token: initialTokenState, project: initialProjectState, artist: initialArtistState, state: initialAppState }

export {
    initialProjectState,
    initialTokenState,
    initialArtistState,
    initialAppState,
    initialState,
}