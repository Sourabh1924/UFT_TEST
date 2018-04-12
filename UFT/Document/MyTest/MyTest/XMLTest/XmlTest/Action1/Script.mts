'----------------  Read a xml file  --------------

''Create Microsoft.XMLDOM  object
'Set xmlDoc = CreateObject("Microsoft.XMLDOM")
'xmlDoc.Async = False
'
''path of XML file
'XMLDataFile="C:\Documents and Settings\yogesh\Desktop\MyTest\XMLTest\Sample.xml"
'
''Load the XML File
' xmlDoc.Load(XMLDataFile)
'
''Give the XML path of XML tag you want to access and /text() to access the value of tag.
''XML path follows the hierarchy
''XML path for author tag will start from  catalog->book->author
''so the XML path will be /catalog/book/author
''Text() will gie the value of the tag
'Set nodes = xmlDoc.SelectNodes("/catalog/book/author/text()")
'Msgbox  " total count of Author tag is " &  nodes.length
'For i = 0 To (nodes.Length - 1)
'
'Author= nodes(i).NodeValue
'
'Msgbox  "The name of Author is " & Author
'
' Next
'
''To get the description tag value in the XML file
'
'Set nodes = xmlDoc.SelectNodes("/catalog/book/description/text()")
'Msgbox  " total count of  Description tag is  " &  nodes.length 
'For i = 0 To (nodes.Length - 1)
'Descripton= nodes(i).NodeValue
'Msgbox  "The Description  is  < " & Descripton & "   >  "
' Next
'
' Set xmlDoc=nothing


'---------------  Read an xml file by tag name  ---------------------

'Set oXML = CreateObject("Microsoft.XMLDOM")
''path of XML file
'XMLDataFile="C:\Documents and Settings\yogesh\Desktop\MyTest\XMLTest\Sample.xml"
'
''Load the XML File
' oXML.Load(XMLDataFile)
'Set oConditionIds = oXML.getElementsByTagName("author")
'MsgBox "Total read attributes are : " & oConditionIds.length
'For iCnt=0 to oConditionIds.Length-1 
'     Print oConditionIds.Item(iCnt).nodeName & "::" & oConditionIds.Item(iCnt).text
'Next


'---------------  Function to read xml file by their tag name  --------------------------------------

Function XMLRead(XMLFileName, XMLTag)
        xmlDoc.load(XMLFileName)
        Set ElemList = xmlDoc.getElementsByTagName(XMLTag)
		tagValue = ElemList.item(0).Text
        XMLRead = tagValue
End Function

'---------------------------------Get the xml content by function call XMLRead()--------------------

'Set xmlDoc = CreateObject("Microsoft.XMLDOM")
'sPackageFile = "C:\Documents and Settings\yogesh\Desktop\MyTest\XMLTest\UpgradePackage.xml"
'FirstPackage = XMLRead (sPackageFile,"FirstPackage")
'print FirstPackage
'UpgradeType = XMLRead (sPackageFile,"UpgradeType")
'print UpgradeType
'NewVersion = XMLRead (sPackageFile,"NewVersion")
'print NewVersion
'OldVersion = XMLRead (sPackageFile,"OldVersion")
'print OldVersion

'-----------------------------------------------------------------------------------------------------

'------------------------  Create the xml file by Code  ------------------------------------------

' Dim objWriter,XmlWriter
' 
' '1) Create a XML Instance using DotNetFactory
' Set objWriter = DotNetFactory.CreateInstance("System.Xml.XmlWriter", "System.Xml") '’ Creates the instance for the XMLWriter
' 
' '2) creates xml document
' set XmlWriter=objWriter.Create("C:\Documents and Settings\yogesh\Desktop\MyTest\XMLTest\abc.xml") ' creates xml document
'
''3) start writing the element 
' XmlWriter.WriteStartElement("Books") '’ start writing the element
' XmlWriter.WriteStartElement("Author")
'
' '4) writes  attributes and its values to the element
' XmlWriter.WriteAttributeString "Name", "Ritesh"' writes  attributes and its values to the element
' 
' '5) ends writing the element
' XmlWriter.WriteEndElement() ' ends writing the element
' 
''6) Write as many Element you want  
' XmlWriter.WriteStartElement("Title")
'
' XmlWriter.WriteAttributeString "Title1", "QTP"'
' XmlWriter.WriteEndElement()
' XmlWriter.WriteFullEndElement()
'
' '7) Close the XMl 
'  XmlWriter.close()
'
'Set objWriter =Nothing

'-------------------------------------------------------------------------------------

'-----------------------------------   Import a xml file to an Access database  -----------
'
'XmlFilePath = "C:\Documents and Settings\yogesh\Desktop\MyTest\XMLTest\XMLFunctions\IDD0822_Payload.XML"
'TempAccessFilePath = "C:\Documents and Settings\yogesh\Desktop\MyTest\XMLTest\XMLFunctions\importedXmlFile.accdb"
'Function Import_XML_To_AccessDB(XmlFilePath,TempAccessFilePath)
''1) Create a MS Access application object'
' Set appAccess = CreateObject("Access.Application")
' 
' '2) Open MS Access database
' appAccess.OpenCurrentDatabase TempAccessFilePath
' 
' '3) Import XML file into Access 
' appAccess.ImportXML XmlFilePath
' 
' '4) Close and Exit database
' appAccess.CloseCurrentDatabase
' appAccess.Quit acExit
' 
' '5) Discard all variables    
'
' Set appAccess = Nothing
'End Function  
'
'call Import_XML_To_AccessDB(XmlFilePath,TempAccessFilePath)

'--------------------------------------------------------------------------------------------

'--------------------------------- Reading the xml element value according to attribute id ---------------------------------------------------------

P_XmlFile = "C:\Documents and Settings\yogesh\Desktop\MyTest\XMLTest\XMLFunctions\IDD0822_Payload.XML"
'pElemPath = "//ns0:PROJECT/LINEITEM/FIELDDATA_ID[@TABLE='LINEITEMFIELDDATA']/"
pElemPath = "//ns0:PROJECT/CONFIGURATIONDATA/UNITCONFIGDATA/DATA[@ID='8DB4E68902DC43FE922AB01A248F7218']/CHARACTERISTIC" '[@NAME='ZZPROJECT_ID']/text()"
'call F_ReadXml(P_XmlFile)
''Call F_GetAttributeVal(P_XmlFile,"KMAT")
'Dim xmlDoc, colNodes, objNode', attrNameVal
'Set xmlDoc = CreateObject("Msxml2.DOMDocument")
''xmlDoc.setProperty "SelectionLanguage", "XPath"
'xmlDoc.Async = "False"
'xmlDoc.Load(P_XmlFile)
'Set colNodes=xmlDoc.selectNodes(P_ElePath)
''Set colNodes=xmlDoc.getElementsByTagName("CHARACTERISTIC")
'
'
'If colNodes.length > 0 then
'    For each objNode in colNodes
'		Print objNode.Text
'            'attrNameVal=objNode.getattribute("Name")
'       'Print attrNameVal
'    Next
'
'   
'Else
'    msgbox chr(34) & "CustomerProducts" & chr(34) & " field not found."
'
'	
'End If





'For Each objNode in colNodes
'	Print objNode.Text
'Next

'---------------------------------------------------------------------------------------------------------------------------------------------------

'Dim xmlDoc, objNodeList, plot
'
'Set xmlDoc = CreateObject("Msxml2.DOMDocument")
'xmlDoc.setProperty "SelectionLanguage", "XPath"
'xmlDoc.load("C:\Documents and Settings\yogesh\Desktop\MyTest\XMLTest\XMLFunctions\IDD0822_Payload.XML")
'
'Set objNodeList = xmlDoc.getElementsByTagName("CustomerProducts")

'plot="No Value"
'If objNodeList.length > 0 then
'    For each x in objNodeList
'        JobName=x.getattribute("CustomerProductName")
'        msgbox JobName
'    Next
'Else
'    msgbox chr(34) & "CustomerProducts" & chr(34) & " field not found."
'End If




Set dicVal = CompareXmlValue(P_XmlFile,pElemPath)
arrDicKeys = dicVal.keys
arrDicItems = dicVal.items
For i=0 to dicVal.count - 1
	print arrDicKeys(i) & "==" &  arrDicItems(i)
Next

'Call F_GetAttributeVal("C:\Documents and Settings\yogesh\Desktop\MyTest\XMLTest\XMLFunctions\IDD0822_Payload.XML","NAME")


 '--------------------------------------------------  getAttribute()  ---------------------------
Function CompareXmlValue(P_XmlFile,pElemPath)
Set dicObj = CreateObject("Scripting.Dictionary")
set objXML = CreateObject("Microsoft.XMLDOM")
	objXML.async = "false"
	'-Verifying the file is loaded or not
	If Not objXML.Load(P_XmlFile) Then
		MsgBox objXML.parseError.reason
	Else
		'-Retrieveing the whole tagname
		Set objRootNodeList = objXML.DocumentElement.SelectNodes(pElemPath)
		n_states = objRootNodeList.length
			For i = 0 to n_states - 1
				set state = objRootNodeList.item(i)
				Attr = state.getAttribute("NAME")
				AttrText = state.text
				If Not isNull(Attr) Then
                    'Print Attr
					'Print AttrText
					dicObj.Add Attr,AttrText
				End If
			Next
			Set CompareXmlValue = dicObj
	End if
End Function
'-----------------------------------------------------------------------------------------------------




