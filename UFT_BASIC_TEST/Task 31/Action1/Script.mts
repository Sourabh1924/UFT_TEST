'Check condition for correct format of date , prize of any product in decimal in regular expression.

CONDITION
 DD   (0[0-9]|1[0-2])-
MM  (0[0-9]|1[0-9]|2[0-9]|3[0-1])-
YY   ([0-2][0-1][0-9][0-9]|)
ANSWER
05-31-2099

CONDITION

SYMBOLE   .

PRIZE ([0-9][0-9]).

PRIZE AFTER DECIMAL ([0-9][0-9])

ANSWER

$21.12

CONDITION
HOUR  (0[0-9]|1[0-2]).
MIN      ([0-6][0-9]).
SEC      ([0-6][0-9])
ANSWER
12:45:56
