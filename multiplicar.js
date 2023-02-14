const fs = require('fs');


const crearArchivo = async (base=5, listar=false, hasta=10) => {

    try {
        let result = '';
        let impr = '';

      
        
        for (let i = 1; i <= hasta; i++) {
            const suma = base * i
    
            result += `${base} ${'x'.blue} ${i} = ${suma}\n`.green;
            impr += `${base} ${'x'} ${i} = ${suma}\n`;

        }

        if( listar) { 
        console.log(`============`.green);
        console.log(`TABLA DEL ${base}`.yellow);
        console.log(`============`.red);
        console.log(result);
    }
    
        //fs.writeFile(`tabla del ${base}.txt`, result, (err) => {
        //    if (err) throw err;
    
        //    console.log(`Tabla del ${base} creada`);
        //} )
    
        fs.writeFileSync(`./salida/tabla-${base}.txt`, impr)
    
        return`tabla-${base}.txt creada`;

    } catch (error) {
       throw error
    }
  
}

module.exports = {
    crearArchivo
}