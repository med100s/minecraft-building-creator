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
    "Stone Bricks": "stonebrick",
    "Clay": "clay",
    "Torch": "torch",
    "Cobblestone": "cobblestone",
    "Glass Pane": "glass",
    "Green Wool": "wool",
    "Netherrack": "netherrack",
    "Spruce Wood": "log",
    "Cobblestone Slab": "stone_slab",
    "Oak Wood Plank": "planks",
    "Fire": "lava",
    "Furnace": "furnace",
    "Jukebox": "noteblock",
    "Lever": "lever",
    "Dispenser": "dispenser",
    "Oak Fence": "dark_oak_fence",
    "Wooden Pressure Plate": "Wooden_pressure_plate",
    "Bed": "bed",
    "Chest": "chest",
    "Oak Door": "dark_oak_door",
    "Wooden Trapdoor": "trapdoor",
    "Ladder": "ladder",
    "Oak Wood Stairs": "spruce_stairs"

}

let layer = 1 
let level = 61
// for(let layer in object){
for (; layer <= Object.keys(object).length; layer++) { 
        for (let prop in object[layer]) {

            for (let prop2 in object[layer][prop]) {

                command += `/setblock ~${object[layer][prop][prop2]["x"]} ${level + layer} ~${object[layer][prop][prop2]["z"]} ${materials[object[layer][prop][prop2]["name"]] ? materials[object[layer][prop][prop2]["name"]] : 'grass'};`

                console.log(object[layer][prop][prop2]["x"], object[layer][prop][prop2]["z"], layer)
                brackets_command_part += `}]`
                num += 1
            } 
    }
    }

    let full_command = ( command )
    // console.log(first_command_part, command, last_command_part, brackets_command_part, "}")

    fs = require('fs');
    fs.writeFile(`full script.txt`, full_command, function (err) {
        if (err) return console.log(err);
        console.log('Hello World > helloworld.txt');
    }); 
