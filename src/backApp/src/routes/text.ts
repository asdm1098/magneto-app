import express from 'express';
import * as textServices from '../services/textService';
import toNewTextEntry from '../utils';
const router = express.Router()

router.get('/', (_req, res) => {
    res.send(textServices.getTexts());
});

router.get('/:id', (req, res) => {
    const text = textServices.findById(+req.params.id);
    return ( text !== null )
        ? res.send(text?.text)
        : res.sendStatus(404)
});

router.post('/', (req, res) => {

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
});

export default router;