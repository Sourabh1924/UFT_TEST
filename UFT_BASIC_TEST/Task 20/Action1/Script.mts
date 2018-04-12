'Copying the data from one column to a new column with a new name.

DataTable.GetSheet("Global").AddParameter "name","amit"    
datatable.GetSheet("Global").SetCurrentRow(2)
datatable.Value("name","Global")="sourabh"
datatable.GetSheet("Global").SetCurrentRow(3)
datatable.Value("name","Global")="chayan"
datatable.GetSheet("Global").SetCurrentRow(4)
datatable.Value("name","Global")="venki"
cnt=datatable.GetRowCount()
For i=1 to cnt
    DataTable.SetCurrentRow(i)
    oldval=DataTable.Value("name","Global")
    DataTable.Value("old","Global")=oldval
Next
