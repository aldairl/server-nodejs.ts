import routerUpload from "./routes/upload.routes";
import Server from "./server";


const server = new Server();

server.app.use('/upload', routerUpload);

server.start(() => {
    console.log(`server is running on port ${server.port}`)
})