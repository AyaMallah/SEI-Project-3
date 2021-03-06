import express from 'express'
import mongoose from 'mongoose'
import { dbURI, port } from './config/environment.js'
import router from './config/router.js'
import path from 'path'

const app = express()

const __dirname = path.resolve()

const startServer = async () => {
  try {
    // connecting dbURI
    await mongoose.connect(dbURI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
    console.log('π Database has connected successfully')

    app.use(express.static(`${__dirname}/client/build`))

    // log request
    app.use((req, _res, next) => {
      console.log(`πΆπ± Incoming request: METHOD: ${req.method}, URL: ${req.url}`)
      next()
    })

    // convert into json
    app.use(express.json())

    // add router
    app.use('/api', router)

    app.use('/*', (_, res) => res.sendFile(`${__dirname}/client/build/index.html`))

    // event listener
    app.listen(port, () => console.log(`πΆπ± Express is up and running on ${port}`))

  } catch (err) {
    console.log(err)
    console.log('S.O.S π')
  }
}

startServer()


