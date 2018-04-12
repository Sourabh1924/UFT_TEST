''''''''''
''''''''''Question-1 :- Write a program that reverses the order of words (not characters) in a sentence. 
'                       For example, the program should change the sentence “Good Morning Everybody” to “Everybody Morning Good”
''''''''''

''''''''''''Method 1 
str = "Good Morning Everybody sourabh memo"
str1 = split(str," ")
For i = ubound(str1) To lbound(str1) Step -1
	name = name&" "&str1(i)
	  If lbound(str1) = i Then
	  	  print name
	  End If	
Next

''''''''''''Method 2 
str = "Good Morning Everybody ggggg jjjjj lllll"
str1 = split(str," ")
name = ""
For i = ubound(str1) To lbound(str1) Step -1
	ReDim preserve b(j)
	name = name &" " + " "& str1(i)
	If i = lbound(str1) Then
		print name
	End If
Next

''''''''''
''''''''''Question-2 :- Write a program that mimics the functionality of LCase function. 
'                       For example, your program should take any variable like “AuTOMatIon123_!@#” and convert all the upper case letter to lower case like “automation123_!@#”.
''''''''''

dim name(2)
str = "SOUR$%ABHsourabh147"
str1 = len(str)
ReDim Preserve name(str1)
For i = 1 To str1 Step 1
	name(i) = mid(str,i,1)
	nam = name(i)
	   if (chr(65)<=nam and chr(90)>=nam) then
	        srt = asc(nam)
	        srt = srt + 32
	        name1 = chr(srt)
	        fname = fname + name1
	   else
            fname = fname + nam	   
	End if
Next
msgbox (fname)

''''''''''
''''''''''Question-2 :-  Given a string, write a program that finds out all the characters that constitute the string. 
'                        Example – If the string is VBScript, the output (using a msgbox) should be in this format – The string VBScript contains variables – V, B, S, c, r, i, p, t
''''''''''

str = "sourabh"
temp=""
For i = 1 To len(str) Step 1
	temp= temp &mid(str,i,1)&","
Next
msgbox (temp)

'''''''''''''''''''''or

Str = "Basudev Nayak"
For i = 1 To len(str) Step 1
      j = i - 1
    str = Left(str,i+j) &" "& Right(str,len(str)-i-j)
Next
msgbox str    




