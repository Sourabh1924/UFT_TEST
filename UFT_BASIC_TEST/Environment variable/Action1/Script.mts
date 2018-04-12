'build in variable
msgbox environment.Value("ActionIteration")
msgbox environment.Value("ActionName")
msgbox environment.Value("ControllerHostName")
msgbox environment.Value("GroupName")
msgbox environment.Value("LocalHostName")
msgbox environment.Value("OS")
msgbox environment.Value("OSVersion")
msgbox environment.Value("ProductDir")
msgbox environment.Value("ProductName")
msgbox environment.Value("ResultDir")
msgbox environment.Value("ProductVer")
msgbox environment.Value("ScenarioId")
msgbox environment.Value("SystemTempDir")
msgbox environment.Value("TestDir")
msgbox environment.Value("TestIteration")
msgbox environment.Value("TestName")
msgbox environment.Value("UpdatingActiveScreen")
msgbox environment.Value("UpdatingCheckpoints")
msgbox environment.Value("UpdatingTODescriptions")
msgbox environment.Value("url")
msgbox environment.Value("UserName")
msgbox environment.Value("VuserId")


'userdefine variable
msgbox environment.Value("name")
a=environment("url")
systemutil.Run"iexplore.exe", a


'Take agentname internal and password as external environment variable
Dialog("Login").WinEdit("Agent Name:").Set environment.Value("user") @@ hightlight id_;_132158_;_script infofile_;_ZIP::ssf1.xml_;_
environment.LoadFromFile("C:\Users\sourabh\Desktop\New Folder\password.xml") @@ hightlight id_;_524958_;_script infofile_;_ZIP::ssf13.xml_;_
Dialog("Login").WinEdit("Password:").Set environment.Value("pass") @@ hightlight id_;_393920_;_script infofile_;_ZIP::ssf14.xml_;_
Dialog("Login").WinButton("OK").Click @@ hightlight id_;_524972_;_script infofile_;_ZIP::ssf15.xml_;_
Window("Flight Reservation").ActiveX("MaskEdBox").Type "060616" @@ hightlight id_;_458818_;_script infofile_;_ZIP::ssf16.xml_;_
Window("Flight Reservation").WinComboBox("Fly From:").Select "Frankfurt" @@ hightlight id_;_525116_;_script infofile_;_ZIP::ssf17.xml_;_
Window("Flight Reservation").WinComboBox("Fly To:").Select "Denver" @@ hightlight id_;_394232_;_script infofile_;_ZIP::ssf18.xml_;_
Window("Flight Reservation").WinButton("FLIGHT").Click @@ hightlight id_;_590508_;_script infofile_;_ZIP::ssf19.xml_;_
Window("Flight Reservation").Dialog("Flights Table").WinList("From").Select "20178   FRA   12:48 PM   DEN   01:33 PM   SR     $162.80" @@ hightlight id_;_328890_;_script infofile_;_ZIP::ssf20.xml_;_
Window("Flight Reservation").Dialog("Flights Table").WinButton("OK").Click @@ hightlight id_;_394446_;_script infofile_;_ZIP::ssf21.xml_;_
Window("Flight Reservation").WinEdit("Name:").Set "sou" @@ hightlight id_;_459456_;_script infofile_;_ZIP::ssf22.xml_;_
Window("Flight Reservation").WinButton("Insert Order").Click @@ hightlight id_;_525312_;_script infofile_;_ZIP::ssf24.xml_;_
Window("Flight Reservation").WinEdit("Order No:").Output CheckPoint("Order No:") @@ hightlight id_;_394348_;_script infofile_;_ZIP::ssf25.xml_;_
Window("Flight Reservation").Close