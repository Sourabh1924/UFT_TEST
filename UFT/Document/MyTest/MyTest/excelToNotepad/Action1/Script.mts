Set objxl = createobject("excel.application")
xlSheetPath = "C:\Documents and Settings\yogesh\Desktop\MyTest\Line-Items.xls"

strError = ""
mainListItem = getDataFromExcel(xlSheetPath,strError)
print mainListItem(0)
print mainListItem(1)
print mainListItem(2)















