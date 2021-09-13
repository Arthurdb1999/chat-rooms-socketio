import express from 'express'
import http from 'http'
import path from 'path'
import { Server } from 'socket.io'

// Criação de um server com req/res e outro com sockets
const app = express()
app.use(express.static(path.join(__dirname, "..", "public")))

const serverHttp = http.createServer(app)

const io = new Server(serverHttp)

export { serverHttp, io }