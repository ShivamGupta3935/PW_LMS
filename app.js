import cookieParser from 'cookie-parser';
import express from 'express'
import morgan from 'morgan';
import cors from 'cors'

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

export default app;