'Print 1-100 even and odd number in column wise.

datatable.GlobalSheet.AddParameter"even",""
datatable.GlobalSheet.AddParameter"odd",""
For i = 1 To 100 Step 1
    If i Mod 2 =0 Then
                j=j+1  
              datatable.GetSheet("Global").SetCurrentRow(j)
              datatable.Value("even","Global")=i
     else
              k=k+1 
              datatable.GetSheet("Global").SetCurrentRow(k)
              datatable.Value("odd","Global")=i
    End If
Next
