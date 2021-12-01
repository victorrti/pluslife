import "dotenv/config"
import express from "express"
import {router} from "./routes"
import cors from 'cors'
import  http from "http";
import {Server}  from 'socket.io'

const app = express();
app.use(cors());

//const serverHttp = http.createServer(app);

/*const io = new Server(serverHttp,{
    cors:{
        origin: "*"
    }
}) */


/*io.on("connection",socket =>{
console.log(`Usuario conectado no socket ${socket.id}`);
}) */

const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;



app.use(express.json());

app.use(router);



app.get("/github",(request,response)=>{
    const url = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}`;
    response.redirect(url)
})

app.get("/signin/callback",(request,response)=>{
    const {code} = request.query;
    return response.json(code)
})

app.listen(4000,()=>{
    console.log("rodando na porta 4000")
});


