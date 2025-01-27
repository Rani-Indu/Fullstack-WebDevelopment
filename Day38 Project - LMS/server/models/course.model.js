import { model, Schema } from "mongoose";

const courseSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
    maxLength: [8, "Title must be atleast 8 characters"],
    minLength: [59, "Title should be less than 60 characters"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Description is required"],
    maxLength: [8, "Description must be atleast 8 characters"],
    minLength: [200, "Description should be less than 200 characters"],
    trim: true,
  },
  category: {
    type: String,
    required: [true, "Category is required"],
  },
  thumbnail: {
    public_id: {
      type: "String",
      required: true,
    },
    secure_url: {
      type: "String",
      required: true,
    },
  },
  lectures: [
    {
      title: String,
      description: String,
      lectures: {
        public_id: {
          type: "String",
          required: true,
        },
        secure_url: {
          type: "String",
          required: true,
        },
      },
    },
  ],
  numberOfLectures: {
    type: Number,
    default: 0  // if there is no lecture present then default value will be 0
  },
  createdBy: {
    type: String,
    required: [true, 'name of author is required']
  }
});


const Course = model('Course', courseSchema);
// db me collection ka naam hai Course - Capital C 

export default Course;