import cookieParser from 'cookie-parser';
import express from 'express'
import morgan from 'morgan';
import cors from 'cors'
import router from './routes/user.routes.js';
import { errorMiddleware } from './middleware/error.middleware.js';

const app = express()
app.use(express.json());

app.use(cors({
    origin: process.env.FRONTEND_URL,
    Credentials: true
}))

app.use(cookieParser())
app.use(morgan('dev'))

app.use("/ping", (req, res) => {
    res.send("pong")
})

app.use('/api/v1/user', userRoutes)


app.all("*", (req, res) => {
    res.status(400).send(" page not found")
})

app.use(errorMiddleware)
export default app;