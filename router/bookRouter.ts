import { Router } from "express";
import { createBook, deleteBook, readBook, readBookByCategory, readBookByID, updateBook } from "../controller/bookController";

const router:Router = Router()

router.route("/create-book").post(createBook)
router.route("/read-book").get(readBook)
router.route("/read-book-id/:bookID").get(readBookByID)
router.route("/read-book-category").get(readBookByCategory)
router.route("/read-book/:bookID").patch(updateBook);
router.route("/read-book/:bookID").delete(deleteBook);

export default router;