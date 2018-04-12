ColNums=DataTable.GetSheet(dtGlobalSheet).getparametercount
   For i=1 to ColNums
       ColName=DataTable.GetSheet(dtGlobalSheet).GetParameter(i).Name
          If ColName = "Data" Then
              print "Colume name :- "&ColName
          	  cnt = datatable.GetRowCount
          	      For j = 1 To cnt Step 1
          	      	  Col_val = DataTable.GetSheet(dtGlobalSheet).GetParameter(i).ValueByRow(j)
          	      	  print "Colume value :- "&Col_val&" in colume name "&ColName
          	      Next
          End If
Next

'aaaaaaaaaaaaaaaaaaaaaaaaaaa           aaaaaaaaaaaaaaaaaaaaaaaaaaa
' aaaaaaaaaaaaaaaaaaaaaaaaaaa         aaaaaaaaaaaaaaaaaaaaaaaaaaa
'  aaaaaaaaaaaaaaaaaaaaaaaaaaa       aaaaaaaaaaaaaaaaaaaaaaaaaaa
'   aaaaaaaaaaaaaaaaaaaaaaaaaaa     aaaaaaaaaaaaaaaaaaaaaaaaaaa
'    aaaaaaaaaaaaaaaaaaaaaaaaaaa   aaaaaaaaaaaaaaaaaaaaaaaaaaa
'     aaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaa
'    aaaaaaaaaaaaaaaaaaaaaaaaaaa   aaaaaaaaaaaaaaaaaaaaaaaaaaa
'   aaaaaaaaaaaaaaaaaaaaaaaaaaa     aaaaaaaaaaaaaaaaaaaaaaaaaaa
'  aaaaaaaaaaaaaaaaaaaaaaaaaaa		aaaaaaaaaaaaaaaaaaaaaaaaaaa
' aaaaaaaaaaaaaaaaaaaaaaaaaaa  		 aaaaaaaaaaaaaaaaaaaaaaaaaaa
'aaaaaaaaaaaaaaaaaaaaaaaaaaa		  aaaaaaaaaaaaaaaaaaaaaaaaaaa

