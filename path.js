const fs = require('fs');
const { read } = require('fs/promises');
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

    /*for(let i=0; i < arr_files.length; i++) {
        console.log(arr_files[i]);
    }*/
    //console.log(arr_files.length);
    //console.log(arr_files[0]);
   //console.log(arr_files[0]);
   //console.log(arr_files);
   arr_files.forEach(item => {
      const p = item[0] + '/' + item;
      return p;
   })
    
}

//readDir(base,0);
fs.mkdir(base+'/b', err => {
    if (err) throw err;
})
fs.rename('folder/new/next_folder/b.txt','b/b.txt', err => {
    if (err) throw err;
});