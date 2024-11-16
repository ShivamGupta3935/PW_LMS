import app from './app.js'
import dotenv from 'dotenv'
import connectToDB from './dbConnect.js';

const port = process.env.PORT || 5555;
app.listen(port, async() => {
    await connectToDB()
    console.log(`app is listening on port: http://localhost:${port}`);    
})
