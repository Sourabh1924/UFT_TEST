
'''''''''''''''''''''''''''''''''''''''''''''''''''Find_data'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

'Dim con,rs
'Set con=createobject("adodb.connection")
'Set rs=createobject("adodb.recordset")
'con.open "DRIVER={Microsoft Excel Driver (*.xls, *.xlsx, *.xlsm, *.xlsb)};DBQ=C:\Users\Yogesh\Desktop\UFT\Excel_query\Cleartrip.xls;Readonly=True"
'rs.Open "Select Age from [Sheet1$] where [Name] = 'Venki'",con  
'msgbox rs.GetString
'Set rs= nothing
'Set con= nothing
'========================================================================================================================================================================

'''''''''''''''''''''''''''''''''''''''''''''''Find_multiple_data_&_print''''''''''''''''''''''''''''''''''''''''''''''

'Dim con,rs,cnt,i
'Set con=createobject("adodb.connection")
'Set rs=createobject("adodb.recordset")
'con.open "DRIVER={Microsoft Excel Driver (*.xls, *.xlsx, *.xlsm, *.xlsb)};DBQ=C:\Users\Yogesh\Desktop\UFT\Excel_query\Cleartrip.xls;Readonly=True"
'rs.Open "Select Age from [Sheet1$] where [Name] = 'Sourabh'",con   
'print rs.GetString
'Set rs= nothing
'Set con= nothing
'========================================================================================================================================================================

''''''''''''''''''''''''''''''''''''''''''''''''Write _multiple_data''''''''''''''''''''''''''''''''''''''''''''''''

'Dim conn
'Set conn=createobject("adodb.connection")
'conn.Open "Provider=Microsoft.Jet.OLEDB.4.0;" & _
'"Data Source=C:\Users\Yogesh\Desktop\UFT\Excel_query\Cleartrip.xls;Extended Properties=Excel 8.0;"
'conn.Execute "Insert into [Sheet1$] (Name,Age,Sex,Qualification) values ('Ankit',23,'M',852)"
'conn.Execute "Insert into [Sheet1$] (Name,Age,Sex,Qualification) values ('Samrat',22,'M',555)"   
'conn.Close
'Set conn= nothing
'======================================================================================================================================================================== 


''''''''''''''''''''''''''''''''''''''''''''''''''''''Update_value'''''''''''''''''''''''''''''''''''''''''''''''''''

'Set conn=createobject("adodb.connection")
'conn.open "DRIVER={Microsoft Excel Driver (*.xls, *.xlsx, *.xlsm, *.xlsb)};DBQ=C:\Users\Yogesh\Desktop\UFT\Excel_query\Cleartrip.xls;Readonly=True"
'conn.Execute "update [Sheet1$] set  [Sex] = 'F' where [Name] = 'Ankit'" 
'conn.Close
'Set conn= nothing
'=======================================================================================================================================================================


''''''''''''''''''''''''''''''''''''''''''''''''''''''Update_multiple_value'''''''''''''''''''''''''''''''''''''''''''''''''''

'Set conn=createobject("adodb.connection")
'conn.open "DRIVER={Microsoft Excel Driver (*.xls, *.xlsx, *.xlsm, *.xlsb)};DBQ=C:\Users\Yogesh\Desktop\UFT\Excel_query\Cleartrip.xls;Readonly=True"
'conn.Execute "update [Sheet1$] set  [Sex] = 'F',[Age] = 25 where [Name] = 'Ankit'"
'conn.Close
'Set conn= nothing
'=======================================================================================================================================================================

'''''''''''''''''''''''''''''''''''''''''''''''''''''Find_Column_name''''''''''''''''''''''''''''''''''''''''''''''''''

'Set conn=CreateObject("ADODB.Connection")
'conn.open "DRIVER={Microsoft Excel Driver (*.xls, *.xlsx, *.xlsm, *.xlsb)};DBQ=C:\Users\Yogesh\Desktop\UFT\Excel_query\Cleartrip.xls;Readonly=True"
'Set oRs1=conn.OpenSchema(4,Array(Empty, Empty,"Sheet1$",Empty))
'  Do Until oRS1.EOF
'     Msgbox oRs1.Fields.Item("Column_Name").Value
'     oRS1.MoveNext
'  Loop
'oRs1.Close
'conn.Close
'Set oRs1=Nothing
'Set conn=Nothing
'=======================================================================================================================================================================
