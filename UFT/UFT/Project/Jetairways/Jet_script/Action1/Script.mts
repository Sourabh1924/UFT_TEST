'=======================================================Relative path=======================================================================
'===========================================================================================================================================

Path = left(environment.Value("TestDir"),instrrev(environment.Value("TestDir"),"\")-1)
LoadFunctionLibrary(Path&"\Function\Function.qfl")
'===========================================================================================================================================
'===========================================================================================================================================

'===========================================================Data============================================================================
'===========================================================================================================================================
datatable.Export(Path&"\Data\Data.xls")
Jour_type = datatable.Value("Jour_type")
Source_ = datatable.Value("Source")
Destination_ = datatable.Value("Destination")
Ddate = datatable.Value("Ddate")
Passengers = datatable.Value("Passenger")

'===========================================================================================================================================
'===========================================================================================================================================

'===========================================================================================================================================
'===========================================================================================================================================
Services.StartTransaction "Launch"
S_time = timer
launch("http://www.jetairways.com/en/in/planyourtravel/book-online.aspx")
wait 5
If Browser("Online Flight Booking").Page("Online Flight Booking").Exist Then
     
     E_time = timer
     TT_time = E_time - S_time
     Services.EndTransaction "Launch"
     '''''''''''''''''''''''''''''''''''Reporter'''''''''''''''''''''''''''''''''''''
      call fpass("Step1","Website is launch succesfully")
      call report("Step_1","Website is launch succesfully","PASS",Time,Date,TT_time)
     '''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''' 

else

     '''''''''''''Reporter''''''''''
     call ffail("Step2","Login page is not open")
     exittest
     '''''''''''''''''''''''''''''''

End If

'============================================================Flight_details=================================================================
'===========================================================================================================================================
Services.StartTransaction "Flight_details"
S_time = timer

If Browser("Online Flight Booking").Page("Online Flight Booking").WebRadioGroup("Select for return trip").Exist Then
   Browser("Online Flight Booking").Page("Online Flight Booking").WebRadioGroup("Select for return trip").Select lcase(Jour_type)	
else

     '''''''''''''Reporter''''''''''
     call ffail("Step3","trip is not selected")
     exittest
     '''''''''''''''''''''''''''''''

End If

If Browser("Online Flight Booking").Page("Online Flight Booking").WebEdit("From").Exist Then
   Browser("Online Flight Booking").Page("Online Flight Booking").WebEdit("From").Set   Source_	
else
    
    '''''''''''''Reporter''''''''''
     call ffail("Step4","Source is not selected")
     exittest
     '''''''''''''''''''''''''''''''
    
End If
If True Then
   Browser("Online Flight Booking").Page("Online Flight Booking").WebEdit("To").Set  Destination_	
else

     '''''''''''''Reporter''''''''''
     call ffail("Step5","Destination is not selected")
     exittest
     '''''''''''''''''''''''''''''''

End If

Ddate = datatable.Value("Ddate")
Passenger = datatable.Value("Passenger") - 1

'''''''''''''''''''Select Ddate
Ddate1 = split(Ddate,"-")
D_day = trim(Ddate1(0))
D_month = trim(Ddate1(1))
D_year = trim(Ddate1(2))
Browser("Online Flight Booking").Page("Online Flight Booking").WebElement("WebElement").Click
If Browser("Online Flight Booking").Page("Online Flight Booking").WebList("select").Exist Then
   Browser("Online Flight Booking").Page("Online Flight Booking").WebList("select").Select D_month
else 

     '''''''''''''Reporter''''''''''
     call ffail("Step6","Depar_month is not selected")
     exittest
     '''''''''''''''''''''''''''''''

End If

If Browser("Online Flight Booking").Page("Online Flight Booking").WebList("select_2").Exist Then
    Browser("Online Flight Booking").Page("Online Flight Booking").WebList("select_2").Select D_year	
else

     '''''''''''''Reporter''''''''''
     call ffail("Step7","Depar_year is not selected")
     exittest
     '''''''''''''''''''''''''''''''

End If

row = Browser("Online Flight Booking").Page("Online Flight Booking").WebTable("Su").GetRowWithCellText(D_day)                     'count date present in which row
ccount = Browser("Online Flight Booking").Page("Online Flight Booking").WebTable("Su").ColumnCount(row)                              'count number of coloumn
   For i = 1 to ccount
         CellData = Browser("Online Flight Booking").Page("Online Flight Booking").WebTable("Su").GetCellData(row,i)                    'show which cell is select in the date row 
             If  CellData = D_day Then
                   Set iObj = Browser("Online Flight Booking").Page("Online Flight Booking").WebTable("Su").ChildItem(row,i,"Link",0)
                   iObj.Click
   Exit For 
             End If
   Next

'''''''''''''''''''''''''''''''

If Browser("Online Flight Booking").Page("Online Flight Booking").WebList("ctl00$MainBody$ctl00$ddlAdult").Exist Then
   Browser("Online Flight Booking").Page("Online Flight Booking").WebList("ctl00$MainBody$ctl00$ddlAdult").Select Passengers 
else

     '''''''''''''Reporter''''''''''
     call ffail("Step9","Passenger is not selected")
     exittest
     '''''''''''''''''''''''''''''''

End If
wait 1
Browser("Online Flight Booking").Page("Online Flight Booking").WebButton("Show Flights").Click
E_time = timer
TT_time = E_time - S_time
Services.EndTransaction "Flight_details"

'''''''''''''''''''''''''''''''''''Reporter'''''''''''''''''''''''''''''''''''''
call report("Step_2","Flight_details filled correctly","PASS",Time,Date,TT_time)
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
'===========================================================================================================================================
'===========================================================================================================================================

