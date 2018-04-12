'row_cnt = Browser("Book Bilaspur to Nagpur").Page("Book Bilaspur to Nagpur").WebTable("Train Name").RowCount
'
'For i = 4 To row_cnt Step 1
'	count = Browser("Book Bilaspur to Nagpur").Page("Book Bilaspur to Nagpur").WebTable("Train Name").GetCellData(i,1)
'	print count
'	If  lcase(mid(count,11))="hwh mumbai mail" Then
'		Set Check_obj = Browser("Book Bilaspur to Nagpur").Page("Book Bilaspur to Nagpur").WebTable("Train Name").ChildItem(i,6,"Image",1)
'		Check_obj.click
'	End If
'Next



Set obj1 = description.Create
obj1("micclass").value = "WebElement"
obj1("class").value = "flt-left"
obj1("html tag").value = "DIV"	
obj1("visible").value = "True"
obj1("height").value = "12"
Set childobj1 = Browser("Book Bilaspur to Nagpur").Page("Book Bilaspur to Nagpur").ChildObjects(obj1)
For i = 0 To childobj1.count-1 Step 1

		If ucase(childobj1(i).getroproperty("innertext"))="HWH MUMBAI MAIL" Then
				childobj1(i).highlight
				Set obj = description.Create
				obj("file name").value = "check-status.gif"
				obj("visible").value = "True" 
				Set childobj = Browser("Book Bilaspur to Nagpur").Page("Book Bilaspur to Nagpur").ChildObjects(obj)
					For j = 0 To childobj.count-1 Step 1
						childobj(i).highlight
						childobj(i).click
						Set obj2 = description.Create
						obj2("html tag").value = "SPAN"   
						obj2("class").value = "AVL book yui-tip" 
						Set childobj2 = Browser("Book Bilaspur to Nagpur").Page("Book Bilaspur to Nagpur").ChildObjects(obj2)
							For k = 0 To childobj2.count-1 Step 1
								childobj2(i).highlight
								str = childobj2(i).getroproperty("innertext")
								If mid(str,1,9)="Available" Then
										Set obj3 = description.Create   
										obj3("file name").value = "book-single.gif"
										obj3("visible").value = "True" 
										Set childobj3 = Browser("Book Bilaspur to Nagpur").Page("Book Bilaspur to Nagpur").ChildObjects(obj3)
											For l = 0 To childobj3.count-1 Step 1
												childobj3(i).highlight
												childobj3(i).click
												Exit for
											Next
								End If

							Next
					Next
		End If
	
Next
