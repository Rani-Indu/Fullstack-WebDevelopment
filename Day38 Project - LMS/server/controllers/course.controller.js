import Course from "../models/course.model.js";
import AppError from "../utils/error.util.js";
import fs from "fs/promises";
import cloudinary from "cloudinary";

const getAllCourses = async function (req, res, next) {
  try {
    const courses = await Course.find({}).select("-lectures");
    // courses ki high level details cahiye, uske andar lectures nahi cahiye
  } catch (error) {
    return next(new AppError(error || "course details not found", 500));
  }
};

const getLecturesByCourseId = async function (req, res, next) {
  try {
    const { id } = req.params;
    // we can get course id from routes - /:id - through params
    console.log("Course Id :", id);
    const course = await Course.findById(id);
    // what is course id is my id
    console.log("Course Details :", course);
    if (!course) {
      return next(new AppError("Invalid course Id", 400));
    }
    res.status(200).json({
      success: true,
      message: "course lectures fetched successfully",
      lectures: course.lectures,
      // I  don't want to return course details , I just want to return lectures inside that
    });
  } catch (error) {
    return next(new AppError(error.message, 500));
  }
};

const createCourse = async function (req, res, next) {
  const { title, description, category, createdBy } = req.body;
  // if information doesn't exist
  if (!title || !description || !category || !createdBy) {
    return next(new AppError("All fields are required", 400));
  }
  // if information exists - to course ka instance bana lenge
  const course = await Course.create({
    title,
    description,
    category,
    createdBy,
    thumbnail: {
      public_is: "Dummy",
      secure_url: "Dummy",
    },
  });

  // agar course create nahi hua to

  if (!course) {
    return next(
      new AppError("course could not be created, please try again", 500)
    );
  }

  if (req.file) {
    try {
      const result = await cloudinary.v2.uploader.upload(req.file.path, {
        folder: "lms",
      });
      console.log(JSON.stringify);

      if (result) {
        course.thumbnail.public_id = result.public_id;
        course.thumbnail.secure_url = result.secure_url;
      }
      // remove file from local folder
      fs.rm("uploads/${req.file.filename}");
    } catch (error) {
      return next(new AppError(error.message, 500));
    }
  }

  await course.save();

  res.status(200).json({
    success: true,
    message: "Course created successfully",
    course,
  });
};

const updateCourse = async function (req, res, next) {
  try {
    const { id } = req.params;
    const course = await Course.findByIdAndUpdate(
      id,
      {
        $set: req.body,
        // jo bhi, jitna bhi data available utne ko hi update kar lega , sara ka sara data nahi karega
      },
      {
        runValidators: true,
      }
    );
    // agar ab koi course nahi milta hai - matlab wo course exist hi nahi karta tha
    if (!course) {
      return next(new AppError("course with given id does not exist", 500));
    }

    // agar course mil jata hai
    res.status(200).json({
      success: true,
      message: "Course updated successfully",
      course,
    });
  } catch (error) {
    return next(new AppError(error.message, 500));
  }
};

const removeCourse = async function (req, res, next) {
  try {
    const { id } = req.params;
    const course = await Course.findById(id);
    // const course = await Course.findByIdAndDelete

    // if course does not exist
    if (!course) {
      return next(new AppError("course with given id does not exist", 500));
    }

    // if course exist
    await course.findByIdAndDelete(id);

    // if celeted successfully
    res.status(200).json({
      success: true,
      message: "course deleted successfully",
    });
  } catch (error) {
    return next(new AppError(error.message, 500));
  }
};

const addLectureToCourseById = async (req, res, next) => {
 try {
   const { title, description } = req.body;
   const { id } = req.params;
   // course ki id milegi query param se
 
   // title, description exist nahi karta
   if (!title || !description) {
     return next(new AppError("All fields are required", 400));
   }
 
   // course agar exist nahi karta
   if (!course) {
     return next(new AppError("course with given id does not exist", 500));
   }
 
   // agar course exist karta hai
   const lectureData = {
     // title, description hume pata hai
     title,
     description,
   };
   // image related information hume nahi pata
   if (req.file) {
     try {
       const result = await cloudinary.v2.uploader.upload(req.file.path, {
         folder: "lms",
       });
       console.log(JSON.stringify(result));
 
       if (result) {
         lectureData.thumbnail.public_id = result.public_id;
         lectureData.thumbnail.secure_url = result.secure_url;
       }
       // remove file from local folder
       fs.rm("uploads/${req.file.filename}");
     } catch (error) {
       return next(new AppError(error.message, 500));
     }
   }
 
   // ye jo naya data aaya hai , isko course.lectures ke andar karenge push 
   // naya data kya hai -  lectureData hai 
   course.lectures.push(lectureData)
 
   // no of lectures ko integer value me display karna hai 
   course.numbersOflectures = course.lectures.length;
 
   await course.save();
 
   res.status(200).json({
     success: true,
     message: 'lecture successfully added to the course',
     course
   })
 } catch (error) {
  return next(new AppError(error.message, 500)); 
 }
};

export {
  getAllCourses,
  getLecturesByCourseId,
  createCourse,
  updateCourse,
  removeCourse,
  addLectureToCourseById,
};
