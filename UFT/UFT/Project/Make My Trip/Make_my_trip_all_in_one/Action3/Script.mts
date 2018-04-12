If environment.Value("flight")="Bus" Then
	Browser("MakeMyTrip, India's No").Page("MakeMyTrip, India's No").WebElement("WebElement").Click
else
    exitaction
End If

'Select source city
Browser("MakeMyTrip, India's No").Page("Online Bus Ticket Booking,").WebEdit("WebEdit").Set datatable.Value("Source","bus")

'Select destination city
Browser("MakeMyTrip, India's No").Page("Online Bus Ticket Booking,").WebEdit("WebEdit_2").Set datatable.Value("Destination","bus")

'select date
Browser("MakeMyTrip, India's No").Page("Online Bus Ticket Booking,").WebElement("May '16 Mon").Click 
idate=datatable.Value("D_date","Bus")                                                                                                 'store the date from datatable
      idatevalue=Split(idate,"/")                                                                                                             'split the date
      idateval=Trim(idatevalue(1))                                                                                                            'get the date 
      row=Browser("MakeMyTrip, India's No").Page("Online Bus Ticket Booking,").WebTable("Su").GetRowWithCellText(idateval)                     'count date present in which row
      ccount=Browser("MakeMyTrip, India's No").Page("Online Bus Ticket Booking,").WebTable("Su").ColumnCount(row)                              'count number of coloumn
         For i=1 to ccount
            CellData=Browser("MakeMyTrip, India's No").Page("Online Bus Ticket Booking,").WebTable("Su").GetCellData(row,i)                    'show which cell is select in the date row 
                 If  CellData=idateval Then
                     Set iObj=Browser("MakeMyTrip, India's No").Page("Online Bus Ticket Booking,").WebTable("Su").ChildItem(row,i,"Link",0)
                     iObj.Click
         Exit For
                 End If
         Next
         
Browser("MakeMyTrip, India's No").Page("Online Bus Ticket Booking,").Link("Search Buses").Click

'Select bus
	
Set object = Description.Create
object("micclass").value = "Link"
object("class").value = "flL  primary_button_bus"
object("html tag").value = "A"
Set object=Browser("MakeMyTrip, India's No").Page("Online bus tickets booking").ChildObjects(object)
    For j = 1 To object.count
        D_link=object(i).getroproperty("innertext")
        var=object.count
        var1=var-1        
        var2=var-var1
           If var2=j Then
              object(j).click
    Exit for
           End if                  
    next 

'Select boarding point
Browser("MakeMyTrip, India's No").Page("Online bus tickets booking").WebList("select").Select datatable.Value("Boarding","Bus")

'Select seat
Set object = Description.Create
object("micclass").value = "Link"
object("class").value = "seatTooltip flL available lSeatInfo"
object("html tag").value = "A"
Set object=Browser("MakeMyTrip, India's No").Page("Online bus tickets booking").ChildObjects(object)
   For i = 1 To object.count-1 Step 1
       D_link=object(i).getroproperty("innertext")
       datatable.SetCurrentRow(i)
       datatable.Value("seat_no","Bus")=D_link
   Next
datatable.SetCurrentRow(1)   
seat=datatable.Value("Berth_number","Bus")
   For i = 1 To seat Step 1
      a=inputbox("Enter seat number=")
      Browser("MakeMyTrip, India's No").Page("Online bus tickets booking").Link("14").SetTOProperty "text",cint(a)
      datatable.SetNextRow
      Browser("MakeMyTrip, India's No").Page("Online bus tickets booking").Link("14").Click        
   Next
Browser("MakeMyTrip, India's No").Page("Online bus tickets booking").Link("Continue").Click

'Passenger details
Browser("MakeMyTrip, India's No").Page("Online bus tickets booking_2").WebEdit("FirstName_ADT_0").Set datatable.Value("Fname","Bus")
Browser("MakeMyTrip, India's No").Page("Online bus tickets booking").WebEdit("LastName_ADT_0").Set datatable.Value("Lname","Bus")
Browser("MakeMyTrip, India's No").Page("Online bus tickets booking").WebEdit("Email").Set datatable.Value("Email","Bus")
Browser("MakeMyTrip, India's No").Page("Online bus tickets booking").WebEdit("AGE_ADT_0").Set datatable.Value("Age","Bus")
Browser("MakeMyTrip, India's No").Page("Online bus tickets booking").WebEdit("phone_mobilenumber1").Set datatable.Value("Ph_number","Bus")
Browser("MakeMyTrip, India's No").Page("Online bus tickets booking").WebList("Title_ADT_0").Select datatable.Value("Title","Bus")
Browser("MakeMyTrip, India's No").Page("Online bus tickets booking").WebButton("Continue to Payment").Click
