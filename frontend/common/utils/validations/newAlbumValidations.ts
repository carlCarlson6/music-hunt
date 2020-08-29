import { IFormValue } from "../../models/entities/IFormValue";
import { IError } from "../../models/entities/IError";
import { unpackNewAlbumFormValues } from "../unpackValues/unpackNewAlbum";

export const newAlbumValidations = (formValues: Array<IFormValue>): Array<IError> => {
    let errors: Array<IError> = [];
    const {artist, genre, title, url} = unpackNewAlbumFormValues(formValues);

    if(!artist.value) {
        errors.push({name:artist.name, message: 'artist is mandatory'});
    } 

    if(!genre.value) {
        errors.push({name:genre.name, message: 'genre is mandatory'});
    } 

    if(!title.value) {
        errors.push({name:title.name, message: 'title is mandatory'});
    } 

    if(!url.value) {
        errors.push({name:url.name, message: 'url is mandatory'});
    } else if(!/^(ftp|http|https):\/\/[^ "]+$/.test(url.value)) {
        errors.push({name:url.name, message: 'must be a valid url'});
    }

    return errors;
} 