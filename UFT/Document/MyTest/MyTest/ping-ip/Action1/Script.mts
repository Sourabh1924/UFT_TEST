Const ForReading = 1
 Set objFSO = CreateObject("Scripting.FileSystemObject")
 Set objTextFile = objFSO.OpenTextFile ("C:\Documents and Settings\yogesh\Desktop\MyTest\hosts.txt", ForReading)
 Set objOutFile1 = objFSO.OpenTextFile("C:\Documents and Settings\yogesh\Desktop\MyTest\Failed.txt", 8, True)
 Set objOutFile2 = objFSO.OpenTextFile("C:\Documents and Settings\yogesh\Desktop\MyTest\Completed.txt", 8, True)
 Do Until objTextFile.AtEndOfStream
    Host_Names = objTextFile.Readline
        
    wmiQuery = "Select * From Win32_PingStatus Where " & _
    "Address = '" & Host_Names & "'"
    
    Set objWMIService = GetObject("winmgmts:\\.\root\cimv2")
    Set objPing = objWMIService.ExecQuery(wmiQuery)
    
    For Each objStatus in objPing
        If IsNull(objStatus.StatusCode) Or objStatus.Statuscode<>0 Then
            objOutFile1.WriteLine Host_Names
        Else
            objOutFile2.WriteLine Host_Names & " = " & objStatus.ProtocolAddress
        End If
    Next
 Loop
 MsgBox("Finished")
 