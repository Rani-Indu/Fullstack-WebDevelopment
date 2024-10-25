import mongoose from 'mongoose';

const medicalRecordSchema = new mongoose.Schema({}, { timestapms: true });

export const Record = mongoose.model('Record', medicalRecordSchema);
