
'Prime number

n = 2
flag=0
 For i=1 to n
	If n mod i=0 Then
		flag=flag+1 
	End If
 Next
 If flag=2 Then
 	print "Prime"
 else
 	print "Not prime"
 End If

'List of prime number

flag=0
For n = 1 To 20
    For i = 1 To n
          If n Mod i = 0 Then
              flag=flag+1              
          End If
    Next
          If flag=2 Then
              Print n&" is a prime numbers"
          End If
Next

'Armstrong Number

str = 153
For i = 1 To len(cstr(str)) Step 1 
	temp = mid(str,i,1) ^ 3 
	temp1 = temp + temp1	
Next
print temp1	

'Factorial number

var = 1
For i = 1 To 5 Step 1
    var = var * i
Next
print var

'Palindrome number

str = 12546
For i = len(cstr(str)) To 1 Step -1  
	last1 = last1 & mid(cstr(str),i,1)
	  If cstr(str) = last1 Then
		 print "First no. = "&str&" Second no. = "&last1&" So it a palindrome number"
	  ElseIf i = 1 Then 
	     print "First no. = "&str&" Second no. = "&last1&" So it is not a palindrome number"
	  End If
Next

' Fibonacci Sequence

a = 1
b = 0
c = b &" "& a
For i = 0 To 10 Step 1
	sum = a + b
    sum1 = sum
    sum2 = sum2 &" "& sum1
    sum1 = ""
      If i = 10 Then
      	  print c &sum2
      End If    
    b = a
    a = sum    
Next

'Reverse the string without len and strrev function

'find the length
len_=0 
Do
  len_ = len_ + 1  
Loop until mid("so",len_,1) = "" 
print len_ - 1
              'or
print instrrev("sourabh",right("sourabh",1))
		  	  'or
print instrrev("sourabh  ","")

'Reverse the string
var = instrrev("sourabh","")
For i = var To 1 Step -1
	last1 = last1 & mid("sourabh",i,1)
Next
print last1

'Binary search

str = "1,3,5,7,9,13"
Search_elem = 9
str = split(str,",")
Half_elem = ubound(str)/2
Half_elem = cint(Half_elem)
While lbound(str) <= ubound(str) 
 	   If str(Half_elem) < Search_elem Then
 	   		Half_elem = Half_elem + 1
 	   ElseIf str(Half_elem) = Search_elem Then
 	        print Search_elem &" element is found in "& Half_elem &" address place."   
 	   else
 	        Half_elem = Half_elem - 1
 	   End If
Wend

'Insert element in array

str = "1,3,5,7,9,13"
str = split(str,",")
Last = ubound(str)
redim Preserve str(Last+1)
Add_elem = 6
Address = 4
For i = ubound(str) to 0 Step -1
	If i = Address Then
	     str(Last+1) = str(Last)
         str(Last) = Add_elem
    else
         str(Last+1) = str(Last)
         str(Last) = ""
		 Last = Last - 1         
    End If
Next

'Prime factors of any number

str = 15
For i = 2 To str - 1 Step 1
	if str mod i = 0 then
	   print i
	else
	End if
Next

'Find strong number

str = 456
temp = 1
For i = 1 To len(str) Step 1
	value = mid(str,i,1)
	For j = 1 To value Step 1
		 temp = temp * j		 
	Next
	temp1 = temp + temp1
	temp = 1
Next
If temp1 = str Then
	print str&" is a strong number"
else
	print str&" is not a strong number"
End If


'Delete particuler charater

str = "sourabh is of the"
For i = 1 To len(str) Step 1
	u = instr(str,"o")
	  If u=0 Then
	  	Exit for
	  End If
	a=u
	str2 = mid(str,1,a-1)
	str1 = mid(str,u+1)
	str = str2 + str1
Next
print str

'find first non repeated character of a given String?

str = "calculationtic"
m = 1
Do
For i = 1 To len(str) Step 1
	if i = len(str) then
	    status = true
	ElseIf mid(str,m,1) = mid(str,i+m,1) Then
		 j = j + 1 
		 temp1 = mid(str,m,1)        
	else
	
	End if
Next
If status = true Then
      print temp1 &" occure "& j+1 &" of times."
      temp1 = ""
      j = 0      
End If
m = m + 1
Loop until m=len(str) 
print temp

'Finding a missing element in array ?

str = "5,6,2,3,1,8,7,4, "
str = split(str,",")
m = 1
Do
	
For i = 0 To ubound(str) Step 1
	If str(i) = cstr(m) Then
			Exit for
    ElseIf str(i) = " " Then
		   print m 
		   Exit do 
	End If
Next
m = cint(m) + 1

Loop until i = ubound(str)

'Get timezone of local computer

strComputer = "."
Set oWMIService = GetObject("winmgmts:"& "{impersonationLevel=impersonate}!\\"& strComputer & "\root\cimv2")
Set colComputer = oWMIService.ExecQuery("Select * from Win32_TimeZone")
	For Each oComputer in colComputer
		msgbox oComputer.Description
	Exit For
	Next
Set oComputer = Nothing
Set colComputer = Nothing
Set oWMIService = Nothing


strComputer = "."
Set objWMIService = GetObject("winmgmts:\\" & strComputer & "\root\cimv2")
Set colItems = objWMIService.ExecQuery("Select * from Win32_TimeZone")
For Each objItem in colItems
    print "Description:   " & objItem.Description
    print "Daylight Name: " & objItem.DaylightName
    print "Standard Name: " & objItem.StandardName
Next

'set WshShell = CreateObject("WScript.Shell")
''var_offset, return value from ActiveTimeBias, is in minutes
'var_offset = WshShell.RegRead("HKLM\System\CurrentControlSet\Control\TimeZoneInformation\ActiveTimeBias")
''Taking current date/time and adding to var_offset because UTC = local time + bias
'Convert_to_GMT = DateAdd("n", var_offset, Now()) 
'Msgbox Convert_to_GMT

