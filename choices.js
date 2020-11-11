var choices = [{
    "choice": "gun",
    "beats": ["wolf", "cockroach", "tree", "man", "woman", "monkey", "snake", "axe", "scissors", "fire", "sun", "rock"],
    "losesTo": ["dynamite", "nuke", "lightning", "devil", "dragon", "alien", "water", "bowl", "air", "moon", "paper", "sponge"],
    "tie": ["gun"],
}, {
    "choice": "dynamite",
    "beats": ["cockroach", "tree", "man", "woman", "monkey", "snake", "axe", "scissors", "fire", "sun", "rock", "gun"],
    "losesTo": ["nuke", "lightning", "devil", "dragon", "alien", "water", "bowl", "air", "moon", "paper", "sponge", "wolf"],
    "tie": ["dynamite"],
}, {
    "choice": "nuke",
    "beats": ["tree", "man", "woman", "monkey", "snake", "axe", "scissors", "fire", "sun", "rock", "gun", "dynamite"],
    "losesTo": ["lightning", "devil", "dragon", "alien", "water", "bowl", "air", "moon", "paper", "sponge", "wolf", "cockroach"],
    "tie": ["nuke"],
}, {
    "choice": "lightning",
    "beats": ["man", "woman", "monkey", "snake", "axe", "scissors", "fire", "sun", "rock", "gun", "dynamite", "nuke"],
    "losesTo": ["devil", "dragon", "alien", "water", "bowl", "air", "moon", "paper", "sponge", "wolf", "cockroach", "tree"],
    "tie": ["lightning"],
}, {
    "choice": "devil",
    "beats": ["woman", "monkey", "snake", "axe", "scissors", "fire", "sun", "rock", "gun", "dynamite", "nuke", "lightning"],
    "losesTo": ["dragon", "alien", "water", "bowl", "air", "moon", "paper", "sponge", "wolf", "cockroach", "tree", "man"],
    "tie": ["devil"],
}, {
    "choice": "dragon",
    "beats": ["monkey", "snake", "axe", "scissors", "fire", "sun", "rock", "gun", "dynamite", "nuke", "lightning", "devil"],
    "losesTo": ["alien", "water", "bowl", "air", "moon", "paper", "sponge", "wolf", "cockroach", "tree", "man", "woman"],
    "tie": ["dragon"],
}, {
    "choice": "alien",
    "beats": ["snake", "axe", "scissors", "fire", "sun", "rock", "gun", "dynamite", "nuke", "lightning", "devil", "dragon"],
    "losesTo": ["water", "bowl", "air", "moon", "paper", "sponge", "wolf", "cockroach", "tree", "man", "woman", "monkey"],
    "tie": ["alien"],
}, {
    "choice": "water",
    "beats": ["axe", "scissors", "fire", "sun", "rock", "gun", "dynamite", "nuke", "lightning", "devil", "dragon", "alien"],
    "losesTo": ["bowl", "air", "moon", "paper", "sponge", "wolf", "cockroach", "tree", "man", "woman", "monkey", "snake"],
    "tie": ["water"],
}, {
    "choice": "bowl",
    "beats": ["scissors", "fire", "sun", "rock", "gun", "dynamite", "nuke", "lightning", "devil", "dragon", "alien", "water"],
    "losesTo": ["air", "moon", "paper", "sponge", "wolf", "cockroach", "tree", "man", "woman", "monkey", "snake", "axe"],
    "tie": ["bowl"],
}, {
    "choice": "air",
    "beats": ["fire", "sun", "rock", "gun", "dynamite", "nuke", "lightning", "devil", "dragon", "alien", "water", "bowl"],
    "losesTo": ["moon", "paper", "sponge", "wolf", "cockroach", "tree", "man", "woman", "monkey", "snake", "axe", "scissors"],
    "tie": ["air"],
}, {
    "choice": "moon",
    "beats": ["sun", "rock", "gun", "dynamite", "nuke", "lightning", "devil", "dragon", "alien", "water", "bowl", "air"],
    "losesTo": ["paper", "sponge", "wolf", "cockroach", "tree", "man", "woman", "monkey", "snake", "axe", "scissors", "fire"],
    "tie": ["moon"],
}, {
    "choice": "paper",
    "beats": ["rock", "gun", "dynamite", "nuke", "lightning", "devil", "dragon", "alien", "water", "bowl", "air", "moon"],
    "losesTo": ["sponge", "wolf", "cockroach", "tree", "man", "woman", "monkey", "snake", "axe", "scissors", "fire", "sun"],
    "tie": ["paper"],
}, {
    "choice": "sponge",
    "beats": ["gun", "dynamite", "nuke", "lightning", "devil", "dragon", "alien", "water", "bowl", "air", "moon", "paper"],
    "losesTo": ["wolf", "cockroach", "tree", "man", "woman", "monkey", "snake", "axe", "scissors", "fire", "sun", "rock"],
    "tie": ["sponge"],
}, {
    "choice": "wolf",
    "beats": ["dynamite", "nuke", "lightning", "devil", "dragon", "alien", "water", "bowl", "air", "moon", "paper", "sponge"],
    "losesTo": ["cockroach", "tree", "man", "woman", "monkey", "snake", "axe", "scissors", "fire", "sun", "rock", "gun"],
    "tie": ["wolf"],
}, {
    "choice": "cockroach",
    "beats": ["nuke", "lightning", "devil", "dragon", "alien", "water", "bowl", "air", "moon", "paper", "sponge", "wolf"],
    "losesTo": ["tree", "man", "woman", "monkey", "snake", "axe", "scissors", "fire", "sun", "rock", "gun", "dynamite"],
    "tie": ["cockroach"],
}, {
    "choice": "tree",
    "beats": ["lightning", "devil", "dragon", "alien", "water", "bowl", "air", "moon", "paper", "sponge", "wolf", "cockroach"],
    "losesTo": ["man", "woman", "monkey", "snake", "axe", "scissors", "fire", "sun", "rock", "gun", "dynamite", "nuke"],
    "tie": ["tree"],
}, {
    "choice": "man",
    "beats": ["devil", "dragon", "alien", "water", "bowl", "air", "moon", "paper", "sponge", "wolf", "cockroach", "tree"],
    "losesTo": ["woman", "monkey", "snake", "axe", "scissors", "fire", "sun", "rock", "gun", "dynamite", "nuke", "lightning"],
    "tie": ["man"],
}, {
    "choice": "woman",
    "beats": ["dragon", "alien", "water", "bowl", "air", "moon", "paper", "sponge", "wolf", "cockroach", "tree", "man"],
    "losesTo": ["monkey", "snake", "axe", "scissors", "fire", "sun", "rock", "gun", "dynamite", "nuke", "lightning", "devil"],
    "tie": ["woman"],
}, {
    "choice": "monkey",
    "beats": ["alien", "water", "bowl", "air", "moon", "paper", "sponge", "wolf", "cockroach", "tree", "man", "woman"],
    "losesTo": ["snake", "axe", "scissors", "fire", "sun", "rock", "gun", "dynamite", "nuke", "lightning", "devil", "dragon"],
    "tie": ["monkey"],
}, {
    "choice": "snake",
    "beats": ["water", "bowl", "air", "moon", "paper", "sponge", "wolf", "cockroach", "tree", "man", "woman", "monkey"],
    "losesTo": ["axe", "scissors", "fire", "sun", "rock", "gun", "dynamite", "nuke", "lightning", "devil", "dragon", "alien"],
    "tie": ["snake"],
}, {
    "choice": "axe",
    "beats": ["bowl", "air", "moon", "paper", "sponge", "wolf", "cockroach", "tree", "man", "woman", "monkey", "snake"],
    "losesTo": ["scissors", "fire", "sun", "rock", "gun", "dynamite", "nuke", "lightning", "devil", "dragon", "alien", "water"],
    "tie": ["axe"],
}, {
    "choice": "scissors",
    "beats": ["air", "moon", "paper", "sponge", "wolf", "cockroach", "tree", "man", "woman", "monkey", "snake", "axe"],
    "losesTo": ["fire", "sun", "rock", "gun", "dynamite", "nuke", "lightning", "devil", "dragon", "alien", "water", "bowl"],
    "tie": ["scissors"],
}, {
    "choice": "fire",
    "beats": ["moon", "paper", "sponge", "wolf", "cockroach", "tree", "man", "woman", "monkey", "snake", "axe", "scissors"],
    "losesTo": ["sun", "rock", "gun", "dynamite", "nuke", "lightning", "devil", "dragon", "alien", "water", "bowl", "air"],
    "tie": ["fire"],
}, {
    "choice": "sun",
    "beats": ["paper", "sponge", "wolf", "cockroach", "tree", "man", "woman", "monkey", "snake", "axe", "scissors", "fire"],
    "losesTo": ["rock", "gun", "dynamite", "nuke", "lightning", "devil", "dragon", "alien", "water", "bowl", "air", "moon"],
    "tie": ["sun"],
}, {
    "choice": "rock",
    "beats": ["sponge", "wolf", "cockroach", "tree", "man", "woman", "monkey", "snake", "axe", "scissors", "fire", "sun"],
    "losesTo": ["gun", "dynamite", "nuke", "lightning", "devil", "dragon", "alien", "water", "bowl", "air", "moon", "paper"],
    "tie": ["rock"],
}];