'datatable.Export "F:\Cleartrip\Data\Cleartrip.xls"
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
datatable.Import "F:\Cleartrip\Data\Cleartrip.xls"
URL = datatable.Value("URL")
Origin = datatable.Value("Origin")
Destination = datatable.Value("Destination")
Date_ = datatable.Value("Date")
Passenger = datatable.Value("Passenger")
Flight_name = datatable.Value("Flight_name")
Flight_no = datatable.Value("Flight_no")
Price = datatable.Value("Price")
Ph_no = datatable.Value("Ph_no")
Title = datatable.Value("Title")
Fname = datatable.Value("Fname")
Lname = datatable.Value("Lname")
Email_address = datatable.Value("Email")
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

''''''''''''''''''''''''''''''Login''''''''''''''''''''''''''

Services.StartTransaction "Login"
S_time = timer
   Call login(URL)
   create()
E_time = timer
TT_time = E_time - S_time 
Services.EndTransaction "Login"

'''''''''''''''''''''''''''''''''''Reporter'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
fpass "Step-1","Home page is open"
report "Step-1","Home page is open","PASS",Time,Date,TT_time
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''Flight_detail''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
If Browser("Cleartrip - Flights, Hotels,").Page("Cleartrip - Flights, Hotels,").Exist Then
   Services.StartTransaction "Flight_details"
   S_time = timer
End If

'Select trip type
If Browser("Cleartrip - Flights, Hotels,").Page("Cleartrip - Flights, Hotels,").WebRadioGroup("trip_type").Exist Then
   Browser("Cleartrip - Flights, Hotels,").Page("Cleartrip - Flights, Hotels,").WebRadioGroup("trip_type").Select "Oneway"	
End If

'Select Origin
If Browser("Cleartrip - Flights, Hotels,").Page("Cleartrip - Flights, Hotels,").WebEdit("origin").Exist Then
   Browser("Cleartrip - Flights, Hotels,").Page("Cleartrip - Flights, Hotels,").WebEdit("origin").Set Origin	
End If

'Select Destination
If Browser("Cleartrip - Flights, Hotels,").Page("Cleartrip - Flights, Hotels,").WebEdit("destination").Exist Then
   Browser("Cleartrip - Flights, Hotels,").Page("Cleartrip - Flights, Hotels,").WebEdit("destination").Set Destination	
End If

''''''''''''Select date
Browser("Cleartrip - Flights, Hotels,").Page("Cleartrip - Flights, Hotels,").WebElement("Cal").Click
dat1 = split(Date_,"-")
date1 = trim(dat1(0))
mont = trim(dat1(1))
mont_ = monthname(mont)
mont_name = Browser("Cleartrip | Book your").Page("Cleartrip - Flights, Hotels,").WebElement("October 2016").GetROProperty("innertext")
mont_name1 = split(mont_name," ")
month_name = trim(mont_name1(0))
If month_name = mont_ Then
  row = Browser("Cleartrip - Flights, Hotels,").Page("Cleartrip - Flights, Hotels,").WebTable("M_2").GetRowWithCellText(date1)                     'count date present in which row
  ccount = Browser("Cleartrip - Flights, Hotels,").Page("Cleartrip - Flights, Hotels,").WebTable("M_2").ColumnCount(row)                              'count number of coloumn
     For i = 1 to ccount
         CellData = Browser("Cleartrip - Flights, Hotels,").Page("Cleartrip - Flights, Hotels,").WebTable("M_2").GetCellData(row,i)                    'show which cell is select in the date row 
              If  CellData = date1 Then
                    Set iObj = Browser("Cleartrip - Flights, Hotels,").Page("Cleartrip - Flights, Hotels,").WebTable("M_2").ChildItem(row,i,"Link",0)
                    iObj.Click
     Exit For
              End If
     Next
else
   row = Browser("Cleartrip - Flights, Hotels,").Page("Cleartrip - Flights, Hotels,").WebTable("M").GetRowWithCellText(date1)                     'count date present in which row
   ccount = Browser("Cleartrip - Flights, Hotels,").Page("Cleartrip - Flights, Hotels,").WebTable("M").ColumnCount(row)                              'count number of coloumn
       For i = 1 to ccount
           CellData = Browser("Cleartrip - Flights, Hotels,").Page("Cleartrip - Flights, Hotels,").WebTable("M").GetCellData(row,i)                    'show which cell is select in the date row 
                If  CellData = date1 Then
                       Set iObj = Browser("Cleartrip - Flights, Hotels,").Page("Cleartrip - Flights, Hotels,").WebTable("M").ChildItem(row,i,"Link",0)
                       iObj.Click
       Exit For
                End If
       Next
End If

'Select Passenger number
If Browser("Cleartrip - Flights, Hotels,").Page("Cleartrip - Flights, Hotels,").WebList("adults").Exist Then
   Browser("Cleartrip - Flights, Hotels,").Page("Cleartrip - Flights, Hotels,").WebList("adults").Select Passenger	
End If   

'''''''''''''''''''''''''''''''''''Reporter'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
fpass "Step-2","Flight details page is open"
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

Browser("Cleartrip - Flights, Hotels,").Page("Cleartrip - Flights, Hotels,").WebButton("Search flights").Click
E_time = timer
TT_time = E_time - S_time 
Services.EndTransaction "Flight_details"

'''''''''''''''''''''''''''''''''''Reporter'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
report "Step-2","Flight details page is open","PASS",Time,Date,TT_time
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
wait 15
'''''''''''''''''''''''''''''''''''''''''''''''''Flight_booking'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
Services.StartTransaction "Flight_booking"
S_time = timer

click()     

set object = Description.Create
object("micclass").value = "WebElement"
object("html tag").value = "SPAN"  
object("class").value = "span span18 truncate"
Set object=Browser("Cleartrip - Flights, Hotels,").Page("Cleartrip | Nagpur → Mumbai").ChildObjects(object)
    For i = 0 To object.count-1
         D_link = object(i).getroproperty("innertext")
           If trim(D_link) = Flight_name Then
           
           else
           	   object(i).click
           End If
    next

Set object = Description.Create
object("micclass").value = "WebElement"
object("html tag").value = "small"
object("outertext").value = Flight_name
Set object=Browser("Cleartrip - Flights, Hotels,").Page("Cleartrip | Nagpur → Mumbai").ChildObjects(object)
    For i = 0 To object.count-1
        D_link = object(i).getroproperty("innertext")
             If trim(D_link) = Flight_name Then
             	 object(i).click 
             End If       	    
                Set object1 = Description.Create
                object1("micclass").value = "WebElement"
                object1("html tag").value = "small"
                object1("class").value = "flightNumber" 
                object1("visible").value = "True"         
                Set object1 = Browser("Cleartrip - Flights, Hotels,").Page("Cleartrip | Nagpur → Mumbai").ChildObjects(object1)
                    For j = 0 To object1.count
                        D_link = object1(j).getroproperty("innertext")
                           If D_link = Flight_no Then
                        	    Set object2 = Description.Create
                                object2("micclass").value = "WebButton"
                                object2("html tag").value = "BUTTON"
                                object2("class").value = "booking"          
                                Set object2 = Browser("Cleartrip - Flights, Hotels,").Page("Cleartrip | Nagpur → Mumbai").ChildObjects(object2)
                        	        For k = 1 To object.count
                                         If i = k Then
                                         
                                             '''''''''''''''''''''''''''''''''''Reporter'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
                                              fpass "Step-3","Flight booking is open"
											 ''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
                                             
                                             cost = Browser("Cleartrip - Flights, Hotels,").Page("Cleartrip | Nagpur → Mumbai").WebElement("Rs.7,370").GetROProperty("outertext")
                                             cost = split(cost,".")
                                             cost1 = trim(cost(1))
                                             cost1 = replace(cost1,",","")
                                             datatable.Value("Price") = cost1                        	   	            
                        	   	             object2(k).click                         	   	          
                        	   	    Exit for 
                        	             End If 
                                    next
                           else
                                 object(i).click                                    
                           End If  
                    Exit for 
                    next                                   
              next
E_time = timer
TT_time = E_time - S_time
Services.EndTransaction "Flight_booking"

'''''''''''''''''''''''''''''''''''Reporter'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
 report "Step-3","Flight booking page is open","PASS",Time,Date,TT_time
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

'''''''''''''''''''''''''''''''''''''''''''''''''''''''''Passenger_details'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

If Browser("Cleartrip - Flights, Hotels,").Page("Cleartrip | Nagpur → Mumbai").Exist Then
   Services.StartTransaction "Passenger_details"
   S_time = timer
End If
Browser("Cleartrip - Flights, Hotels,").Page("Cleartrip | Nagpur → Mumbai").WebCheckBox("insurance").Set "ON"
Browser("Cleartrip | Book your").Page("Cleartrip | Book your_3").WebCheckBox("insuranceConfirm").Set "ON"
cost = Browser("Cleartrip - Flights, Hotels,").Page("Cleartrip | Nagpur → Mumbai").WebElement("counter").GetROProperty("outertext")
cost = replace(cost,",","")
If cost = datatable.Value("Price") Then
     fpass "Step-4","Flight price is same"
else
     ffail "Step-4","Flight price is different"
End If
Browser("Cleartrip | Book your").Page("Cleartrip | Book your_3").WebButton("Continue booking").Click
If Browser("Cleartrip | Book your").Page("Cleartrip | Book your_3").WebEdit("username").Exist(5) Then
   Browser("Cleartrip | Book your").Page("Cleartrip | Book your_3").WebEdit("username").Set Email_address
   Browser("Cleartrip | Book your").Page("Cleartrip | Book your_3").WebButton("Continue").Click	
End If


Browser("Cleartrip | Book your").Page("Cleartrip | Book your_2").WebEdit("contact1").Set Ph_no
Browser("Cleartrip | Book your").Page("Cleartrip | Book your_2").WebList("AdultTitle1").Select Title
Browser("Cleartrip | Book your").Page("Cleartrip | Book your_2").WebEdit("AdultFname1").Set Fname
Browser("Cleartrip | Book your").Page("Cleartrip | Book your_2").WebEdit("AdultLname1").Set Lname
datatable.SetCurrentRow(2)

Title = datatable.Value("Title")
Fname = datatable.Value("Fname")
Lname = datatable.Value("Lname")

Browser("Cleartrip | Book your").Page("Cleartrip | Book your_2").WebList("AdultTitle2").Select Title
Browser("Cleartrip | Book your").Page("Cleartrip | Book your_2").WebEdit("AdultFname2").Set Fname
Browser("Cleartrip | Book your").Page("Cleartrip | Book your_2").WebEdit("AdultLname2").Set Lname
Browser("Cleartrip | Book your").Page("Cleartrip | Book your_2").WebButton("Continue").Click
E_time = timer
TT_time = E_time - S_time
Services.EndTransaction "Passenger_details"

'''''''''''''''''''''''''''''''''''Reporter'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
fpass "Step-4","Passenger_details page show"
report "Step-5","Passenger_details page show","PASS",Time,Date,TT_time
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
'Close the process
systemutil.CloseDescendentProcesses

'''''''''''''''''''''''''''''''''''''''''''Zip the folder'''''''''''''''''''''''''''''''''''''''''''''''''''''''''
Services.StartTransaction "Zip_the_test"
S_time = timer
path = environment.Value("TestDir")
SourceFolderPath = left(path,InstrRev(Environment("TestDir"),"\"))
SourceFolderPath1 = mid(path,1,3) 
TargetZipFileName = "Cleartrip_zip"
SystemUtil.Run "C:\Program Files\WinRAR\WinRAR.exe","a -ep1  -scul -r0 -iext -- "&TargetZipFileName&".rar F:\Cleartrip","F:\","" 
E_time = timer
Services.EndTransaction "Zip_the_test"
Set file1=createobject("scripting.filesystemobject")
    If file1.FileExists(SourceFolderPath1&TargetZipFileName)=TRUE Then
    
         '''''''''''''''''''''''''''''''''''''''''''''Reporter''''''''''''''''''''''''''''''''
         fpass "Step-5","Test is zipped succesfully"
         report "Step-6","Test is zipped succesfully","PASS",Time,Date,TT_time
         '''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
         
    else
         '''''''''''''''''''''''''''''''''''''''''''''Reporter''''''''''''''''''''''''''''''''
         ffail "Step-5","Test is not zipped succesfully"
         report "Step-6","Test is not zipped succesfully","FAIL",Time,Date,TT_time
         '''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
         
    End if

'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
