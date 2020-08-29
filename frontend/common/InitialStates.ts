import { IFormValue } from "./models/entities/IFormValue";

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