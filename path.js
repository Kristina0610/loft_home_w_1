const fs = require('fs');
const read = require('fs/promises');
const path = require('path');

const base = './folder';

const readDir = (base, level) => {
    const files = fs.readdirSync(base); 
    let arr_folders = [];
    let arr_files = [];

    files.forEach(item => {
        let localBase = path.join(base, item);
        let state = fs.statSync(localBase);
        
        if(state.isDirectory()) {
            arr_folders.push(item);
            readDir(localBase, level+1);
        } else {
            arr_files.push(item);
        }
    });

   arr_files.forEach(item => {
      const p = item[0] + '/' + item;
      console.log(p);
   })

}


readDir(base,0);
/*fs.mkdirSync(base+'/a', err => {
    if (err) throw err;
})
fs.renameSync(base+'/new/a.txt',base+'/a/a.txt', err => {
    if (err) throw err;
});*/