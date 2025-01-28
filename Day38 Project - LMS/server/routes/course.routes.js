import { Router } from 'express';
import { getAllCourses, getLecturesByCourseId} from '../controllers/course.controller.js'
import { isLoggedIn } from '../middlewares/auth.middleware.js';

const router = Router();

// router.get('/', getAllCourses);
// or
router.route('/')
.get(getAllCourses);

// router.get('/:id', getLecturesByCourseId);
// or
router.route('/:id')
.get(isLoggedIn ,getLecturesByCourseId);


export default router;