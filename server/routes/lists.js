import express from "express";
import { getLists, createList, deleteList, updateList, likeList, dislikeList} from '../controllers/lists.js'

import auth from '../middleware/auth.js'
const router = express.Router();

router.get('/', getLists);
router.post('/', auth, createList);
router.delete('/:id', auth, deleteList);
router.patch('/:id', auth, updateList)
router.patch('/:id/thumbs', auth, likeList)
router.patch('/:id/thumbsDown', auth, dislikeList)
export default router;