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
    {Command:"/fill ~ 0 ~-1 ~ 250 ~ air"},Passengers:
  
[{id:falling_block,Block:command_block,Time:1,TileEntityData:
{Command:"/fill ~ 0 ~-1 ~ 250 ~-1 redstone_block"},Passengers:

[{id:falling_block,Block:redstone_block,Time:1}]
}]
}] 
}] 
}]
`
let brackets_command_part = ``



let layer = 3
let level = 64
for (let prop in object[layer]) {
    // console.log(object["1"][prop],object["1"][prop]["z"] )
    // console.log(prop)
    for (let prop2 in object[layer][prop]) {
        //console.log(object["1"][prop][prop2])

        // console.log(object[layer][prop][prop2]["x"], object["1"][prop][prop2]["z"])
        command += `
        [{id:falling_block,Block:command_block,Time:1,TileEntityData:
        {Command:"/setblock ~${object[layer][prop][prop2]["x"]} ${level} ~${object[layer][prop][prop2]["z"]} grass"},Passengers:     
        `   

        brackets_command_part += `}]`
        // console.log(num)
        num += 1
    }
}
let full_command = (first_command_part + command + last_command_part + brackets_command_part +"}")
// console.log(first_command_part, command, last_command_part, brackets_command_part, "}")

fs = require('fs');
fs.writeFile('helloworld.txt', full_command, function (err) {
    if (err) return console.log(err);
    console.log('Hello World > helloworld.txt');
});
