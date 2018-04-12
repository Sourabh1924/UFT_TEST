'Take input n numbers  and find out odd and even  and print in different column.

datatable.GetSheet("Action1").AddParameter"even",""
datatable.GetSheet("Action1").AddParameter"odd",""
a=inputbox("Enter numbers")
z=Split(a,",")
For  i= 0 to UBound(z)
If z(i) Mod 2 =0 Then
              j=j+1    
              datatable.GetSheet("Action1").SetCurrentRow(j)
              datatable.Value("even","Action1")=z(i)
     else
              k=k+1 
              datatable.GetSheet("Action1").SetCurrentRow(k)
              datatable.Value("odd","Action1")=z(i)
    End If
Next
