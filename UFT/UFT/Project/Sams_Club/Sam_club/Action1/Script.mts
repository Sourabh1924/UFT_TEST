'senerion name
'auther name
'last modification date
'seniro dis
'******************************************************************************************************************
dim ocollection'Store number of child object in the page
dim P_Olink    'Store personal checks link  
dim B_Olink    'Store the basic checks link
dim Oimage     'Store the checks name
dim S_Olink    'Store the single link
dim D_Olink    'Store the dublicate link

'*************************************start************************************************************************

SystemUtil.Run "iexplore","http://www.samsclubchecks.com/index.aspx"
Browser("Checks, Personal Checks,").Page("Checks, Personal Checks,").Sync
Browser("Checks, Personal Checks,").Page("Checks, Personal Checks,").Link("PersonalChecks").WaitProperty"html tag","A",1000

'step 2 
'************************************* Personal Object part********************************************************

Set ocollection = Description.Create
ocollection("micclass").value = "link"
Set ocollection=Browser("Checks, Personal Checks,").Page("Checks, Personal Checks,").ChildObjects(ocollection)
a=ocollection.count-1
    For i = 0 To ocollection.count-1
        a=ocollection.count-1
	    P_Olink=ocollection(i).getroproperty("innertext")
                If P_Olink=datatable.Value("Pname",global) Then
                       ocollection(i).click
                       print P_Olink
                       
                      '************************************Excel reporter*******************************************************
                       call report("STEP-1","Find "&datatable.Value("Pname",global)&".","Need to be click on "&datatable.Value("Pname",global)&" link","Click on "&datatable.Value("Pname",global)&" link","PASS",time,date)
                       reporter.ReportEvent micPass,"Need to be click on "&datatable.Value("Pname",global)&" link","Click on "&datatable.Value("Pname",global)&" link"
                      '************************************Excel reporter*******************************************************

                ElseIf a=i Then
                
                     '************************************Excel reporter*******************************************************                    
                     call report("STEP-1","Find "&datatable.Value("Pname",global)&".","Need to be click on "&datatable.Value("Pname",global)&" link","Does not click on "&datatable.Value("Pname",global)&" link","FAIL",time,date)
                     reporter.ReportEvent micFail,"Need to be click on "&datatable.Value("Pname",global)&" link","Does not click on "&datatable.Value("Pname",global)&" link"
                     '************************************Excel reporter*******************************************************
                     Exittest
    Exit for @@ hightlight id_;_Browser("Simple Checks - Plain").Page("Simple Checks - Plain")_;_script infofile_;_ZIP::ssf19.xml_;_
                End If
    next
print "---------------------------------------------------"    
print "---------------------------------------------------"

'*************************************Basic Object part********************************************************

Set ocollection = Description.Create
ocollection("micclass").value = "link"
Set ocollection=Browser("Checks, Personal Checks,").Page("Checks, Personal Checks,").ChildObjects(ocollection)
a=ocollection.count-1
     For i = 0 To ocollection.count-1 
	    B_Olink=ocollection(i).getroproperty("text")
              If B_Olink=datatable.Value("Bname",global) Then
                    ocollection(i).click
                    print B_Olink
                    
                    '************************************Excel reporter*******************************************************                    
                    call report("STEP-2","Find "&datatable.Value("Bname",global)&"Need to be click on "&datatable.Value("Bname",global)&" link","Click on "&datatable.Value("Bname",global)&" link","PASS",time,date)
                    reporter.ReportEvent micPass,"Need to be click on "&datatable.Value("Bname",global)&" link","Click on "&datatable.Value("Bname",global)&" link"
                    '************************************Excel reporter*******************************************************    
        
              ElseIf a=i Then
              
                   '************************************Excel reporter*******************************************************                    
                    call report("STEP-2","Find "&datatable.Value("Bname",global)&"Need to be click on "&datatable.Value("Bname",global)&" link","Does not click on "&datatable.Value("Bname",global)&" link","FAIL",time,date)
                    reporter.ReportEvent micFail,"Need to be click on "&datatable.Value("Bname",global)&" link","Does not lick on "&datatable.Value("Bname",global)&" link"
                    '************************************Excel reporter******************************************************* 
                    Exittest
    Exit for @@ hightlight id_;_Browser("Simple Checks - Plain").Page("Simple Checks - Plain")_;_script infofile_;_ZIP::ssf19.xml_;_
              End If
    next
print "---------------------------------------------------"
print "---------------------------------------------------"
wait 4

'*************************************Checks Object part********************************************************

Set ocollection= Description.Create
ocollection("micclass").value= "image"
Set ocollection=Browser("Checks, Personal Checks,").Page("Simple Checks - Plain").ChildObjects(ocollection)
     For i = 0 To ocollection.count-1 Step 1
     	 Oimage=ocollection(i).getroproperty("alt")
     	       If Oimage=datatable.Value("checks",global) Then
     	             ocollection(i).click
                     print Oimage
                     
                     '************************************Excel reporter*******************************************************    
                     call report("STEP-3","Find "&datatable.Value("checks",global)&" checks image","Need to be click on "&datatable.Value("checks",global)&" image link","Click on "&datatable.Value("checks",global)&" image link","PASS",time,date)
                     reporter.ReportEvent micPass,"Need to be click on "&datatable.Value("checks",global)&" image link","Click on "&datatable.Value("checks",global)&" image link"
                     '************************************Excel reporter*******************************************************         
                 
                ElseIf a=i Then
                
                     '************************************Excel reporter*******************************************************    
                     call report("STEP-3","Find "&datatable.Value("checks",global)&" image","Need to be click on "&datatable.Value("checks",global)&" image link","Click on "&datatable.Value("checks",global)&" image link","FAIL",time,date)
                     reporter.ReportEvent micFail,"Need to be click on "&datatable.Value("checks",global)&" image link","Does not click on "&datatable.Value("checks",global)&" image link"
                     '************************************Excel reporter*******************************************************         
                     exittest
     Exit for
       	       End If 
     Next
print "---------------------------------------------------"
print "---------------------------------------------------"

WAIT 6 @@ hightlight id_;_Browser("Checks, Personal Checks,").Page("Timeless Stripes Checks").Image("Timeless Stripes Checks")_;_script infofile_;_ZIP::ssf49.xml_;_
'*************************************Single checks Object part********************************************************

Set ocollection= Description.Create
ocollection("html tag").value= "A"
ocollection("micclass").value= "link"
   if Browser("Checks, Personal Checks,").Page("Elite Checks - Sams Club").Exist then
       Set ocollection=Browser("Checks, Personal Checks,").Page("Elite Checks - Sams Club").ChildObjects(ocollection)
            For i = 0 To ocollection.count-1 Step 1
     	        S_Olink=ocollection(i).getroproperty("name")
     	        S_Olink1=trim(S_Olink)
                    If S_Olink1="Single Checks ?" Then
            	        ocollection(i).click
            	        print S_Olink1

                        '************************************Excel reporter*******************************************************                	
                        call report("STEP-4","Find single checks link","Need to be click on single checks","Click on single checks","PASS",time,date)
                        reporter.ReportEvent micPass,"Need to be click on single checks","Click on single checks" 
                        '************************************Excel reporter*******************************************************                    

                        Browser("Checks, Personal Checks,").Page("Elite Checks - Sams Club").WebCheckBox("ProductOptions$rptrSingles$ctl").Set "ON"
                        print "---------------------------------------------------"
                        print "---------------------------------------------------"
                                              
                        'pick the checks price
                        
                        a=Browser("Checks, Personal Checks,").Page("Elite Checks - Sams Club").WebTable("2 boxes (480 Checks)").Getroproperty("column names")
                        var=instr(a,"  ")
                        a1=mid(a,7,var)
                           Do
                             u=instr(a1," ")
                             a1=mid(a1,u+1)	
                           Loop until u=0
                        environment.Value("first_pz")=a1  'environment variable use
                        print a1
                        Browser("Checks, Personal Checks,").Page("Elite Checks - Sams Club").Link("Personalize").Click                
     Exit for
                      End If
     next
End if

'*************************************Duplicate checks Object part********************************************************

Set ocollection= Description.Create
ocollection("html tag").value= "A"
 ocollection("micclass").value= "link"
if Browser("Checks, Personal Checks,").Page("Elite Checks - Sams Club").Exist then
Set ocollection=Browser("Checks, Personal Checks,").Page("Elite Checks - Sams Club").ChildObjects(ocollection)
     For i = 0 To ocollection.count-1 Step 1
     	 D_Olink=ocollection(i).getroproperty("name")
     	 D_Olink1=trim(D_Olink)   
            If D_Olink1="Duplicate Checks ?" Then
            	ocollection(i).click
            	print D_Olink 
            	
                '************************************Excel reporter*******************************************************                	
            	call report("STEP-4","Find duplicate checks link","Need to be click on duplicate checks","Click on duplicate checks","PASS",time,date)
                reporter.ReportEvent micPass,"Need to be click on duplicate checks","Click on duplicate checks"     
                '************************************Excel reporter*******************************************************    

                Browser("Checks, Personal Checks,").Page("Elite Checks - Sams Club").WebCheckBox("ProductOptions$rptrDuplicates$").Set "ON"
                
                'Pick the price of the checks
                
                a=Browser("Checks, Personal Checks,").Page("Elite Checks - Sams Club").WebTable("2 boxes (360 Checks)").Getroproperty("column names")
                var=instr(a,"  ")
                a1=mid(a,8,var)
                   Do
                     u=instr(a1," ")
                     a1=mid(a1,u+1)	
                   Loop until u=0
                   print a1
                environment.Value("first_pz")=a1  'environment variable use
                Browser("Checks, Personal Checks,").Page("Elite Checks - Sams Club").Link("Personalize").Click
     Exit for
            End If
     next 
End if
print "---------------------------------------------------"
print "---------------------------------------------------"



 @@ hightlight id_;_Browser("Checks, Personal Checks,").Page("Simple Checks - Plain").Image("Timeless Stripes Checks")_;_script infofile_;_ZIP::ssf48.xml_;_