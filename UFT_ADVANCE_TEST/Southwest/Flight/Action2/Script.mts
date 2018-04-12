Travelling_type = "Non stop"
Flight_type = "Anytime"

Set PagObj = Browser("Southwest Airlines - Select").Page("Southwest Airlines - Select")
Set TabObj = Browser("Southwest Airlines - Select").Page("Southwest Airlines - Select").WebTable("Depart Flights are sorted")

If Travelling_type = "Non stop" Then
	Browser("Southwest Airlines - Select").Page("Southwest Airlines - Select").WebCheckBox("nonstopFilter").Set	"ON"
else
	Browser("Southwest Airlines - Select").Page("Southwest Airlines - Select").WebCheckBox("directFilter").Set "ON"
End If

For i = 2 To Browser("Southwest Airlines - Select").Page("Southwest Airlines - Select").WebTable("Depart Flights are sorted").RowCount Step 1
	
	Call Book_flight(PagObj,Flight_type,TabObj)
	
Next




Function Attribute_title(PagObj,Flight_type)

	Set obj = description.Create
			obj("class").value = "wcm_upsell_drawer_attribute_title"   
			obj("visible").value = "True"
			Set child_obj = PagObj.ChildObjects(obj)
				For k = 0 To child_obj.count Step 1
					name = child_obj(k).getroproperty("innertext")		
					If name=Flight_type&"®" Then
						
					else
					
					End If
				Next
				
End Function

Function Book_flight(PagObj,Flight_type,TabObj)

	str = TabObj.GetCellData(i,7)	
	set obj = TabObj.ChildItem(i,7,"WebElement",0)
	obj.click
		If Flight_type = "Business Select" or Flight_type = "Wanna Get Away" Then
				
				Call Attribute_title(PagObj,Flight_type)
		
		else
		
				Call Fare_title(PagObj,Flight_type)
		
		End If

End Function

Function Fare_title(PagObj,Flight_type)
	
	Set obj = description.Create
			obj("class").value = "wcm_upsell_drawer_fare_title"   
			obj("visible").value = "True"
			Set child_obj = PagObj.ChildObjects(obj)
				For k = 0 To child_obj.count Step 1
					name = child_obj(k).getroproperty("innertext")		
					If name=Flight_type Then
						
					End If
				Next
				
End Function
