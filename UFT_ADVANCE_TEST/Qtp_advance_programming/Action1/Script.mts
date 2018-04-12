' Write a program to read data from a text file
Set fso = CreateObject("Scripting.FileSystemObject")
Set a = fso.OpenTextFile("C:\Users\Yogesh\Desktop\UFT\Qtp_advance_programming\File1.txt")
a.ReadLine()
Set a = nothing
Set fso = nothing

'===================================================================================================
'Write a program to write data into a text file.
Set fso = CreateObject("Scripting.FileSystemObject")
set a = fso.CreateTextFile("C:\Users\Yogesh\Desktop\UFT\Qtp_advance_programming\File1.txt",true)
a.WriteLine("My name is  sourabh")
Set a = nothing
Set fso = nothing

'===================================================================================================
'Write a program to print the current foldername
print environment.Value("TestDir")

'===================================================================================================
'Write a program to print files in a given folder
Set fso = CreateObject("Scripting.FileSystemObject")
Set fs = fso.GetFolder("C:\Users\Yogesh\Desktop\UFT\Qtp_advance_programming")
Set fsub = fs.Files
	For each s1 in fsub
		str = fso.GetFileName(s1)
        print "All the flie consist in the folder are :- "&str
	Next
Set fs = nothing
Set fsub = nothing
Set fso = nothing

'===================================================================================================
'Write a program to print subfolders in a given folder
Set fso = CreateObject("Scripting.FileSystemObject")
Set fs = fso.GetFolder("C:\Users\Yogesh\Desktop\UFT\Qtp_advance_programming")
Set fsub = fs.SubFolders
	For each s1 in fsub
		str = fso.GetFolder(s1)
		str = split(str,"\")
    	print "All the subfolder consist in the folder are :- "&str(ubound(str))
	Next
Set fs = nothing
Set fsub = nothing
Set fso = nothing

'===================================================================================================
'Write a program to print all drives in the file system
Set fso = CreateObject("Scripting.FileSystemObject")
Set fs = fso.Drives
    for each s1 in fs
        str = fso.GetDriveName(s1)
        print "Drive exist in our system :-"&str
     next
Set fs = nothing
Set fso = nothing 

'===================================================================================================
'Write a program to print current drive name.
print "Current drive name is :- "&mid(environment.Value("TestDir"),1,2)
 
'Print the last modified and creation date of a given file
Set fso = CreateObject("Scripting.FileSystemObject")
Set MainFolder = fso.GetFile("C:\Users\Yogesh\Desktop\UFT\Qtp_advance_programming\File1.txt")
print  "Last modified date of this file is :- "&MainFolder.DateLastModified
Set MainFolder = nothing
Set fso = nothing

'===================================================================================================
'Print the size of the file and size on the disk
Set fso = CreateObject("Scripting.FileSystemObject")
Set MainFolder = fso.GetFile("C:\Users\Yogesh\Desktop\UFT\Qtp_advance_programming\File1.txt")
print "Total size of the drive "&fso.GetDrive("c:\").TotalSize
print "Total freespace in the drive "&fso.GetDrive("c:\").FreeSpace
print "Total size of that file "&MainFolder.Size
Set MainFolder = nothing
Set fso = nothing

'===================================================================================================
'Write a program to display files of a specific type
Set fso = CreateObject("Scripting.FileSystemObject")
Set objfolder = fso.GetFolder("C:\Users\Yogesh\Desktop\UFT\Qtp_advance_programming")
Set main = objfolder.Files
	for each objFile in main
        Name = objFile.Name
        Name = split(Name,".")
        if Name(ubound(Name)) = "lck" then
            print "Files which have "&ucase(Name(ubound(Name)))&" extension are :- "&objFile.Name
        End if
	next
Set fso = nothing	
Set objfolder = nothing	 
Set main = nothing	

'===================================================================================================
'Write a program to remove all empty files in the folder
Set fso = CreateObject("Scripting.FileSystemObject")
Set fs = fso.GetFolder("C:\Users\Yogesh\Desktop\UFT\Qtp_advance_programming")
Set fsub = fs.Files
	For each s1 in fsub
		str = fso.GetFile(s1).Size
		    If str = 0 Then
		        size = fso.GetFileName(s1)
		        print "Files which are empty :- "&size	
		    End If
        
	Next
Set fs = nothing
Set fsub = nothing
Set fso = nothing

'===================================================================================================
'Write a program to Copy contents of one folder to other folder
Set fso = CreateObject("Scripting.FileSystemObject")
fso.CopyFolder "C:\Users\Yogesh\Desktop\UFT\Qtp_advance_programming","C:\Users\Yogesh\Desktop\SAP"
Set fso = nothing

'Write a program to check whether a given path represents a file or a folder
Set fso = CreateObject("Scripting.FileSystemObject")
fs = fso.GetExtensionName("C:\Users\Yogesh\Desktop\UFT\Qtp_advance_programming")
If fs = "" Then
	print "Given path is a folder path"
else
    print "Given path is a file path"
End If
Set fso = nothing

'===================================================================================================
'Write a program to compress a folder
Set fso = CreateObject("Scripting.FileSystemObject")
Set fs = fso.GetFolder("C:\Users\Yogesh\Desktop\UFT\Qtp_advance_programming")

'Write a program to print all lines in a file that ends with “world”
Set fso = CreateObject("Scripting.FileSystemObject")
Set read1 = fso.OpenTextFile("C:\Users\Yogesh\Desktop\UFT\Qtp_advance_programming\File1.txt")
	Do while read1.AtEndOfStream <> true
		str = read1.ReadLine  
		str = split(str," ")
		If lcase(str(ubound(str))) = "sourabh" Then
			print "sourabh word found in line number "&(read1.Line)-1  
		End If
		Erase str
	Loop
Set a = nothing
Set fso = nothing

'===================================================================================================
'Write a program to check whether string starts with “Error”
Set fso = CreateObject("Scripting.FileSystemObject")
Set read1 = fso.OpenTextFile("C:\Users\Yogesh\Desktop\UFT\Qtp_advance_programming\File1.txt")
	Do while read1.AtEndOfStream <> true
		str = read1.ReadLine  
		str = split(str," ")
		   If str(0) = "Error" Then
			   print "sourabh word found in line number "&(read1.Line)-1  
		   End If 
		Erase str
	Loop
Set a = nothing
Set fso = nothing

'===================================================================================================
'Write a program to Replace all words that contains “demo” in a file with the word “infics”
Set fso = CreateObject("Scripting.FileSystemObject")
Set read1 = fso.OpenTextFile("C:\Users\Yogesh\Desktop\UFT\Qtp_advance_programming\File1.txt")
	Do while read1.AtEndOfStream <> true
		str = read1.ReadLine  
		str1 = replace(str,"My","Is")
		print "Before word replace - "&str&" After word replace - "&str1
	Loop
Set a = nothing
Set fso = nothing

'===================================================================================================
'Write a program to check whether a string contains only alpha numerics
str = "abcdef123654"
  If isnumeric(str) Then
     print "String only contain alphabetics"	
  else
       For i = 1 To len(str) Step 1
       	  If asc(mid(str,i,1))>=65 and asc(mid(str,i,1))=<90 or asc(mid(str,i,1))>=97 and asc(mid(str,i,1))=<112 Then
       		  	print "Given string is ("&str&") alpha numerics"
       		  	Exit for
       	  End If      	
       Next
  End If

'===================================================================================================
'Write a program to check whether a string is in email format
str = "memo.sourabh@gmail.com"
For i = 1 To len(str) Step 1
	If mid(str,i,1) = "@" Then
		print "String contain a email format"
	End If
Next

'===================================================================================================
'Check whether middle three characters in a word contains alphanumeric
str = "sour125bhqw"
lnt = len(str)
lnt = lnt/2
str1 = mid(str,(clng(lnt))-1,1)&mid(str,(clng(lnt)),1)&mid(str,(clng(lnt))+1,1)  
 If isnumeric(str1) Then
 	print "Middle three characters in given word contains alphanumeric"
 else
    print "Middle three characters in given word dows not contains alphanumeric" 
 End If

'===================================================================================================
'Check whether a given line is an empty
Set fso = CreateObject("Scripting.FileSystemObject")
Set read1 = fso.OpenTextFile("C:\Users\Yogesh\Desktop\UFT\Qtp_advance_programming\File1.txt")
	Do while read1.AtEndOfStream <> true
		str = read1.ReadLine  
		   If str = "" Then
		   	  print read1.Line& " number line is empty"
		   End If
	Loop
Set a = nothing
Set fso = nothing

'===================================================================================================
'Write a program to monitor browser service performance
Set service = GetObject ("winmgmts:")
for each Process in Service.InstancesOf ("Win32_Process")
	If Process.Name = "chrome.exe" then
		Print "Process name "&Process.Name&" .ProcessID "&Process.ProcessID&" .Processthread :-"&Process.ThreadCount&" .Pagefault :-"&Process.PageFaults&" .Process size:-"&Process.WorkingSetSize  		
	End If		
Next

'===================================================================================================
'Write a program to list the PID and PPID of a process
Set service = GetObject ("winmgmts:")
	for each Process in Service.InstancesOf ("Win32_Process")
		Print "Process name "&Process.Name&" .ProcessID "&Process.ProcessID	
	Next 
'===================================================================================================
