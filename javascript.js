var names = [
  "Ramen Monster", "Worm", "Mother of Dorks", "Poopy McJerkbeak", "CEB!",
  "Hot Mess Express", "Cheeto von Tweeto", "Longing-eyes Von Gimmefood",
  "The Nugget Queen", "Pickle","The Lone Ranger", "Danger Noodle",
  "Secret Weapon", "The Internet Explorer", "Loser McLoserFace",
  "Bumblebee Pudding Pants", "Fartacus", "Lizardbreath", "Minion Queen",
  "Miss Wiskers", "SASSQuatch", "Buzz", "Queen Kong", "Pip Squeak", "The Aggressive Sneaker",
  "Queen of Dorks", "Short Stack", "Schmoopy", "Giggles", "Beak", "Smeak", "Meep Born",
  "GIANT NERD", "The Boss", "Danger Mouse", "Captain Cannon", "Secret Weapon!",
  "Bec-naldo", "Lionel Bessi", "BEC-HAM", "Belch", "Miss Tea", "Chewbacca",
  "Derp", "Bec-Hulk", "Bean!", "1 Half of Brazenly Dorky", "Baker", "Miss Bean",
  "Goggles", "Fringy", "Groovy Shoes", "Cheese Ball", "Thays how I Egg Roll Bitch!",
  "4 Eyes", "Stumblebum", "Bird Lady", "Small Fry", "Shorty", "Weirdo",
  "The Oringinal Gangster", "Creeper", "Luna", "Goose", "Paddle Foot", "Sunshine",
  "Pun Master", "Obi-Wan", "Egg Head", "Scrambeled", "The Bee", "French Fry",
  "The Barger", "Judo Master", "The CLAW", "Meow Meow", "Bumblebee", "Quoka",
  "Quok-owl", "The Wise One", "Stat", "Doofus", "Slytherin's Nicest", "Dork", "Cool Cat",
  "DJ Becsalot", "Itsy Bitsy Becipder", "Old Woman", "Needs a new hip", "Puzzle",
  "Bounty", "Fluff Inspector", "Space Girl", "The Apprentice", "Dwight", "Muscles",
  "Colossus", "Muggle", "Loser", "Goober", "Nerd", "Oddball", "Big Cheddar",
  "Furb", "Garbage Gut Destroyer", "Egg Roll", "Turtle Neck", "Frazzle Mc FrazzleFace",
  "Derpina", "Ducks McQuacken", "Sleepy", "Droolius", "Bib", "Disaster Eater", "The Spelling Bee",
  "Eventual Dance Off LOSER", "Tower Control", "Bork Face", "Popachops", "Dill", "T-BEX!", "Becasaurus Rex",
  "Megatron", "Bumfluff", "Smelly", 
  
];

function newName(){
  var randomNumber = Math.floor(Math.random() * (names.length));
  document.getElementById('nameDisplay').innerHTML = names[randomNumber];
}
