Set WshShell = CreateObject("WScript.Shell")
Set oExec=WshShell.Exec("taskkill /F /IM notepad.EXE")
Set oExec=WshShell.Exec("taskkill /F /IM eclipse.EXE")
Set oExec=WshShell.Exec("taskkill /F /IM iexplore.EXE")
    if oExec.Status = 1 then
          
    End if
Set oExec= Nothing
Set WshShell =Nothing
