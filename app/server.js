//const { error } = require("console");
const autoBind = require("auto-bind");
const express = require("express");
const { default : mongoose } = require("mongoose");
const path = require("path");
const { AllRoutes } = require("./router/router");
const morgan = require("morgan");
const createError = require("http-errors");


module.exports = class Application {

    #app = express()
    #DB_URI;
    #PORT;

    constructor(PORT , DB_URI) {
        //autoBind(this)
        this.#PORT = PORT ; 
        this.#DB_URI = DB_URI;
        this.configApplication();
        this.connectTomongodb();
        this.createServer();
        this.createRoutes();
        this.errorHandling();

    }
    configApplication(){
        this.#app.use(morgan("dev"));
        this.#app.use(express.json());
        this.#app.use(express.urlencoded({extended : true}));
        this.#app.use(express.static(path.join(__dirname , ".." , "public")));
    }

    createServer(){
        const http = require("http");
        http.createServer(this.#app).listen(this.#PORT, () => {
            console.log("server run http://localhost:" + this.#PORT);
        })
    }

    connectTomongodb(){

        try {
            mongoose.connect(this.#DB_URI,);
            process.on("SIGINT" , async() => {
                await mongoose.connection.close();
                process.exit(0);
            });
            return console.log("connect to mongodb");
            
        } catch (error) {
            console.log(error);
        }

    }

    createRoutes(){
        this.#app.use(AllRoutes)
    }

    errorHandling(){

        this.#app.use((req , res , next ) => {
            next(createError.NotFound("Not Found (O_O)"));
        })

        this.#app.use((error , req , res , next) => {
            const serverError = createError.InternalServerError();
            const statusCode = error.status || serverError.status ;
            const message = error.message || serverError.message;
            return res.status(statusCode).json({
                errors : {
                    statusCode,
                    message,
                }
            })
        })

    }
}