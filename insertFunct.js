
//  Prints out the final report to the specified label.
function printSteps(report)
{
  var label = document.getElementById("outLab");
  label.innerText = "\n";
  for (var i = 0; i < report.length; ++i)
  {
    label.innerText += report[i].toString() + "\n";
  }

}

//  Actual insert sort algorithm. A report variable is created to store all the neccessary steps.
function insertSort(list)
{
  //  This will be a nested array (2D array)
  var report = []
  //  Copy parameter list to a
  var a = list;
  //  Loop variables
  var j, k;

  //  Copy the first state of the array
  report[report.length] = a.slice(0);

  //  Insert sort happens here.
  for(i=0; i<a.length-1;i++) {
    for(j=0,k= i+1; j<k; j++){
      if(a[j]> a[k]){
        temp = a[j];
        a[j] = a[k];
        a[k] = temp;
      }
    }
    //  Copy the current state of the array
    report[report.length] = a.slice(0);
  }
  return report;
}

//  Gets the input from the page using document
function getInput()
{
  return document.getElementById("inputText").value;

}

//  Prepares input by changing it from string to an array of integers.
function prepareInput(strInput)
{
  var arrStr = strInput.split(" ");
  var arrInt = [];

  for (var i =0; i < arrStr.length; ++i)
  {
      arrInt[i] = parseInt(arrStr[i], 10);
  }
  return arrInt;
}

//  Check for the size of the array and the value of the integers
//  Req: The maximum size of array should be 8
//  Req: The minimum size of array should be 2
//  Req: The integers of the array should be in the range of 0 and 9
function checkInput(intInput)
{
  if(intInput.length >8)
  {
    document.getElementById("outLab").innerText = "Please enter less than 8 numbers."
    return false;
  }
  if(intInput.length < 2)
  {
    document.getElementById("outLab").innerText = "Please enter atleast two numbers."
    return false;
  }
  for (var i = 0; i < intInput.length; ++i)
  {
    if(intInput[i] > 9 || intInput[i] < 0 || !Number.isInteger(intInput[i])) // checks that user doesnt enter invalid characters
    {
      document.getElementById("outLab").innerText = "One of the numbers you entered is not a digit.";
      return false;
    }
  }
  return true;
}

//  Main function, this is what is called when the button is clicked.
function main()
{
  var strInput = getInput();
  var intInput = prepareInput(strInput.trim()); // trim() to remove spaces at end
  if(!checkInput(intInput))
  {
    return;
  }

  report = insertSort(intInput)

  printSteps(report);

}
