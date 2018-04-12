Dim Address			
Dim Select_time		
Dim Fname			
Dim Lname			
Dim Ph_number		
Dim Email			


Address			= "Delhi Cantonment, New Delhi, Delhi, India"
Select_time		= "9:30 PM"
Fname			= "Sourabh"
Lname			= "Chakroborty"
Ph_number		= "9770040095"
Email			= "memo.sourabh@gmail.com"

Set pagobj = Browser("MakeMyTrip").Page("MakeMyTrip")

pagobj.WebEdit("Enter a location").Set Address
pagobj.WebList("select").Select Select_time
pagobj.WebEdit("Fname").Set Fname
pagobj.WebEdit("Lname").Set Lname
pagobj.WebEdit("PH_number").Set Ph_number
pagobj.WebEdit("Email").Set Email
pagobj.WebElement("aPay100").Click

If pagobj.WebButton("OK").Exist Then
	pagobj.WebButton("OK").Click
	datatable.Value("Cab_book") = "TRAVELLER_15"
	datatable.Value("Counter") = "True"
	RunAction "Cab_Booking", oneIteration
End If

