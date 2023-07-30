const http = require('http')

const HOSTNAME = 'localhost'
const PORT = 4000

function processHandler(req, res){
    res.end('Hello World')
    console.log('Hello World')
}

const server = http.createServer(processHandler)
server.listen(PORT, HOSTNAME, ()=>{
    console.log(`Server has started successfull at ${HOSTNAME}:${PORT}`)
})