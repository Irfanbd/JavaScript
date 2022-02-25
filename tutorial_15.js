var marks = prompt("Enter your mark : ");
if (marks >= 101)
    document.write("Warning !!! Invalid Input");
    else  if (marks >= 80 )
    document.write("Congrates!! You Got A+");    
else if (marks >= 70)
    document.write("You got A");
else if (marks >= 60)
    document.write("You got A-");
 else if (marks >= 50)
    document.write("You got B");

   else if (marks >= 40)
    document.write("You got C");
else if (marks >= 33)
    document.write("You got D");
else
    document.write("You Failed . Better Luck Next Time");