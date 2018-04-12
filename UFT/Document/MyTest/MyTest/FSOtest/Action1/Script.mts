'Create a filesystemObject
Set fso=createobject("Scripting.FileSystemObject")
'Create a non existing file "qtptest.txt "  with overwrite option as True
Set qfile1=fso.CreateTextFile("C:\Documents and Settings\yogesh\Desktop\MyTest\fsotest.txt",True,False) 
'Output --> New File "qtptest.txt " is created

'Close the files
qfile1.Close
'Release the allocated objects
Set qfile1=nothing 