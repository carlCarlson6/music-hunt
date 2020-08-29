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


export const commnetInitialState: Array<IFormValue> = [
    {name: 'comment', value: ''},
]