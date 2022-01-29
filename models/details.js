import mongoose from "mongoose";

const detailsSchema = new mongoose.Schema({
	product_name: {type: String, required: true},
	quantity: {type: Number, default: 0},
	price: {type: Number, default: 0},
	createdAt: Date,
	updatedAt: Date
})

detailsSchema.set("toJSON", {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString()
		delete returnedObject._id
		delete returnedObject.__v
	}
})

const Details = new mongoose.model("Details", detailsSchema)

export default Details
