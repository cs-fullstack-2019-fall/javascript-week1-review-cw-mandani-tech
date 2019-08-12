// alert("e")
//
// # javaScript-week1-review-cw
//
// ### Problem 1
//
// Asks the user to enter 1 for 'count down' and 2 for 'count up'.
// Keep ask them them to do that until they enter 'q' to quit.
// If they enter 1, ask them what they want to count down to. Start from 0 and count down to that number by ones.
// If they enter 2, ask them what they want to count up to. Start from 0 and count up to the number by ones.
//

var userOpt = prompt("Enter option '1' to count down , enter option '2' to  count up or enter 'q' to quit " );

while (userOpt !== "q")
{

    if( userOpt === "1")

    {

        var countDownTo = parseInt(prompt("Enter a number to count down to :"));


        while (countDownTo >= 0)

        {
            console.log(countDownTo);
            countDownTo --;
        }
        userOpt = prompt(" enter 'q' to quit " );

    }

// BROKEN
     if ( userOpt === "2")
        {

            var countUpTo = parseInt(prompt("Enter a number to count Up to :"));
            var i = 0;


            while (i >= countUpTo)

            {
                console.log(i);
                countUpTo ++;
            }

            userOpt = prompt(" enter 'q' to quit " );
        }

}
userOpt = prompt(" enter 'q' to quit " );














//     ### Challenge
//
// Asks the user to enter their name and keep asking them until they enter 'quit' to quit. If they enter Kevin say 'What's up Kevin'. If they enter Kenn say 'Hi Kenn'. If they enter Autumn say 'Good morning Autumn'. If they don't enter any of those names say 'Hello [NAME]'.
