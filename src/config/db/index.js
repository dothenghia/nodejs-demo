// Using Node.js `require()`
const mongoose = require('mongoose');

async function connect() {

    try {
        await mongoose.connect('mongodb://localhost:27017/New_seven_dev'
        // , {
        //     useNewUrlParser : true,
        //     useUnifiedTopology : true,
        //     useCreateIndex :  true,
        // }
        );

        console.log("Ket noi oki");
    } catch (error) {
        console.log("KHONG KET NOI DUOC");
    }
}


module.exports = { connect };

