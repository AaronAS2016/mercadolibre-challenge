import express from 'express';
import cors from 'cors'

import { PORT } from './constant';
import routes from './routes';
import { auth } from './middleware/auth';


const app = express();

app.use(cors())
app.use(auth)
app.use(routes)

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});