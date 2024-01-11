import fs from "fs";
import { yarg } from './config/plugins/args.plugin';


const { b: base, l: limit, s: showTable } = yarg;
let ouputMessage = '';
const headerMessage = `
========================
      Tabla del ${base}
========================\n
`

for (let i = 1; i <= limit; i++) {
  ouputMessage += `${base} x ${i} = ${base * i}\n`;
}

ouputMessage = headerMessage + ouputMessage;

if (showTable) {
  console.log(ouputMessage);
}

const outputPath = `outputs`

fs.mkdirSync(outputPath, { recursive: true });
fs.writeFileSync(`${outputPath}/tabla-${base}.text`, ouputMessage);
console.log('File created!');


// grabar en el archivo de salida
// path: outputs/tabla-5.txt