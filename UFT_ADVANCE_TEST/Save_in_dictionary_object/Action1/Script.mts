'===============================================================
'===============================================================
'Store the value in dictionaryObj and print those value
Cnt = datatable.GetRowCount
Set dictionaryObj = CreateObject("Scripting.Dictionary")
'Store value
For i = 1 To Cnt Step 1
     datatable.SetCurrentRow(i)
     dictionaryObj.Add i,datatable.Value("Name")	
Next
'Print value
for each k in dictionaryObj.Keys
	print k &" - "& dictionaryObj.Item(k)
next
Set dictionaryObj = Nothing
'===============================================================
'===============================================================
'CompareMode 1 use for binary and 0 for textual
Set dictionaryObj = CreateObject("Scripting.Dictionary")
dictionaryObj.CompareMode = 1
dictionaryObj.Add "a","sourabh"
dictionaryObj.Add "b","sourabh"
dictionaryObj.Add "c","sourabh"
dictionaryObj.Add "A","sourabh"
'Print value
for each k in dictionaryObj.Keys
	print k &" - "& dictionaryObj.Item(k)
next
Set dictionaryObj = Nothing
'===============================================================
'===============================================================
'Store the value from datatable in array then save in dictionaryObj and print those value
Set dictionaryObj = CreateObject("Scripting.Dictionary")
arr = array(1)
cnt = datatable.GetRowCount
ReDim preserve arr(cnt)
'Store value from datatable in array
For i = 0 To cnt-1 Step 1
	datatable.SetCurrentRow(i)
	arr(i) = datatable.Value("Name")
Next
'Save value from array in dictionary 
For i = 0 To ubound(arr) Step 1
    dictionaryObj.Add i,arr(i)
Next
'Print value
for each k in dictionaryObj.Keys
	print k &" - "& dictionaryObj.Item(k)
next
Set dictionaryObj = Nothing
'===============================================================
'===============================================================
'Change the value of a particular key and match both the value
Set dictionaryObj = CreateObject("Scripting.Dictionary")
Cnt = datatable.GetRowCount
For i = 1 To Cnt Step 1
     datatable.SetCurrentRow(i)
     dictionaryObj.Add idatatable.Value("Name")	
Next
'Change the key value
If dictionaryObj.Exists(5) Then
   dictionaryObj.Item(5) = "Sam"
End If
'Store the value in datatable
for each k in dictionaryObj.Keys
    datatable.SetCurrentRow(k)
    datatable.Value("New_name") = dictionaryObj.Item(k)
next
'Match both the value
For i = 1 To Cnt Step 1
	datatable.SetCurrentRow(i)
	If datatable.Value("Name") = datatable.Value("New_name") Then
	
	else
	     print "First name "&datatable.Value("Name")& " is not match with second name "&datatable.Value("New_name")&" ."
	End If
Next
Set dictionaryObj = Nothing
'===============================================================
'===============================================================
'Search item by key value and update that value
Set dictionaryObj = CreateObject("Scripting.Dictionary")
Cnt = datatable.GetRowCount
For i = 1 To Cnt Step 1
     datatable.SetCurrentRow(i)
     dictionaryObj.Add i,datatable.Value("Name")	
Next
'Update particuler key value
For i = 0 To ubound(dictionaryObj.Keys) Step 1
        dictionaryObj.Key(5)
	If dictionaryObj.Exists(3) Then
	   dictionaryObj.Item(3) = "Amit" 	
	End If	
Next
Set dictionaryObj = Nothing
'===============================================================
'===============================================================
'Using 2 action in dictionary Object
Set dictionaryObj = CreateObject("Scripting.Dictionary")
Cnt = datatable.GetRowCount
For i = 1 To Cnt Step 1
     datatable.SetCurrentRow(i)
     dictionaryObj.Add i,datatable.Value("Name")	
Next
'Call another action to print items in dictionary Object
RunAction "Action2", oneIteration
