import  express  from "express";
import cors from 'cors';
import Routes from './routes/route.js';

import Connection from "./database/db.js";

const app = express();
app.use(cors());
app.use(express.json());


Connection();

const router = express.Router();
app.use('/', Routes);

 
app.listen(8000, ()=>{
    console.log('server is running on port no', 8000);
});
