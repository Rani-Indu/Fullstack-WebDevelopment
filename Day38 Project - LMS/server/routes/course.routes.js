import { Router } from 'express';

const router = Router();

router.get('/', getAllCourses);

router.get('/:id', getLecturesByCourseId);


export default router;