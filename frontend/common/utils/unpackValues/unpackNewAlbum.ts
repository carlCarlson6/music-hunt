import { IFormValue } from "../../models/entities/IFormValue"
import { IError } from "../../models/entities/IError"

export const unpackNewAlbumFormValues = (formValues: Array<IFormValue>) => {
    const title: IFormValue = formValues.find(formValue => formValue.name === 'title');
    const artist: IFormValue = formValues.find(formValue => formValue.name === 'artist');
    const url: IFormValue = formValues.find(formValue => formValue.name === 'url');
    const genre: IFormValue = formValues.find(formValue => formValue.name === 'genre');

    return {title, artist, url, genre};
}

export const unpackNewAlbumFormErrors = (errors: Array<IError>) => {
    const titleError: IError = errors.find(error => error.name === 'title');
    const artistError: IError = errors.find(error => error.name === 'artist');
    const urlError: IError = errors.find(error => error.name === 'url');
    const genreError: IError = errors.find(error => error.name === 'genre');
    const formExecutionError: IError = errors.find(error => error.name === 'formExecutionFn');

    return {titleError, artistError, urlError, genreError, formExecutionError}
}
