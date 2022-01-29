import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
	category_name: {type: String, required: true},
	status: String,
	createdAt: Date,
	updatedAt: Date,
	category_details: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Details"
		}
	]
})

categorySchema.set("toJSON", {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString()
		delete returnedObject._id
		delete returnedObject.__v
	}
})

const Category = mongoose.model("Category", categorySchema)

export default Category
