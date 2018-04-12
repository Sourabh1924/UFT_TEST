Browser("Online Bus Ticket Booking,").Page("Online Bus Ticket Booking,").Link("bus").Click

Browser("Online Bus Ticket Booking,").Page("Online Bus Ticket Booking,").WebEdit("WebEdit").Set "Delhi"
Browser("Online Bus Ticket Booking,").Page("Online Bus Ticket Booking,").WebEdit("WebEdit_2").Set "Bangalore"
Browser("Online Bus Ticket Booking,").Page("Online Bus Ticket Booking,").WebEdit("WebEdit_3").Click

row = Browser("Online Bus Ticket Booking,").Page("Online Bus Ticket Booking,").WebTable("Mon").GetRowWithCellText(25)
col = Browser("Online Bus Ticket Booking,").Page("Online Bus Ticket Booking,").WebTable("Mon").ColumnCount(row)
For i = 1 To col Step 1
	data = Browser("Online Bus Ticket Booking,").Page("Online Bus Ticket Booking,").WebTable("Mon").GetCellData(row,i)
	If data="25" Then
		set obj = Browser("Online Bus Ticket Booking,").Page("Online Bus Ticket Booking,").WebTable("Mon").ChildItem(row,i,"WebElement",0)
		obj.click
		Exit for
	End If
Next


Browser("Online Bus Ticket Booking,").Page("Online Bus Ticket Booking,").WebButton("Search").Click

Set obj = description.Create
obj("micclass").value = "WebElement"
obj("class").value = "inlineB seat_available"
Set childobj = Browser("Online Bus Ticket Booking,").Page("Online Bus Ticket Booking").ChildObjects(obj)
print childobj.count
For i = 1 To childobj.count Step 1
	print childobj(i).getroproperty("class")
Next




