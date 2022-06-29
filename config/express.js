import morgan from 'morgan'
import bodyParser from 'body-parser'
import compression from 'compression'
import cors from 'cors'

module.exports = function (app) {
  // logs incoming requests with endpoint and response time
  app.use(morgan(':method :url :response-time'))
  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ limit:"50mb", extended: true }))
  // parse application/json
  app.use(bodyParser.json({limit:"50mb"}))
  // compression of data
  app.use(compression(9))
  app.use(cors())
}
