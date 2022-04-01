
  setTimeout(() => {  var element = document.querySelectorAll('#endpoint');
  var nonExistentFirstElement = element[2]; // this is undefined, there's nothing at the first position
  if(nonExistentFirstElement) nonExistentFirstElement.remove(); // thus, this is an error since you're calling `undefined.remove()`
  
  console.log(JSON.stringify(element) + 'ytnf')
  console.log(nonExistentFirstElement + '2ytnf') }, 1000);