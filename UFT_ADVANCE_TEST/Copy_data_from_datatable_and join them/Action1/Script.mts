row_cnt = datatable.GetRowCount
k = row_cnt + 1 
For i = 1 To row_cnt Step 1
    datatable.SetCurrentRow(i)
	val1 = datatable.Value("NUMBER1")
	datatable.Value("Number","Action1") = val1	
	   If i = row_cnt Then
		  For j = 1 To row_cnt  Step 1
		      datatable.SetCurrentRow(j)
              val2 = datatable.Value("NUMBER2")
              datatable.SetCurrentRow(k)
	          datatable.Value("Number","Action1") = val2
	          k = k + 1	       
	      next	
	   End If	   
Next
n=1
m=1
row_cnt = datatable.GetSheet("Action1").GetRowCount
For l = 1 To row_cnt Step 1
  datatable.SetCurrentRow(l)
  val1 = datatable.Value("Number","Action1")
	 If val1 Mod 2 =0  Then
	    datatable.SetCurrentRow(m)
		datatable.Value("EVEN") = val1
		m = m + 1
	else
  	    datatable.SetCurrentRow(n)
		datatable.Value("ODD") = val1
		n = n + 1
	End If
Next

	
	
	
	