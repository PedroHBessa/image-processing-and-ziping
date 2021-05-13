const jimp = require("jimp")
const AdmZip = require('adm-zip');
const imageConversion = require("image-conversion")
const fs = require('fs').promises;
const util = require('util')

const imgs = ['https://i.postimg.cc/xdPTxLmB/212-Foto-Bianca-Aun-Hit-Parade-03set2019.jpg',
    'https://i.postimg.cc/7hjxG9vJ/canal-brasil-larica-total-dando-pressao-na-sardinha.jpg',
    'https://i.postimg.cc/TwY2Zhq1/choque-de-cultura-1-796x350.jpg',
    'https://i.postimg.cc/DZjfFFBg/copa-hotel-2-796x350.jpg',
    'https://i.postimg.cc/7PRPWHCP/nos-como-a-casa-cai.jpg',
    'https://i.postimg.cc/vT4YZjKd/o-som-do-vinil-charles-gavin-cred-ana-paula-amorim-7695-796x350.jpg',
    'https://i.postimg.cc/SxFSmg7w/o-pais-do-cinema-Motorrad.jpg',
    'https://i.postimg.cc/65G6skRr/Pornolandia-Gina-Stocco.jpg',
    
    
    ]

    async function listarArquivosDoDiretorio(diretorio, arquivos) {

    if(!arquivos)
        arquivos = [];

    let listaDeArquivos = await fs.readdir(diretorio);
    for(let k in listaDeArquivos) {
        let stat = await fs.stat(diretorio + '/' + listaDeArquivos[k]);
        if(stat.isDirectory())
            await listarArquivosDoDiretorio(diretorio + '/' + listaDeArquivos[k], arquivos);
        else
            arquivos.push(diretorio + '/' + listaDeArquivos[k]);
    }

    return arquivos;
}



async function test() {
    let arquivos = await listarArquivosDoDiretorio('C:/Users/vx39/Desktop/nodejs/edit-img/img-processing/images'); // coloque o caminho do seu diretorio
  
    return arquivos.length;
    
}


async function verify(){
   let numeroDeArquivos = await test() 
   
   if(numeroDeArquivos !== imgs.length){
    
        setInterval(verify(),2000)
     } else {
         
        for(let i = 0; i < imgs.length ; i++){

  
            let name = imgs[i].match(/[^\/]*$/)
            let zip = new AdmZip();
            zip.addLocalFile(`./images/${name}`);
             zip.writeZip(/*target file name*/`./images/${name}.zip`);
            }
     
}}



for(let i = 0; i < imgs.length ; i++){

  
    let name = imgs[i].match(/[^\/]*$/)
    let dir = `./images/${name}`
    jimp.read(imgs[i], (err, imgs) => {
        if(err) throw err;
        imgs    
                .resize(jimp.AUTO,720)
                .quality(70)
                .write(dir); 
    })
     

}

verify();








  
   







    
