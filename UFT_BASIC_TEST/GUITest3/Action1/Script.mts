'Browser("Checks, Personal Checks,").Page("Checks, Personal Checks,").Link("PersonalChecks").Click @@ hightlight id_;_Browser("Checks, Personal Checks,").Page("Checks, Personal Checks,").Link("PersonalChecks")_;_script infofile_;_ZIP::ssf1.xml_;_
'Browser("Checks, Personal Checks,").Page("Checks, Personal Checks,").Link("Basic Checks").Click @@ hightlight id_;_Browser("Checks, Personal Checks,").Page("Checks, Personal Checks,").Link("Basic Checks")_;_script infofile_;_ZIP::ssf2.xml_;_
'Set ocollection= Description.Create
'ocollection("micclass").value= "image"
'Set ocollection=Browser("Checks, Personal Checks,").Page("Simple Checks - Plain").ChildObjects(ocollection)
'     For i = 0 To ocollection.count-1 Step 1
'     	 Oimage=ocollection(i).getroproperty("alt")
'     	       If Oimage=datatable.Value("check",global) Then
'     	             ocollection(i).click
'     	             call report("STEP-3","Find elite checks image","Need to be click on elitechecks image link","Click on elitechecks image link","PASS",time,date)
'                     reporter.ReportEvent micPass,"Need to be click on elitechecks image link","Click on elitechecks image link"
'     Exit for
'       	       End If 
'     Next
'
'Browser("Checks, Personal Checks,").Page("Simple Checks - Plain").Image("Elite Checks").Click @@ hightlight id_;_Browser("Checks, Personal Checks,").Page("Simple Checks - Plain").Image("Elite Checks")_;_script infofile_;_ZIP::ssf3.xml_;_
'Browser("Checks, Personal Checks,").Page("Elite Checks - Sams Club").Link("Single Checks ?").Click @@ hightlight id_;_Browser("Checks, Personal Checks,").Page("Elite Checks - Sams Club").Link("Single Checks ?")_;_script infofile_;_ZIP::ssf4.xml_;_
'Browser("Checks, Personal Checks,").Page("Elite Checks - Sams Club").WebCheckBox("ProductOptions$rptrSingles$ctl").Set "ON" @@ hightlight id_;_Browser("Checks, Personal Checks,").Page("Elite Checks - Sams Club").WebCheckBox("ProductOptions$rptrSingles$ctl")_;_script infofile_;_ZIP::ssf5.xml_;_
'Browser("Checks, Personal Checks,").Page("Elite Checks - Sams Club").Link("Personalize").Click @@ hightlight id_;_Browser("Checks, Personal Checks,").Page("Elite Checks - Sams Club").Link("Personalize")_;_script infofile_;_ZIP::ssf6.xml_;_
'Browser("Checks, Personal Checks,").Page("Personalize Your Checks").WebEdit("routenum").Set "123123123" @@ hightlight id_;_Browser("Checks, Personal Checks,").Page("Personalize Your Checks").WebEdit("routenum")_;_script infofile_;_ZIP::ssf7.xml_;_
'Browser("Checks, Personal Checks,").Page("Personalize Your Checks").WebEdit("acctnum").Set "123456789" @@ hightlight id_;_Browser("Checks, Personal Checks,").Page("Personalize Your Checks").WebEdit("acctnum")_;_script infofile_;_ZIP::ssf8.xml_;_
'Browser("Checks, Personal Checks,").Page("Personalize Your Checks").WebEdit("checknum").Set "1001" @@ hightlight id_;_Browser("Checks, Personal Checks,").Page("Personalize Your Checks").WebEdit("checknum")_;_script infofile_;_ZIP::ssf9.xml_;_
'Browser("Checks, Personal Checks,").Page("Personalize Your Checks").WebEdit("micrline").Set "123123123123456789" @@ hightlight id_;_Browser("Checks, Personal Checks,").Page("Personalize Your Checks").WebEdit("micrline")_;_script infofile_;_ZIP::ssf10.xml_;_
'Browser("Checks, Personal Checks,").Page("Personalize Your Checks").WebEdit("txtEmail").Set "houston@texas.com" @@ hightlight id_;_Browser("Checks, Personal Checks,").Page("Personalize Your Checks").WebEdit("txtEmail")_;_script infofile_;_ZIP::ssf11.xml_;_
'Browser("Checks, Personal Checks,").Page("Personalize Your Checks").WebEdit("txtContactPhone").Set "7135551212" @@ hightlight id_;_Browser("Checks, Personal Checks,").Page("Personalize Your Checks").WebEdit("txtContactPhone")_;_script infofile_;_ZIP::ssf12.xml_;_
'Browser("Checks, Personal Checks,").Page("Personalize Your Checks").Link("Next").Click @@ hightlight id_;_Browser("Checks, Personal Checks,").Page("Personalize Your Checks").Link("Next")_;_script infofile_;_ZIP::ssf13.xml_;_
'Browser("Checks, Personal Checks,").Page("Personalize Your Checks").WebEdit("pline1").Set "john doe" @@ hightlight id_;_Browser("Checks, Personal Checks,").Page("Personalize Your Checks").WebEdit("pline1")_;_script infofile_;_ZIP::ssf14.xml_;_
'Browser("Checks, Personal Checks,").Page("Personalize Your Checks").WebEdit("pline3").Set "10391 laureate drive" @@ hightlight id_;_Browser("Checks, Personal Checks,").Page("Personalize Your Checks").WebEdit("pline3")_;_script infofile_;_ZIP::ssf15.xml_;_
'Browser("Checks, Personal Checks,").Page("Personalize Your Checks").WebEdit("city").Set "san antonio" @@ hightlight id_;_Browser("Checks, Personal Checks,").Page("Personalize Your Checks").WebEdit("city")_;_script infofile_;_ZIP::ssf16.xml_;_
'Browser("Checks, Personal Checks,").Page("Personalize Your Checks").WebList("states").Select "TX" @@ hightlight id_;_Browser("Checks, Personal Checks,").Page("Personalize Your Checks").WebList("states")_;_script infofile_;_ZIP::ssf17.xml_;_
'Browser("Checks, Personal Checks,").Page("Personalize Your Checks").WebEdit("zip").Set "78249" @@ hightlight id_;_Browser("Checks, Personal Checks,").Page("Personalize Your Checks").WebEdit("zip")_;_script infofile_;_ZIP::ssf18.xml_;_
'Browser("Checks, Personal Checks,").Page("Personalize Your Checks").WebEdit("bankinfo1").Set "key bank" @@ hightlight id_;_Browser("Checks, Personal Checks,").Page("Personalize Your Checks").WebEdit("bankinfo1")_;_script infofile_;_ZIP::ssf19.xml_;_
'Browser("Checks, Personal Checks,").Page("Personalize Your Checks").Link("Next_2").Click @@ hightlight id_;_Browser("Checks, Personal Checks,").Page("Personalize Your Checks").Link("Next 2")_;_script infofile_;_ZIP::ssf20.xml_;_
'Browser("Checks, Personal Checks,").Page("Personalize Your Checks").Frame("fancybox-frame14\d+").WebRadioGroup("NotFound").Select "rdoSureItsCorrect" @@ hightlight id_;_Browser("Checks, Personal Checks,").Page("Personalize Your Checks").Frame("fancybox-frame1456945048228").WebRadioGroup("NotFound")_;_script infofile_;_ZIP::ssf21.xml_;_
'Browser("Checks, Personal Checks,").Page("Personalize Your Checks").Frame("fancybox-frame14\d+").Link("Continue").Click @@ hightlight id_;_Browser("Checks, Personal Checks,").Page("Personalize Your Checks").Frame("fancybox-frame1456945048228").Link("Continue")_;_script infofile_;_ZIP::ssf22.xml_;_
'Browser("Checks, Personal Checks,").Page("Personalize Your Checks").Link("Preview").Click @@ hightlight id_;_Browser("Checks, Personal Checks,").Page("Personalize Your Checks").Link("Preview")_;_script infofile_;_ZIP::ssf23.xml_;_
'Browser("Checks, Personal Checks,").Page("Personalize Your Checks").WebCheckBox("ckAgree").Set "ON" @@ hightlight id_;_Browser("Checks, Personal Checks,").Page("Personalize Your Checks").WebCheckBox("ckAgree")_;_script infofile_;_ZIP::ssf24.xml_;_
'Browser("Checks, Personal Checks,").Page("Personalize Your Checks").Link("Approve and Continue").Click @@ hightlight id_;_Browser("Checks, Personal Checks,").Page("Personalize Your Checks").Link("Approve and Continue")_;_script infofile_;_ZIP::ssf28.xml_;_
'Browser("Checks, Personal Checks,").Page("Your Shopping Cart - Sam's").Link("Checkout").Click @@ hightlight id_;_Browser("Checks, Personal Checks,").Page("Your Shopping Cart - Sam's").Link("Checkout")_;_script infofile_;_ZIP::ssf29.xml_;_
'Browser("Checks, Personal Checks,").Page("Checks, Personal Checks,_2").Frame("Frame").WebEdit("WebEdit").Click @@ hightlight id_;_Browser("Checks, Personal Checks,").Page("Checks, Personal Checks, 2").Frame("Frame").WebEdit("WebEdit")_;_script infofile_;_ZIP::ssf30.xml_;_
'

idate=date()
idatevalue=Split(idate,"/")
'idateval=Trim(idatevalue(1))
For i = 0 To idatevalue Step 1
	print idatevalue(i)
Next