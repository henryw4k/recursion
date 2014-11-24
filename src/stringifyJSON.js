// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  var jsonString = '';
    
  // if 1 then we can just append into jsonString
  // returned to be appended
//  if(obj.length === 1){ //|| Object.keys(obj).length === 1
    //BASE CASES: assumes object is already just one thing to look at. 
    //Will match if statement if it's one single obj. 
    if(obj === 'undefined' || obj === 'function'){
      return '{}'; //don't need to return '{}' because the else for object already return empty one. 
    }//undefined&function
    if(typeof obj === 'string'){
      return '"'+obj+'"'; //need to keep the quotes
    }//string
    if(typeof obj === 'number' || typeof obj === 'boolean'){
      return obj.toString();
    }//number&boolean
    if(obj === null){
      return "null";
    }//null
 // }//if


  //ITERATE THROUGH THE OBJ- SO RECURSION CAN END. LIKE POP IN MEAL
  if(Array.isArray(obj)){
    //grab base cases. y content.
    //recurse through arra
    jsonString += '[';
    for(var i = 0; i < obj.length; i++){
      jsonString += stringifyJSON(obj[i]);
      //COMMA DECIDER!
      if(i !== obj.length - 1)
        jsonString += ',';
    }
    jsonString += ']';

  } else{ //Assumes is an object 
      jsonString += '{';
      var index = 0; //use to find last index in for-in loop. 
      var keys = Object.keys(obj);
      for(var j in obj){ //for-in 
        if(typeof obj[j] === 'undefined' || typeof obj[j] === 'function'){
              return '{}'; //don't need to return '{}' because the else for object already return empty one. 
            }//undefined&function

        //KEY
        jsonString += stringifyJSON(j) +':'; //+ stringifyJSON(obj(j)); 
        //VALUE
        jsonString += stringifyJSON(obj[j]);
        
        //COMMA DECIDER! Not the last object.
        if(index !== keys.length -1){
          jsonString += ',';
        }
        index++;
        // debug(Object.keys(obj).length);
      }//for
      jsonString += '}';
  }
    
  return jsonString; 
  //return JSON.stringify(obj);
};//stringify()
// var obj = {[1:2], 1, a}
// stringifyJSON(obj);
// var stringifiableValues = [
//   9,
//   null,
//   true,
//   false,
//   "Hello world",
//   [],
//   [8],
//   ["hi"],
//   [8, "hi"],
//   [1, 0, -1, -0.3, 0.3, 1343.32, 3345, 0.00011999999999999999],
//   [8, [[],3,4]],
//   [[[["foo"]]]],
//   {},
//   {"a": "apple"},
//   {"foo": true, "bar": false, "baz": null},
//   {"boolean, true": true, "boolean, false": false, "null": null },
//   // basic nesting
//   {"a":{"b":"c"}},
//   {"a":["b", "c"]},
//   [{"a":"b"}, {"c":"d"}],
//   {"a":[],"c": {}, "b": true}
// ];
// var stringifiableObjects = [
//   9,
//   null,
//   true,
//   false,
//   "Hello world",
//   [],
//   [8],
//   ["hi"],
//   [8, "hi"],
//   [1, 0, -1, -0.3, 0.3, 1343.32, 3345, 0.00011999999999999999],
//   [8, [[],3,4]],
//   [[[["foo"]]]],
//   {},
//   {"a": "apple"},
//   {"foo": true, "bar": false, "baz": null},
//   {"boolean, true": true, "boolean, false": false, "null": null },
//   // basic nesting
//   {"a":{"b":"c"}},
//   {"a":["b", "c"]},
//   [{"a":"b"}, {"c":"d"}],
//   {"a":[],"c": {}, "b": true}
// ];
// //debug(JSON.stringify(stringifiableValues));
// //debug(stringifyJSON(stringifiableValues));
// debug(stringifyJSON(stringifiableObjects));
