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
    "Bed": "bed",
    "Black Stained Clay": "clay",
    "Clay": "clay",
    "Chest": "chest",
    "Cobblestone": "cobblestone",
    "Cobblestone Slab": "stone_slab",
    "Double Dark Oak Wood Slab": "wooden_slab",
    "Dispenser": "dispenser",
    "Double Spruce Wood Slab": "wooden_slab",
    "Fire": "lava",
    "Furnace": "furnace",
    "Grass": "grass",
    "Glass": "glass",
    "Glass Pane": "glass",
    "Green Wool": "wool 13",
    "Jukebox": "noteblock",
    "Spruce Wood": "log",
    "Stone Brick Slab": "stone_slab",
    "Stone Bricks": "stonebrick",
    "Stone": "stone",
    "Torch": "torch",
    "Netherrack": "netherrack",
    "Lever": "lever",
    "Oak Door": "dark_oak_door",
    "Oak Fence": "dark_oak_fence",
    "Oak Leaves": "leaves 1",
    "Oak Leaves (No Decay)": "leaves 1", 
    "Oak Wood": "log 1",
    "Oak Wood Plank": "planks",
    "Oak Wood Stairs": "spruce_stairs",
    "Spruce Leaves": "leaves",
    "Spruce Wood Plank": "planks",
    "Polished Andesite": "andesite",
    "Diamond Ore": "diamond_ore",
    "Iron ore": "iron_ore",
    "Hay Bale": "hay_block",
    "Wheat (Age 7)": "wheat 7",
    "Oak Fence": "dark_oak_fence",
    "Spruce Wood Plank": "planks 1",
    "Burning Furnace": "Furnace",
    "Hay Bale (Axis Y)": "hay_block",
    "Oak Leaves (No Decay and Check Decay)": "leaves 1",
    "Bookshelf": "bookshelf",
    "Gravel": "gravel",
    "Chest (East)": "chest",
    "Black Carpet": "carpet 7",
    "Farmland (Fully Hydrated)": "farmland 15",
    "Dirt": "dirt",
    "Wooden Trapdoor (East from block, Open, Top Half)": "trapdoor 1",
    "Burning Furnace (Facing East)": "furnace",
    "Wall Sign, south": "sign",
    "Chest (North)": "chest",
    "Wooden Trapdoor (South from block, Open, Bottom half)": "trapdoor 1",
    "Bed (North, Empty, Head of the bed)": "bed",
    "Bed (North, Empty, Foot of the bed)": "bed",
    "Oak Wood (facing north/south)": "log 1",
    "Wall Sign, north": "sign",
    "Still Water": "water",
    "Farmland (Dry Land)": "farmland 1",
    "Cyan Stained Clay": "clay",
    "Spruce Wood Slab (Bottom)": "wooden_slab 1",
    " Dark Oak Wood Slab (Bottom)": "wooden_slab 5",
    "Dark Oak Wood Plank": "planks 5",
    " Spruce Wood Slab (Bottom)": "wooden_slab 1",
    "Quartz Block": "quartz_block",
    "Black Stained Glass Pane": "stained_glass_pane 15",
    "White Stained Glass Pane": "stained_glass_pane 0",
    " Spruce Wood Slab (Upper)": "wooden_slab 11",
    "Stone Slab (Upper)": "stone_slab 8",
    "Stone Slab": "stone_slab",
    "Spruce Fence": "spruce_fence",
    "Glowstone": "glowstone",
    "White Wool": "wool",
    "Sandstone Slab": "stone_slab 1",
    "Sandstone Slab (Upper)": "stone_slab 9",
    "Red Wool": "wool 14",
    "Sandstone": "sandstone",
    "Lapis Lazuli Block": "lapis_block",
    "Bedrock": "bedrock",
    // "Bookshelf": "bookshelf",
    // "Bookshelf": "bookshelf",
    // "Bookshelf": "bookshelf",
    // "Bookshelf": "bookshelf",
    // "Bookshelf": "bookshelf",

    "Ladder": "ladder",
    "Wooden Trapdoor": "trapdoor",
    "Wooden Pressure Plate": "Wooden_pressure_plate",

}

let layer = 1
let level = 62
// for(let layer in object){
for (; layer <= Object.keys(object).length; layer++) {
    for (let prop in object[layer]) {

        for (let prop2 in object[layer][prop]) {
            if (!materials[object[layer][prop][prop2]["name"]]) console.log(object[layer][prop][prop2]["name"])
            command += `/setblock ~${object[layer][prop][prop2]["x"]} ${level + layer} ~${object[layer][prop][prop2]["z"]} ${materials[object[layer][prop][prop2]["name"]] ? materials[object[layer][prop][prop2]["name"]] : 'grass'}
                `

            console.log(object[layer][prop][prop2]["x"], object[layer][prop][prop2]["z"], layer)
            brackets_command_part += `}]`
            num += 1
        }
    }
}

let full_command = (command)
// console.log(first_command_part, command, last_command_part, brackets_command_part, "}")

fs = require('fs');
fs.writeFile(`full script.txt`, full_command, function (err) {
    if (err) return console.log(err);
    console.log('Hello World > helloworld.txt');
}); 
