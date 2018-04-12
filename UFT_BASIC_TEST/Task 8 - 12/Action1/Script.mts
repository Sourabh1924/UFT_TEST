'Given a string “C:\base\documents” extract “document” and store it into another  variable. Use report object to print it in the report viewer. Do not hard code the positions of characters and make use of InStr to get the last occurrence of “\” and then use Mid to extract the string “document”

do
u=instr(str,"\")
str=mid(str,u+1)
Loop until u=0
print str
'------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
'Task 9  Repeat task 8 but use InStrRev and Mid.

do
u=instrrev(str,"\")
str=mid(str,u+1)
Loop until u=0
print str
'------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
'Task 10   Repeat task 8 but use Right and InStrRev or InStr and Len functions.

a=len(str)
u=instrrev(str,"\")
sou=a-u
print right(str,sou)
'------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
'Task 11  Given a comma separated string “a,b,c,d,e” find out if ‘c’ is present in the string using Split function. Use a loop to iterate over the array that Split will return and figure out if the character “c’ is present or not. Try to generalize the function in such a way that it should be able to find any character in a given string separated by any character.  You may have to write a function say FindAChar (InputString, inputChar, delimiter).

str="a,b,c,d,e,f"
a=split(str,",")
sou=inputbox("Enter any charter you want to find")
For i = 0 To ubound(a) 
    If a(i)=sou Then
        print "char is found"
        exitaction
    End If
    Next
    print "char is not found"
'------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
'Task 12   Given a string “C:\base\documents” use Left function to extract “C:\base”. Use InStrRev or InStr and Len functions

str="c:\base\document"
a=len(str)
u=instrrev(str,"\")
sou=u-a
print left(str,u-1)
