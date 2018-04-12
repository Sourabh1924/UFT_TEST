If environment.Value("flight")="Trains" Then
	Browser("MakeMyTrip, India's No").Page("MakeMyTrip, India's No").WebElement("WebElement").Click
else
    exitaction
End If

'Select Source city
    
Browser("MakeMyTrip, India's No").Page("IRCTC Train Reservation").WebEdit("WebEdit").Click
 Set myDeviceReplay = CreateObject("Mercury.DeviceReplay")       
 myDeviceReplay.SendString datatable.Value("Source","Train")     
    
wait 2
    
'Select Destination city
    
Browser("MakeMyTrip, India's No").Page("IRCTC Train Reservation").WebEdit("WebEdit_2").Click @@ hightlight id_;_Browser("MakeMyTrip, India's No").Page("Cheap Air Tickets, Flight").WebEdit("WebEdit")_;_script infofile_;_ZIP::ssf4.xml_;_
 Set myDeviceReplay1 = CreateObject("Mercury.DeviceReplay")       
 myDeviceReplay1.SendString datatable.Value("Destination","Train")     

'Select date

Browser("MakeMyTrip, India's No").Page("IRCTC Train Reservation").Link("DEPARTURE02May '16Mon").Click
idate=datatable.Value("D_date","Train")                                                                                                 'store the date from datatable
      idatevalue=Split(idate,"/")                                                                                                             'split the date
      idateval=Trim(idatevalue(1))                                                                                                            'get the date 
      row=Browser("MakeMyTrip, India's No").Page("IRCTC Train Reservation").WebTable("Su").GetRowWithCellText(idateval)                     'count date present in which row
      ccount=Browser("MakeMyTrip, India's No").Page("IRCTC Train Reservation").WebTable("Su").ColumnCount(row)                              'count number of coloumn
         For i=1 to ccount
            CellData=Browser("MakeMyTrip, India's No").Page("IRCTC Train Reservation").WebTable("Su").GetCellData(row,i)                    'show which cell is select in the date row 
                 If  CellData=idateval Then
                     Set iObj=Browser("MakeMyTrip, India's No").Page("IRCTC Train Reservation").WebTable("Su").ChildItem(row,i,"Link",0)
                     iObj.Click
         Exit For
                 End If
         Next

'select class

Browser("MakeMyTrip, India's No").Page("IRCTC Train Reservation").WebList("select_class").Select datatable.Value("Class","Train")
Browser("MakeMyTrip, India's No").Page("IRCTC Train Reservation").Link("Search Trains").Click

'Booking part
Browser("MakeMyTrip, India's No").Page("Book Raipur to Nagpur").WebElement("12810RouteHWH MUMBAI MAIL").Click

Set object = Description.Create
object("micclass").value = "WebElement"
object("class").value = "text-spacing flt-left"
object("html tag").value = "DIV"
Set object=Browser("MakeMyTrip, India's No").Page("Book Raipur to Nagpur").ChildObjects(object)
     For i = 0 To object.count-1
        count=object.count-1
        D_link=object(i).getroproperty("outertext")
        If D_link ="" Then
        
        Else
           For k = 0 To i Step 1
               a=len(D_link)
               u=instrrev(D_link,"R")
               sou=u-a
               D_link1=left(D_link,u-1)
               print D_link1
               environment.Value("Link")=i        	
           Next
        End If
          If D_link1=datatable.Value("Train_number","Train") Then
              Set object = Description.Create
              object("micclass").value = "Image"
              object("class").value = "booking"
              Set object=Browser("MakeMyTrip, India's No").Page("Book Raipur to Nagpur").ChildObjects(object)
                  For j = 1 To object.count
                        D_link=object(i).getroproperty("alt")
                        var=object.count
                        var1=var-environment.Value("Link")        
                        var2=var-var1
                           If var2=j Then
                                 object(j).click
                  Exit for
                           End if                  
                  next  
           End if           
     next 

'Passenger details
Browser("MakeMyTrip, India's No").Page("Book Raipur to Nagpur").WebList("noOfAdult").Select datatable.Value("Adult","Train")
Browser("MakeMyTrip, India's No").Page("Book Raipur to Nagpur").Image("Continue").Click
Browser("MakeMyTrip, India's No").Page("Railway Reservation |").WebEdit("adultsOnward[0].name").Set datatable.Value("Name","Train")
Browser("MakeMyTrip, India's No").Page("Railway Reservation |").WebList("adultsOnward[0].sex").Select datatable.Value("Sex","Train")
Browser("MakeMyTrip, India's No").Page("Railway Reservation |").WebList("adultsOnward[0].age").Select datatable.Value("Age","Train")
Browser("MakeMyTrip, India's No").Page("Railway Reservation |").WebList("adultsOnward[0].berthPref").Select datatable.Value("Berth","Train")
Browser("MakeMyTrip, India's No").Page("Railway Reservation |").WebList("adultsOnward[0].passengerNatio").Select datatable.Value("P_nation","Train")
Browser("MakeMyTrip, India's No").Page("Railway Reservation |").WebEdit("emailId").Set datatable.Value("Email","Train")
Browser("MakeMyTrip, India's No").Page("Railway Reservation |").WebEdit("mobileNumber").Set datatable.Value("Ph_number","Train")
Browser("MakeMyTrip, India's No").Page("Railway Reservation |").WebEdit("userId").Set datatable.Value("IRCTC_ID","Train")
Browser("MakeMyTrip, India's No").Page("Railway Reservation |").Image("Submit").Click
