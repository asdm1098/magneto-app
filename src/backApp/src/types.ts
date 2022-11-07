export interface TextEntry {
    id: number,
    text: string
}

export type NewTextEntry = Omit<TextEntry, 'id'>