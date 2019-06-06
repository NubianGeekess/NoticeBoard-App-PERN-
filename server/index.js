import './env';

import express from 'express';
import models, { sequelize } from './models';

const app = express();

app.use(express.json());

const port = process.env.PORT || 8000;

sequelize.sync({ force: true }).then(() => {
  app.listen(port, () => {
    console.log(`Server started on port ${port}!`);
  });
});
