const jimp = require("jimp")
const AdmZip = require('adm-zip');

const imgs = ["https://trello-attachments.s3.amazonaws.com/5f889bab20f8a31fc819d6ae/6087419f12ae886f1e3fb426/0bff194af097ea1db4923e12875d6c88/bens-confiscados.jpg",
    "https://trello-attachments.s3.amazonaws.com/5f889bab20f8a31fc819d6ae/6087419f12ae886f1e3fb426/0d9e50340df0fd454060edac903ac261/barretao.jpg",
    "https://trello-attachments.s3.amazonaws.com/5f889bab20f8a31fc819d6ae/6087419f12ae886f1e3fb426/9255f5120168c77355efb1fa6551b595/em-benzinho.jpg",
    "https://trello-attachments.s3.amazonaws.com/5f889bab20f8a31fc819d6ae/6087419f12ae886f1e3fb426/528e1d6d99134f387a919d0a3415be79/lili-estrela-do-crime.jpg",
    "https://trello-attachments.s3.amazonaws.com/5f889bab20f8a31fc819d6ae/6087419f12ae886f1e3fb426/a658f83e7cf78037fbea8336e7ef7002/o-grande-circo-mistico.jpg",
    "https://trello-attachments.s3.amazonaws.com/5f889bab20f8a31fc819d6ae/6087419f12ae886f1e3fb426/2b7ca6a910e2af4ca35f702aeef99893/filme-o-bandido-da-luz-vermelha.png",
    "https://trello-attachments.s3.amazonaws.com/5f889bab20f8a31fc819d6ae/6087419f12ae886f1e3fb426/58259fc2d4053b2122e9b8a5ca87b709/terra-em-transe.jpg",

   ]

for(let i = 0; i < imgs.length ; i++){
    let name = imgs[i].match(/[^\/]*$/)
    jimp.read(imgs[i], (err, imgs) => {
        if(err) throw err;
        imgs    
                .resize(jimp.AUTO,720)
                .quality(80)
                .write(`./images/${name}.jpg`); 
    })
    setInterval(()=>{
        let zip = new AdmZip();
        zip.addLocalFile(`./images/${name}.jpg`);
         zip.writeZip(/*target file name*/`./images/${name}.zip`);
    },5000)
   
   
}

  
   








