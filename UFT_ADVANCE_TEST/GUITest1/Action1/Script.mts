'Show part of any date
var = "08-05-2016"
var1 = datepart("yyyy",var)
print var1
'Output- 2016

'Add date
var = "08-05-2016"
var1 = dateadd("yyyy","5",var)
print var1
'Output - 08-May-21

'Find difference in date
var= "08-05-2016"
var1= "09-04-2018"
var2 = datediff("yyyy",var,var1)
print var2
'Output - 2

'Show  specified year, month, and day.
var = dateserial("2006","4","5")
print var
'Output - 05-Apr-06

'
MyDate = DateValue("September 11, 1963") 
print MyDate
'Output - 11-Sep-63

'Encodes a string so it contains only ASCII characters
var = Escape("415.   efvsefv  &&fvrrg  rgtge5345465")
print var
'Output - 415.%20%20%20efvsefv%20%20%26%26fvrrg%20%20rgtge5345465

'Split the string
var1= split(var,"%20")
For i = 0 To ubound(var1) Step 1
	print var1(i)
Next

var = exp("709.73555")
print var
'Output - 1.71487699983648E+308

'Absolute value of a number.
var = "$12.25"
var1 = abs(var)
print var1
'Output - 12.25

'Give ASCII value for first letter
var = "sourabh"
var1 = asc(var)
print var1
'Output - 115

'Converted to a Variant of subtype Boolean.
a=5
b=4
c= cbool(a<b)
print c
'Output - False

'Converted to a Variant of subtype Byte
var = "125.2548"
var1 = cbyte(var)
print var1
'Output - 125

'
var = "1.25210"
var1 = ccur(var)
print var1
'Output - 1.2521

'Convert number into charater
a=chr(65)
b=chr(66)
c=chr(67)
d=chr(68)
print a&""&b&""&c&""&d
'Output - ABCD

a="1.25"
b=1/cos(a)
print b
'Output - 3.1713576937701

'Filter ues to specified filter criteria
Dim MyArray (3)
MyArray(0) = "Sunday"
MyArray(1) = "Monday"
MyArray(2) = "Moesday"
MyIndex = Filter(MyArray, "Mo") 
For i = 0 To ubound(MyIndex) Step 1
	print MyIndex(i)
Next
'Output - Monday
'Output - Moesday

'Add currency symbol
MyCurrency = FormatCurrency(1000)
print MyCurrency
'Output - $1,000.00

'Check 
MyDate = "October 19, 1962": YourDate = #10/19/62#: NoDate = "Hello"
MyCheck = IsDate(MyDate)   ' Returns True.
print MyCheck
MyCheck = IsDate(YourDate)   ' Returns True.
print MyCheck
MyCheck = IsDate(NoDate)   ' Returns False.
print MyCheck

a=4
c=a+rnd(a)
print c

On Error Resume Next
Err.Raise 6   ' Raise an overflow error.
MsgBox ("Error # " & CStr(Err.Number) & " " & Err.Description)
Err.Clear      


   print f_Datelen ("1\5\2016",strError)
   
Function f_Datelen(Byval vDate,Byref strError)
    Dim  DateSeparator 
    
	   If  vDate = "" Then
	        strError = "Date is Empty"
	        Exit function 
		ElseIf not isdate(vDate)  Then	
            strError = "Incorrect Date format "&vDate
            Exit function
	    End If 
	    
	    dd= day(vDate)
	    mm =month(vDate)
	    yy =year(vDate)
    
	    If len(dd) = 1 Then
            dd = "0"&dd    
        End If

	    If len(mm)=1 Then
	        mm="0"&mm    
	    End If
	    
	    If instr(1,vDate,"/")>0 Then
		     DateSeparator ="/"
	    Else	 
	         DateSeparator ="-"
	    End If
	    
	    vDate =  mm& DateSeparator &dd  &DateSeparator &yy
	    f_Datelen = vDate
	 
End Function
