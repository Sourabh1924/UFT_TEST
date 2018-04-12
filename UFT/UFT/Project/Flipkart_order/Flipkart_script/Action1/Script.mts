
''''''''''''''''''''''''''''''''''''''''''''''''Relative path'''''''''''''''''''''''''''''''''''''''''''''
Path = left(environment.Value("TestDir"),instrrev(environment.Value("TestDir"),"\")-1)
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

'================================================Data_table================================================
'==========================================================================================================
datatable.Import(Path&"\Data\Flipkart.xls") 
Sel_items = datatable.Value("Items")
Price_cat = datatable.value("Price_cat")
Item_price = datatable.Value("Price")
TargetZipFileName = datatable.Value("Zip_file_name")
'==========================================================================================================
'==========================================================================================================


'=================================================Launch===================================================
'==========================================================================================================
Services.StartTransaction "Page_launch"
S_time = timer
launch("https://www.flipkart.com/")
If Browser("HP Core i7 - (8 GB/256").Page("Online Shopping India").Exist then
    call fpass("Check","Selected item is same"&Item)
    E_time = timer
    TT_time = E_time - S_time
    Services.EndTransaction "Page_launch"
    
    '''''''''''''''''''''''''''Reporter'''''''''''''''''''''''
    call fpass("Luanch","Page is succesfully open")
    call report("Step_1","Website is launch","PASS",Time,Date,TT_time)
    ''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

else

    '''''''''''''''''''''''''''Reporter'''''''''''''''''''''''
    call ffail("Luanch","Page is not open some error is occure")
    Exittest
    '''''''''''''''''''''''''''''''''''''''''''''''''''''''''' 

End if
'==========================================================================================================
'==========================================================================================================


'==============================================Select the link=============================================
'==========================================================================================================
Services.StartTransaction "Select_the_link"
S_time = timer
If Browser("HP Core i7 - (8 GB/256").Page("Online Shopping India").Link("Electronics").Exist Then
    Browser("HP Core i7 - (8 GB/256").Page("Online Shopping India").Link("Electronics").Click	
else 

    '''''''''''''''''''''''''''Reporter'''''''''''''''''''''''         
    call ffail("Select category","Select Electronics link")
    Exittest
    ''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
     
End If

If Browser("HP Core i7 - (8 GB/256").Page("Online Shopping India").Link("Laptops").Exist Then
   Browser("HP Core i7 - (8 GB/256").Page("Online Shopping India").Link("Laptops").Click
else

    '''''''''''''''''''''''''''Reporter'''''''''''''''''''''''         
    call ffail("Select category","Select Laptop link")
    Exittest
    ''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
    
End If

Services.EndTransaction "Select_the_link"
E_time = timer
TT_time = E_time - S_time

'''''''''''''''''''''''''''Reporter''''''''''''''''''''''''''''''''        
call report("Step_2","Link are selected","PASS",Time,Date,TT_time)
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

'==========================================================================================================
'==========================================================================================================


'===================================================Select the product & price==============================================================
'===========================================================================================================================================
Services.StartTransaction "Select_&_verify_the__product_price"
S_time = timer
Browser("HP Core i7 - (8 GB/256").Page("Laptops | Buy Laptops").WebElement("innerhtml:="&Sel_items,"html tag:=DIV").click
Browser("Online Shopping India").Page("Laptops - Buy Products").WebElement("Price -- "&Price_cat).Click

''''''''''''Price
Price = Browser("HP Core i7 - (8 GB/256").Page("Laptops - Buy Products").Link("Item_link").GetROProperty("text")
Price = split(Price,"₹")
Price_1 = trim(Price(1))
Price_1 = split(Price_1,"E")
Price_2 = trim(Price_1(0))
Item_price = "₹ "&Price_2
Item = Browser("Online Shopping India").Page("Laptops - Buy Products").WebElement("HP Core i7 - (8 GB/256").GetROProperty("innertext")

'''''''''''Click on the product
If Browser("Online Shopping India").Page("Laptops - Buy Products").Link("Add to CompareHP Core").Exist Then
   Browser("Online Shopping India").Page("Laptops - Buy Products").Link("Add to CompareHP Core").Click
   
   ''''''''''''''''''''Reporter'''''''''''''''''''''
   call fpass("Check","Selected item is same"&Item)
   '''''''''''''''''''''''''''''''''''''''''''''''''
   
else

   ''''''''''''''''''''REporter''''''''''''''''''''''''
   call ffail("Check","Selected item is not same"&Item)
   Exittest
   ''''''''''''''''''''''''''''''''''''''''''''''''''''
   
End If
'''''''''''Verify the product
Item_1 = Browser("Online Shopping India").Page("HP Core i7 - (8 GB/256").WebElement("HP Core i7 - (8 GB/256").GetROProperty("innertext")
Item1 = left(Item_1,instrrev(Item_1,"(")-1)
print trim(Item1)
print trim(Item)
If trim(Item1) = trim(Item) Then

    ''''''''''''''''''''Reporter''''''''''''''''''''
    call fpass("Check","Selected item is same"&Item)
    call report(Step_,Step_Name,Status,Time_,Date_)
    ''''''''''''''''''''''''''''''''''''''''''''''''
    
else

    '''''''''''''''''''Reporter'''''''''''''''''''''''''
    call ffail("Check","Selected item is not same"&Item)
    ''''''''''''''''''''''''''''''''''''''''''''''''''''

End If
E_time = timer
TT_time = E_time - S_time
Services.EndTransaction "Select_&_verify_the__product_price"

'''''''''''''''''''''''''''''''''''''''Reporter'''''''''''''''''''''''''''''''''''''         
call report("Step_3","Select_&_verify_the__product_price","PASS",Time,Date,TT_time)
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

'========================================================================================================================================
'========================================================================================================================================



'==========================================================type in text file==============================================================
'=========================================================================================================================================
Services.StartTransaction "Feature_type_in_txt_file"
S_time = timer
''''''''''''''Feature type in text file
Dim Feature(6)
Feature(0) = Browser("HP Core i7 - (8 GB/256").Page("HP Core i7 - (8 GB/256").WebElement("Processor").GetROProperty("innertext")
Feature(1) = Browser("HP Core i7 - (8 GB/256").Page("HP Core i7 - (8 GB/256").WebElement("RAM").GetROProperty("innertext")
Feature(2) = Browser("HP Core i7 - (8 GB/256").Page("HP Core i7 - (8 GB/256").WebElement("OS").GetROProperty("innertext")
Feature(3) = Browser("HP Core i7 - (8 GB/256").Page("HP Core i7 - (8 GB/256").WebElement("HDD").GetROProperty("innertext")
Feature(4) = Browser("HP Core i7 - (8 GB/256").Page("HP Core i7 - (8 GB/256").WebElement("Display").GetROProperty("innertext")
If  Feature(6) = null Then

    '''''''''''''''''Reporter'''''''''''''''''
    Call ffail("Check","No features is there")
    ''''''''''''''''''''''''''''''''''''''''''
    
else

    ''''''''''''''''Reporter'''''''''''''''''''
	call fpass("Check","Features are selected")
    '''''''''''''''''''''''''''''''''''''''''''

End If
''''''''''''''Type in txt file
Set fso=createobject("Scripting.FileSystemObject")
    If fso.FileExists(Path&"\qtptest.txt")=TRUE Then    
          Set qfile=fso.OpenTextFile(Path&"\Txt_doc\qtptest.txt",2,True)
                 For i = 0 To ubound(Feature) Step 1
                	   qfile.Write Feature(i)
                 Next
                 
          '''''''''''''''''''''''''''''Reporter'''''''''''''''''''''''''''       
          call fpass("Write","Feature are write in the qtptest text file")
          ''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
          
    Else
          Set qfile1=fso.CreateTextFile(Path&"\Txt_doc\qtptest.txt",True,False) 
          Set qfile=fso.OpenTextFile(Path&"\qtptest.txt",1,True)
                 For i = 0 To ubound(Feature) Step 1
       	               qfile.Write Feature(i)
                 Next   
          
          '''''''''''''''''''''''''''''Reporter'''''''''''''''''''''''''''
          call fpass("Write","Feature are write in the qtptest text file") 
          ''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
    
    End If
qfile.Close
Set qfile=nothing
E_time = timer
Services.EndTransaction "Feature_type_in_txt_file"
TT_time = E_time - S_time

'''''''''''''''''''''''''''''''''''''''Reporter'''''''''''''''''''''''''''         
call report("Step_4","Feature_type_in_txt_file","PASS",Time,Date,TT_time)
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

'=========================================================================================================================================
'=========================================================================================================================================


'============================================================Buy page=====================================================================
'=========================================================================================================================================
Services.StartTransaction "Buy_page_open_&_verify_prod_price"
S_time = timer
Browser("Online Shopping India").Page("HP Core i7 - (8 GB/256").WebButton("BUY NOW").Click
Prod_price = Browser("HP Core i7 - (8 GB/256").Page("HP APU Quad Core A8 -").WebElement("Price").GetROProperty("innertext")
Price = Browser("HP Core i7 - (8 GB/256").Page("Flipkart.com: Secure Payment:").WebTable("Computer").GetCellData(1,4)
Price =Replace(Price,"Rs.","₹")
If Prod_price = Item_price Then
	If Price =  Item_price Then
	
	     ''''''''''''''''''''''''''''''''''''Reporter''''''''''''''''''''''''''''''''''''''
	     call fpass("Check","Both the price are same") 
         call report("Step_5","Buy_page_open_&_verify_prod_price","PASS",Time,Date,TT_time)
         ''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
         
    End If
else

  '''''''''''''''''''Reporter'''''''''''''''''''''''
  call ffail("Check","Both the price are not same")
  '''''''''''''''''''''''''''''''''''''''''''''''''' 
  
End If
Browser("HP Core i7 - (8 GB/256").Page("Flipkart.com: Secure Payment:").Link("Continue").Click
E_time = timer
Services.EndTransaction "Buy_page_open_&_verify_prod_price"
TT_time = E_time - S_time

'''''''''''''''''''''''''''''''''''''''Reporter'''''''''''''''''''''''''''''''''''         
call report("Step_6","Buy_page_open_&_verify_prod_price","PASS",Time,Date,TT_time)
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
'=========================================================================================================================================
'=========================================================================================================================================


'====================================================Zip_the_file=========================================================================
'=========================================================================================================================================
'Set fso=createobject("Scripting.FileSystemObject")
'Services.StartTransaction "Zip_file"
'S_time = timer
'call Zipfile(TargetZipFileName)
'     If fso.FileExists("F:\"&TargetZipFileName&".rar")=TRUE Then 
'            E_time = timer
'            Services.EndTransaction "Zip_file"
'            TT_time = E_time - S_time 
'            
'            '''''''''''''''''''''''''''''''''''''''Reporter'''''''''''''''''''''''''''''''''''         
'            call report("Step_7","File_is_zipped","PASS",Time,Date,TT_time)
'            ''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''             
'    
'     End if
'=========================================================================================================================================
'=========================================================================================================================================
