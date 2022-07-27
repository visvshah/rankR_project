import express from "express";
import { getLists, createList} from '../controllers/lists.js'

const router = express.Router();

router.get('/', getLists);
router.post('/', createList);

export default router;