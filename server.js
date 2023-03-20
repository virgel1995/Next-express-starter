import express from 'express';
import next from 'next';
// check mode if development or production 
const dev = process.env.NODE_ENV !== 'production';
// create nextApp
const nextApp = next({ dev });
const nextHandler = nextApp.getRequestHandler();

//start init required
// make express application 
const app = express();
// app port
const port = parseInt(process.env.PORT, 10) || 3000;
// get database connection 
import initializeMongoose from "./db/mongoose.js"
// express routes 
import { signin, signup, updateUser, getUser } from "./controller/user.js"

// pass express (routes/middleware) to next app
nextApp.prepare().then(() => {

// express middlewares 

	
// express routes 
	// user routes
	app.use("/api/user/signin", signin)

	
//accept all express routes to next  like http://localhost:3000/routename
  app.get("*", nextHandler)
  app.post('*', nextHandler)

	// database Connection 
initializeMongoose();
	// start express application
/** 
*** now express starts and next app starts too
*** express gos to be 
** https://sitename.com/api/routename
*** next gos to be 
** https://sitename.com/routename
*/
  app.listen(port, err => {
    if (err) throw err
    console.log(`Listening on port ${port}`)
  })
})
