'***************************************************************************************************************
'Scenario Name          Booking for flight ticket by MAKE MY TRIP website.
'Auther Name            Sourabh Chakroborty
'Creation Date          3/22/2016
'Last Modification Date 3/28/2016
'Scenario Discription   We can book domastic or international ticket for any person for any date by this website.
'****************************************************************************************************************

Dim D_link1         'Store the value after trim function use 
Dim D_link          'Store the value
Dim myDeviceReplay1 'Store the source city value
Dim myDeviceReplay  'Store the distination city value 
Dim idate           'Store the current date
Dim idatevalue      'Store the value after split  
Dim row             'Store the row in which given date is there  
Dim ccount          'Store the number of column is there
Dim celldata        'Store the given date by row and column

'***************************************************************************************************

'***************************************************************************************************
On error resume next

SystemUtil.Run "iexplore","http://www.makemytrip.com/"
Browser("MakeMyTrip, India's No").Page("MakeMyTrip, India's No").Sync
If Browser("MakeMyTrip, India's No").Page("MakeMyTrip, India's No").Exist Then
	reporter.ReportEvent "Web page","Web page is loaded"
else
    reporter.ReportEvent "Web page","Web page is not loaded"
End If

'***************************************************************************************************

wait 4           
'**************************************STEP FOR SELECT LOCATION**************************************

Set object = Description.Create
object("micclass").value = "link"
Set object=Browser("MakeMyTrip, India's No_2").Page("MakeMyTrip, India's No").ChildObjects(object)
    For i = 0 To object.count-1
        b=object.count-1
        D_link=object(i).getroproperty("innertext")
        D_link1=trim(D_link)
           If D_link1=datatable.Value("Location","START") Then
                object(i).click
                print D_link1
                
                '**************************************************************************************************************************************************************
                
                Call report("Step-1","Click on "&datatable.Value("Location","START")&" link.","Tour date and place and trip link should be show.","As expected","PASS",time,date)
                reporter.ReportEvent micPass,"Tour date and place and trip link should be show.","As expected"
                
                '**************************************************************************************************************************************************************
     Exit for     
           ElseIf b=i Then

                '**************************************************************************************************************************************************************
                
                Call report("Step-1","Click on "&datatable.Value("Location","START")&" link.","Tour date and place and trip link is not show.","As expected","FAIL",time,date)
                reporter.ReportEvent micPass,"Tour date and place and trip link is not .","As expected"
                
                '**************************************************************************************************************************************************************
    exittest              
           End if           
    next             

'*********************************************STEP FOR TRIP****************************************

Set object = Description.Create
object("micclass").value = "link"
Set object=Browser("MakeMyTrip, India's No_2").Page("Cheap Air Tickets, Flight").ChildObjects(object)
    For i = 0 To object.count-1
        b=object.count-1
        D_link=object(i).getroproperty("innertext")
        D_link1=trim(D_link)
           If D_link1=datatable.Value("Trip","START") Then
                object(i).click
                print D_link1
                
                '**************************************************************************************************************************************************************
                
                Call report("Step-2","Click on "&datatable.Value("Trip","START")&" box.",""&datatable.Value("Trip","START")&" will select",""&datatable.Value("Trip","START")&" is selected","PASS",time,date)
                reporter.ReportEvent micPass,""&datatable.Value("Trip","START")&" will select",""&datatable.Value("Trip","START")&" is selected"

                '**************************************************************************************************************************************************************
    Exit for      
                ElseIf b=i Then
                
                '**************************************************************************************************************************************************************
                
                Call report("Step-2","Click on "&datatable.Value("Trip","START")&" box.",""&datatable.Value("Trip","START")&" will select",""&datatable.Value("Trip","START")&" not selected","FAIL",time,date)
                reporter.ReportEvent micPass,""&datatable.Value("Trip","START")&" will select",""&datatable.Value("Trip","START")&" not selected"

                '**************************************************************************************************************************************************************

           exittest            
           End if   
    next             

'*******************************************STEP FOR SELECT SOURCE CITY**********************************************

if Browser("MakeMyTrip, India's No_2").Page("Cheap Air Tickets, Flight").WebEdit("WebEdit").Exist then
     Browser("MakeMyTrip, India's No_2").Page("Cheap Air Tickets, Flight").WebEdit("WebEdit").Click
	 Set myDeviceReplay1 = CreateObject("Mercury.DeviceReplay")
	 myDeviceReplay1.SendString datatable.Value("Source","START")

        '****************************************************************************************************************************************************************************
        
	    Call report("Step-3","Type the Source city name."," "&datatable.Value("Source","START")&" will select"," "&datatable.Value("Source","START")&" is selected","PASS",time,date)
        reporter.ReportEvent micPass," "&datatable.Value("Source","START")&" will select"," "&datatable.Value("Source","START")&" is selected"

        '****************************************************************************************************************************************************************************

else

        '**************************************************************************************************************************************************************
                
        Call report("Step-3","Type the Source city name."," "&datatable.Value("Source","START")&" will select"," "&datatable.Value("Source","START")&" not selected","FAIL",time,date)
        reporter.ReportEvent micPass," "&datatable.Value("Source","START")&" will select"," "&datatable.Value("Source","START")&" not selected"

        '**************************************************************************************************************************************************************

exittest                
End if
wait 2

'*******************************************STEP FOR SELECT DESTINATION CITY**********************************************

if Browser("MakeMyTrip, India's No_2").Page("Cheap Air Tickets, Flight").WebEdit("WebEdit_2").Exist then 
   Browser("MakeMyTrip, India's No_2").Page("Cheap Air Tickets, Flight").WebEdit("WebEdit_2").Click
	 Set myDeviceReplay = CreateObject("Mercury.DeviceReplay")
	 myDeviceReplay.SendString datatable.Value("Destination","START") @@ hightlight id_;_Browser("MakeMyTrip, India's No 2").Page("Cheap Air Tickets, Flight").WebEdit("WebEdit 2")_;_script infofile_;_ZIP::ssf80.xml_;_
	 
     	'****************************************************************************************************************************************************************************
	 
	    Call report("Step-4","Type the Destination city name.",""&datatable.Value("Destination","START")&" will select",""&datatable.Value("Destination","START")&" is selected","PASS",time,date)
        reporter.ReportEvent micPass,""&datatable.Value("Destination","START")&" will select",""&datatable.Value("Destination","START")&" is selected"

        '****************************************************************************************************************************************************************************

else

        '****************************************************************************************************************************************************************************
	 
	    Call report("Step-4","Type the Destination city name.",""&datatable.Value("Destination","START")&" will select",""&datatable.Value("Destination","START")&" not selected","FAIL",time,date)
        reporter.ReportEvent micPass,""&datatable.Value("Destination","START")&" will select",""&datatable.Value("Destination","START")&" not selected"

        '****************************************************************************************************************************************************************************

exittest
End if

'*******************************************STEP FOR DEPARTURE DATE**********************************************

Browser("MakeMyTrip, India's No_2").Page("Cheap Air Tickets, Flight").Link("DEPARTURESelect Date31Mar").Click @@ hightlight id_;_Browser("MakeMyTrip, India's No 2").Page("Cheap Air Tickets, Flight").Link("DEPARTURESelect Date31Mar")_;_script infofile_;_ZIP::ssf81.xml_;_
idate=date()
idatevalue=Split(idate,"/")
idateval=Trim(idatevalue(1))
row=Browser("MakeMyTrip, India's No_2").Page("Cheap Air Tickets, Flight").WebTable("Su").GetRowWithCellText(idateval)
ccount=Browser("MakeMyTrip, India's No_2").Page("Cheap Air Tickets, Flight").WebTable("Su").ColumnCount(row)
  For i=1 to ccount
      CellData=Browser("MakeMyTrip, India's No_2").Page("Cheap Air Tickets, Flight").WebTable("Su").GetCellData(row,i)
            If  CellData=idateval Then
                Set iObj=Browser("MakeMyTrip, India's No_2").Page("Cheap Air Tickets, Flight").WebTable("Su").ChildItem(row,i,"Link",0)
                iObj.Click
  Exit For
            End If
  Next 
 
'*******************************************STEP FOR NUMBER OF PASSENGER**********************************************

a=datatable.Value("Passenger","START") @@ hightlight id_;_Browser("MakeMyTrip, India's No 2").Page("Cheap Air Tickets, Flight").Link("+ 3")_;_script infofile_;_ZIP::ssf87.xml_;_
For i = 1 To a-1 Step 1
    if Browser("MakeMyTrip, India's No_2").Page("MakeMyTrip, India's No").Link("+").Exist then
       Browser("MakeMyTrip, India's No_2").Page("MakeMyTrip, India's No").Link("+").Click	
   
          '****************************************************************************************************************************************************************************
        	
          Call report("Step-5","Select the number of passenger","Number of passenger will select","Selected passenger number will show.","PASS",time,date)
          reporter.ReportEvent micPass,"Number of passenger will select","Selected passenger number will show."
          
           '****************************************************************************************************************************************************************************    

    else

          '****************************************************************************************************************************************************************************
        	
          Call report("Step-5","Select the number of passenger","Number of passenger will select","Selected passenger number is not showing.","FAIL",time,date)
          reporter.ReportEvent micPass,"Number of passenger will select","Selected passenger number is not showing."
          
          '****************************************************************************************************************************************************************************    

    exittest
    End if
Next

'*******************************************STEP FOR SELECT THE CLASS**********************************************

If Browser("MakeMyTrip, India's No_2").Page("Cheap Air Tickets, Flight").WebList("select_class").Exist Then
   Browser("MakeMyTrip, India's No_2").Page("Cheap Air Tickets, Flight").WebList("select_class").Select datatable.Value("Class","START")	

          '****************************************************************************************************************************************************************************
     	
          Call report("Step-6","Select the class you want.","Select the desired class.",""&datatable.Value("Class","START")&" Class selected","PASS",time,date)
          reporter.ReportEvent micPass,"Select the desired class.",""&datatable.Value("Class","START")&" Class selected"
          
     	  '****************************************************************************************************************************************************************************          

else

          '****************************************************************************************************************************************************************************
     	
          Call report("Step-6","Select the class you want.","Select the desired class.",""&datatable.Value("Class","START")&" Class not selected","FAIL",time,date)
          reporter.ReportEvent micPass,"Select the desired class.",""&datatable.Value("Class","START")&" Class not selected"
          
     	  '****************************************************************************************************************************************************************************          

exittest
End If
 @@ hightlight id_;_Browser("MakeMyTrip, India's No 2").Page("Cheap Air Tickets, Flight").WebList("select class")_;_script infofile_;_ZIP::ssf88.xml_;_
'*******************************************STEP FOR CLICK FLIGHT SEARCH BUTTON**********************************************

If Browser("MakeMyTrip, India's No_2").Page("Cheap Air Tickets, Flight").Link("Search Flights").Exist Then
   Browser("MakeMyTrip, India's No_2").Page("Cheap Air Tickets, Flight").Link("Search Flights").Click
     
         '****************************************************************************************************************************************************************************
          	
         Call report("Step-7","Click on flight search button.","Flight booking window will open.","Flight booking window is open.","PASS",time,date)
         reporter.ReportEvent micPass,"Flight booking window will open.","Flight booking window is open."  

     	 '****************************************************************************************************************************************************************************

else

        '****************************************************************************************************************************************************************************
          	
         Call report("Step-7","Click on flight search button.","Flight booking window will open.","Flight booking window is not open.","FAIL",time,date)
         reporter.ReportEvent micPass,"Flight booking window will open.","Flight booking window is not open."  

     	 '****************************************************************************************************************************************************************************

exittest
End If 
On error goto 0