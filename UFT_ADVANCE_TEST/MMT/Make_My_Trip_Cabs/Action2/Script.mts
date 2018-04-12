
Dim Cab_book

If Counter="True" Then
	Cab_book = datatable.Value("Cab_book")
End If

Cab_book = "TRAVELLER_12"

wait 5
Set obj = description.Create
obj("micclass").value = "WebElement"
obj("class").value = "car lato-bold"
obj("html tag").value = "SPAN"
Set child_obj = Browser("MakeMyTrip").Page("MakeMyTrip").ChildObjects(obj)
For i = 0 To child_obj.count-1 Step 1

	If child_obj(i).getroproperty("innertext")=Cab_book Then
			
			Set obj1 = description.Create
			obj1("micclass").value = "WebElement"
			obj1("innerhtml").value = "SELECT CAB"
			Set Child_obj1 = Browser("MakeMyTrip").Page("MakeMyTrip").ChildObjects(obj1)
			For j = 1 To Child_obj1.count Step 1
				Child_obj1(i).highlight
				Child_obj1(i).click
				Exit for
			Next
			
	End If
Next
