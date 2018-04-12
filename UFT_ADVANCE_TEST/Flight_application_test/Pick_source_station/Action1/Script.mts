
WpfWindow("HP MyFlight Sample Application").WpfEdit("agentName").Set "john" @@ hightlight id_;_2118579288_;_script infofile_;_ZIP::ssf2.xml_;_
WpfWindow("HP MyFlight Sample Application").WpfEdit("password").SetSecure "585a58406ba7a4e8e730" @@ hightlight id_;_2135162456_;_script infofile_;_ZIP::ssf3.xml_;_
WpfWindow("HP MyFlight Sample Application").WpfButton("OK").Click @@ hightlight id_;_2130347384_;_script infofile_;_ZIP::ssf4.xml_;_
Source_ = WpfWindow("HP MyFlight Sample Application").WpfComboBox("fromCity").GetROProperty("all items")
'print Source_ 
Source_1 = split(Source_,Chr(13))
sam = Source_1(0)
wait 3
