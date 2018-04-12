Set fso=createobject("Scripting.FileSystemObject")
'Open the file "qtptest.txt" in writing mode.
Set qfile=fso.OpenTextFile("C:\Documents and Settings\yogesh\Desktop\MyTest\temp\tempsub\tempfile.txt",2,True)
'write contents to the file into two newlines
qfile.Writeline  "Welcome to the World of QTP"
qfile.Writeline  "the file name is qtptest.txt"
'Open the file "qtptest.txt" in reading mode.
Set qfile=fso.OpenTextFile("C:\Documents and Settings\yogesh\Desktop\MyTest\temp\tempsub\tempfile.txt",1,True)
'Read  characters from the file
Msgbox  qfile.Read(50)               'Output --> "Welcome to"  will be read
'Close the files
qfile.Close

'Release the allocated objects
Set qfile=nothing
Set fso=nothing



