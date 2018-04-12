ColNums=DataTable.GetSheet("Action1").getparametercount
datatable.AddSheet("Sheet1")
For i = 1 To ColNums  Step 1
    ColName=DataTable.GetSheet("Action1").GetParameter(i).name
	datatable.GetSheet("Sheet1").AddParameter ColName , " " 
	row_cont=datatable.GetSheet("Action1").GetRowCount
	   For j = 1 To row_cont Step 1
	       val1=datatable.Value(ColName,"Action1")
	       datatable.GetSheet("Sheet1").SetCurrentRow(j)	       
	       datatable.Value(ColName,"Sheet1")=val1
	       datatable.GetSheet("Action1").SetNextRow
	   Next
	
Next