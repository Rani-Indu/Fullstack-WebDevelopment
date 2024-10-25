import mongoose from 'mongoose';

// const timeSchema = new mongoose.Schema({
//   time: {
//     type: Number,
//     required: true
//   }
// })

const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    salary: {
      type: String,
      required: true,
    },
    qualification: {
      type: String,
      required: true,
    },
    experienceInYears: {
      type: Number,
      required: true,
    },
    worksInHospitals: [
      // one doctor works at many hospitals at a time
      // hospital ka ref de denge , multiple hospitals hai isliye array
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hospital',
      },
    ],
  },
  { timestamps: true }
);

export const Doctor = mongoose.model('Doctor', doctorSchema);
