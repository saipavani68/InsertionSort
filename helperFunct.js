

//  This javascript file contains all the helper functions that should appear
//  separatley from the main file.
//  Placed separately for cleanliness. All things that have to do with cleaning up
//  and / or setting up error check messages should be placed here.


//  Clear the output label of any unneccssary contents/formatting
function clearInput()
{
  document.getElementById("inputText").value= '';
}

function clearOutput()
{
  document.getElementById("sortingHeader").innerText = '';
  document.getElementById("outLab").innerText = '';
}

function checkListSize(size)
{
  //  Check maximum size of list
  if(size > 8)
  {
    document.getElementById("outLab").innerText = "Please enter less than 8 numbers."
    return false;
  }
  //  Check minimum size of list
  if(size < 2)
  {
    document.getElementById("outLab").innerText = "Please enter atleast two numbers."
    return false;
  }
  return true;
}

function checkNumber(num)
{
  //  Negative number checker
  if(Math.sign(num) === -1)
  {
    document.getElementById("outLab").innerText = "Please don't enter negative numbers.";
    return false;
  }
  //  Alphabet letter or character checker
  if (isNaN(num)) 
  {
    document.getElementById("outLab").innerText = "Please don't enter characters.";
    return false;
  }
  //  Non-digit number checker
  if (num > 9)
  {
    document.getElementById("outLab").innerText = "One of the numbers you entered is not a digit.";
    return false;
  }
  return true;
}
