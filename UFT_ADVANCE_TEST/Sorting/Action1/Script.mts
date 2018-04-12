'Bubble Sorting array in descending order.

str = "8,5,1,6,4,3,2,7"
str = split(str,",")
Do
  counter = 1
    For i = 0 To ubound(str) Step 1
		If i = ubound(str) Then
	
    	ElseIf str(i) > str(i+1) Then
    	    counter = counter + 1
		else
		    temp = str(i)
			str(i) = str(i+1)	
			str(i+1) = temp
        	counter = 0		
		End If
	Next
Loop until counter = ubound(str) + 1

For i = 0 To ubound(str) Step 1
	 temp = str(i)
	 temp1 = temp1 &" "& temp	 
Next
print temp1
'print :-  8 7 6 5 4 3 2 1
'==================================================================
'==================================================================

'Bubble Sorting array in ascending order.

str = "8,5,1,6,4,3,2,7,11,23,56,33,9,66,22,34"
str = split(str,",")
s = timer
Do
  counter = 1
    For i = 0 To ubound(str) Step 1
		If i = ubound(str) Then
	
    	ElseIf cint(str(i)) < cint(str(i+1)) Then
    	    counter = counter + 1
		else
		    temp = str(i)
			str(i) = str(i+1)	
			str(i+1) = temp
        	counter = 0		
		End If
	Next
Loop until counter = ubound(str) + 1
e = timer
t = e -s
print t

For i = 0 To ubound(str) Step 1
	 temp = str(i)
	 temp1 = temp1 &" "& temp	 
Next
print temp1
'print -: 1 2 3 4 5 6 7 8
'==================================================================
'==================================================================

'Selection Sorting array in descending order faster.

str = "8,5,1,6,4,3,2,7,11,23,56,33,9,66,22,34"
str = split(str,",") 
s = timer
counter = 0
j=1
  do
     For i = 0 To ubound(str) Step 1	
	     if ubound(str) = i+a then
             counter = counter + 1	
	 Exit for 
	     ElseIf cint(str(m)) < cint(str(m+j)) Then
	 		temp = cint(str(m+j))
	  		str(m+j) = str(m)	
	  		str(m) = temp 
		 End if
	   j = j + 1
	Next
   j=1
   m = m + 1
   a=a+1
  Loop until counter = ubound(str)
e = timer
t = e -s
print t
For i = 0 To ubound(str) Step 1
	 temp = str(i)
	 temp1 = temp1 &" "& temp	 
Next
print temp1
'print -:  9 8 7 6 5 4 2 1
'==================================================================
'==================================================================

'Sort alphabetic in order.

str = "a,g,d,r"
str = split(str,",")
Do
   counter = 0
	For i = 0 To ubound(str) Step 1
	 	If i = ubound(str) Then
	 	
	 	ElseIf str(i) > str(i+1) Then	
	 		   counter = counter + 1		
	 	else
	 	     temp = str(i)
	 	     str(i) = str(i+1)
	 		 str(i+1) = temp
	 	End If
		
	Next
Loop until counter = ubound(str)
For i = 0 To ubound(str) Step 1
	 temp = str(i)
	 temp1 = temp1 &" "& temp	 
Next
print temp1
' r g d a
'==================================================================
'==================================================================


