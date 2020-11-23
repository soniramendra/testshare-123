const File = require('./models/file');
const fs = require('fs');
const connectDB = require('./config/db');

connectDB();

async function fetchData(){
    // 24 hours old files delete
    const pastDate = new Date(Date.now() -  24 * 60 * 60 * 1000);
    const files = File.find({ createdAt: { $lt: pastDate } });
    if(files.length){
        for(const file of flies){
            try{
                fs.unlinkSync(file.path);
                await file.remove();
                console.log(`Successfully deleted ${file.filename}`);
            }catch (err){
                console.log(`Error while deleting. ${err}`);
                }
            }
            console.log('job done!');
        }
    }


    fetchData().then(process.exit);