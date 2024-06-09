// Write code to return the largest number in the given array

var maxNum = function(arr) {
    var max = arr[0];

    for (var i =1; i < arr.length; i++){
        var num = arr[i];

        if (num > max){
            max =num;
        }
    }
    return max;
};
