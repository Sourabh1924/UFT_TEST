Set fso=createobject("Scripting.FileSystemObject")

'File for  getting details  Sourcefile="C:\Documents and Settings\yogesh\Desktop\MyTest\temp\tempsub\tempexcelfile.xls"
Sourcefile="C:\Documents and Settings\yogesh\Desktop\MyTest\temp\tempsub\tempexcelfile.xls"
Set get_file=fso.GetFile(Sourcefile) 

'Some of  the following details can be retrieved from a file
msgbox  get_file.DateCreated
msgbox  get_file.DateLastAccessed
msgbox  get_file.DateLastModified
msgbox  get_file.ParentFolder
msgbox  get_file.Path

Set fso=nothing      
 