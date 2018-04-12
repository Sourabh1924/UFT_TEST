Set fso=createobject("Scripting.FileSystemObject")
'Open the file "qtptest.txt" in writing mode.
Set qfile=fso.OpenTextFile("C:\Documents and Settings\yogesh\Desktop\MyTest\temp\tempsub\tempfile.txt",2,True)
'write contents to the file into two newlines
qfile.Writeline  "Welcome to the World of QTP"
'will insert 4 new  blank lines
qfile.WriteBlankLines(2)
qfile.Writeline  "the file name is qtptest.txt"
'Open the file "qtptest.txt" in reading mode.
Set qfile=fso.OpenTextFile("C:\Documents and Settings\yogesh\Desktop\MyTest\temp\tempsub\tempfile.txt",1,True)
'Read  the entire contents of  priously written file
'Do while qfile.AtEndOfStream <> true
 'Output --> The file will be read file line by line. 
Msgbox  qfile.ReadAll
'Loop

'Close the files
qfile.Close

'Release the allocated objects
Set qfile=nothing
Set fso=nothing

