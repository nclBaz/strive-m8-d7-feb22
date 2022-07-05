import express from "express"
import cors from "cors"
import productsRouter from "./api/products/index.js"

const server = express()

// ************************************ MIDDLEWARES ***************************

server.use(cors())
server.use(express.json())

// ************************************** ENDPOINTS ***************************

server.use("/products", productsRouter)

// *********************************** ERROR HANDLERS *************************

// mongoose.connect(process.env.MONGO_URL)

// mongoose.connection.on("connected", () => { // If we execute the server here, JEST will not run properly and it will try to start the server over and over again, in particular when we gonna restart the tests, we gonna get PORT ALREADY IN USE errors
//   server.listen(port, () => {
//     console.table(listEndpoints(server))
//   })
// })

export default server