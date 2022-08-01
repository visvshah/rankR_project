import express from "express";
import { getLists, createList, deleteList} from '../controllers/lists.js'

const router = express.Router();

router.get('/', getLists);
router.post('/', createList);
router.delete('/:id', deleteList);
export default router;