import mongoose from "mongoose";

import Category from "./models/category.js";
import Details from "./models/details.js";
import config from "./utils/config.js";
import logger from "./utils/logger.js";

mongoose.connect(config.MONGODB_URI)
	.then(async () => {
		logger.info("connected to MongoDB")

		await Category.deleteMany({})
		await Details.deleteMany({})


		const cloths = new Category({
			category_name: "cloths",
			status: "active",
			createdAt: new Date(),
			updatedAt: new Date()
		})

		const toys = new Category({
			category_name: "toys",
			status: "active",
			createdAt: new Date(),
			updatedAt: new Date()
		})

		const shoes = new Category({
			category_name: "shoes",
			status: "active",
			createdAt: new Date(),
			updatedAt: new Date()
		})

		await cloths.save()
		await toys.save()
		await shoes.save()


		const tShirt = new Details({
			product_name: "Jockey",
			quantity: 50,
			price: 44,
			createdAt: new Date(),
			updatedAt: new Date()
		})

		const shirt = new Details({
			product_name: "addidas",
			quantity: 50,
			price: 33,
			createdAt: new Date(),
			updatedAt: new Date()
		})

		const car = new Details({
			product_name: "rc-car",
			quantity: 50,
			price: 55,
			createdAt: new Date(),
			updatedAt: new Date()
		})

		const helicopter = new Details({
			product_name: "rc-helicopter",
			quantity: 50,
			price: 55,
			createdAt: new Date(),
			updatedAt: new Date()
		})

		const nike = new Details({
			product_name: "nike",
			quantity: 50,
			price: 55,
			createdAt: new Date(),
			updatedAt: new Date()
		})

		const bata = new Details({
			product_name: "bata",
			quantity: 50,
			price: 55,
			createdAt: new Date(),
			updatedAt: new Date()
		})

		await car.save()
		await helicopter.save()

		await tShirt.save()
		await shirt.save()

		await nike.save()
		await bata.save()

		cloths.category_details = cloths.category_details.concat([tShirt._id, shirt._id])
		await cloths.save()

		toys.category_details = toys.category_details.concat([car._id, helicopter._id])
		await toys.save()

		shoes.category_details = shoes.category_details.concat([nike._id, bata._id])
		await shoes.save()

		await mongoose.connection.close()
	})
	.catch((e) => {
		logger.error("error connecting to MongoDB:", e.message)
	})


