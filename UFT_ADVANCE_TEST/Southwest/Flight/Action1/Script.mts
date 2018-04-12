Tour = "Round trip"
Adult_pass_number = 2
Senior_pass_number = 2

If "Round trip"= Tour Then
	Browser("Southwest Airlines | Book").Page("Southwest Airlines | Book").WebElement("Round trip").Click
else
	Browser("Southwest Airlines | Book").Page("Southwest Airlines | Book").WebElement("One-way").Click
End If

Browser("Southwest Airlines | Book").Page("Southwest Airlines | Book").WebEdit("originAirport").Set 
Browser("Southwest Airlines | Book").Page("Southwest Airlines | Book").WebEdit("destinationAirport").Set
Browser("Southwest Airlines | Book").Page("Southwest Airlines | Book").WebEdit("Depar_date").Set

If "Round trip"= Tour Then
	Browser("Southwest Airlines | Book").Page("Southwest Airlines | Book").WebEdit("Arrival_date").Set
End If

Browser("Southwest Airlines | Book").Page("Southwest Airlines | Book").WebEdit("adultPassengerCount").Set 
For Pass_cnt = 1 To Adult_pass_number-1 Step 1
	Browser("Southwest Airlines | Book").Page("Southwest Airlines | Book").WebElement("Add").Click
Next

Browser("Southwest Airlines | Book").Page("Southwest Airlines | Book").WebEdit("seniorPassengerCount").Set
For Pass_cnt = 1 To Senior_pass_number-1 Step 1
	Browser("Southwest Airlines | Book").Page("Southwest Airlines | Book").WebElement("Add").Click
Next

Browser("Southwest Airlines | Book").Page("Southwest Airlines | Book").WebButton("Search").Click


