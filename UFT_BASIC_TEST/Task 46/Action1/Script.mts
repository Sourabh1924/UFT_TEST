'Take number from excel sheet and find the number is even or not.

datatable.ImportSheet "d:\sou.xls","Sheet2","Action1"
a=datatable.GetSheet("Action1").GetRowCount
datatable.AddSheet("evensheet")
datatable.AddSheet("oddsheet")
datatable.GetSheet("evensheet").AddParameter"Even",""
datatable.GetSheet("oddsheet").AddParameter"Odd",""
j=1
k=1
For i = 1 To a Step 1
    If i Mod 2 =0 Then
                  
              datatable.GetSheet("evensheet").SetCurrentRow(j)
              datatable.Value("Even","evensheet")=i
     j=j+1
     else
               
              datatable.GetSheet("oddsheet").SetCurrentRow(k)
              datatable.Value("Odd","oddsheet")=i
    k=k+1
    End If
Next
