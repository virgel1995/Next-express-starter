import { Schema, model } from "mongoose"
//import validator from 'mongoose-unique-validator';


const userSchema = new Schema({
userId: {
	type : Schema.ObjectId
},
uername: {
	type: String,
},
	email: {
		type: String,
		required: true,
    unique: true
	},
  password: {
	type: String,
	required: true
	}
});
//userSchema.plugin(validator);
const User = model("User", userSchema);
export default User;
