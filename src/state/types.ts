export interface TokenProps {
    items: any[]

}
export interface ProjectProps {
    items: any[]
}
export interface ArtistProps {
    name: string
}
export interface AppStateProps {
    loading: boolean
}
export interface AppProps {
    state: AppStateProps,
    project: ProjectProps,
    token: TokenProps,
    artist: ArtistProps,
}

export type ActionProps = {
    type: string
    payload: any
}