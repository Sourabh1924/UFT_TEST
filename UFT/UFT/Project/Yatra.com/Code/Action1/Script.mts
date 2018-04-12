'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''Passenger details'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
wait 12

'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''Verification''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
'Passenger Verification
Passenger = Browser("Flight, Cheap Air Tickets").Page("Yatra.com | Book your").WebElement("Adult x 1").GetROProperty("outertext")
Passenger1 = split(Passenger,"x")
Passenger2 = trim(Passenger1(1))
If Passenger2 = datatable.Value("Traveller",Global) Then
	
	'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
    Call fpass("Step-5","Passenger Verify")
    Call report("Step-8","Passenger Verify","PASS",time,date)
    '''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

End If

'Prize Verification
Prize = Browser("Flight, Cheap Air Tickets").Page("Yatra.com | Book your").WebElement("7,000").GetROProperty("outertext")
Surcharge = Browser("Flight, Cheap Air Tickets").Page("Yatra.com | Book your").WebElement("659").GetROProperty("outertext")
Total_prize = Browser("Flight, Cheap Air Tickets").Page("Yatra.com | Book your").WebElement("Rs.7,659").GetROProperty("outertext")
Total_prize1 = Cint(Surcharge) +cint( Prize)    'Add the Surcharge and Prize amount
Cal_Prize = (FormatNumber(Total_prize1))        'Formate the number
Cal_len = len(Cal_Prize)                        'Find the length of the string
Cal_Prize = mid(Cal_Prize,1,Cal_len-3)          'Cut the string
Cal_Prize = "Rs."&(Cal_Prize)                   'Rs. in the number
If Total_prize = Cal_Prize Then                 'Compare both the number
	
	'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
    Call fpass("Step-6","Prize Verify")
    Call report("Step-9","Prize Verify","PASS",time,date)
    '''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
    
End If
Browser("Flight, Cheap Air Tickets").Page("Yatra.com | Book your").WebButton("Continue").Click
  
wait 10

If Browser("Flight, Cheap Air Tickets").Page("Yatra.com | Book your").WebList("title0").Exist Then
   Browser("Flight, Cheap Air Tickets").Page("Yatra.com | Book your").WebList("title0").Select datatable.Value("Title")
   fcorrect "Enter title","Enter title of the passenger"
End If
If Browser("Flight, Cheap Air Tickets").Page("Yatra.com | Book your").WebEdit("fname0").Exist Then
   Browser("Flight, Cheap Air Tickets").Page("Yatra.com | Book your").WebEdit("fname0").Set datatable.Value("F_name")	
   fcorrect "Enter name","Enter first name of passenger"
End If @@ hightlight id_;_Browser("Flight, Cheap Air Tickets").Page("Yatra.com | Book your").WebList("title0")_;_script infofile_;_ZIP::ssf8.xml_;_
If Browser("Flight, Cheap Air Tickets").Page("Yatra.com | Book your").WebEdit("lname0").Exist Then
   Browser("Flight, Cheap Air Tickets").Page("Yatra.com | Book your").WebEdit("lname0").Set datatable.Value("L_name") @@ hightlight id_;_Browser("Flight, Cheap Air Tickets").Page("Yatra.com | Book your").WebEdit("fname0")_;_script infofile_;_ZIP::ssf9.xml_;_
   fcorrect "Enter name","Enter second name of passenger"
End if   

''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
Call fpass("Step-7","Traveller details is typed")
Call report("Step-10","Traveller details is typed","PASS",time,date)
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

If Browser("Flight, Cheap Air Tickets").Page("Yatra.com | Book your").WebButton("Continue").Exist Then
   Browser("Flight, Cheap Air Tickets").Page("Yatra.com | Book your").WebButton("Continue").Click	
End If    
