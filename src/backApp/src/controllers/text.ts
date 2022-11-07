
import * as textServices from '../services/textService';
import toNewTextEntry from '../utils';

const getTexts = (_req: any, res: any) => {
    res.send(textServices.getTexts());
}

const getText = (req: any, res: any) => {
    const text = textServices.findById(+req.params.id);
    return ( text !== null )
        ? res.send(text?.text)
        : res.sendStatus(404)
}

const createText = (req: any, res: any) => {
    try {
        const newTextEntry = toNewTextEntry(req.body);
        const addedTextEntry = textServices.addText(newTextEntry)
        res.json(addedTextEntry);
    } catch (e) {
        if( e instanceof Error ) {
            res.status(400).send(e.message);
        }else {
            console.log('Unexpected error', e);
        }
    }
}

module.exports = { getTexts, getText, createText }