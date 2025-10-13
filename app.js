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
const addMediaRouter = require("./router/mediaRouter");
const addAllMediaRouter = require("./router/addAllMediaRouter");
const addMediaPrintRouter = require("./router/addMediaPrinterRouter");
const addMediaEditRouter = require("./router/editMediaRouter");
const addMediaUpdateRouter = require("./router/updateMediaRouter");

//marketing
const  marketingRouter = require("./router/maketingRouter");
const marketingDataRouter = require("./router/marketingDataRouter");
const addMarketingEditRouter = require("./router/editMarketingRouter");
const addMarketingUpdateRouter = require("./router/updateMarketingRouter");
const addMarketingPrintRouter = require("./router/addMarketingPrinterRouter");

//bcb
const  bcbRouter = require("./router/bcbRouter");
const bcbDataRouter = require("./router/bcbDataRouter");
const addbcbEditRouter = require("./router/addbcbEditRouter");
const addbcbUpdateRouter = require("./router/addbcbUpdateRouter");
const addBcbPrintRouter = require("./router/addBcbPrintRouter");

//law
const lawRouter = require("./router/lawRouter");
const lawDataRouter =  require("./router/lawDataRouter");
const addlawEditRouter = require("./router/addlawEditRouter");
const addlawUpdateRouter = require("./router/addlawUpdateRouter");
const addLawPrintRouter = require("./router/addLawPrintRouter");

//pmoa
const pmoaRouter = require("./router/pmoaRouter");
const pmoaDataRouter =  require("./router/pmoaDataRouter");
const addPmoaEditRouter = require("./router/addPmoaEditRouter");
const addPmoaUpdateRouter = require("./router/addPmoaUpdateRouter");
const addPmoaPrintRouter = require("./router/addPmoaPrintRouter");


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
app.use("/media", addMediaRouter);
app.use("/add-media", addAllMediaRouter);
app.use("/", addMediaPrintRouter);
app.use("/", addMediaEditRouter);
app.use("/", addMediaUpdateRouter);

//route
app.use("/marketing", marketingRouter);
app.use("/marketing-data", marketingDataRouter);
app.use("/", addMarketingEditRouter);
app.use("/", addMarketingUpdateRouter);
app.use("/", addMarketingPrintRouter);

//bcb
app.use('/bcb', bcbRouter);
app.use("/bcb-data", bcbDataRouter);
app.use("/", addbcbEditRouter);
app.use("/", addbcbUpdateRouter);
app.use("/", addBcbPrintRouter);

//law
app.use('/law', lawRouter);
app.use("/law-data", lawDataRouter);
app.use("/", addlawEditRouter);
app.use("/", addlawUpdateRouter);
app.use("/", addLawPrintRouter);

//pmoa
app.use('/pmoa', pmoaRouter);
app.use("/pmoa-data", pmoaDataRouter);
app.use("/", addPmoaEditRouter);
app.use("/", addPmoaUpdateRouter);
app.use("/", addPmoaPrintRouter);



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
