//external imports
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");
const cookieParser = require("cookie-parser");

//internal imports
const {notFoundHandler, errorHandler} = require("./middlewares/common/errorHandler");
const loginRouter = require("./router/loginRouter");
const usersRouter = require("./router/usersRouter");
const homeRouter = require("./router/homeRouter");

const acroRouter = require("./router/acroRouter");
const bcbRouter = require("./router/bcbRouter");
const marketingRouter = require("./router/maketingRouter");
const lawRouter = require("./router/lawRouter");
const pmoaRouter = require("./router/pmoaRouter");
const addMediaRouter = require("./router/mediaRouter");

//export
const htmltopdfRouter = require("./router/htmltopdfRouter")
const htmltopdfbcbRouter = require('./router/htmltopdfbcbRouter');
const htmltopdflawRouter = require("./router/htmltopdflawRouter");

//configuration 
const app = express();
dotenv.config();

//database connection 
mongoose.connect(process.env.MONGO_CONNECT_STRING, {
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>console.log("Database Connection successfully"))
.catch((err)=> console.log(err))

//request parser
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// view engine
app.set("view engine", "ejs");

//set static folder 
app.use(express.static(path.join(__dirname, "public")));

//cookie parser
app.use(cookieParser(process.env.COOKIE_SECRET));

//router setup
app.use("/", loginRouter);
app.use("/users", usersRouter);
app.use("/home", homeRouter);

app.use("/acro", acroRouter);
app.use('/bcb', bcbRouter);
app.use("/marketing", marketingRouter);
app.use('/law', lawRouter);
app.use('/pmoa', pmoaRouter);
app.use("/media", addMediaRouter);

//export
app.use('/htmltopdf', htmltopdfRouter);
app.use('/htmltopdfbcb', htmltopdfbcbRouter);
app.use('/htmltopdflaw', htmltopdflawRouter);

//not found handling 
app.use(notFoundHandler)

//common error handler
app.use(errorHandler)

//server listening 
app.listen(process.env.PORT, ()=>{
    console.log(`Server listening to port: ${process.env.PORT}`);
})
