import { connect }from "mongoose"


const initializeMongoose = async () => {
   await connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to database'));
	
}

export default initializeMongoose
