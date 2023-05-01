import express, { request } from "express"

const server = express()

server.use(express.static("public"))
server.set("view engine", "ejs")
server.set("views", "./views")

//routes 

function routeMaker(url, ejs) {
  server.get(url, (request, response) => {
    response.render(ejs)
  })
}

routeMaker('/', 'index')
routeMaker('/16-9', '16-9')
routeMaker('/4-11', '4-11')
routeMaker('/20-1', '20-1')
routeMaker('/17-2', '17-2')
routeMaker('/31-3', '31-3')


//poortnummer instellen
server.set("port", 8800)

//start de server
server.listen(server.get("port"), () => {
  console.log(`Application started on http://localhost:${server.get("port")}`)
})
