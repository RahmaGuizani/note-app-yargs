const fs= require('fs')


const objst=[{
	name:'seif',
	age:31
}]
//bech na3ml fichier json n7ot fih lobjet hthia 
fs.writeFileSync('notes.json' , JSON.stringify(objst))
