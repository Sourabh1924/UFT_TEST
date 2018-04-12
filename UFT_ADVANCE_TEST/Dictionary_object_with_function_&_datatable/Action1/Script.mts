Call obj_call(datatable.Value("Key",global),datatable.Value("Item",global),"dict")


Function obj_call(Key,Item,object)
	Set object = createobject("Scripting.Dictionary")
    row_count = datatable.GetRowCount
       For x = 0 To row_count-1
           object.Add Key,Item
           Items_var = object.Items
           Key_var = object.Keys
              For i = 0 To object.Count-1
                  print Key_var(x) & " : " & Items_var(x) 
              Exit for
              Next
              datatable.SetNextRow
       Next
End Function

