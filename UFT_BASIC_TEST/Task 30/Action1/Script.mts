'Print column name line by line.

ColNums=DataTable.GetSheet("Global").getparametercount
For i=1 to ColNums
ColName=DataTable.GetSheet("Global").GetParameter(i).name
print ColName
Next
