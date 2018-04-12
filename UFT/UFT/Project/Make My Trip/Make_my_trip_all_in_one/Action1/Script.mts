
SystemUtil.Run "iexplore","http://www.makemytrip.com/"

Browser("MakeMyTrip, India's No").Page("MakeMyTrip, India's No").Sync
If Browser("MakeMyTrip, India's No").Page("MakeMyTrip, India's No").Exist Then
	reporter.ReportEvent micPass,"Web page","Web page is loaded"
else
    reporter.ReportEvent micFail,"Web page","Web page is not loaded"
exittest
End If @@ hightlight id_;_2130291872_;_script infofile_;_ZIP::ssf1.xml_;_

wait 3
'Click on the flight tab 

Set object = Description.Create
object("micclass").value = "link"
Set object1=Browser("MakeMyTrip, India's No").Page("MakeMyTrip, India's No").ChildObjects(object)
    For i = 0 To object1.count-1
        b=object1.count-1
        D_link=object1(i).getroproperty("text")
        D_link1=trim(D_link)
           If D_link1=datatable.Value("Type","Flight") Then
                object(i).click
                environment.Value("flight")=D_link1
                print D_link 
    Exit for    
    exitaction
           End if           
next 
 @@ script infofile_;_ZIP::ssf2.xml_;_
'Click on the domastic/international flight

Set object = Description.Create
object("micclass").value = "link"
Set object=Browser("MakeMyTrip, India's No").Page("MakeMyTrip, India's No").ChildObjects(object)
    For i = 0 To object.count-1
        b=object.count-1
        D_link=object(i).getroproperty("innertext")
        D_link1=trim(D_link)
           If D_link1=datatable.Value("Location","Flight") Then
                    object(i).click                        
    Exit for          
              exitaction
           End if           
    next 

'Click on trip link

Set object = Description.Create
object("micclass").value = "link"
Set object=Browser("MakeMyTrip, India's No").Page("Cheap Air Tickets, Flight").ChildObjects(object)
    For i = 0 To object.count-1
        b=object.count-1
        D_link=object(i).getroproperty("innertext")
        D_link1=trim(D_link)
           If D_link1=datatable.Value("Trip","Flight") Then
                environment.Value("Tour")=D_link1
                object(i).click
    exit for          
           End if  
print D_link1          
    next @@ hightlight id_;_Browser("MakeMyTrip, India's No").Page("Cheap Air Tickets, Flight").Link("Domestic")_;_script infofile_;_ZIP::ssf3.xml_;_

If environment.Value("Tour")="ONE WAY" Then
    
    'Select Source city
    
	Browser("MakeMyTrip, India's No").Page("Cheap Air Tickets, Flight").WebEdit("WebEdit_2").Click
	  Set myDeviceReplay = CreateObject("Mercury.DeviceReplay")       
	  myDeviceReplay.SendString datatable.Value("Source","Flight")     
    
    wait 2
    
    'Select Destination city
    
    Browser("MakeMyTrip, India's No").Page("Cheap Air Tickets, Flight").WebEdit("WebEdit").Click @@ hightlight id_;_Browser("MakeMyTrip, India's No").Page("Cheap Air Tickets, Flight").WebEdit("WebEdit")_;_script infofile_;_ZIP::ssf4.xml_;_
      Set myDeviceReplay1 = CreateObject("Mercury.DeviceReplay")       
   	  myDeviceReplay1.SendString datatable.Value("Destination","Flight")     

    'Select departure date
	
    Browser("MakeMyTrip, India's No").Page("Cheap Air Tickets, Flight").Link("DEPARTURESelect Date28Apr").Click @@ hightlight id_;_Browser("MakeMyTrip, India's No").Page("Cheap Air Tickets, Flight").Link("DEPARTURESelect Date28Apr")_;_script infofile_;_ZIP::ssf5.xml_;_
      idate=datatable.Value("D_date","Flight")                                                                                                 'store the date from datatable
      idatevalue=Split(idate,"/")                                                                                                             'split the date
      idateval=Trim(idatevalue(1))                                                                                                            'get the date 
      row=Browser("MakeMyTrip, India's No").Page("Cheap Air Tickets, Flight").WebTable("Su").GetRowWithCellText(idateval)                     'count date present in which row
      ccount=Browser("MakeMyTrip, India's No").Page("Cheap Air Tickets, Flight").WebTable("Su").ColumnCount(row)                              'count number of coloumn
         For i=1 to ccount
            CellData=Browser("MakeMyTrip, India's No").Page("Cheap Air Tickets, Flight").WebTable("Su").GetCellData(row,i)                    'show which cell is select in the date row 
                 If  CellData=idateval Then
                     Set iObj=Browser("MakeMyTrip, India's No").Page("Cheap Air Tickets, Flight").WebTable("Su").ChildItem(row,i,"Link",0)
                     iObj.Click
         Exit For
                 End If
         Next
    
    'Click on number of passenger
    a=datatable.Value("Passenger","Flight")
    For i = 1 To a-1
        Browser("MakeMyTrip, India's No").Page("Cheap Air Tickets, Flight").Link("+").Click	
    Next @@ hightlight id_;_Browser("MakeMyTrip, India's No").Page("Cheap Air Tickets, Flight").Link("+")_;_script infofile_;_ZIP::ssf9.xml_;_
      
    'Select class
    Browser("MakeMyTrip, India's No").Page("Cheap Air Tickets, Flight").WebList("select_class").Select datatable.Value("Class","Flight") @@ hightlight id_;_Browser("MakeMyTrip, India's No").Page("Cheap Air Tickets, Flight").WebList("select class")_;_script infofile_;_ZIP::ssf12.xml_;_
    
    'select airlience
    Browser("MakeMyTrip, India's No").Page("Cheap Air Tickets, Flight").WebList("select_class_2").Select datatable.Value("Airline","Flight")

    'Click on search button
    Browser("MakeMyTrip, India's No").Page("Cheap Air Tickets, Flight").Link("Search Flights").Click

    Browser("MakeMyTrip, India's No").Page("Flight Search").WebElement("IndiGo6E-129").Click

    'click on flight button
    Set object = Description.Create 
    object("micclass").value = "WebElement"
    object("html tag").value = "SPAN"
    object("class").value = "width80 smallfont"
    Set object=Browser("MakeMyTrip, India's No").Page("Flight Search").ChildObjects(object)
           For i = 1 To object.count 
               environment.Value("Link")=i 
               D_link=object(i).getroproperty("innertext")
               D_link1=trim(D_link)
               print D_link1
                  If D_link1=datatable.Value("Flightname","Flight") Then
                       Set object = Description.Create
                       object("micclass").value = "WebElement"
                       object("html tag").value = "A"
                       object("class").value = "btn btn_g"
                       Set object=Browser("MakeMyTrip, India's No").Page("Flight Search").ChildObjects(object)
                            For j = 1 To object.count
                                  var=object.count
                                  var1=var-1        'environment.Value("Link")
                                  var2=var-var1
                                      If var2=j Then
                                         object(j).click
                            Exit for   
                                      End if   
                            next             
           Exit for       
                  End if                      
           next

   'Booking part
   Browser("MakeMyTrip, India's No").Page("Flight Review").WebEdit("txtemail").Set datatable.Value("Email","Flight")
   Browser("MakeMyTrip, India's No").Page("Flight Review").WebElement("Continue, as a guest user").Click
   Browser("MakeMyTrip, India's No").Page("Flight Review").Link("Continue").Click
   
   'Passenger detalis
    
    Browser("MakeMyTrip, India's No").Page("Flight Review_2").WebEdit("tFirstName1").Set datatable.Value("L_name","Flight")
    Browser("MakeMyTrip, India's No").Page("Flight Review_2").WebEdit("tLastName1").Set datatable.Value("L_name","Flight")
    Browser("MakeMyTrip, India's No").Page("Flight Review_2").WebList("sTitle1").Select datatable.Value("Gender","Flight")
    Browser("MakeMyTrip, India's No").Page("Flight Review_2").WebEdit("sAge1").Set datatable.Value("Age","Flight")
    Browser("MakeMyTrip, India's No").Page("Flight Review_2").WebEdit("txtMobile").Set datatable.Value("Ph_number","Flight")
    Browser("MakeMyTrip, India's No").Page("Flight Review_2").WebCheckBox("aigTerms").Set "ON"
    Browser("MakeMyTrip, India's No").Page("Flight Review_2").Link("Continue").Click
    Browser("MakeMyTrip, India's No").Page("Flight Review_3").Link("Continue to Payment").Click

End if 

If environment.Value("Tour")="ROUND TRIP" Then

   'Select Source city
    
	Browser("MakeMyTrip, India's No").Page("Cheap Air Tickets, Flight").Link("ROUND TRIP").Click
    Browser("MakeMyTrip, India's No").Page("Cheap Air Tickets, Flight").WebEdit("WebEdit_2").Click
	  Set myDeviceReplay = CreateObject("Mercury.DeviceReplay")       
	  myDeviceReplay.SendString datatable.Value("Source","Flight")     
    
    'Select Destination city
    
    Browser("MakeMyTrip, India's No").Page("Cheap Air Tickets, Flight").WebEdit("WebEdit").Set "New Delhi, India (DEL)" @@ hightlight id_;_Browser("MakeMyTrip, India's No").Page("Cheap Air Tickets, Flight").WebEdit("WebEdit")_;_script infofile_;_ZIP::ssf4.xml_;_
      Set myDeviceReplay = CreateObject("Mercury.DeviceReplay")       
   	  myDeviceReplay.SendString datatable.Value("Source","Flight")     

    'Select departure date
	
    Browser("MakeMyTrip, India's No").Page("Cheap Air Tickets, Flight").Link("DEPARTURESelect Date28Apr").Click @@ hightlight id_;_Browser("MakeMyTrip, India's No").Page("Cheap Air Tickets, Flight").Link("DEPARTURESelect Date28Apr")_;_script infofile_;_ZIP::ssf5.xml_;_
      idate=datatable.Value("D_date","START")                                                                                                 'store the date from datatable
      idatevalue=Split(idate,"/")                                                                                                             'split the date
      idateval=Trim(idatevalue(1))                                                                                                            'get the date 
      row=Browser("MakeMyTrip, India's No").Page("Cheap Air Tickets, Flight").WebTable("Su").GetRowWithCellText(idateval)                     'count date present in which row
      ccount=Browser("MakeMyTrip, India's No").Page("Cheap Air Tickets, Flight").WebTable("Su").ColumnCount(row)                              'count number of coloumn
         For i=1 to ccount
            CellData=Browser("MakeMyTrip, India's No").Page("Cheap Air Tickets, Flight").WebTable("Su").GetCellData(row,i)                    'show which cell is select in the date row 
                 If  CellData=idateval Then
                     Set iObj=Browser("MakeMyTrip, India's No").Page("Cheap Air Tickets, Flight").WebTable("Su").ChildItem(row,i,"Link",0)
                     iObj.Click
         Exit For
                 End If
         Next
     
    'Select return date
	
    Browser("MakeMyTrip, India's No").Page("Cheap Air Tickets, Flight").Link("RETURNSelect Date02May").Click @@ hightlight id_;_Browser("MakeMyTrip, India's No").Page("Cheap Air Tickets, Flight").Link("DEPARTURESelect Date28Apr")_;_script infofile_;_ZIP::ssf5.xml_;_
      idate=datatable.Value("R_date","START")                                                                                                 'store the date from datatable
      idatevalue=Split(idate,"/")                                                                                                             'split the date
      idateval=Trim(idatevalue(1))                                                                                                            'get the date 
      row=Browser("MakeMyTrip, India's No").Page("Cheap Air Tickets, Flight").WebTable("Su").GetRowWithCellText(idateval)                     'count date present in which row
      ccount=Browser("MakeMyTrip, India's No").Page("Cheap Air Tickets, Flight").WebTable("Su").ColumnCount(row)                              'count number of coloumn
         For i=1 to ccount
            CellData=Browser("MakeMyTrip, India's No").Page("Cheap Air Tickets, Flight").WebTable("Su").GetCellData(row,i)                    'show which cell is select in the date row 
                 If  CellData=idateval Then
                     Set iObj=Browser("MakeMyTrip, India's No").Page("Cheap Air Tickets, Flight").WebTable("Su").ChildItem(row,i,"Link",0)
                     iObj.Click
         Exit For
                 End If
         Next 
   
    'Click number of passenger
    a=datatable.Value("Passenger","Flight")
      For i = 1 To a-1
          Browser("MakeMyTrip, India's No").Page("Cheap Air Tickets, Flight").Link("+").Click	
      Next
 @@ hightlight id_;_Browser("MakeMyTrip, India's No").Page("Cheap Air Tickets, Flight").Link("+")_;_script infofile_;_ZIP::ssf9.xml_;_
    'Select class
    Browser("MakeMyTrip, India's No").Page("Cheap Air Tickets, Flight").WebList("select_class").Select "Business" @@ hightlight id_;_Browser("MakeMyTrip, India's No").Page("Cheap Air Tickets, Flight").WebList("select class")_;_script infofile_;_ZIP::ssf12.xml_;_
    
    'Click on search button
    Browser("MakeMyTrip, India's No").Page("Cheap Air Tickets, Flight").Link("Search Flights").Click @@ hightlight id_;_Browser("MakeMyTrip, India's No").Page("Cheap Air Tickets, Flight").Link("2")_;_script infofile_;_ZIP::ssf6.xml_;_
 @@ hightlight id_;_Browser("MakeMyTrip, India's No").Page("Cheap Air Tickets, Flight").Link("Search Flights")_;_script infofile_;_ZIP::ssf13.xml_;_
   'Booking part
    Set object = Description.Create
    object("micclass").value = "WebElement"
    object("html tag").value = "A"
    object("class").value = "primirary_button"
    Set object=Browser("MakeMyTrip, India's No").Page("International Flights").ChildObjects(object)
         For j = 1 To object.count
             var=object.count
             var1=var-1
             var2=var-var1
                If var2=j Then
                     object(j).click
         Exit for 
                End If 
         next 
           
   
    Browser("MakeMyTrip, India's No").Page("International Flights").WebEdit("user.login").Set datatable.Value("Email","Flight")
    Browser("MakeMyTrip, India's No").Page("International Flights").WebRadioGroup("choose").Select "#0"
    Browser("MakeMyTrip, India's No").Page("International Flights").WebCheckBox("WebCheckBox").Set "ON"
    Browser("MakeMyTrip, India's No").Page("International Flights").WebElement("Continue").Click

    'Passenger detalis
    Browser("MakeMyTrip, India's No").Page("International Flights").WebList("fltTravllers[0].ftrTitle").Select "Mr."
    Browser("MakeMyTrip, India's No").Page("International Flights").WebEdit("fltTravllers[0].ftrFname").Set datatable.Value("F_name","Flight")
    Browser("MakeMyTrip, India's No").Page("International Flights").WebEdit("fltTravllers[0].ftrLastname").Set datatable.Value("L_name","Flight")
    Browser("MakeMyTrip, India's No").Page("International Flights").WebEdit("contactNumber2").Set datatable.Value("Ph_number","Flight")
    Browser("MakeMyTrip, India's No").Page("International Flights").WebElement("Continue_2").Click
    Browser("MakeMyTrip, India's No").Page("International Flights_2").WebElement("Continue").Click

End if

If tour="MULTI CITY / STOP OVER" Then
 
    'Select Source city
    
	Browser("MakeMyTrip, India's No").Page("Cheap Air Tickets, Flight").WebEdit("WebEdit_2").Click
	  Set myDeviceReplay = CreateObject("Mercury.DeviceReplay")       
	  myDeviceReplay.SendString datatable.Value("Source","Flight")     
    
    'Select Destination city
    
    Browser("MakeMyTrip, India's No").Page("Cheap Air Tickets, Flight").WebEdit("WebEdit").Click @@ hightlight id_;_Browser("MakeMyTrip, India's No").Page("Cheap Air Tickets, Flight").WebEdit("WebEdit")_;_script infofile_;_ZIP::ssf4.xml_;_
      Set myDeviceReplay = CreateObject("Mercury.DeviceReplay")       
   	  myDeviceReplay.SendString datatable.Value("Source","Flight")     

    'Select departure date
	
    Browser("MakeMyTrip, India's No").Page("Cheap Air Tickets, Flight").Link("28Apr '16Thu").Click @@ hightlight id_;_Browser("MakeMyTrip, India's No").Page("Cheap Air Tickets, Flight").Link("DEPARTURESelect Date28Apr")_;_script infofile_;_ZIP::ssf5.xml_;_
      idate=datatable.Value("D_date","Flight")                                                                                                 'store the date from datatable
      idatevalue=Split(idate,"/")                                                                                                             'split the date
      idateval=Trim(idatevalue(1))                                                                                                            'get the date 
      row=Browser("MakeMyTrip, India's No").Page("Cheap Air Tickets, Flight").WebTable("Su").GetRowWithCellText(idateval)                     'count date present in which row
      ccount=Browser("MakeMyTrip, India's No").Page("Cheap Air Tickets, Flight").WebTable("Su").ColumnCount(row)                              'count number of coloumn
         For i=1 to ccount
            CellData=Browser("MakeMyTrip, India's No").Page("Cheap Air Tickets, Flight").WebTable("Su").GetCellData(row,i)                    'show which cell is select in the date row 
                 If  CellData=idateval Then
                     Set iObj=Browser("MakeMyTrip, India's No").Page("Cheap Air Tickets, Flight").WebTable("Su").ChildItem(row,i,"Link",0)
                     iObj.Click
         Exit For
                 End If
         Next

    Browser("MakeMyTrip, India's No").Page("Cheap Air Tickets, Flight").Link("Add City").Click

    'Select departure date

    Browser("MakeMyTrip, India's No").Page("Cheap Air Tickets, Flight").Link("28Apr '16Thu_2").Click
      idate=datatable.Value("D_date","Flight")                                                                                                 'store the date from datatable
      idatevalue=Split(idate,"/")                                                                                                             'split the date
      idateval=Trim(idatevalue(1))                                                                                                            'get the date 
      row=Browser("MakeMyTrip, India's No").Page("Cheap Air Tickets, Flight").WebTable("Su").GetRowWithCellText(idateval)                     'count date present in which row
      ccount=Browser("MakeMyTrip, India's No").Page("Cheap Air Tickets, Flight").WebTable("Su").ColumnCount(row)                              'count number of coloumn
         For i=1 to ccount
            CellData=Browser("MakeMyTrip, India's No").Page("Cheap Air Tickets, Flight").WebTable("Su").GetCellData(row,i)                    'show which cell is select in the date row 
                 If  CellData=idateval Then
                     Set iObj=Browser("MakeMyTrip, India's No").Page("Cheap Air Tickets, Flight").WebTable("Su").ChildItem(row,i,"Link",0)
                     iObj.Click
         Exit For
                 End If
         Next
         
    'Select another Source city
    
	Browser("MakeMyTrip, India's No").Page("Cheap Air Tickets, Flight").WebEdit("WebEdit_3").Click
	  Set myDeviceReplay = CreateObject("Mercury.DeviceReplay")       
	  myDeviceReplay.SendString datatable.Value("Source","Flight")     
    
    'Select another Destination city
    
    Browser("MakeMyTrip, India's No").Page("Cheap Air Tickets, Flight").WebEdit("WebEdit_4").Click @@ hightlight id_;_Browser("MakeMyTrip, India's No").Page("Cheap Air Tickets, Flight").WebEdit("WebEdit")_;_script infofile_;_ZIP::ssf4.xml_;_
      Set myDeviceReplay = CreateObject("Mercury.DeviceReplay")       
   	  myDeviceReplay.SendString datatable.Value("Source","Flight")     
   
    'Click number of passenger
    
     a=datatable.Value("Passenger","Flight")
       For i = 1 To a-1
          Browser("MakeMyTrip, India's No").Page("Cheap Air Tickets, Flight").Link("+").Click	
       Next   
    
    'Select class
    Browser("MakeMyTrip, India's No").Page("Cheap Air Tickets, Flight").WebList("select_class").Select "Business" @@ hightlight id_;_Browser("MakeMyTrip, India's No").Page("Cheap Air Tickets, Flight").WebList("select class")_;_script infofile_;_ZIP::ssf12.xml_;_
    
    'Click on search button
    Browser("MakeMyTrip, India's No").Page("Cheap Air Tickets, Flight").Link("Search Flights").Click

    'Booking
    Set object = Description.Create
    object("micclass").value = "WebElement"
    object("html tag").value = "A"
    object("class").value = "primirary_button"
    Set object=Browser("MakeMyTrip, India's No").Page("International Flights").ChildObjects(object)
         For j = 1 To object.count
             var=object.count
             var1=var-1
             var2=var-var1
                If var2=j Then
                     object(j).click
         Exit for 
                End If 
         next 
  
    Browser("MakeMyTrip, India's No").Page("International Flights").WebEdit("user.login").Set datatable.Value("Email","Flight")
    Browser("MakeMyTrip, India's No").Page("International Flights").WebRadioGroup("choose").Select "#0"
    Browser("MakeMyTrip, India's No").Page("International Flights").WebCheckBox("WebCheckBox").Set "ON"
    Browser("MakeMyTrip, India's No").Page("International Flights").WebElement("Continue").Click

    'Passenger detalis
    Browser("MakeMyTrip, India's No").Page("International Flights").WebList("fltTravllers[0].ftrTitle").Select "Mr."
    Browser("MakeMyTrip, India's No").Page("International Flights").WebEdit("fltTravllers[0].ftrFname").Set datatable.Value("F_name","Flight")
    Browser("MakeMyTrip, India's No").Page("International Flights").WebEdit("fltTravllers[0].ftrLastname").Set datatable.Value("L_name","Flight")
    Browser("MakeMyTrip, India's No").Page("International Flights").WebEdit("contactNumber2").Set datatable.Value("Ph_number","Flight")
    Browser("MakeMyTrip, India's No").Page("International Flights").WebElement("Continue_2").Click
    Browser("MakeMyTrip, India's No").Page("International Flights_2").WebElement("Continue").Click

End if