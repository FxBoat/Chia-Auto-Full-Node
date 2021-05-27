const fs = require('fs');
const got = require('got');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const chiaUrl = 'https://chia.keva.app/';

const execFile = require('child_process').execFile;

const { exec } = require('child_process');

//const writeFile = fs.createWriteStream('./ip_lists_from_keva.txt');

const getKevaIp = async () => {

    got(chiaUrl).then(response => {
            const dom = new JSDOM(response.body);
            let data = dom.window.document.querySelector('table').textContent;
            let data_arr = data.split('8444');
            
            let ip_arr = [];
            for(let i=1;i<data_arr.length-1;i++){
                let ip = data_arr[i].split(']');
                let ip_split;
                if(i==1){
                    ip_split = ip[1].split(/\s(.+)/)[1]; 
                    // writeFile.write(ip[1].split(/\s(.+)/)[1]);
                    // writeFile.write('\n');


                    let child1 = execFile('C:/\Users/\digit/\AppData/\Local/\chia-blockchain/\app-1.1.5/resources/\app.asar.unpacked/\daemon/\chia.exe', ['show','-a',ip_split+':8444'], (err, stdout, stderr) => {
                        if (err) {
                        throw err;
                        }
                    
                        console.log(stdout);
                    });
           

                }else{
                    ip_split = ip[1];


                    let child1 = execFile('C:/\Users/\digit/\AppData/\Local/\chia-blockchain/\app-1.1.5/resources/\app.asar.unpacked/\daemon/\chia.exe', ['show','-a',ip_split+':8444'], (err, stdout, stderr) => {
                        if (err) {
                        throw err;
                        }
                    
                        console.log(stdout);
                    });
                    
                }
                ip_arr.push(ip_split);
            }

           
            console.log(ip_arr);
         
        }).catch(err => {
            return 0;
            console.log(err);
    });
}
module.exports = {
    getKevaIp
}
     