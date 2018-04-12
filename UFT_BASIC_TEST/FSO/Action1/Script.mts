set fso1=createobject("scripting.filesystemobject")

'file/folder exists
If file=fso1.FileExists("d:\sou.txt")=false Then
fso1.DeleteFile("d:\sou.txt")
else
Set file=fso1.CreateTextFile("d:\sou.txt")	
End If

'create file/folder
Set folder=fso1.CreateFile("d:\sam.txt")
folder.close
Set folder=nothing

'delete file/folder
Set file=fso1.CreateTextFile("d:\sou.txt")
fso1.DeleteFile("d:\sou.txt")
file.close
Set folder=nothing

'move folder/file
sourcef="d:\sam.txt"
destinationf="d:\"
fso1.MoveFolder sourcef,destinationf

'copy folder/file
sour="e:\new folder"
dest="d:\"
fso1.CopyFolder sour,dest,True
Set fso1=nothing

'get drive
set drive=fso1.GetDrive("d:\")
msgbox drive.AvailableSpace
msgbox drive.FileSystem
msgbox drive.SerialNumber
msgbox drive.Path

'get folder
Set folder=fso1.GetFolder("d:\sony driver")
Set getsubfolder=folder.SubFolders
For each files in  getsubfolder 
	msgbox files.name
Next

'get file
Set files=fso1.GetFile("e:\sou.txt")
msgbox files.Attributes
msgbox files.DateCreated
msgbox files.Size
msgbox files.Type

'read file
Set file1=fso1.OpenTextFile("e:\sou.txt",1)
msgbox file1.Read(10)

'read all
Set file1=fso1.OpenTextFile("e:\sou.txt",1)
msgbox file1.ReadAll

'read line
Set file1=fso1.OpenTextFile("e:\sou.txt",1)
msgbox file1.ReadLine

'write line
Set file1=fso1.OpenTextFile("e:\sou.txt",2)
file1.Write"my name is sourabh"
Set file1=fso1.OpenTextFile("e:\sou.txt",1)
msgbox file1.ReadAll

'writeline
Set file1=fso1.OpenTextFile("e:\sou.txt",2)
file1.WriteLine" i am from bilaspur"
file1.WriteLine"my age is 24"
Set file1=fso1.OpenTextFile("e:\sou.txt",1)
msgbox file1.ReadAll

'writeblanckline
Set file2=fso1.OpenTextFile("e:\sou.txt",8)
file2.WriteBlankLines(3)
file2.WriteLine "i like WWE"
Set file2=fso1.OpenTextFile("e:\sou.txt",1)
msgbox file2.ReadAll

'atendofline
Set file1=fso1.OpenTextFile("e:\sou.txt",2)
file1.WriteLine"i am from bilaspur"
file1.WriteLine"my age is 24"
Set file1=fso1.OpenTextFile("e:\sou.txt",1)
do while file1.AtEndOfLine<>true
msgbox file1.ReadAll
loop

'atendofstream
Set file1=fso1.OpenTextFile("e:\sou.txt",2)
file1.WriteLine"i am from bilaspur"
file1.WriteLine"my age is 24"
Set file1=fso1.OpenTextFile("e:\sou.txt",1)
do while file1.AtEndOfStream<>true
msgbox file1.ReadAll
loop

