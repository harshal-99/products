import {Router} from "express";
import Details from "../models/details.js";
import Category from "../models/category.js";

const detailsRouter = Router()

detailsRouter.get('/', async (request, response, next) => {
	const details = await Details
		.find({})

	response.json(details)
})

detailsRouter.post('/', async (request, response, next) => {
	const category_id = request.body.category_id
	delete request.body.category_id

	const details = new Details(request.body)
	const savedDetails = await details.save()

	const category = await Category
		.findById(category_id)

	category.category_details = category.category_details.concat(savedDetails._id)
	await category.save()

	response.status(201).json(savedDetails)
})

detailsRouter.get("/:id", async (request, response, next) => {
	const id = request.params.id

	const details = await Details.findById(id)

	response.json(details)
})

detailsRouter.put("/:id", async (request, response, next) => {
	const detail = request.body
	detail.updatedAt = new Date()

	const updatedDetails = await Details.findByIdAndUpdate(id, detail, {new: true})
	response.json(updatedDetails.JSON())
})

detailsRouter.delete("/:id", async (request, response, next) => {
	const id = request.params.id

	const category_id = request.body.category_id
	delete request.body.category_id

	const category = await Category
		.findById(category_id)

	category.category_details.filter(c => c.id.toString() !== id.toString())
	await category.save()

	await Details.findByIdAndDelete(id)

	response.status(204).end()
})


export default detailsRouter
