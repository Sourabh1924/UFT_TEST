
row_cnt=datatable.GetSheet("Global").GetRowCount
var1= inputbox("Enter 1 user")
num1=cint(var1)
var2= inputbox("Enter 2 user")
num2=cint(var2)
var3= inputbox("Enter 3 user")
num3=cint(var3)
For i = 1 To row_cnt Step 1
  datatable.GetSheet("Global").SetCurrentRow(i)  
    If i = num1 Then
        systemutil.Run"C:\ProgramData\Microsoft\Windows\Start Menu\Programs\HP Software\HP Unified Functional Testing\Sample Applications\Flight GUI"
    	Dialog("Login").WinEdit("Agent Name:").Set datatable.Value("username","Global")
        Dialog("Login").WinEdit("Password:").Set datatable.Value("password","Global") @@ hightlight id_;_656538_;_script infofile_;_ZIP::ssf2.xml_;_
        Dialog("Login").WinButton("OK").Click
        Window("Flight Reservation").Close
    End If
    
    If i = num2 Then
        systemutil.Run"C:\ProgramData\Microsoft\Windows\Start Menu\Programs\HP Software\HP Unified Functional Testing\Sample Applications\Flight GUI"
    	Dialog("Login").WinEdit("Agent Name:").Set datatable.Value("username","Global")
        Dialog("Login").WinEdit("Password:").Set datatable.Value("password","Global") @@ hightlight id_;_656538_;_script infofile_;_ZIP::ssf2.xml_;_
        Dialog("Login").WinButton("OK").Click
        Window("Flight Reservation").Close
    End If
    
    If i = num3 Then
        systemutil.Run"C:\ProgramData\Microsoft\Windows\Start Menu\Programs\HP Software\HP Unified Functional Testing\Sample Applications\Flight GUI"
    	Dialog("Login").WinEdit("Agent Name:").Set datatable.Value("username","Global")
        Dialog("Login").WinEdit("Password:").Set datatable.Value("password","Global") @@ hightlight id_;_656538_;_script infofile_;_ZIP::ssf2.xml_;_
        Dialog("Login").WinButton("OK").Click
        Window("Flight Reservation").Close
    End If	
Next


str="8:5:3"
var=split(str,":")
For j = 0 To ubound(var) Step 1
	print var(j)
	str1=cint(var(j))
        datatable.GetSheet("Global").SetCurrentRow(str1)             
        systemutil.Run"C:\ProgramData\Microsoft\Windows\Start Menu\Programs\HP Software\HP Unified Functional Testing\Sample Applications\Flight GUI"
    	Dialog("Login").WinEdit("Agent Name:").Set datatable.Value("username","Global")
        Dialog("Login").WinEdit("Password:").Set datatable.Value("password","Global") @@ hightlight id_;_656538_;_script infofile_;_ZIP::ssf2.xml_;_
        Dialog("Login").WinButton("OK").Click
        Window("Flight Reservation").Close      	
Next


user_id = datatable.Value("user_id")
row_cnt = datatable.GetSheet("Action1").GetRowCount
For i = 1 To row_cnt Step 1
	num = datatable.Value("Number","Action1")
    datatable.SetCurrentRow(i)
    If user_id = num Then
    	systemutil.Run"C:\ProgramData\Microsoft\Windows\Start Menu\Programs\HP Software\HP Unified Functional Testing\Sample Applications\Flight GUI"
    	Dialog("Login").WinEdit("Agent Name:").Set datatable.Value("username","Action1")
        Dialog("Login").WinEdit("Password:").Set datatable.Value("password","Action1") @@ hightlight id_;_656538_;_script infofile_;_ZIP::ssf2.xml_;_
        Dialog("Login").WinButton("OK").Click
        Window("Flight Reservation").Close    
    End If
Next
 @@ hightlight id_;_656538_;_script infofile_;_ZIP::ssf3.xml_;_
 