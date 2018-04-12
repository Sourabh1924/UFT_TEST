wait 10

'''''''''''''''''''''''''''''''''''''''''''''''''''''''''Select hotel'''''''''''''''''''''''''''''''''''''''''''''''''''''

    '''''''''''''''''''''''''''''''''Reporter
    fpass "Step-3","Booking Hotel page will open"
    report "Step-3","Booking Hotel page will open","PASS",time,date
    '''''''''''''''''''''''''''''''''''''''''

Click()

    '''''''''''''''''''''''''''''''''Reporter
    fpass "Step-4","Hotel will select"
    report "Step-4","Hotel will select","PASS",time,date
    '''''''''''''''''''''''''''''''''''''''''

'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
''''''''''''''''''''''''''''''''''''''''''''''''''''''''verification.......................................................

'''''''''''''''''''''''''''Number of journey days

checkin = datatable.Value("Checkin","Action1")
checkin2 = replace(checkin,"\","-")
MyDate = DateValue(checkin2)

checkout = datatable.Value("Checkout","Action1")
checkout2 = replace(checkout,"\","-")
MyDate1 = DateValue(checkout2)
fdate = datediff("d",MyDate,MyDate1)

'''''''''''''''''''''''''''''''''''''''''''''''''
''''''''''''''''''''''''''''''Total Price verification

'Price verification
Prize_val = Browser("City Centre Designer 1BHK").Page("City Centre Designer 1BHK").WebElement("₹3513").GetROProperty("innerhtml")
Prize_val1 = len(Prize_val)
fPrize_val = mid(Prize_val,2,Prize_val1)
Prize_val1 = cint(fdate) * cint(fPrize_val) 
price = Browser("City Centre Designer 1BHK").Page("City Centre Designer 1BHK").WebTable("₹3513 x 2 nights").GetCellData(1,2)
price1 = len(price)
fPrice = mid(price,2,price1)

If Prize_val1 = cint(fPrice) Then

	'''''''''''''''''''''''''''''''''Reporter
    report "Step-5","Per person price is verified","PASS",time,date
   '''''''''''''''''''''''''''''''''''''''''
   
End If

'Cleaning fees
clean_fee = Browser("City Centre Designer 1BHK").Page("City Centre Designer 1BHK").WebTable("₹3513 x 2 nights").GetCellData(2,2)
clean_fee1 = len(clean_fee)
fClean_fee = mid(clean_fee,2,clean_fee1)

'Service charge
Service_fee = Browser("City Centre Designer 1BHK").Page("City Centre Designer 1BHK").WebTable("₹3513 x 2 nights").GetCellData(3,2)
Service_fee1 = len(Service_fee)
fService_fee = mid(Service_fee,2,Service_fee1)

'Taxes
Tax = Browser("City Centre Designer 1BHK").Page("City Centre Designer 1BHK").WebTable("₹3513 x 2 nights").GetCellData(4,2)
Tax1 = len(Tax)
fTax = mid(Tax,2,Tax1)
Gtotal = int(fPrice) + int(fClean_fee) + int(fService_fee) + int(fTax)

'Total price of room
Total = Browser("City Centre Designer 1BHK").Page("City Centre Designer 1BHK").WebTable("₹3513 x 2 nights").GetCellData(5,2)
Total1 = len(Total)
Total2 = mid(Total,2,5)
fTotal = int(Total2)

If Gtotal = fTotal Then
	'''''''''''''''''''''''''''''''''Reporter
    fpass "Step-5","Total price verified"
    report "Step-6","Total price verified","PASS",time,date
   '''''''''''''''''''''''''''''''''''''''''
End If

''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

Browser("City Centre Designer 1BHK").Page("City Centre Designer 1BHK").WebButton("Request to Book").Click

systemutil.CloseProcessByName ("https://www.airbnb.co.in/")
