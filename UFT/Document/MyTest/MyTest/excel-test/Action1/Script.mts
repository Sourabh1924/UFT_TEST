''path="C:\Documents and Settings\yogesh\Desktop\MyTest\test.xls"


'------------------------------------ Calling the fGetUsrData() ----------------------------
'
'Set objxl=createObject("excel.application")
'Set objUsrDic = CreateObject("Scripting.Dictionary")
'strSheetType = "Sheet2"
'strError = ""
'
'call fGetUsrData(objxl,objUsrDic,strSheetType,strError)
'''        Printing the Keys and items of Dictionary Object
'		usrDicItems = objUsrDic.Items 'Get the items.
'		usrDicKeys = objUsrDic.Keys 'Get the keys.
'		For i = 0 To objUsrDic.Count-1 'Iterate the array.
'		print  usrDicKeys(i) & " : " & usrDicItems(i)
'		Next


'---------------------------------------- Calling the fGetInputData() --------------------------------

'Set objxl=createObject("excel.application")
'Set objDocIdDic = CreateObject("Scripting.Dictionary")
'Set objPMODic = CreateObject("Scripting.Dictionary")
'Set objInitialDic = CreateObject("Scripting.Dictionary")
'Set objTextDic = CreateObject("Scripting.Dictionary")
'strSheetType = "Sheet1"
'strError = ""
'
'Call fGetInputData(objxl,objDocIdDic,objPMODic,objInitialDic,objTextDic,strSheetType,strError)
'
''    Printing The Keys And Items Of Dictionary Object
'Arrdociditems = Objdociddic.Items 'Get The Items.
'Arrdocidkeys = Objdociddic.Keys 'Get The Keys.
'Arrpmoitems = Objpmodic.Items 'Get The Items.
'Arrpmokeys = Objpmodic.Keys 'Get The Keys.
'Arrinitialitems = Objinitialdic.Items 'Get The Items.
'Arrinitialkeys = Objinitialdic.Keys 'Get The Keys.
'Arrtextitems = Objtextdic.Items 'Get The Items.
'Arrtextkeys = Objtextdic.Keys 'Get The Keys.
'For I = 0 To Objdociddic.Count-1 'Iterate The Array.
'Print  Arrdocidkeys(I) & " : " & Arrdociditems(I) & "!!" & Arrpmokeys(I) & " : " & Arrpmoitems(I) & "!!" & Arrinitialkeys(I) & " : " & Arrinitialitems(I) & "!!" & Arrtextkeys(I) & " : " & Arrtextitems(I) 
'Next

'--------------------------------------- Calling the fStatus() ------------------------------

'  Set objxl=createObject("excel.application")
'For i = 2 to 6
'	If i mod  2 = 0 Then
'		statusType = "Passed"
'		statusDesc = ""
'		else
'		statusType = "Failed"
'		statusDesc = "Error Description"
'     End If
'	 Call fStatus(objxl,statusType,statusDesc,"Sheet1",i)
'Next
Dim totalPage
totalPage = GetNumPagesInPDF("BPT_11_Delta_Exercise.pdf")
MsgBox totalPage


























