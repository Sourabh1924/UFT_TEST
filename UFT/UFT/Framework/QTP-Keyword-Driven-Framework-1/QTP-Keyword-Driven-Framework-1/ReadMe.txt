Before running the test cases in this framework, please make sure that - 

1) the function library is correctly associated with the test case (DriverScript).
2) provide the correct value for 'sExcelLocation' variable in the function library
3) close the excel sheet before executing the test cases.

FLOW OF THE TEST CASES:

1) TC_01_CreateOrder: Login to Application -> Create a New Order
2) TC_02_ModifyOrder: Login to Application -> Create a New Order -> Open the Same Order -> Update the Order
3) TC_03_DeleteOrder: Login to Application -> Create a New Order -> Open the Same Order -> Delete the Order