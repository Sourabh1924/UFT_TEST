'Print same name 10 times by using loop.

datatable.GetSheet("Global").AddParameter "NAME","sam"
For i = 1 To 10 step 1
datatable.GetSheet("Global").SetCurrentRow(i)
datatable.Value("NAME",Global)="sam"
Next
