'==============================================================Data==============================================================================
'================================================================================================================================================
wait 10
Title = datatable.Value("Title","3_Passenger_details")
Fname = datatable.Value("Fname","3_Passenger_details")
Lname = datatable.Value("Lname","3_Passenger_details")
Meal = datatable.Value("Meal","3_Passenger_details")
Mobile_no = datatable.Value("Mobile_no","3_Passenger_details")
'================================================================================================================================================
'================================================================================================================================================

'============================================================Passenger_details===================================================================
'================================================================================================================================================
Services.StartTransaction "Passenger_details"
S_time = timer
If Browser("Jet Airways Booking CompleteDe").Page("Jet Airways Booking CompleteDe").WebList("Passengers[0].Title").Exist Then
   Browser("Jet Airways Booking CompleteDe").Page("Jet Airways Booking CompleteDe").WebList("Passengers[0].Title").Select "Mr"
else

     '''''''''''''Reporter''''''''''
     call ffail("Step13","Title is not selected")
     exittest
     '''''''''''''''''''''''''''''''

End If
If Browser("Jet Airways Booking CompleteDe").Page("Jet Airways Booking CompleteDe").WebEdit("Passengers[0].FirstName").Exist Then
	Browser("Jet Airways Booking CompleteDe").Page("Jet Airways Booking CompleteDe").WebEdit("Passengers[0].FirstName").Set "sourabh"
else

     '''''''''''''Reporter''''''''''
     call ffail("Step14","FirstName is not selected")
     exittest
     '''''''''''''''''''''''''''''''

End If
If Browser("Jet Airways Booking CompleteDe").Page("Jet Airways Booking CompleteDe").WebEdit("Passengers[0].LastName").Exist Then
	Browser("Jet Airways Booking CompleteDe").Page("Jet Airways Booking CompleteDe").WebEdit("Passengers[0].LastName").Set "chakroborty"
else

     '''''''''''''Reporter''''''''''
     call ffail("Step15","LastName is not selected")
     exittest
     '''''''''''''''''''''''''''''''

End If
If Browser("Jet Airways Booking CompleteDe").Page("Jet Airways Booking CompleteDe").WebList("Passengers[0].MealPreference").Exist Then
	Browser("Jet Airways Booking CompleteDe").Page("Jet Airways Booking CompleteDe").WebList("Passengers[0].MealPreference").Select "Non-Vegetarian"
else

     '''''''''''''Reporter''''''''''
     call ffail("Step16","MealPreference is not selected")
     exittest
     '''''''''''''''''''''''''''''''

End If
Mobile_no = datatable.Value("Mobile_no","3_Passenger_details")
Browser("Jet Airways Booking CompleteDe").Page("Jet Airways Booking CompleteDe").WebButton("Continue To Contact Details").Click
wait 2
If Browser("Jet Airways Booking CompleteDe_2").Page("Jet Airways Booking CompleteDe").WebEdit("MobileNumber").Exist Then
   Browser("Jet Airways Booking CompleteDe_2").Page("Jet Airways Booking CompleteDe").WebEdit("MobileNumber").Set Mobile_no	
else

     '''''''''''''Reporter''''''''''
     call ffail("Step17","Mobile_no is not selected")
     exittest
     '''''''''''''''''''''''''''''''

End If
Browser("Jet Airways Booking CompleteDe").Page("Jet Airways Booking CompleteDe").WebButton("Continue to Extras").Click
wait 3
Browser("Jet Airways Booking CompleteDe_2").Page("Jet Airways Booking CompleteDe").WebCheckBox("WebCheckBox").Set "ON"
Browser("Jet Airways Booking CompleteDe_2").Page("Jet Airways Booking CompleteDe").WebCheckBox("WebCheckBox_2").Set "ON"
Browser("Jet Airways Booking CompleteDe_2").Page("Jet Airways Booking CompleteDe").WebButton("Continue to Pay").Click
E_time = timer
TT_time = E_time - S_time
Services.EndTransaction "Passenger_details"

'''''''''''''''''''''''''''''''''''Reporter'''''''''''''''''''''''''''''''''''
call report("Step_5","Passenger_details succesfully","PASS",Time,Date,TT_time)
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
'================================================================================================================================================
'================================================================================================================================================
