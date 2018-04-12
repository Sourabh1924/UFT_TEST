
'Creating Wscript Shell and Device Replay objects
Set WshShell = CreateObject("WScript.Shell")
Set obj = CreateObject("mercury.devicereplay")

x = Dialog("Login").WinButton("Cancel").GetROProperty("abs_x") @@ hightlight id_;_657188_;_script infofile_;_ZIP::ssf4.xml_;_
y = Dialog("Login").WinButton("Cancel").GetROProperty("abs_y")

'Clicking Left Mouse button
obj.MouseClick x, y, LEFT_MOUSE_BUTTON   

'Pressing Enter key
WshShell.sendKeys "{ENTER}"

'Releasing the objects
Set obj=Nothing
Set WshShell=Nothing
 @@ hightlight id_;_263878_;_script infofile_;_ZIP::ssf3.xml_;_