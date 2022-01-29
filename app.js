import express from "express"
import mongoose from "mongoose";

import config from "./utils/config.js";
import logger from "./utils/logger.js";
import middleware from "./utils/middleware.js";

import categoryRouter from "./controllers/category.js";
import detailsRouter from "./controllers/details.js";

mongoose.connect(config.MONGODB_URI)
	.then(() => {
		logger.info("connected to MongoDB")
	})
	.catch((e) => {
		logger.error("error connecting to MongoDB:", e.message)
	})

const app = express()


app.use(express.json())
app.use(middleware.requestLogger)

app.use('/api/category', categoryRouter)
app.use('/api/details', detailsRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

export default app
