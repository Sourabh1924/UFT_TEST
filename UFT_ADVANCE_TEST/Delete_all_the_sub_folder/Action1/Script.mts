'============================================================================================
'============================================================================================
''''''''''''Delete all the Subfolder
Set fso=createobject("scripting.filesystemobject")
Set fp=fso.getfolder("F:\sam")
set fsubfolder=fp.subfolders
cnt1 = fsubfolder.Count
 For each s1 in fsubfolder
        ss=fso.getfolder(s1)
        fso.deletefolder(ss)
        folcount=folcount+1
      If folcount = cnt1 Then
    Exit for 
      End If  
    Next
Set fso = nothing
'============================================================================================
'============================================================================================
''''''''''''''Delete all the Specific file name for Specific date
Set fso = CreateObject("Scripting.FileSystemObject")
Set MainFolder = fso.GetFolder("F:\sam")
date_ = now - 1
For Each fldr In MainFolder.SubFolders
    If fldr.Datecreated < date_ Then
        Foldername = mid(fldr.Name,1,3)
           If Foldername = "Res" Then
           	   ss=fso.getfolder(fldr)
               fso.deletefolder(ss)
           End If        
    End If
Next
'============================================================================================
'============================================================================================
