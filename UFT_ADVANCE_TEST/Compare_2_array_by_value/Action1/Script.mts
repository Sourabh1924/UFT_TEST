var = "8,2,4,6,7,2,1,3"
var1 = "1,5,7,8,2,7,9,3"
array1 = split(var,",")
array2 = split(var1,",")

For i = 0 To ubound(array1) Step 1

		If array1(i) > array2(i) Then
			print "Array 1 is greater then array2 the value is:- "&array1(i)
		ElseIf array1(i) < array2(i) Then	
			print "Array 2 is greater then array1 the value is:- "&array2(i)
		else
			print "Array 1 and array 2 value is equal"
		End If

Next
