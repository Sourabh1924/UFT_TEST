'Call obj("Name","Sourabh","Dist")
'
'
'Call obj("Name","Ankit","Dist")


Set Obj_name = CreateObject("Scripting.Dictionary")



For i = 0 To 10 Step 1
	Obj_name.Add datatable.Value("username"),i
	
Next

