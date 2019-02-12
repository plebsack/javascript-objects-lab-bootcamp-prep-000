var recipes = {};

function updateObjectWithKeyAndValue(recipes, key, value){
  recipes[key]=value
  return recipes
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value){
  recipes[key]=value
  return recipes
}

