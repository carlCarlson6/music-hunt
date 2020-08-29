import { IFormValue } from "../common/models/entities/IFormValue";
import { IError } from "../common/models/entities/IError";
import { unpackNewAlbumFormValues } from "../common/utils/unpackValues/unpackNewAlbum";

export const newAlbumValidations = (formValues: Array<IFormValue>): Array<IError> => {
    let errors: Array<IError> = [];
    const {artist, genre, title, url} = unpackNewAlbumFormValues(formValues)

    

    return errors;
} 