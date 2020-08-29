import { IFormValue } from "./models/entities/IFormValue";
import { IAuthState } from "./models/states/IAuthState";
import { IAlbumState } from "./models/states/IAlbumState";

export const sigIntInitialState: Array<IFormValue> = [
    {name: 'email', value: ''},
    {name: 'password', value: ''},
    {name: 'confimPassword', value: ''}
]

export const loginInitialState: Array<IFormValue> = [
    {name: 'email', value: ''},
    {name: 'password', value: ''},
]

export const newAlbumInitialState: Array<IFormValue> = [
    {name: 'title', value:''},
    {name: 'artist', value:'unkwon'},
    {name: 'genre', value:'unkwon'},
    {name: 'url', value:''},
]

export const commnetInitialState: Array<IFormValue> = [
    {name: 'comment', value: ''},
]

export const authInitialState: IAuthState = { 
    user: {id: null, email: null},
    fetchingUser: false
}

export const albumInitialState: IAlbumState = {
    album: {id: null, title: null, url: null, artist: null, genre: null},
    albums: [],
    fetchingData: false
}