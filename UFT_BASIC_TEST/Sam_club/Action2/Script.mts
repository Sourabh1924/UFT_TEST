'***************************************************************************************************************

dim Bank_number 'Store the bank number
dim Ac_number   'Store the acount number

'*****************************************************account part**********************************************

Browser("Checks, Personal Checks,").Page("Personalize Your Checks").Sync
If Browser("Checks, Personal Checks,").Page("Personalize Your Checks").WebEdit("routenum").Exist(10)=True Then
       Browser("Checks, Personal Checks,").Page("Personalize Your Checks").WebEdit("routenum").Set datatable.Value("Bank_number",global) @@ hightlight id_;_Browser("Checks, Personal Checks,").Page("Personalize Your Checks").WebEdit("routenum")_;_script infofile_;_ZIP::ssf7.xml_;_
       
       '************************************Excel reporter*******************************************************    
       Call report("STEP-5","Find the wineditbox","Need to be type bank number","Type bank number","PASS",time,date)
       reporter.ReportEvent micPass,"Need to be type bank number","Type bank number"
       '************************************Excel reporter*******************************************************    

ELSE

       '************************************Excel reporter*******************************************************    
       Call report("STEP-5","Find the wineditbox","Need to be type bank number","Wrong bank number","FAIL",time,date)
       reporter.ReportEvent micFail,"Need to be type bank number","Wrong bank number"
       '************************************Excel reporter*******************************************************    

exittest
End If
If Browser("Checks, Personal Checks,").Page("Personalize Your Checks").WebEdit("acctnum").Exist(1)=True Then
       Browser("Checks, Personal Checks,").Page("Personalize Your Checks").WebEdit("acctnum").Set  datatable.Value("Ac_number",global)

       '************************************Excel reporter*******************************************************           
       Call report("STEP-6","Find the wineditbox","Need to be type account number","Type account number","PASS",time,date)
       reporter.ReportEvent micPass,"Need to be type account number","Type account number"
       '************************************Excel reporter*******************************************************    

ELSE

       '************************************Excel reporter*******************************************************    
       Call report("STEP-5","Find the wineditbox","Need to be type account number","Wrong account number","FAIL",time,date)
       reporter.ReportEvent micFail,"Need to be type account number","Wrong account number"
       '************************************Excel reporter*******************************************************    


exittest
End If
If Browser("Checks, Personal Checks,").Page("Personalize Your Checks").WebEdit("checknum").Exist(1)= True Then
       Browser("Checks, Personal Checks,").Page("Personalize Your Checks").WebEdit("checknum").Set datatable.Value("Check_no",global) @@ hightlight id_;_Browser("Checks, Personal Checks,").Page("Personalize Your Checks").WebEdit("checknum")_;_script infofile_;_ZIP::ssf9.xml_;_

       '************************************Excel reporter*******************************************************    
	   Call report("STEP-7","Find the wineditbox","Need to be type checks number","Type checks number","PASS",time,date)
       reporter.ReportEvent micPass,"Need to be type checks number","Type checks number"
       '************************************Excel reporter*******************************************************    

ELSE

       '************************************Excel reporter*******************************************************    
       Call report("STEP-5","Find the wineditbox","Need to be type checks number","Wrong checks number","FAIL",time,date)
       reporter.ReportEvent micFail,"Need to be type checks number","Wrong checks number"
       '************************************Excel reporter*******************************************************    

exittest
End If @@ hightlight id_;_Browser("Checks, Personal Checks,").Page("Personalize Your Checks").WebEdit("acctnum")_;_script infofile_;_ZIP::ssf8.xml_;_
Bank_number=datatable.Value("Bank_number",global)
Ac_number=datatable.Value("Ac_number",global)
c=Bank_number&Ac_number
If Browser("Checks, Personal Checks,").Page("Personalize Your Checks").WebEdit("micrline").Exist(1)= True Then
       Browser("Checks, Personal Checks,").Page("Personalize Your Checks").WebEdit("micrline").Set c

       '************************************Excel reporter*******************************************************    
	   Call report("STEP-8","Find the wineditbox","Need to be type bank & A/c number","Type bank & A/c number","PASS",time,date)
       reporter.ReportEvent micPass,"Need to be type bank & A/c number","Type bank & A/c number"
       '************************************Excel reporter*******************************************************    

ELSE

       '************************************Excel reporter*******************************************************    
       Call report("STEP-5","Find the wineditbox","Need to be type A/c number","Type A/c number","FAIL",time,date)
       reporter.ReportEvent micFail,"Need to be type A/c number","Type A/c number"
       '************************************Excel reporter*******************************************************    

exittest
End If
If Browser("Checks, Personal Checks,").Page("Personalize Your Checks").WebEdit("txtEmail").Exist(1)=True Then
       Browser("Checks, Personal Checks,").Page("Personalize Your Checks").WebEdit("txtEmail").Set datatable.Value("Email",global)

       '************************************Excel reporter*******************************************************    
	   Call report("STEP-9","Find the wineditbox","Need to be type Email address","Type Email address","PASS",time,date)
       reporter.ReportEvent micPass,"Need to be type Email address","Type Email address"
       '************************************Excel reporter*******************************************************    

ELSE

       '************************************Excel reporter*******************************************************    
       Call report("STEP-5","Find the wineditbox","Need to be type Email address","Wrong Email address","FAIL",time,date)
       reporter.ReportEvent micFail,"Need to be type Email address","Wrong Email address"
       '************************************Excel reporter*******************************************************    

exittest
End If
If Browser("Checks, Personal Checks,").Page("Personalize Your Checks").WebEdit("txtContactPhone").Exist(1)= True Then
       Browser("Checks, Personal Checks,").Page("Personalize Your Checks").WebEdit("txtContactPhone").Set  datatable.Value("Ph_no",global)

       '************************************Excel reporter*******************************************************    
	   Call report("STEP-10","Find the wineditbox","Need to be type Ph number","Type Ph number","PASS",time,date)
       reporter.ReportEvent micPass,"Need to be type Ph number","Type Ph number"
       '************************************Excel reporter*******************************************************    

ELSE

       '************************************Excel reporter*******************************************************    
       Call report("STEP-5","Find the wineditbox","Need to be type Ph number","Wrong Ph number","FAIL",time,date)
       reporter.ReportEvent micFail,"Need to be type Ph number","Wrong Ph number"
       '************************************Excel reporter*******************************************************    

exittest
End If
Browser("Checks, Personal Checks,").Page("Personalize Your Checks").Link("Next").Click