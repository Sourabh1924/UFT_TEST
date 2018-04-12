Dialog("Login").WinEdit("Agent Name:").Set "jojo" @@ hightlight id_;_525454_;_script infofile_;_ZIP::ssf1.xml_;_
a=Dialog("Login").WinEdit("Agent Name:").GetROProperty("attached text")
msgbox a
x=Dialog("Login").WinEdit("Agent Name:").GetTOProperty("attached text")
msgbox x
Dialog("Login").WinEdit("Agent Name:").SetTOProperty "attached text","name"
y=Dialog("Login").WinEdit("Agent Name:").GetTOProperty("attached text")
msgbox y
set a=Dialog("Login").WinEdit("Agent Name:").GetTOProperties
b=a.count
For i = 0 To b-1

	pname=a(i).name
	pvalue=a(i).value
	msgbox pname
	msgbox pvalue
Next
'getvisibletext
'x=Dialog("Login").WinEdit("Agent Name:").GetVisibleText @@ hightlight id_;_525454_;_script infofile_;_ZIP::ssf1.xml_;_
'msgbox x

Dialog("Login").WinEdit("Password:").SetSecure "56b3339a09c3334ca4c37de0c1d2406c7c09e05b" @@ hightlight id_;_591156_;_script infofile_;_ZIP::ssf2.xml_;_
Dialog("Login").WinButton("OK").Click
Window("Flight Reservation").ActiveX("MaskEdBox").Type "040316" @@ hightlight id_;_66908_;_script infofile_;_ZIP::ssf4.xml_;_
Window("Flight Reservation").WinComboBox("Fly From:").Select "Denver" @@ hightlight id_;_591014_;_script infofile_;_ZIP::ssf5.xml_;_

'getcontent
'y=Window("Flight Reservation").WinComboBox("Fly From:").GetContent
'msgbox y

Window("Flight Reservation").WinComboBox("Fly To:").Select "Frankfurt" @@ hightlight id_;_2229234_;_script infofile_;_ZIP::ssf10.xml_;_
Window("Flight Reservation").WinButton("FLIGHT").Click @@ hightlight id_;_1049536_;_script infofile_;_ZIP::ssf11.xml_;_
Window("Flight Reservation").Dialog("Flights Table").WinList("From").Select "15870   DEN   12:48 PM   FRA   04:18 PM   AF     $178.47" @@ hightlight id_;_197986_;_script infofile_;_ZIP::ssf12.xml_;_

'get visibletext
'x=Window("Flight Reservation").Dialog("Flights Table").WinList("From").GetContent
'msgbox x

Window("Flight Reservation").Dialog("Flights Table").WinButton("OK").Click @@ hightlight id_;_328858_;_script infofile_;_ZIP::ssf13.xml_;_

'get visibletext
x=Window("Flight Reservation").WinEdit("Airline:").GetVisibleText
msgbox x
'
Window("Flight Reservation").WinEdit("Name:").Set "jojo" @@ hightlight id_;_656692_;_script infofile_;_ZIP::ssf14.xml_;_
Window("Flight Reservation").WinRadioButton("first").Set @@ hightlight id_;_590986_;_script infofile_;_ZIP::ssf15.xml_;_

Window("Flight Reservation").WinButton("Insert Order").Click @@ hightlight id_;_1377196_;_script infofile_;_ZIP::ssf17.xml_;_
Window("Flight Reservation").WinButton("Insert Order").WaitProperty "text","Insert order"
Window("Flight Reservation").Close


 @@ hightlight id_;_2033000_;_script infofile_;_ZIP::ssf26.xml_;_