'With function
Call multy(5,10)

Function multy(Num,Upto)
  k = 1
  even=1
  odd=1
    For i = 1 To Upto Step 1
       Table = Num*i
       print "Number= " &Num&" * "&i&" = "&Table
       datatable.SetCurrentRow(k)
       datatable.Value("Table","Global") = Table    
           k = k + 1
             If Table Mod 2 =0 Then
                 datatable.SetCurrentRow(even)
               	 datatable.value("Even","Action1")=Table
        	     even=even+1
             else
                 datatable.SetCurrentRow(odd)
                 datatable.value("Odd","Action1")=Table
                 odd=odd+1
             End If    
Next
	
End Function

'With out function

Upto = inputbox ("Enter upto number")
Num = inputbox ("Enter number")
  k = 1
  even=1
  odd=1
    For i = 1 To Upto Step 1
       Table = Num*i
       print "Number= " &Num&" * "&i&" = "&Table
       datatable.SetCurrentRow(k)
       datatable.Value("Table","Global") = Table    
           k = k + 1
             If Table Mod 2 =0 Then
                 datatable.SetCurrentRow(even)
               	 datatable.value("Even","Action1")=Table
        	     even=even+1
             else
                 datatable.SetCurrentRow(odd)
                 datatable.value("Odd","Action1")=Table
                 odd=odd+1
             End If
     next
     