RunAction "login", oneIteration
RunAction "book_flight", oneIteration, "sourabh"
RunAction "update_flight", oneIteration, Parameter("book_flight", "order_no")
RunAction "delete_flight", oneIteration, Parameter("book_flight", "order_no")