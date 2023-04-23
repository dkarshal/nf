import app from "./app"
 import env from "./util/validateEnv"
 import mongoose from "mongoose"

 const port = env.PORT

 mongoose.connect(env.MONGO_CONNECTION_STRING)
   .then(() => {
      console.log("Mongoose ok")
      app.listen(port, () => {
            console.log("Server ok, port: " + port)
      })
   })
   .catch(console.error)
