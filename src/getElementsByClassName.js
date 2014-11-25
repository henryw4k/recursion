

// <script src="//ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js"></script>
// <script src="/Users/henrywong/Desktop/Hack_Reactor/2014-12-recursion-master/src/getElementsByClassName.js"></script>
// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // your code here
  var objRef = document.body;
  var classes = [];


  var class_finder = function(element){ //what is element, an array-like object?
  	if(element.classList){//a class list exist for classList. Avoid 'undefine'
      for(var i = 0; i < element.classList.length; i++){
        if(element.classList[i] == className) //contains: how do we push referenced match
          classes.push(element); 
      }//for

     // (element.classList).forEach(function(item){
     //    if(item == className)
     //      classes.push(element);
     //  });

      // if(element.childNodes){
      // //RECURSION CALLS
      //   for(var j = 0; j < element.childNodes.length; j++){
      //     class_finder(element.childNodes[j]);
      //   }//for   	
      // }//if

      // (element.childNodes).forEach(function(stuff){
      //   class_finder(stuff);
      // });
    }
    if(element.childNodes){
      //RECURSION CALLS
        for(var j = 0; j < element.childNodes.length; j++){
          class_finder(element.childNodes[j]);
        }//for    
      }//if

  }//classfinder
  class_finder(objRef);
  return classes;
};//getElement

var htmlStrings = [
  '<p class="targetClassName"></p>',
  '<p class="otherClassName targetClassName"></p>',
  '<p><p class="targetClassName"></p></p>',
  '<p><p class="targetClassName"><p class="targetClassName"></p></p></p>',
  '<p><p></p><p><p class="targetClassName"></p></p></p>',
  '<p><p class="targetClassName"></p><p class="targetClassName"></p></p>',
  '<p><div class="somediv"><div class="innerdiv"><span class="targetClassName">yay</span></div></div></p>'
];

// var arr = [1, 2, 3]

// arr.forEach(function(item){
//   debug(item);
// });
// for(var p = 0; p < arr.length; p++){
//   debug(arr[p]);
// }
