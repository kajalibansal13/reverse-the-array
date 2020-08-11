function reverseArray(arr) {
  var outputArray = [];
  for (var i =0;i<arr.length;i++) {
    outputArray.unshift(arr[i]);
  }
  return outputArray;
}
reverseArray([1,2,3,4,5]);