import {Router} from "express";
import Category from "../models/category.js";

const categoryRouter = Router()

categoryRouter.get('/', async (request, response, next) => {
	const categories = await Category
		.find({})
		.populate('category_details', {
			product_name: 1,
			quantity: 1,
			price: 1
		})

	response.json(categories)
})

categoryRouter.post('/', async (request, response, next) => {
	const category = new Category(request.body)
	const savedCategory = await category.save()

	response.status(201).json(savedCategory)
})

categoryRouter.get("/:id", async (request, response, next) => {
	const id = request.params.id

	const category = await Category.findById(id).populate('category_details', {
		product_name: 1,
		quantity: 1,
		price: 1
	})

	response.json(category)
})

categoryRouter.put('/:id', async (request, response, next) => {
	const category = request.body
	category.updatedAt = new Date()

	const updatedCategory = await Category.findByIdAndUpdate(request.params.id, category, {new: true})
	response.json(updatedCategory.toJSON())
})


categoryRouter.delete("/:id", async (request, response, next) => {
	await Category.findByIdAndDelete(request.params.id)
	response.status(204).end()
})
export default categoryRouter
