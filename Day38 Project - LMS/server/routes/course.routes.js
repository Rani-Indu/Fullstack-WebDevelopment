import { Router } from 'express';
import { getAllCourses, getLecturesByCourseId} from '../controllers/course.controller.js'

const router = Router();

// router.get('/', getAllCourses);
// or
router.route('/')
.get(getAllCourses);

// router.get('/:id', getLecturesByCourseId);
// or
router.route('/:id')
.get(getLecturesByCourseId);


export default router;