import express from 'express';
import { middlewares } from './middlewares';
import { routes } from './routes';

const app = express();

middlewares(app);
routes(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
