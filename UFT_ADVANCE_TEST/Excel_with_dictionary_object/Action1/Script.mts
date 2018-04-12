'================================================Using excel==========================================================
'=====================================================================================================================
''''''''''''''''''''''''''''''''''''''''''''''''''''''
''''''''''''''''''''''''''''''''''''''''''''''''''''''
Dim Account_number,Product_name,Product_code,row,col
Dim AC_no,Prod,code
Dim Exl,mysheet
''''''''''''''''''''''''''''''''''''''''''''''''''''''
''''''''''''''''''''''''''''''''''''''''''''''''''''''
Account_number = datatable.Value("Account_number")
Product_name = datatable.Value("Product_name")
Product_code = datatable.Value("Product_code")
Set Exl = createobject("excel.application")''''''''''''''''''''''''''''''''''''''''''''''''''Create excel object
Exl.Workbooks.Open "C:\Users\Yogesh\Desktop\UFT\Excel_with_dictionary_object\Practice.xlsx" 'Givinf the excel file path to open
set mysheet = Exl.ActiveWorkbook.Worksheets("Sheet1") '''''''''''''''''''''''''''''''''''''''Select the sheet
row=mysheet.usedrange.rows.count ''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''Count the rows in the sheet
   For Row_iterator = 4 To row Step 1 '''''''''''''''''''''''''''''''''''''''''''''''''''''''iteration for account number
      AC_no = mysheet.cells(Row_iterator,2) '''''''''''''''''''''''''''''''''''''''''''''''''Take account number from excel sheet to a variable
       '=========Check account number=========
       If cdbl(Account_number) = AC_no Then
       	   col=mysheet.usedrange.Columns.count ''''''''''''''''''''''''''''''''''''''''''''''Count the columns in the sheet
			    For Col_iterator = 6 To col Step 1 ''''''''''''''''''''''''''''''''''''''''''iteration for product name
			      Prod = mysheet.cells(1,Col_iterator) ''''''''''''''''''''''''''''''''''''''Take product name from excel sheet to a variable
			        '=========Check product name=========
		 			if cstr(Product_name) = Prod then
		 			     For Iterator = Col_iterator To col Step 1 ''''''''''''''''''''''''''iteration for product code
		 			     	   code = mysheet.cells(3,Iterator)  ''''''''''''''''''''''''''''Take product code from excel sheet to a variable
		 			     	      '=========Check product code=========
		 			     	      If cstr(code) = Product_code Then
		 			     	      	   Prize = mysheet.cells(Row_iterator,Iterator)
		 			    			   print Prize  '''''''''''''''''''''''''''''''''''''''''print Prize 
		 			     	      End If
		 			     Next
		 			End if
	            Next   
       End If 
   Next
Set dictionaryObj = Nothing '''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''Object release
Set Exl = nothing  ''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''Object release
'=====================================================================================================================
'=====================================================================================================================

'=====================================Using excel with dictionary object==============================================
'=====================================================================================================================
''''''''''''''''''''''''''''''''''''''''''''''''''''''
''''''''''''''''''''''''''''''''''''''''''''''''''''''
Dim Account_number,Product_name,Product_code,row,col,jump
Dim AC_no,Prod,code
Dim Exl,mysheet
''''''''''''''''''''''''''''''''''''''''''''''''''''''
''''''''''''''''''''''''''''''''''''''''''''''''''''''
Account_number = datatable.Value("Account_number")
Product_name = datatable.Value("Product_name")
Product_code = datatable.Value("Product_code")
Set Exl = createobject("excel.application")''''''''''''''''''''''''''''''''''''''''''''''''''Create excel object
Exl.Workbooks.Open "C:\Users\Yogesh\Desktop\UFT\Excel_with_dictionary_object\Practice.xlsx" 'Giving the excel file path to open
set mysheet = Exl.ActiveWorkbook.Worksheets("Sheet1") '''''''''''''''''''''''''''''''''''''''Select the sheet
row=mysheet.usedrange.rows.count ''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''Count the rows in the sheet
col=mysheet.usedrange.Columns.count ''''''''''''''''''''''''''''''''''''''''''''''Count the columns in the sheet
Set Dobj = CreateObject("Scripting.Dictionary")   
   
   For Row_iterator = 4 To row Step 1 '''''''''''''''''''''''''''''''''''''''''''''''''''''''iteration for account number
       Dobj.Add Row_iterator,mysheet.cells(Row_iterator,2) ''''''''''''''''''''''''''''''''''''''Take account number from excel sheet to a variable 
   Next
   for each record in Dobj.Keys
	   if cdbl(Account_number) = Dobj.Item(record) then
	      print Dobj.Item(record)
	      Account_row = record
   Exit for 
	   End if 
   Next
   Dobj.RemoveAll 

   For Col_iterator = 6 To col Step 1 ''''''''''''''''''''''''''''''''''''''''''iteration for product name
	   Dobj.Add Col_iterator,mysheet.cells(1,Col_iterator + jump) ''''''''''''''''''''''''''''''''''''''Take product name from excel sheet to a variable  
       jump = jump + 5
   Next 
   for each record in Dobj.Keys
	   if Product_name = cstr(Dobj.Item(record)) then
	      print Dobj.Item(record)
   Exit for 
	   End if 
   Next 
   Dobj.RemoveAll
   
   
   
   
   
   Col_iterator = 6
   For Iterator = Col_iterator To Col_iterator + 5 Step 1 ''''''''''''''''''''''''''iteration for product code
	   Dobj.Add Iterator,mysheet.cells(3,Iterator)  ''''''''''''''''''''''''''''Take product code from excel sheet to a variable   
   Next
   for each record in Dobj.Keys
	   if Product_code = cstr(Dobj.Item(record)) then
	      print Dobj.Item(record)
	      Prize = mysheet.cells(Account_row,record)
   Exit for 
	   End if 
   Next 
Set dictionaryObj = Nothing '''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''Object release
Set Exl = nothing  ''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''Object release   
