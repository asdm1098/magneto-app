import textData from './text.json';
import { TextEntry, NewTextEntry } from '../types';

const texts: Array<TextEntry> = textData as Array<TextEntry>

export const getTexts = (): TextEntry[] => texts;

export const findById = (id: number): TextEntry | undefined => {
    const entry = texts.find( d => d.id === id );
    return entry;
}

export const addText = (newTextEntry: NewTextEntry): TextEntry => {
    
    const newEntry = {
        id: Math.max( ...texts.map( d => d.id) ) + 1,
        ...newTextEntry
    }

    texts.push(newEntry);
    return newEntry;
};