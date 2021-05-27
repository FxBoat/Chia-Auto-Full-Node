const getKeva = require('./getKeva');
const cron = require('node-cron');
const addData = async () => {
    let ip = await getKeva.getKevaIp();
    //console.log(ip);
}  
console.log('Script is running...');
cron.schedule('*/15 * * * *', () => {
addData();
  console.log('running a task every 15 minute');
});

