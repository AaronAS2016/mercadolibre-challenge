import express from 'express';
import cors from 'cors'

import { PORT } from './constant';
import routes from './routes';


const app = express();

app.use(cors())
app.use(routes);

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});