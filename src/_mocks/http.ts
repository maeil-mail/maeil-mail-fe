import { createMiddleware } from '@mswjs/http-middleware';
import express from 'express';
import { handlers } from './handlers';

const app = express();
const port = 9090;

app.use(express.json());
app.use(createMiddleware(...handlers));
app.listen(port, () => console.log(`Mock server is running on port: ${port}`));
