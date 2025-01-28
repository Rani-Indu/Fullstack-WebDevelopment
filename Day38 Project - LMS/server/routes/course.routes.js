import { Router } from 'express';
import { isLoggedIn } from '../middlewares/auth.middleware.js';
import { upload } from '../middlewares/multer.middleware.js';

const router = Router();

import { getAllCourses, getLecturesByCourseId, createCourse, updateCourse, removeCourse} from '../controllers/course.controller.js';


// router.get('/', getAllCourses);
// or
router.route('/')
.get(getAllCourses)
.post(
    upload.single('thumbnail'),
    createCourse
);

// router.get('/:id', getLecturesByCourseId);
// or
router.route('/:id')
.get(isLoggedIn ,getLecturesByCourseId)
.post(updateCourse)
.delete(removeCourse)
// to update and delete any course we need id so its better to write this in /:id route and not in / route

// hum / me bhi ye kaam kar sakte the but process different hota tab i,e hum data kaise le rahe hai ye different ho jata - hum query param se data le rahe hai ya post.body se data le rahe hai 

// /:id me data send as a query param hua hai 
;



export default router;