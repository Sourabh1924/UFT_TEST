
On error resume next
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''Variable used'''''''''''''''''''''''''''''''''''''''''''''''''''''
Dim arr(4)
Dim listsize
Dim passenger_num
Dim source_stat
Dim destination_stat
Dim D_date
Dim D_dateval
Dim month_num
Dim day_num
Dim D_dayval
Dim travel_class
Dim flight1_prize
Dim flight2_prize
Dim tax
Dim Total_prize
Dim source_stat1
Dim destination_stat1
Dim Expiry_date
Dim Expiry_year
Dim Expiry_month
Dim total_prize1
Dim tol_prize
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

''''''''''''''''''''''''''''''''''''''''''''''''''''''''''Website launch''''''''''''''''''''''''''''''''''''''''''''''''''''
SystemUtil.Run "iexplore","http://newtours.demoaut.com/"
Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").Sync
If Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").Exist Then
	reporter.ReportEvent "Web page","Web page is loaded"
else
    reporter.ReportEvent "Web page","Web page is not loaded"
End If
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''Check point'''''''''''''''''''''''''''''''''''''''''''''''''''''

Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").Image("Mercury Tours").Check CheckPoint("Mercury Tours")

''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''Enter username''''''''''''''''''''''''''''''''''''''''''''''''''

If Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").WebEdit("userName").Exist Then
     Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").WebEdit("userName").Set datatable.Value("Username")
     Call report("Step-1","Enter Username","Username is enterd","Pass",time,date)      
     reporter.ReportEvent micPass,"Enter Username","Username is enterd"     
End If
 @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").WebEdit("userName")_;_script infofile_;_ZIP::ssf1.xml_;_
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''Enter password''''''''''''''''''''''''''''''''''''''''''''''''''

If Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").WebEdit("password").Exist Then
 	 Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").WebEdit("password").Set datatable.Value("Password") 
 	 Call report("Step-2","Enter Password","Password is enterd","Pass",time,date) 
 	 reporter.ReportEvent micPass,"Enter Password","Password is enterd"
     
else
     Exittest
End If


'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''Login reporter'''''''''''''''''''''''''''''''''''''''''''''''''
'Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").CaptureBitmap "F:\New_tour\Login.bmp",True
'reporter.ReportEvent micPass,"Login","Login","F:\New_tour\Login.bmp"
fpass "Step 1","Login succesfully","F:","Login"
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''


Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").Image("Sign-In").Click 29,6 @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").Image("Sign-In")_;_script infofile_;_ZIP::ssf3.xml_;_

''''''''''''''''''''''''''''''''''''''''''''''''''''''''''Number of passenger'''''''''''''''''''''''''''''''''''''''''''''''

listsize = Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").WebList("passCount").GetROProperty("items count")
For i = 1 To listsize Step 1
	passenger_num=Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").WebList("passCount").GetItem(i)  
      If passenger_num = datatable.Value("Passenger")  Then
      	   Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").WebList("passCount").Select datatable.Value("Passenger")
      	   Call report("Step-3","Enter Passenger number","Passenger number is enterd","Pass",time,date)
           reporter.ReportEvent micPass,"Enter Passenger number","Passenger number is enterd"      	   
      End If
Next

'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''Enter source''''''''''''''''''''''''''''''''''''''''''''''''''''''''

listsize = Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").WebList("fromPort").GetROProperty("items count")
For i = 1 To listsize Step 1
	source_stat=Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").WebList("fromPort").GetItem(i)  
      If source_stat = datatable.Value("Source")  Then
      	   Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").WebList("fromPort").Select datatable.Value("Source") 
      	   Call report("Step-4","Enter source city name","Source city name is enterd",time,date)
      	   reporter.ReportEvent micPass,"Enter source city name","Source city name is enterd" 
Exit for      	   
      End If
Next

''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''Enter month'''''''''''''''''''''''''''''''''''''''''''''''''''''''''

D_date = split(datatable.Value("D_date"),"-")
D_dateval = trim(D_date(1))
listsize = Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").WebList("fromMonth").GetROProperty("items count")
For i = 1 To listsize Step 1
	month_num=Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").WebList("fromMonth").GetItem(i)  
      If month_num = monthname(D_dateval)  Then
      	   Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").WebList("fromMonth").Select monthname(D_dateval)
      	   Call report("Step-5","Enter from month","Month is enterd","Pass",time,date)
      	   reporter.ReportEvent micPass,"Enter from month","Month is enterd"
Exit for      	   
      End If
Next

''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''Enter day'''''''''''''''''''''''''''''''''''''''''''''''''''''''''

D_day = split(datatable.Value("D_date"),"-")
D_dayval = trim(D_day(0))
listsize = Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").WebList("fromDay").GetROProperty("items count")
For i = 1 To listsize Step 1
	day_num=Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").WebList("fromDay").GetItem(i)  
      If day_num = D_dayval  Then
      	   Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").WebList("fromDay").Select D_dayval
      	   Call report("Step-6","Enter from day","Day is enterd","Pass",time,date)
           reporter.ReportEvent micPass,"Enter from day","Day is enterd"      	   
Exit for      	   
      End If
Next


''''''''''''''''''''''''''''''''''''''''''''''''''''''''''Enter destination'''''''''''''''''''''''''''''''''''''''''''''''''''''''' 

listsize = Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").WebList("toPort").GetROProperty("items count")
For i = 1 To listsize Step 1
	source_stat=Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").WebList("toPort").GetItem(i)  
      If source_stat = datatable.Value("Destination")  Then
      	   Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").WebList("toPort").Select datatable.Value("Destination")
      	   Call report("Step-7","Enter destination city name","Destination city name is enterd","Pass",time,date)
           reporter.ReportEvent micPass,"Enter destination city name","Destination city name is enterd"      	   
Exit for      	   
      End If
Next

''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''Enter month'''''''''''''''''''''''''''''''''''''''''''''''''''''''''

D_date = split(datatable.Value("D_date"),"-")
D_dateval = trim(D_date(1))
listsize = Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").WebList("toMonth").GetROProperty("items count")
For i = 1 To listsize Step 1
	month_num=Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").WebList("toMonth").GetItem(i)  
      If month_num = monthname(D_dateval)  Then
      	   Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").WebList("toMonth").Select monthname(D_dateval)
      	   Call report("Step-8","Enter to month","Month is enterd","Pass",time,date)
      	   reporter.ReportEvent micPass,"Enter to month","Month is enterd"
Exit for      	   
      End If
Next

''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''Enter day'''''''''''''''''''''''''''''''''''''''''''''''''''''''''

D_day = split(datatable.Value("D_date"),"-")
D_dayval = trim(D_day(0))
listsize = Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").WebList("toDay").GetROProperty("items count")
For i = 1 To listsize Step 1
	day_num=Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").WebList("toDay").GetItem(i)  
      If day_num = D_dayval  Then
      	   Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").WebList("toDay").Select D_dayval
      	   Call report("Step-9","Enter from day","Day is enterd","Pass",time,date)
      	   reporter.ReportEvent micPass,"Enter from day","Day is enterd"
Exit for      	   
      End If
Next

''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''Traveling class '''''''''''''''''''''''''''''''''''''''''''''''''''''''''

If Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").WebRadioGroup("servClass").Exist Then
	Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").WebRadioGroup("servClass").Select datatable.Value("Class")
	Call report("Step-10","Select traveling class","Traveling class selected","Pass",time,date)
    reporter.ReportEvent micPass,"Select traveling class","Traveling class selected"	
End If
	
	


'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''Find a flight reporter'''''''''''''''''''''''''''''''''''''''''
'Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").CaptureBitmap "F:\New_tour\Find a flight.bmp",True
'reporter.ReportEvent micDone , "Find a flight","Find a flight","F:\New_tour\Find a flight.bmp"
fpass "Step 2","Find a flight","F:","Find a flight"
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''


Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").Image("findFlights").Click 59,2


''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''Out Flight prize''''''''''''''''''''''''''''''''''''''''''''''''''''''''

str=Browser("Welcome: Mercury Tours").Page("Select a Flight: Mercury").WebTable("DEPART").GetROProperty("text")
str1=split(str,"$")
    For i = 1 To ubound(str1) Step 1
      datatable.SetCurrentRow(i)
         do
            u=instrrev(str1(i)," ")
            str1(i)=left(str1(i),u-1)
         Loop until u=4
         str2 = trim(str1(i))
         datatable.Value("OutPrize") = str2
     Next
     

''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''In Flight prize''''''''''''''''''''''''''''''''''''''''''''''''''''''''

str=Browser("Welcome: Mercury Tours").Page("Select a Flight: Mercury").WebTable("RETURN").GetROProperty("text")
str1=split(str,"$")
    For i = 1 To ubound(str1) Step 1
      datatable.SetCurrentRow(i)
         do
            u=instrrev(str1(i)," ")
            str1(i)=left(str1(i),u-1)
         Loop until u=4
         str2 = trim(str1(i))
         datatable.Value("InPrize") = str2
     Next
wait 5
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''Select the flight''''''''''''''''''''''''''''''''''''''''''''''

'Browser("Welcome: Mercury Tours").Page("Select a Flight: Mercury").WebRadioGroup("outFlight").Select datatable.Value("Outflight","Global") @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Select a Flight: Mercury").Image("reserveFlights")_;_script infofile_;_ZIP::ssf14.xml_;_
'Browser("Welcome: Mercury Tours").Page("Select a Flight: Mercury").WebRadioGroup("inFlight").Select datatable.Value("Inflight","Global")
'

'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''Select the flight reporter'''''''''''''''''''''''''''''''''''''
'Browser("Welcome: Mercury Tours").Page("Select a Flight: Mercury").CaptureBitmap "F:\New_tour\Select the flight.bmp",True
'reporter.ReportEvent micDone , "Select the flight","Select the flight","F:\New_tour\Select the flight.bmp"
fpass "Step 3","Select the flight","F:","Select the flight"
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''


Browser("Welcome: Mercury Tours").Page("Select a Flight: Mercury").Image("reserveFlights").Click
wait 5
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''Check the flight prize''''''''''''''''''''''''''''''''''''''''''

flight1_prize = Browser("Welcome: Mercury Tours").Page("Book a Flight: Mercury").WebTable("Paris to Portland").GetCellData(3,3)
source_stat1 = Browser("Welcome: Mercury Tours").Page("Book a Flight: Mercury").WebTable("Paris to Portland").GetCellData(1,1)
print " "&source_stat1&" Prize = $"&flight1_prize

flight2_prize = Browser("Welcome: Mercury Tours").Page("Book a Flight: Mercury").WebTable("Paris to Portland").GetCellData(6,3)
destination_stat1 = Browser("Welcome: Mercury Tours").Page("Book a Flight: Mercury").WebTable("Paris to Portland").GetCellData(4,1)
print destination_stat1&" Prize = $"&flight2_prize

tax = Browser("Welcome: Mercury Tours").Page("Book a Flight: Mercury").WebTable("Paris to Portland").GetCellData(8,2)
print "            Taxs include = "&tax
passenger_number = Browser("Welcome: Mercury Tours").Page("Book a Flight: Mercury").WebTable("Paris to Portland").GetCellData(7,2)

total_prize = Browser("Welcome: Mercury Tours").Page("Book a Flight: Mercury").WebTable("Paris to Portland").GetCellData(9,2)
print "             Total_prize = "&total_prize

''''''''''''''''''''''''''''''''''''''''''''''''''''''''''Passenger details'''''''''''''''''''''''''''''''''''''''''''''''

If Browser("Welcome: Mercury Tours").Page("Book a Flight: Mercury").WebEdit("passFirst0").Exist Then
    Browser("Welcome: Mercury Tours").Page("Book a Flight: Mercury").WebEdit("passFirst0").Click
    wait 2
	Browser("Welcome: Mercury Tours").Page("Book a Flight: Mercury").WebEdit("passFirst0").Set datatable.Value("Firstname")
	Call report("Step-11","Enter first name of 1 passenger","Name is enterd","Pass",time,date)
	reporter.ReportEvent micPass,"Enter first name of 1 passenger","Name is enterd"
End If

If Browser("Welcome: Mercury Tours").Page("Book a Flight: Mercury").WebEdit("passLast0").Exist Then
	Browser("Welcome: Mercury Tours").Page("Book a Flight: Mercury").WebEdit("passLast0").Set datatable.Value("Lastname")
	Call report("Step-12","Enter last name of 1 passenger","Name is enterd","Pass",time,date)
	reporter.ReportEvent micPass,"Enter last name of 1 passenger","Name is enterd"
End If

datatable.SetCurrentRow(2)

If Browser("Welcome: Mercury Tours").Page("Book a Flight: Mercury").WebEdit("passFirst1").Exist Then
    wait 2
	Browser("Welcome: Mercury Tours").Page("Book a Flight: Mercury").WebEdit("passFirst1").Set datatable.Value("Firstname")
	Call report("Step-13","Enter first name of 2 passenger","Name is enterd","Pass",time,date)
	reporter.ReportEvent micPass,"Enter first name of 2 passenger","Name is enterd"
End If

If Browser("Welcome: Mercury Tours").Page("Book a Flight: Mercury").WebEdit("passLast1").Exist Then
	Browser("Welcome: Mercury Tours").Page("Book a Flight: Mercury").WebEdit("passLast1").Set datatable.Value("Lastname")
	Call report("Step-14","Enter last name of 2 passenger","Name is enterd","Pass",time,date)
	reporter.ReportEvent micPass,"Enter last name of 2 passenger","Name is enterd"
End If
 @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Book a Flight: Mercury").WebEdit("passLast1")_;_script infofile_;_ZIP::ssf18.xml_;_
datatable.SetCurrentRow(1)

''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''Card details''''''''''''''''''''''''''''''''''''''''''''''''''''''''

If Browser("Welcome: Mercury Tours").Page("Book a Flight: Mercury").WebList("creditCard").Exist Then
	Browser("Welcome: Mercury Tours").Page("Book a Flight: Mercury").WebList("creditCard").Select datatable.Value("Creditcard")
	Call report("Step-15","Card name is enter","Card name is enterd","Pass",time,date)
	reporter.ReportEvent micPass,"Card name is enter","Card name is enterd"
End If

If Browser("Welcome: Mercury Tours").Page("Book a Flight: Mercury").WebEdit("creditnumber").Exist Then
	Browser("Welcome: Mercury Tours").Page("Book a Flight: Mercury").WebEdit("creditnumber").Set  datatable.Value("Card_no")
	Call report("Step-16","Card number is enter","Card number is enterd","Pass",time,date)
	reporter.ReportEvent micPass,"Card number is enter","Card number is enterd"
End If @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Book a Flight: Mercury").WebEdit("creditnumber")_;_script infofile_;_ZIP::ssf22.xml_;_
Expiry_date = split(datatable.Value("Expiry_date"),"-") 
 @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Book a Flight: Mercury").WebList("cc exp dt mn")_;_script infofile_;_ZIP::ssf23.xml_;_
If Browser("Welcome: Mercury Tours").Page("Book a Flight: Mercury").WebList("cc_exp_dt_mn").Exist Then
	Expiry_month=trim(Expiry_date(0))
    Browser("Welcome: Mercury Tours").Page("Book a Flight: Mercury").WebList("cc_exp_dt_mn").Select Expiry_month
    Call report("Step-17","Card expiry month is enter","Card expiry month is enterd","Pass",time,date)
    reporter.ReportEvent micPass,"Card expiry month is enter","Card expiry month is enterd"
End If

If Browser("Welcome: Mercury Tours").Page("Book a Flight: Mercury").WebList("cc_exp_dt_yr").Exist Then
	Expiry_year=trim(Expiry_date(2))
    Browser("Welcome: Mercury Tours").Page("Book a Flight: Mercury").WebList("cc_exp_dt_yr").Select Expiry_year
    Call report("Step-18","Card expiry year is enter","Card expiry year is enterd","Pass",time,date)
    reporter.ReportEvent micPass,"Card expiry year is enter","Card expiry year is enterd"
End If



'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''Book a Flight reporter'''''''''''''''''''''''''''''''''''''
'Browser("Welcome: Mercury Tours").Page("Book a Flight: Mercury").CaptureBitmap "F:\New_tour\Book a Flight.bmp",True
'reporter.ReportEvent micDone , "Book a Flight","Book a Flight","F:\New_tour\Book a Flight.bmp"
fpass "Step 4","Book a Flight","F:","Book a Flight"
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''


Browser("Welcome: Mercury Tours").Page("Book a Flight: Mercury").Image("buyFlights").Click 69,9 @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Book a Flight: Mercury").Image("buyFlights")_;_script infofile_;_ZIP::ssf34.xml_;_

''''''''''''''''''''''''''''''''''''''''''''''''''''''''Check the total prize is same''''''''''''''''''''''''''''''''''''''''''''

total_prize1=" "&total_prize&" USD"
tol_prize = Browser("Welcome: Mercury Tours").Page("Flight Confirmation: Mercury").WebTable("Total Taxes:").GetCellData(2,2)
datatable.Value("Total_prize") = tol_prize
If tol_prize = total_prize1 Then
    Call report("Step-19","Card expiry year is enter","Card expiry year is enterd","Pass",time,date)
    reporter.ReportEvent micDone , "Card expiry year is enter","Card expiry year is enterd","F:\New_tour\Equal prize.bmp"
	fcorrect "Step 5","First prize "&tol_prize,"First prize "&total_prize1,"F:","Equal prize"
	
End If


'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''Flight Confirmation reporter''''''''''''''''''''''''''''''''
'Browser("Welcome: Mercury Tours").Page("Book a Flight: Mercury").CaptureBitmap "F:\New_tour\Flight Confirmation.bmp",True
'reporter.ReportEvent micDone , "Flight Confirmation","Flight Confirmation","F:\New_tour\Flight Confirmation.bmp"
fpass "Step 6","Flight Confirmation","F:","Flight Confirmation"
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''


Browser("Welcome: Mercury Tours").Page("Flight Confirmation: Mercury").Image("Logout").Click

On error goto 0
