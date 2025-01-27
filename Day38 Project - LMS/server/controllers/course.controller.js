// const getAllCourses = () => {};
const getAllCourses = async function (req, res, next) {
  try {
    const courses = await Course.find({}).select("-lectures");
    // courses ki high level details cahiye, uske andar lectures nahi cahiye
  } catch (error) {
    return next(new AppError(error || "course details not found", 500));
}
};


const getLecturesByCourseId = async function () {
    try {
        const { id } = req.params;
        // we can get course id from routes - /:id - through params 
        const course = await Course.findById(id);
        // what is course id is my id 

        res.status(200).json({
            success: true,
            message: 'course lectures fetched successfully',
            lectures: course.lectures 
            // I  don't want to return course details , I just want to return lectures inside that 
        })
        
    } catch (error) {
        return next(new AppError(error.message, 500));    
    }
};

export { getAllCourses, getLecturesByCourseId };
