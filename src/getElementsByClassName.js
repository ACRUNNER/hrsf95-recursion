// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  //return document.body.lastElementChild;
  var results = [];//document.createElement("div").getElementsByClassName('noClassHere');
  
  //console.log(document.body.children);
  if(document.body.classList.contains(className)){
	  //console.log(results.length);
	  results.push(document.body);
  }
  
  
  function x(nodes){
	  for(var i = 0; i < nodes.length; i++){
		  if(nodes[i].classList.contains(className)){
			  results.push(nodes[i]);
		  }
		  if(nodes[i].hasChildNodes()){
			  //console.log(nodes[i].hasChildNodes());
			  x(nodes[i].children);
		  }
	  }
	  
	  
  }
  console.log(Array.prototype.slice.apply(document.getElementsByClassName(className)));

  var y = Array.prototype.slice.apply(document.getElementsByClassName(className));
  x(document.body.children);
  console.log(results);
  console.log(_.isEqual(results, y));
  return results;
  
 /* 
  nodes = document.body;
  nodes.forEach(function(nodes)
  console.log(node.children);
  if(node.classList.contains(className)){
        results.push(node);
      }
  
     var childL = node.childList;
	 //console.log(childL);
     for(var key in childL){
        results = results.concat(getElementsByClassName(childList[key]));
    }
   return results;
 */ 
};
