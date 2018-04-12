If environment.Value("flight")="Hotels" Then
     Browser("Online Hotel Booking for").Page("Online Hotel Booking for").Link("Hotels").Click	
else
    exitaction
End If
      
'Click on the domastic/international flight

Set object = Description.Create
object("micclass").value = "link"
Set object=Browser("Online Hotel Booking for").Page("Online Hotel Booking for").ChildObjects(object)
    For i = 0 To object.count-1
        D_link=object(i).getroproperty("innertext")
        D_link1=trim(D_link)
           If D_link1=datatable.Value("Location","Hotels") Then
                    object(i).click                        
    Exit for          
              exitaction
           End if           
    next 

'Select city
Browser("Online Hotel Booking for").Page("Online Hotel Booking for").WebEdit("WebEdit").Click
Set myDeviceReplay = CreateObject("Mercury.DeviceReplay")       
myDeviceReplay.SendString datatable.Value("City","Hotels")     

'Select date
Browser("Online Hotel Booking for").Page("Online Hotel Booking for").Link("05May '16 Thu").Click
idate=datatable.Value("D_date","Flight")                                                                                                 'store the date from datatable
      idatevalue=Split(idate,"/")                                                                                                             'split the date
      idateval=Trim(idatevalue(1))                                                                                                            'get the date 
      row=Browser("Online Hotel Booking for").Page("Online Hotel Booking for").WebTable("Su").GetRowWithCellText(idateval)                     'count date present in which row
      ccount=Browser("Online Hotel Booking for").Page("Online Hotel Booking for").WebTable("Su").ColumnCount(row)                              'count number of coloumn
         For i=1 to ccount
            CellData=Browser("Online Hotel Booking for").Page("Online Hotel Booking for").WebTable("Su").GetCellData(row,i)                    'show which cell is select in the date row 
                 If  CellData=idateval Then
                     Set iObj=Browser("Online Hotel Booking for").Page("Online Hotel Booking for").WebTable("Su").ChildItem(row,i,"Link",0)
                     iObj.Click
         Exit For
                 End If
         Next

'Set number of night stay
a=datatable.Value("Days","Hotels")
Browser("Online Hotel Booking for").Page("Online Hotel Booking for").Link("1").SetTOProperty "text",cint(a)
Browser("Online Hotel Booking for").Page("Online Hotel Booking for").Link("1").Click

'Select days
b=datatable.Value("Passenger","Hotels")         
For i = 1 To b-1  Step 1
     Browser("Online Hotel Booking for").Page("Online Hotel Booking for").Link("+").Click	
Next
Browser("Online Hotel Booking for").Page("Online Hotel Booking for").WebButton("Search Hotels").Click

'Booking part

Set object = Description.Create
object("micclass").value = "link"
object("class").value = "btn btn-md pull-right hidden-xs btn-primary-red"
object("html tag").value = "A"
Set object=Browser("Hotels in Goa | Find 950").Page("Hotels in Goa | Find 950").ChildObjects(object) 
var=object.count  
j=1
var1=var-1        
var2=var-var1
   If var2=j Then
      object(j).click        
   End if     	
        
Set object = Description.Create
object("micclass").value = "link"
object("class").value = "btn btn-block btn-primary-red append_bottom4  detail-book-now ng-scope"
object("html tag").value = "A"
Set object=Browser("Online Hotel Booking for").Page("Estrela Do Mar Beach Resort").ChildObjects(object) 
var=object.count 
j=1
var1=var-1        
var2=var-var1
   If var2=j Then
      object(j).click        
   End if    
Browser("Online Hotel Booking for").Page("Online Hotel Booking for").Link("Continue as Guest").Click

'Passenger details

Browser("Online Hotel Booking for").Page("Online Hotel Booking for_2").WebList("select").Select datatable.Value("Title","Hotels")
Browser("Online Hotel Booking for").Page("Online Hotel Booking for_2").WebEdit("firstName").Set datatable.Value("F_name","Hotels")
Browser("Online Hotel Booking for").Page("Online Hotel Booking for_2").WebEdit("lastName").Set datatable.Value("L_name","Hotels")
Browser("Online Hotel Booking for").Page("Online Hotel Booking for_2").WebEdit("mobileNumber").Set datatable.Value("Ph_number","Hotels")
Browser("Online Hotel Booking for").Page("Online Hotel Booking for_2").WebEdit("email").Set datatable.Value("Email","Hotels")
Browser("Online Hotel Booking for").Page("Online Hotel Booking for_2").WebButton("Continue to Payment").Click  
