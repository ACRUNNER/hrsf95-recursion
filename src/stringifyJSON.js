// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var sol = "";
  if(obj == null){
	  return "null";
  }else if(Array.isArray(obj)){
	  sol += "[";
	  for(var i = 0; i < obj.length; i++){
		  sol += stringifyJSON(obj[i]);
		  if(i < obj.length - 1){
			  sol += ',';
		  }
	  }
	  sol += "]";
	  return sol;
  }else if(typeof obj == "object"){
	  sol += "{";
	  var keys = Object.keys(obj);
	  for (var i = 0; i < keys.length; i++){
		  sol += '"' + keys[i] + '":';
		  if(typeof obj[keys[i]] === "function" || obj[keys[i]] === undefined){
			  return "{}";
		  }
		  sol += stringifyJSON(obj[keys[i]]);
		  if(i < keys.length -1){
			  sol += ',';
		  }
	  }
	  sol += '}';
	  return sol;
	}else if(typeof obj == "string"){
		sol += '"' + obj + '"';
		return sol;
	}else{
		sol += obj;
		return sol;
	}
};