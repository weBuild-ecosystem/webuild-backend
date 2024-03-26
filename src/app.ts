import createServer from "./utils/server";
import mongoose from "mongoose"
import { globalAuthorization } from "./middleware/auth.midd";
import UserRouter from './controller/user.controller';
import EntitiesRouter from './controller/entities.controller';
import VotationsRouter from './controller/votations.controller';


const port = 3001;
export const app = createServer();
mongoose.connect('mongodb+srv://canitrotbartolome:canitrotbartolome@cluster0.x5zoaac.mongodb.net/webuild?retryWrites=true&w=majority',
  err => {
      if(err) throw err;
      console.log('connected to MongoDB');
});

app.use("/user", globalAuthorization, UserRouter);
app.use("/entities", globalAuthorization, EntitiesRouter);
app.use("/votations", globalAuthorization, VotationsRouter);


app.listen(port, async () => {
  console.log(`App is running at http://localhost:${port}`);
});

