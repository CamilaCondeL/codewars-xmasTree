
const ieth = (value) => {
  return  value+value-1;
}

function generateLevel(length, filled){
let level = "";

const amountOfUnderscores = length - filled; //undescores is '_'

for (let i = 0; i < amountOfUnderscores; i++) {
  level += "_";
}

let hashtag = "";
for(let i = 0; i<filled; i++) {
  hashtag += "#";
}
middleOf = level.length/2;

level = [level.slice(0, middleOf), hashtag, level.slice(middleOf)].join("");
  return level;
}


function xmasTree(n) {
const result = [];
const length = ieth(n);

for (let i=1; i<=n; i++) {
  const level = generateLevel(length, ieth(i));
  result.push(level);
}

result.push(generateLevel(length, 1));
result.push(generateLevel(length, 1));
return result;
}





module.exports = {xmasTree, generateLevel}