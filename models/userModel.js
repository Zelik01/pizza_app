const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
	id: ObjectId,
	userName: {
		type: String, required: true, unique: true,
	},
	password: { type: String, required: true },
	userType: {type: String, default: "user", enum: ["admin", "user"],
	},
    phone_number:{type: String, required:true},
});

const User = mongoose.model("User", UserSchema);

module.exports = User;