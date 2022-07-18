let object = {}


let num = 0
// console.log(object["1"])

let first_command_part = `
/summon falling_block ~ ~1 ~ 

{Block:command_block,Time:1,TileEntityData:
{Command:"/say first"},Passengers:

[{id:falling_block,Block:command_block,Time:1,TileEntityData:
{Command:"/setblock ~11 ~-2 ~14 grass"},Passengers:
`
let command = ``

let last_command_part = `
[{id:falling_block,Block:command_block,Time:1,TileEntityData:
{Command:"/say last"},Passengers:

[{id:falling_block,Block:command_block,Time:1,TileEntityData:
    {Command:"/fill ~ 1 ~-1 ~ 250 ~ air"},Passengers:
  
[{id:falling_block,Block:command_block,Time:1,TileEntityData:
{Command:"/fill ~ 1 ~-1 ~ 250 ~-1 redstone_block"},Passengers:

[{id:falling_block,Block:redstone_block,Time:1}]
}]
}] 
}] 
}]
`
let brackets_command_part = ``

const materials = {
    "Stone Bricks":"stonebrick",
    "Clay":"clay",
    "Torch":"torch",
    "Glass Pane":"glass"
}

let layer = 1 
let layer_plus  = layer + 1
let level = 61
// for(let layer in object){
for ( ; layer < layer_plus ; layer++) {
    for (let prop in object[layer]) {

        for (let prop2 in object[layer][prop]) {

            command += `
            [{id:falling_block,Block:command_block,Time:1,TileEntityData:
            {Command:"/setblock ~${object[layer][prop][prop2]["x"]} ${level + layer} ~${object[layer][prop][prop2]["z"]} ${materials[object[layer][prop][prop2]["name"]]?materials[object[layer][prop][prop2]["name"]]:'grass'}"},Passengers:     
            `

            console.log(object[layer][prop][prop2]["x"], object[layer][prop][prop2]["z"], layer)
            brackets_command_part += `}]`
            num += 1
        }
    } 
}
// }

let full_command = (first_command_part + command + last_command_part + brackets_command_part + "}")
// console.log(first_command_part, command, last_command_part, brackets_command_part, "}")

fs = require('fs');
fs.writeFile('helloworld.txt', full_command, function (err) {
    if (err) return console.log(err);
    console.log('Hello World > helloworld.txt');
});
