'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

login("http://www.oyorooms.com/")

'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''Journey details''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

If Browser("Hotel Booking India, Branded").Page("Hotel Booking India, Branded").WebEdit("location").Exist Then
   Browser("Hotel Booking India, Branded").Page("Hotel Booking India, Branded").WebEdit("location").Set datatable.Value("Location",Global)
End If

'Checkin date
Browser("Hotel Booking India, Branded").Page("Hotel Booking India, Branded").WebEdit("Check-in date").Click
idate=datatable.Value("Checkin",Global)                                                                                                 'store the date from datatable
      idatevalue = Split(idate,"/")                                                                                                             'split the date
      idateval = Trim(idatevalue(1))                                                                                                            'get the date 
      row = Browser("Hotel Booking India, Branded").Page("Hotel Booking India, Branded").WebTable("Su").GetRowWithCellText(idateval)                     'count date present in which row
      ccount = Browser("Hotel Booking India, Branded").Page("Hotel Booking India, Branded").WebTable("Su").ColumnCount(row)                              'count number of coloumn
         For i = 1 to ccount
            CellData = Browser("Hotel Booking India, Branded").Page("Hotel Booking India, Branded").WebTable("Su").GetCellData(row,i)                    'show which cell is select in the date row 
                 If  CellData = idateval Then
                     Set iObj = Browser("Hotel Booking India, Branded").Page("Hotel Booking India, Branded").WebTable("Su").ChildItem(row,i,"Link",0)
                     iObj.Click
         Exit For
                 End If
         Next

'Checkout date
Browser("Hotel Booking India, Branded").Page("Hotel Booking India, Branded").WebEdit("Check-out date").Click
idatevalue = Split(idate,"/")                                                                                                             'split the date
      idateval = Trim(idatevalue(1))                                                                                                            'get the date 
      row = Browser("Hotel Booking India, Branded").Page("Hotel Booking India, Branded").WebTable("Su").GetRowWithCellText(idateval)                     'count date present in which row
      ccount = Browser("Hotel Booking India, Branded").Page("Hotel Booking India, Branded").WebTable("Su").ColumnCount(row)                              'count number of coloumn
         For i = 1 to ccount
            CellData = Browser("Hotel Booking India, Branded").Page("Hotel Booking India, Branded").WebTable("Su").GetCellData(row,i)                    'show which cell is select in the date row 
                 If  CellData = idateval Then
                     Set iObj = Browser("Hotel Booking India, Branded").Page("Hotel Booking India, Branded").WebTable("Su").ChildItem(row,i,"Link",0)
                     iObj.Click
         Exit For
                 End If
         Next


'Number of Guests
For i = 1 To datatable.Value("Guests",Global) - 1 Step 1
	Browser("Hotel Booking India, Branded").Page("Hotel Booking India, Branded").WebButton("WebButton_2").Click	  	  
Next

'Number of Rooms
If datatable.Value("Guests",Global) > 1 Then
	  For j = 1 To datatable.Value("Rooms",Global) - 1 Step 1 
	      Browser("Hotel Booking India, Branded").Page("Hotel Booking India, Branded").WebButton("WebButton_3").Click
      Next
End If

Browser("Hotel Booking India, Branded").Page("Hotel Booking India, Branded").WebButton("Search").Click

wait 10

'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''Hotel booking'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

'Click on Hotel 
Set object = Description.Create
object("micclass").value = "Link"
object("class").value = "ember-view"    
object("target").value = "_blank"  
Set object1=Browser("Hotel Booking India, Branded").Page("OYO Rooms: 23 Properties").ChildObjects(object)
    For i = 0 To object1.count-1
        D_link=object1(i).getroproperty("innertext")
        D_link1 = trim(D_link)
        D_link1 = split(D_link1,"... ")           
        D_link2 = trim(D_link1(1))
        D_link2 = split(D_link2," ₹ ")           
        D_link3 = trim(D_link2(0))
           If D_link3 = datatable.Value("Place",Global) Then
           	  object1(i).click  
    Exit for 
           End If
    next 

cols = Browser("OYO Apartments Chatrapati").Page("OYO Apartments Chatrapati").WebTable("Room # Guests Tariff amount").GetROProperty("cols")
rows = Browser("OYO Apartments Chatrapati").Page("OYO Apartments Chatrapati").WebTable("Room # Guests Tariff amount").GetROProperty("rows")
For i = 1 To cols Step 1
	For j = 2 To rows Step 1
		 val = Browser("OYO Apartments Chatrapati").Page("OYO Apartments Chatrapati").WebTable("Room # Guests Tariff amount").GetCellData(j,i)
		 val = split(val," ")
		 val1 = trim(val(5))
		 datatable.Value("Price",Global) = val1
		 datatable.SetCurrentRow(j)
	Next
Next
 
'Adding the price 
row_cnt = datatable.GetRowCount
For i = 1 To row_cnt Step 1	
    datatable.SetCurrentRow(i)
	add = datatable.Value("Price")	
	price = cint(price) + cint(add)
Next

total_price = Browser("OYO Apartments Chatrapati").Page("OYO Premium MIDC Butibori").WebTable("Total for 2 Rooms, 3 Guests").GetROProperty("column names")
total_price = split(total_price,";")
total_price1 = trim(total_price(1))

If total_price1 = price Then
	
End If

'Feature
Set object = Description.Create
object("micclass").value = "WebElement"
object("class").value = "aboutHotel__amenities__wrap__li"    
Set object1=Browser("OYO Apartments Chatrapati").Page("OYO Rooms Railway Station").ChildObjects(object)
    For i = 0 To object1.count-1
        datatable.SetCurrentRow(i)
        D_link=object1(i).getroproperty("innertext")
        datatable.Value("Feature","Action1") = D_link
    next 


Browser("OYO Apartments Chatrapati").Page("OYO Premium MIDC Butibori").WebButton("BOOK NOW").Click

'Passenger details
If Browser("OYO Apartments Chatrapati").Page("OYO Premium MIDC Butibori").WebEdit("name").Exist Then
   Browser("OYO Apartments Chatrapati").Page("OYO Premium MIDC Butibori").WebEdit("name").Set datatable.Value("Name",Global)
End If

If Browser("OYO Apartments Chatrapati").Page("OYO Premium MIDC Butibori").WebEdit("phone").Exist Then
   Browser("OYO Apartments Chatrapati").Page("OYO Premium MIDC Butibori").WebEdit("phone").Set datatable.Value("Phone",Global)
End If

If Browser("OYO Apartments Chatrapati").Page("OYO Premium MIDC Butibori").WebEdit("email").Exist Then
   Browser("OYO Apartments Chatrapati").Page("OYO Premium MIDC Butibori").WebEdit("email").Set datatable.Value("Email",Global)
End If

'Payment details
If "pay now" = datatable.Value("Payment_option") Then
   Browser("OYO Apartments Chatrapati").Page("OYO Premium MIDC Butibori").WebButton("pay now").Click

   If Browser("OYO Apartments Chatrapati").Page("OYO Premium MIDC Butibori").WebElement("Net Banking").Exist Then
      Browser("OYO Apartments Chatrapati").Page("OYO Premium MIDC Butibori").WebElement("Net Banking").Click
   End If

   If Browser("OYO Apartments Chatrapati").Page("Paytm Secure Online Payment").WebList("select").Exist Then
      Browser("OYO Apartments Chatrapati").Page("Paytm Secure Online Payment").WebList("select").Select datatable.Value("Bank",Global)
   End If

   Browser("OYO Apartments Chatrapati").Page("Paytm Secure Online Payment").WebButton("Pay now").Click
End If

If True Then
	
End If




'GetScriptEngineInfo()
'Function GetScriptEngineInfo
'   Dim s
'   s = ""   ' Build string with necessary info.
'   s = ScriptEngine & " Version "
'   s = s & ScriptEngineMajorVersion & "."
'   s = s & ScriptEngineMinorVersion & "."
'   s = s & ScriptEngineBuildVersion 
'   GetScriptEngineInfo = s   ' Return the results.
'End Function





