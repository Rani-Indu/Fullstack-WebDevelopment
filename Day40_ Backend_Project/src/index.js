import { config } from 'dotenv';
config();
import connectToDB from "../db/db.js"

connectToDB()