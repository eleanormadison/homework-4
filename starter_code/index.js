/*
  Hi Eleanor!  You are on the right track here.  I know you concentrated only on the learn more link here.
  I would encourage you to try the same with the read more and read less links that are discussed in the
  readme file.


  Also, at the beginning of the file, don't forget to put all of your code inside that document.ready function:

  $(document).ready(function() {
    // All of your code goes in here.
  });

  More comments below!
*/


/*
  Your showSpan() function actually works perfectly
  except that you are missing that event.preventDefault() command at the beginning of the function.
  I added it here and once I did, the rest of the function worked great.

  Remember - without that function, the click event will take its default action - in this case, that 
  default action is to go to another page because the user is clicking on a link
*/
function showSpan() {
  // I just added this line below.
  event.preventDefault();

  // The rest of this is perfect!
  $(".learnmore").hide();
  $("#learnmoretext").slideDown();

}


// This click event is perfect!
$(".learnmore").click(showSpan);

