var choices = [{
    "choice": "rock",
    "beats": ["fire","scissors","snake","human","tree","wolf","sponge"],
    "losesTo": ["paper","air","water","dragon","devil","lightning","gun"],
    "tie": ["rock"],
    },{
    "choice": "fire",
    "beats": ["scissors","snake","human","tree","wolf","sponge","paper"],
    "losesTo": ["air","water","dragon","devil","lightning","gun","rock"],
    "tie": ["fire"],
    },{
    "choice": "scissors",
    "beats": ["snake","human","tree","wolf","sponge","paper","air"],
    "losesTo": ["rock","fire","water","dragon","devil","lightrning","gun"],
    "tie": ["scissors"],
    },{
    "choice" : "snake",
    "beats": ["human","tree","wolf","sponge","paper","air","water"],
    "losesTo": ["rock","fire","scissors","dragon","devil","lightning","gun"],
    "tie": ["snake"],
    },{
    "choice" : "human", 
    "beats": ["tree","wolf","sponge","paper","air","water","dragon"],
    "losesTo": ["rock","fire","scissors","snake","devil","lightning","gun"],
    "tie": ["human"],
    },{
    "choice" : "tree",
    "beats": ["wolf","sponge","paper","air","water","dragon","devil"],
    "losesTo": ["rock","fire","scissors","snake","human","lightning","gun"],
    "tie": ["tree"],
    },{
    "choice" : "wolf",
    "beats": ["sponge","paper","air","water","dragon","devil","lightning"],
    "losesTo": ["rock","fire","scissors","snake","human","tree","gun"],
    "tie": ["wolf"],
    },{
    "choice": "sponge",
    "beats": ["paper","air","water","dragon","devil","lightning","gun"],
    "losesTo": ["rock","fire","scissors","snake","human","tree","wolf"],
    "tie": ["sponge"],
    },{
    "choice": "paper",
    "beats": ["air","water","dragon","devil","lightning","gun","rock"],
    "losesTo": ["fire","scissors","snake","human","tree","wolf","sponge"],
    "tie": ["paper"],
    },{
    "choice" : "air",
     "beats": ["water","dragon","devil","lightning","gun","rock","fire"],
    "losesTo": ["scissors","snake","human","tree","wolf","sponge","paper"],
    "tie": ["air"],
    },{
    "choice" : "water",
    "beats": ["dragon","devil","lightning","gun","rock","fire","scissors"],
    "losesTo": ["snake","human","tree","wolf","sponge","paper","air"],
    "tie": ["water"],
    },{
    "choice" : "dragon",
    "beats": ["devil","lightning","gun","rock","fire","scissors","snake"],
    "losesTo": ["human","tree","wolf","sponge","paper","air","water"],
    "tie": ["dragon"],
    },{
    "choice" : "devil",
    "beats": ["lightning","gun","rock","fire","scissors","snake","human"],
    "losesTo": ["tree","wolf","sponge","paper","air","water","dragon"],
    "tie": ["devil"],
    },{
    "choice" : "lightning",
    "beats": ["gun","rock","fire","scissors","snake","human","tree"],
    "losesTo": ["wolf","sponge","paper","air","water","dragon","devil"],
    "tie": ["lightning"],
    },{
    "choice" : "gun",
    "beats": ["rock","fire","scissors","snake","human","tree","wolf"],
    "losesTo": ["sponge","paper","air","water","dragon","devil","lightning"],
    "tie": ["gun"],
}];
    
let objects = JSON.parse(choices);
objects = JSON.parse(choices);