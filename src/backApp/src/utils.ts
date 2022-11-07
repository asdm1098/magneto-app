import { NewTextEntry } from './types';

const parseText = ( textFromRequest: any ): string => {
    if ( !isString(textFromRequest) ) {
        throw new Error('Incorrect o missing text');
    }

    return textFromRequest;
}

const isString = (string: string): boolean => {
    return typeof string === 'string';
}

const toNewTextEntry = (object: any): NewTextEntry => {
    const newEntry: NewTextEntry = {
        text: parseText(object.text)
    }
    return newEntry;
}
export default  toNewTextEntry;