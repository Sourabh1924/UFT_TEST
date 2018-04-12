''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
'CloseProcessByName 
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

'Open 3 notepad instances
SystemUtil.Run datatable.Value("Path")
SystemUtil.Run datatable.Value("Path")
SystemUtil.Run datatable.Value("Path")
 
'Close the notepads using the image name
iReturn = SystemUtil.CloseProcessByName(datatable.Value("Path"))
msgbox iReturn 'Returns 3 as total 3 notepads are closed

''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
'CloseProcessById 
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

'Open notepad and excel applications
SystemUtil.Run datatable.Value("Path")
datatable.SetCurrentRow(2)
SystemUtil.Run datatable.Value("Path")
 
'Find Process IDs of both the applications
pID_Notepad = Window("regexpwndtitle:=Notepad").GetROProperty("process id")
pID_Excel = Window("regexpwndtitle:=XLMAIN").GetROProperty("process id")
 
'Close both the applications
iReturn_N = SystemUtil.CloseProcessById(pID_Notepad)
iReturn_E = SystemUtil.CloseProcessById(pID_Excel)
 
msgbox iReturn_N 'Returns True
msgbox iReturn_E 'Returns True


''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
'CloseProcessByWndTitle 
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
datatable.SetCurrentRow(1)
'Open notepad and excel applications
SystemUtil.Run datatable.Value("Path")
datatable.SetCurrentRow(2)
SystemUtil.Run datatable.Value("Path")
 
'Close all the tasks where the window title exactly matches "Untitled - Notepad"
SystemUtil.CloseProcessByWndTitle "Untitled - Notepad", False
'Close all the tasks where the window title contains the string "Excel"
SystemUtil.CloseProcessByWndTitle "Excel", True

''''''''''''''''''''''''''''''''''''''''''''''''''
'CloseDescendentProcesses 
''''''''''''''''''''''''''''''''''''''''''''''''''
datatable.SetCurrentRow(1)
'Open notepad and excel applications using QTP
SystemUtil.Run datatable.Value("Path")
datatable.SetCurrentRow(2)
SystemUtil.Run datatable.Value("Path")
 
'Close all the processes opened using QTP
iReturn = SystemUtil.CloseDescendentProcesses
msgbox iReturn

''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
'CloseProcessByHwnd 
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
datatable.SetCurrentRow(1)
Dim hwnd_Notepad, hwnd_Excel
 
'Open notepad and excel applications
SystemUtil.Run datatable.Value("Path")
datatable.SetCurrentRow(2)
SystemUtil.Run datatable.Value("Path")
 
'Find Handles of both the application windows
hwnd_Notepad = Window("regexpwndtitle:=Notepad").GetROProperty("hwnd")
hwnd_Excel = Window("regexpwndtitle:=XLMAIN").GetROProperty("hwnd")
 
'Close both the applications
iReturn_N = SystemUtil.CloseProcessByHwnd(hwnd_Notepad)
iReturn_E = SystemUtil.CloseProcessByHwnd(hwnd_Excel)
 
msgbox iReturn_N 'Returns True
msgbox iReturn_E 'Returns True
