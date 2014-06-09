@echo off

:loop
IF "%1"=="" GOTO cont
IF "%1"=="u"  GOTO found 
SHIFT & GOTO loop

:found
SHIFT
echo %1
SHIFT
GOTO loop
:cont
echo end
