import express from 'express';
const { getTexts, getText, createText } = require('../controllers/text')

const router = express.Router()

router.get('/', getTexts)
router.get('/:id', getText)
router.post('/', createText)

export default router;