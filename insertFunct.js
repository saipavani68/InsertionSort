
//  Prints out the final report to the specified label.
//  Also formats the specified label
function printSteps(report)
{
  var label = document.getElementById("outLab");
  var sortHeader = document.getElementById("sortingHeader");
  sortHeader.innerText = "Sorting sequence:";
  for (var i = 0; i < report.length; i++)
  {
    const stringArr = report[i].toString().split(',')
    for (j=0; j< stringArr.length; j++) {
      stringArr[j] = "   " + stringArr[j] + "   "
    }
    if (stringArr[i+1])
    stringArr[i+1]= stringArr[i+1].bold();
    label.innerHTML += "  " +stringArr + "<br>";
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
  //  Change color for the error messages (Red color)
  document.getElementById("outLab").style.color = "#bb0628";

  //  Check the size of the list
  if(!checkListSize(intInput.length))
  {
    return false;
  }
  //  Check the contents of the list on by one
  //  See helperFunct.js for function
  for (var i = 0; i < intInput.length; ++i)
  {
    if(!checkNumber(intInput[i]))
    {
      return false;
    }
  }
  //  Change color if everything is checked and successful (Black color)
  document.getElementById("outLab").style.color = "black";
  return true;
}


//  Main function, this is what is called when the button is clicked.
function main()
{
  //  Receive the input as a string
  var strInput = getInput();
  //  Change input from a string to a list of integers
  var intInput = prepareInput(strInput.trim()); // trim() to remove spaces at end
  //  Clears the output output
  //  See helperFunct.js for implementation
  //  Check the input for the bussiness constraints
  //  End execution if a constraint is broken
clearOutput();

  if(!checkInput(intInput) || intInput.length <= 0)
  {
    return;
  }

  //  Send the list to be sorted and receive a report
  report = insertSort(intInput)
  //  Print the report in the output space of the page
  printSteps(report);
}
