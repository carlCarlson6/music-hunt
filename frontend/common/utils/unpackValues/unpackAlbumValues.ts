import { IFormValue } from "../../models/entities/IFormValue";

export const unpackAlbumValues = (formValues: Array<IFormValue>) => {
    let unpackedValues = {};

    try {
        const title: IFormValue = formValues.find(formValue => formValue.name === 'title').value;
        unpackedValues = {...unpackAlbumValues, title};
    } catch {}
    try {
        const artist: IFormValue = formValues.find(formValue => formValue.name === 'artist').value;
        unpackedValues = {...unpackAlbumValues, artist};
    } catch {}
    try {
        const url: IFormValue = formValues.find(formValue => formValue.name === 'url').value;
        unpackedValues = {...unpackAlbumValues, url};
    } catch {}
    try {
        const genre: IFormValue = formValues.find(formValue => formValue.name === 'genre').value;
        unpackedValues = {...unpackAlbumValues, genre};
    } catch {}
    try {
        const votes: IFormValue = formValues.find(formValue => formValue.name === 'votes').value;
        unpackedValues = {...unpackAlbumValues, votes};
    } catch {}

    return unpackedValues;
}