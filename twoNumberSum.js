function twoNumberSum(array, targetSum) {
  // Write your code here.

	
	for(var i = 0; i < array.length - 1; i++){
		var lowNumber = array[i];
		for(var j = i + 1; j < array.length; j++){
		var highNumber = array[j];
			if(lowNumber + highNumber === targetSum){
				return[lowNumber, highNumber];	
			}
		}
	}
	return[];
}
