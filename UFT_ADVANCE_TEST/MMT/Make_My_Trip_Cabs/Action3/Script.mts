Dim Travelling_type
Dim Depar_date
Dim Ddate
Dim Return_date
Dim Rdate
Dim Currentdate
Dim vdatedifference
Dim Source_city
Dim Destination_city
Dim Book_time
Dim URL


Travelling_type 	= "Oneway"
Depar_date 			= "27/AUGUST/2017"
Return_date 		= "30/AUGUST/2017"
Source_city 		= "Delhi, India"
Destination_city	= "Agra, India"
Book_time			= "1:00 AM"
URL 				= "https://www.makemytrip.com"

''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''Launch'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
systemutil.Run "chrome",URL 
'login(URL)
wait 10
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

Depar_date = replace(Depar_date,"-","/")
Ddate = split(Depar_date,"/")

Return_date = replace(Return_date,"-","/")
Rdate = split(Return_date,"/")

Currentdate = date
vdatedifference=  cdate(Depar_date)
Set objpage = Browser("Online Cab Booking - Book").Page("Online Cab Booking - Book")


If isobject(objpage) Then

	If objpage.Link("cabs").Exist(0) Then
		objpage.Link("cabs").Click	
	End If
	
End If


If lcase(Travelling_type)="oneway" Then

	If isobject(objpage) Then
		
		If objpage.Exist Then
			
			objpage.WebElement("one way").Click
			objpage.WebEdit("Source").Set Source_city
			objpage.WebEdit("Destination").Set Destination_city
			objpage.WebEdit("Depar_date").Click
		
				If datediff("d",Currentdate,vdatedifference) <= "92" Then
					Call Call_date(objPage,Ddate(0),Ddate(1))		
				else
					print "Given date is over 90 days"
				End If
		else
			print "Object is not exist"		
		End If
	
	else
		print "Object is not valid"	
	End If
		
else

	If isobject(objpage) Then
		
		If objpage.Exist Then
		
			objpage.WebElement("round trip").Click
			objpage.WebEdit("Source").Set "Delhi, India"
			objpage.WebEdit("Destination").Set "Agra, India"
			objpage.WebEdit("Depar_date").Click
				
				If datediff("d",Currentdate,vdatedifference) <= "92" Then
					Call Call_date(objPage,Ddate(0),Ddate(1))	
				else
					print "Given date is over 90 days"
				End If
				
			objpage.WebEdit("Return_date").Click
		
				If datediff("d",Currentdate,vdatedifference) <= "92" Then
					Call Call_date(objPage,Rdate(0),Rdate(1))	
				else
					print "Given date is over 90 days"
				End If
		
		else
			print "Object is not exist"
			
		End if
	
	else
		print "Object is not valid"	
		
	End if	
		
End If
objpage.WebList("select").Select Book_time
objpage.WebButton("Search").Click
