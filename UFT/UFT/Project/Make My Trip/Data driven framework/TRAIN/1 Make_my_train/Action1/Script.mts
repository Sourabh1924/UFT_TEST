'******************************************************************************************************************
'Scenario Name          Booking for train ticket by MAKE MY TRIP website.
'Auther Name            Sourabh Chakroborty
'Creation Date          3/22/2016
'Last Modification Date 3/28/2016
'Scenario Discription   We can book train ticket for any person for any date for any city in India from this website.
'******************************************************************************************************************

Dim D_link1         'Store the value after trim function use 
Dim D_link          'Store the value
Dim myDeviceReplay1 'Store the source city value
Dim myDeviceReplay  'Store the distination city value 
Dim idate           'Store the current date
Dim idatevalue      'Store the value after split  
Dim row             'Store the row in which given date is there  
Dim ccount          'Store the number of column is there
Dim celldata        'Store the given date by row and column

'******************************************************************************************************************

'*************************************start************************************************************************
On error resume next

SystemUtil.Run "iexplore","http://www.makemytrip.com/"
Browser("MakeMyTrip, India's No").Page("MakeMyTrip, India's No").Sync
If Browser("MakeMyTrip, India's No").Page("MakeMyTrip, India's No").Exist Then
	reporter.ReportEvent "Web page","Web page is loaded"
else
    reporter.ReportEvent "Web page","Web page is not loaded"
End If
wait 5

'**************************************************STEP FOR SELECT TRAIN OPTION*****************************

Set ocollection = Description.Create
ocollection("micclass").value = "link"
Set ocollection=Browser("MakeMyTrip, India's No").Page("MakeMyTrip, India's No").ChildObjects(ocollection)
    For i = 0 To ocollection.count-1
        a=ocollection.count-1
        T_link=ocollection(i).getroproperty("innertext")
                If T_link=datatable.Value("Type","START") Then 'matching the object found and value in datatable
                       ocollection(i).click                    'click on that object
                       print T_link
                       
                       '**************************************************************************************************************************************************************
                
                       Call report("Step-1","Click on trains link.","Link should be redirect to the IRCTC Railway Ticket page.","Redirect to IRCTC Railway Ticket page.","PASS",time,date)
                       reporter.ReportEvent micPass,"Link should be redirect to the IRCTC Railway Ticket page.","Redirect to IRCTC Railway Ticket page."
                
                       '**************************************************************************************************************************************************************

Exit for

                ElseIf a=i Then
                
                       '**************************************************************************************************************************************************************
                
                       Call report("Step-1","Click on trains link.","Link should be redirect to the IRCTC Railway Ticket page.","Page error occur.","FAIL",time,date)
                       reporter.ReportEvent micPass,"Link should be redirect to the IRCTC Railway Ticket page.","Page error occur."
                
                       '**************************************************************************************************************************************************************
                
                Exittest   
                End if
    next            

'******************************************STEP FOR SELECT SOURCE STATION*************************************

If Browser("MakeMyTrip, India's No").Page("IRCTC Train Reservation").WebEdit("WebEdit").Exist Then
     Browser("MakeMyTrip, India's No").Page("IRCTC Train Reservation").WebEdit("WebEdit").Click
	 Set myDeviceReplay = CreateObject("Mercury.DeviceReplay")       'object create
	 myDeviceReplay.SendString datatable.Value("Source","START")     'type the datatable value in that winedit box

       '****************************************************************************************************************************************************************************
        
	    Call report("Step-2","Type the Source city name."," "&datatable.Value("Source","START")&" will select"," "&datatable.Value("Source","START")&" is selected","PASS",time,date)
        reporter.ReportEvent micPass," "&datatable.Value("Source","START")&" will select"," "&datatable.Value("Source","START")&" is selected"

       '****************************************************************************************************************************************************************************

else

       '****************************************************************************************************************************************************************************
        
	    Call report("Step-2","Type the Source city name."," "&datatable.Value("Source","START")&" not present"," "&datatable.Value("Source","START")&" is not select","FAIL",time,date)
        reporter.ReportEvent micPass," "&datatable.Value("Source","START")&" not present"," "&datatable.Value("Source","START")&" is not select"

       '****************************************************************************************************************************************************************************

Exittest
End If
wait 3

'******************************************STEP FOR SELECT DESTINATION STATION*************************************

If Browser("MakeMyTrip, India's No").Page("IRCTC Train Reservation").WebEdit("WebEdit_2").Exist Then @@ hightlight id_;_Browser("MakeMyTrip, India's No").Page("IRCTC Train Reservation").WebEdit("WebEdit 2")_;_script infofile_;_ZIP::ssf6.xml_;_
     Browser("MakeMyTrip, India's No").Page("IRCTC Train Reservation").WebEdit("WebEdit_2").Click
	 Set myDeviceReplay1 = CreateObject("Mercury.DeviceReplay")           'object create
	 myDeviceReplay1.SendString datatable.Value("Destination","START")    'take tha value from datatable
	 
 	   '****************************************************************************************************************************************************************************
        
	    Call report("Step-3","Type the Source city name."," "&datatable.Value("Destination","START")&" will select"," "&datatable.Value("Destination","START")&" is selected","PASS",time,date)
        reporter.ReportEvent micPass," "&datatable.Value("Destination","START")&" will select"," "&datatable.Value("Destination","START")&" is selected"

       '****************************************************************************************************************************************************************************

else

       '****************************************************************************************************************************************************************************
        
	    Call report("Step-3","Type the destination city name."," "&datatable.Value("Destination","START")&" is not present"," "&datatable.Value("Destination","START")&" is not select","FAIL",time,date)
        reporter.ReportEvent micPass," "&datatable.Value("Destination","START")&" will select"," "&datatable.Value("Destination","START")&" is selected"

       '****************************************************************************************************************************************************************************

Exittest
End If

'******************************************STEP FOR SELECT DEPARTURE DATE*************************************

Browser("MakeMyTrip, India's No").Page("IRCTC Train Reservation").Link("DEPARTURE22Mar '16Tue").Click
idate=datatable.Value("D_date","START")                                                                                                 'store the date from datatable
idatevalue=Split(idate,"/")                                                                                                             'split the date
idateval=Trim(idatevalue(1))                                                                                                            'get the date 
row=Browser("MakeMyTrip, India's No").Page("IRCTC Train Reservation_2").WebTable("Su").GetRowWithCellText(idateval)                     'count date present in which row
ccount=Browser("MakeMyTrip, India's No").Page("IRCTC Train Reservation_2").WebTable("Su").ColumnCount(row)                              'count number of coloumn
  For i=1 to ccount
      CellData=Browser("MakeMyTrip, India's No").Page("IRCTC Train Reservation_2").WebTable("Su").GetCellData(row,i)                    'show which cell is select in the date row 
            If  CellData=idateval Then
                Set iObj=Browser("MakeMyTrip, India's No").Page("IRCTC Train Reservation_2").WebTable("Su").ChildItem(row,i,"Link",0)
                iObj.Click
  Exit For
            End If
  Next

'******************************************STEP FOR SELECT CLASS*************************************

If Browser("MakeMyTrip, India's No").Page("IRCTC Train Reservation_2").WebList("select_class").Exist Then
      Browser("MakeMyTrip, India's No").Page("IRCTC Train Reservation_2").WebList("select_class").Select  datatable.Value("Class","START")	

          '****************************************************************************************************************************************************************************
     	
          Call report("Step-4","Select the class you want.","Select the desired class.",""&datatable.Value("Class","START")&" Class selected","PASS",time,date)
          reporter.ReportEvent micPass,"Select the desired class.",""&datatable.Value("Class","START")&" Class selected"
          
     	  '****************************************************************************************************************************************************************************          

else

          '****************************************************************************************************************************************************************************
     	
          Call report("Step-4","Select the class you want.","Select the desired class.",""&datatable.Value("Class","START")&" Class in not selected","FAIL",time,date)
          reporter.ReportEvent micPass,"Select the desired class.",""&datatable.Value("Class","START")&" Class in not selected"
          
     	  '****************************************************************************************************************************************************************************          

Exittest
End If

'******************************************STEP FOR CLICK BUTTON*************************************

If  Browser("MakeMyTrip, India's No").Page("IRCTC Train Reservation_2").Link("Search Trains").Exist Then
	  Browser("MakeMyTrip, India's No").Page("IRCTC Train Reservation_2").Link("Search Trains").Click

        '****************************************************************************************************************************************************************************
          	
         Call report("Step-5","Click on Train search button.","Train booking window will open.","Train booking window is open.","PASS",time,date)
         reporter.ReportEvent micPass,"Train booking window will open.","Train booking window is open."  

     	'****************************************************************************************************************************************************************************

else

        '****************************************************************************************************************************************************************************
          	
         Call report("Step-5","Click on Train search button.","Train booking window will  open.","Train booking window is not open.","FAIL",time,date)
         reporter.ReportEvent micPass,"Train booking window will open.","Train booking window is not open."  

     	'****************************************************************************************************************************************************************************

Exittest
End If

On error goto 0