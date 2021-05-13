const jimp = require("jimp")
const AdmZip = require('adm-zip');

const imgs = ['https://i.postimg.cc/Y26c7Q58/estado-de-calamidade-high.jpg',
   'https://i.postimg.cc/gksfXmkZ/milagres-do-paraiso-high.jpg',
    'https://i.postimg.cc/8PN2zjDG/o-clube-das-maes-solteiras-high.jpg']

for(let i = 0; i < imgs.length ; i++){
    let name = imgs[i].match(/[^\/]*$/)
    let name2 = name[0].replace("-high.jpg","") 
    jimp.read(imgs[i], (err, imgs) => {
        if(err) throw err;
        imgs    
                .resize(200,190)
              
                .write(`./images/${name2}_200x190.jpg`); 
                imgs    
                .resize(320,190)
                .quality(80)
                .write(`./images/${name2}_320x190.jpg`);
                imgs    
                .resize(640,400)
              
                .write(`./images/${name2}_640x190.jpg`);
    })
    //setInterval(()=>{
      //  let zip = new AdmZip();
        //zip.addLocalFile(`./images/${name}.jpg`);
         //zip.writeZip(/*target file name*/`./images/${name}.zip`);
    //},5000)
   
   
}

  
   








