import express from "express";
import { getLists, createList, deleteList, updateList, likeList} from '../controllers/lists.js'

import auth from '../middleware/auth.js'
const router = express.Router();

router.get('/', getLists);
router.post('/', createList);
router.delete('/:id', deleteList);
router.patch('/:id', updateList)
router.patch('/:id/thumbs', likeList)
export default router;