
'***************************************************Personalize part***********************************************************************************************

Browser("Checks, Personal Checks,").Page("Personalize Your Checks").Sync
  If Browser("Checks, Personal Checks,").Page("Personalize Your Checks").Frame("name:=fancybox-frame14\d+").WebRadioGroup("name:=NotFound","html tag:=INPUT").Exist Then
     Browser("Checks, Personal Checks,").Page("Personalize Your Checks").Frame("fancybox-frame1457121296522").WebRadioGroup("NotFound").Select "rdoSureItsCorrect"
     
      '************************************Excel reporter*******************************************************
      Call report("STEP-17","Find the checkbox","Need to select checkbox","Select checkbox","PASS",time,date)
      reporter.ReportEvent micPass,"Need to select checkbox","Select checkbox"
      '************************************Excel reporter*******************************************************

  else

      '************************************Excel reporter*******************************************************
      Call report("STEP-17","Find the checkbox","Need to select checkbox","Does not find checkbox","FAIL",time,date)
      reporter.ReportEvent micFail,"Need to select checkbox","Does not find checkbox"
      '************************************Excel reporter*******************************************************
   
  exittest
  End If
Browser("Checks, Personal Checks,").Page("Personalize Your Checks").Frame("fancybox-frame1457121296522").Link("Continue").Click
Browser("Checks, Personal Checks,").Page("Personalize Your Checks").Link("Preview").Click  
  If Browser("Checks, Personal Checks,").Page("Personalize Your Checks").WebCheckBox("ckAgree").Exist(10)= True Then
      Browser("Checks, Personal Checks,").Page("Personalize Your Checks").WebCheckBox("ckAgree").Set "ON"
      
      '************************************Excel reporter*******************************************************    
	  Call report("STEP-18","Find the checkbox","Need to select agree checkbox","Select agree checkbox","PASS",time,date)
      reporter.ReportEvent micPass,"Need to select agree checkbox","Select agree checkbox"
      '************************************Excel reporter*******************************************************    
  else

      '************************************Excel reporter*******************************************************    
	  Call report("STEP-18","Find the checkbox","Need to select agree checkbox","Does not find agree checkbox","PASS",time,date)
      reporter.ReportEvent micFail,"Need to select agree checkbox","Does not find agree checkbox"
      '************************************Excel reporter*******************************************************    
  
  exittest
  End If
Browser("Checks, Personal Checks,").Page("Personalize Your Checks").Link("Approve and Continue").Click
  If Browser("Checks, Personal Checks,").Page("Your Shopping Cart - Sam's").Frame("fancybox-frame1457123564034").Exist(10) Then
       
       '***************************check the checks price is same in the frame********************************************
       
       second_pz=Browser("Checks, Personal Checks,").Page("Your Shopping Cart - Sam's").Frame("fancybox-frame1457123564034").WebElement("$9.32").GetROProperty("innertext")	
          If environment.Value("first_pz")=second_pz Then
            	print "First  amount="&environment.Value("first_pz")
            	print "Second amount="&second_pz
            	print "Both the amount are same"
          else	
                print "First  amount="&environment.Value("first_pz")
            	print "Second amount="&second_pz
            	print "Both the amount are not same"
          End If
      Browser("Checks, Personal Checks,").Page("Your Shopping Cart - Sam's").Frame("fancybox-frame1457123564034").WebElement("view cart and check out").Click
  End If

'************************************check the checks price is same in the page again******************************************

second_pz=Browser("Checks, Personal Checks,").Page("Your Shopping Cart - Sam's").WebList("ctlCart$CartItems$ctl00$Quanti").GetROProperty("selection")
var=instr(second_pz," ")
second_pz1=mid(second_pz,1,var-1)
    If environment.Value("first_pz")=second_pz1 Then
            	print "First  amount="&environment.Value("first_pz")
            	print "Second amount="&second_pz1
            	print "Both the amount are same"
    else	
                print "First  amount="&environment.Value("first_pz")
            	print "Second amount="&second_pz1
            	print "Both the amount are not same"
    End If

'***************************************************pick the trackable price**************************************************************

trackable=Browser("Checks, Personal Checks,").Page("Your Shopping Cart - Sam's").WebTable("Trackable (Est. Arrival:").GetROProperty("column names")
  Do
     u=instr(trackable," ")
     trackable=mid(trackable,u+1)	
  Loop until u=0
print "Original anount ="&environment.Value("first_pz")
print "Shipping option ="&trackable

'*******************************************************pick the price part****************************************************************

price=Browser("Checks, Personal Checks,").Page("Your Shopping Cart - Sam's").WebTable("Product").GetCellData(2,4)
print "Price           ="&price

'********************************************************pick the handeling price*********************************************************

hand=Browser("Checks, Personal Checks,").Page("Your Shopping Cart - Sam's").WebTable("Handling:").GetROProperty("column names")	
Do
  u=instr(hand,";")
  hand=mid(hand,u+1)	
Loop until u=0
print "Handeling charge="& hand

'**********************************************************pick the sub_total price******************************************************

sub_total=Browser("Checks, Personal Checks,").Page("Your Shopping Cart - Sam's").WebTable("Handling:").GetROProperty("text")	
Do
  u=instr(sub_total,":")
  sub_total=mid(sub_total,u+1)	
Loop until u=0
print "Sub_total amount="&sub_total
Browser("Checks, Personal Checks,").Page("Your Shopping Cart - Sam's").Link("Checkout").Click @@ hightlight id_;_Browser("Checks, Personal Checks,").Page("Your Shopping Cart - Sam's").Link("Checkout")_;_script infofile_;_ZIP::ssf34.xml_;_


'************************************************************payment part*****************************************************************

tax=Browser("Checks, Personal Checks,").Page("Checks, Personal Checks,_2").WebTable("Payment Summary").GetROProperty("text")
Do
  u=instr(tax,":")
  tax=mid(tax,u+1)	
Loop until u=32 
tax1=trim(tax)
var=instr(tax1," ")
tax2=mid(tax1,1,var-1)
print "Tax charge 8.25%="&tax2

total=Browser("Checks, Personal Checks,").Page("Checks, Personal Checks,_2").WebTable("Payment Summary_2").GetROProperty("text")
Do
  u=instr(total,":")
  total=mid(total,u+1)	
Loop until u=0
print "Total amount   ="&total

Browser("Checks, Personal Checks,").Close