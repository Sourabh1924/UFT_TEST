Before running the test cases in this framework, please make sure that - 

1) both the function libraries are associated with all the 3 test cases.
2) object repository is correctly associated to all the 3 test cases.
3) provide the correct value for 'sExcelLocation' variable in 'FrameworkRelatedFunctionLibrary'.
4) close the test case flow excel sheet before executing the test cases.


FLOW OF THE TEST CASES:

1) TC_01_CreateOrder: Login to Application -> Create a New Order
2) TC_02_ModifyOrder: Login to Application -> Create a New Order -> Open the Same Order -> Update the Order
3) TC_03_DeleteOrder: Login to Application -> Create a New Order -> Open the Same Order -> Delete the Order