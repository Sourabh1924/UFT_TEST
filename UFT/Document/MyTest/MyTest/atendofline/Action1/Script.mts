Set fso=createobject("Scripting.FileSystemObject")
'Open the file "qtptest.txt" in writing mode.
Set qfile=fso.OpenTextFile("C:\Documents and Settings\yogesh\Desktop\MyTest\temp\tempsub\tempfile.txt",2,True)
'write contents to the file into newline
qfile.Writeline  "Welcome to the World of QTP"
'Open the file "qtptest.txt" in reading mode.
Set qfile=fso.OpenTextFile("C:\Documents and Settings\yogesh\Desktop\MyTest\temp\tempsub\tempfile.txt",1,True)
Do while qfile.AtEndOfStream <> true
Msgbox  qfile.Read(3)  'Output --> The file will be read character by character. 
Loop

'Close the files
qfile.Close

'Release the allocated objects
Set qfile=nothing
Set fso=nothing



