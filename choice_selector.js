var question=["John's age is now-a-days 2 times his son's age, 18 year ago John was 5 times older than son .How old is John's son now-a-days?","A file is protected by a password formed by a 2 digit octal number(range from 0 to 3).How many pasword can you have ?","what maximum number of circle can fit in square below?","The next sequence follows a logic ,what number should replace the question marks?","How many degrees rotates the minute hand clock in 2 hrs 50 minutes?","How many boxes measures 1X1X0.5 can be packed in container measuring 6X5X8","A group of people are sitting at round table,evenly spaced out.How many people are there if 4th person is across from 12th?"];

var setimag=["que1.png","que2.png","que3.png","que4.png","que5.png","que6.png","que7.png"];
var choicedata=[[67,45,90,24],[62,14,28,64],[102,68,87,96],[1821,1654,1422,1780],[120,960,1044,1020],[540,480,1169,456],[34,42,16,18]];
var answers=[24,64,68,1821,1020,480,16];
var trackindex=0;
var points=0;

function pageSwaper(swapTo)
 {
		 trackindex=swapTo;
	document.getElementById("questionbar").innerHTML="<span class='indexbuttons'>"+swapTo+"</span>"+question[swapTo-1];
	document.getElementById("images").src="images/"+setimag[swapTo-1];
	for(var i=0;i<4;i++)
		{
			document.getElementById("choice"+(i+1)).value=choicedata[swapTo-1][i];
			document.getElementById("opt"+(i+1)).innerHTML=choicedata[swapTo-1][i];
			
		}
	
	
 }


function optionCheck(trackindex)
		{	
			for(var j=1;j<=4;j++)
				{
					if(document.getElementById("choice"+j).checked)
						{

						if(document.getElementById("choice"+j).value==answers[trackindex-1])
							{
									points=points+10;
									document.getElementById("justifybar").innerHTML="Great Choice";
									document.getElementById("justifybar").className="justifybar";
									document.getElementById("scorecard").innerHTML="Score"+": "+points+"pts/70";
									document.getElementById("scorecard").className="scorecard";
									setTimeout("clearOut();",3000);									
									break;
							}
						else {
							document.getElementById("justifybar").innerHTML="Wrong.the right choice is"+" "+answers[trackindex-1];
							document.getElementById("justifybar").className="justifybar";
							setTimeout("clearOut();",3000);

							break;
					  	     }
												
						}
				}
		}

function clearOut()
		{
			document.getElementById('justifybar').innerHTML='';
			document.getElementById('justifybar').className='';
		        			
			
		}
	
