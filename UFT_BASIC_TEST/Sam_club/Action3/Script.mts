Browser("Checks, Personal Checks,").Page("Personalize Your Checks").Sync
If Browser("Checks, Personal Checks,").Page("Personalize Your Checks").WebEdit("pline1").Exist(10)= True Then
        Browser("Checks, Personal Checks,").Page("Personalize Your Checks").WebEdit("pline1").Set datatable.Value("Name",global)

       '************************************Excel reporter*******************************************************    
	    Call report("STEP-11","Find the wineditbox","Need to be type customer name","Type customer name","PASS",time,date)
        reporter.ReportEvent micPass,"Need to be type customer name","Type customer name"
       '************************************Excel reporter*******************************************************    
 
 else
       
       '************************************Excel reporter*******************************************************    
	    Call report("STEP-11","Find the wineditbox","Need to be type customer name","Wrong customer name","FAIL",time,date)
        reporter.ReportEvent micFail,"Need to be type customer name","Wrong customer name"
       '************************************Excel reporter*******************************************************    

exittest
End If
If Browser("Checks, Personal Checks,").Page("Personalize Your Checks").WebEdit("pline3").Exist(1)= True Then
        Browser("Checks, Personal Checks,").Page("Personalize Your Checks").WebEdit("pline3").Set datatable.Value("Address",global)

        '************************************Excel reporter*******************************************************    
	    Call report("STEP-12","Find the wineditbox","Need to be type customer address","Type customer address","PASS",time,date)
        reporter.ReportEvent micPass,"Need to be type customer address","Type customer address"
        '************************************Excel reporter*******************************************************    

else
       
       '************************************Excel reporter*******************************************************    
	    Call report("STEP-11","Find the wineditbox","Need to be type customer address","Wrong customer address","FAIL",time,date)
        reporter.ReportEvent micFail,"Need to be type customer address","Wrong customer address"
       '************************************Excel reporter*******************************************************    

exittest
End If
If Browser("Checks, Personal Checks,").Page("Personalize Your Checks").WebEdit("city").Exist(1)= True Then
        Browser("Checks, Personal Checks,").Page("Personalize Your Checks").WebEdit("city").Set  datatable.Value("City",global)

        '************************************Excel reporter*******************************************************    
	    Call report("STEP-13","Find the wineditbox","Need to be type city","Type city","PASS",time,date)
        reporter.ReportEvent micPass,"Need to be type city","Type city"
        '************************************Excel reporter*******************************************************   

else
       
       '************************************Excel reporter*******************************************************    
	    Call report("STEP-11","Find the wineditbox","Need to be type city","Wrong city type","FAIL",time,date)
        reporter.ReportEvent micFail,"Need to be type city","Wrong city type"
       '************************************Excel reporter*******************************************************            

exittest
End If
If Browser("Checks, Personal Checks,").Page("Personalize Your Checks").WebList("states").Exist(1)= True Then
        Browser("Checks, Personal Checks,").Page("Personalize Your Checks").WebList("states").Select  datatable.Value("States",global)

        '************************************Excel reporter*******************************************************    
	    Call report("STEP-14","Find the wineditbox","Need to be type states","Type states","PASS",time,date)
        reporter.ReportEvent micPass,"Need to be type states","Type states"
        '************************************Excel reporter*******************************************************    

else
       
       '************************************Excel reporter*******************************************************    
	    Call report("STEP-11","Find the wineditbox","Need to be type states","Wrong states type","FAIL",time,date)
        reporter.ReportEvent micFail,"Need to be type states","Wrong states type"
       '************************************Excel reporter*******************************************************    

exittest
End If
If Browser("Checks, Personal Checks,").Page("Personalize Your Checks").WebEdit("zip").Exist(1)= True Then
        Browser("Checks, Personal Checks,").Page("Personalize Your Checks").WebEdit("zip").Set  datatable.Value("Zip",global)

        '************************************Excel reporter*******************************************************    
	    Call report("STEP-15","Find the wineditbox","Need to be type zip code","Type zip code","PASS",time,date)
        reporter.ReportEvent micPass,"Need to be type zip code","Type zip code"
        '************************************Excel reporter*******************************************************    

else
       
       '************************************Excel reporter*******************************************************    
	    Call report("STEP-11","Find the wineditbox","Need to be type zip code","Wrong zip code type","FAIL",time,date)
        reporter.ReportEvent micFail,"Need to be type zip code","Wrong zip code type"
       '************************************Excel reporter*******************************************************    

exittest
End If
If Browser("Checks, Personal Checks,").Page("Personalize Your Checks").WebEdit("bankinfo1").Exist(1)= True Then
        Browser("Checks, Personal Checks,").Page("Personalize Your Checks").WebEdit("bankinfo1").Set  datatable.Value("Bank_name",global)

        '************************************Excel reporter*******************************************************    
	    Call report("STEP-16","Find the wineditbox","Need to be type bank name","Type bank name","PASS",time,date)
        reporter.ReportEvent micPass,"Need to be type bank name","Type bank name"
        '************************************Excel reporter*******************************************************    

else
       
       '************************************Excel reporter*******************************************************    
	    Call report("STEP-11","Find the wineditbox","Need to be type bank name","Wrong bank name type","FAIL",time,date)
        reporter.ReportEvent micFail,"Need to be type bank name","Wrong bank name type"
       '************************************Excel reporter*******************************************************    

exittest
End If
Browser("Checks, Personal Checks,").Page("Personalize Your Checks").Link("Next_2").Click