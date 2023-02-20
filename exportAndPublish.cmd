@ECHO OFF
SETLOCAL
SET "sourcedir=C:\dev\nanfuen"
SET "keepfile=.gitignore"
SET "keepfile2=CNAME"
SET "keepdir=keep me"

ECHO "Cleaning release directory"

FOR /d %%a IN ("%sourcedir%\*") DO IF /i NOT "%%~nxa"=="%keepdir%" RD /S /Q "%%a"
FOR %%a IN ("%sourcedir%\*") DO IF /i NOT "%%~nxa"=="%keepfile%" IF /i NOT "%%~nxa"=="%keepfile2%" DEL "%%a"

ECHO "Export dev"

CMD /C npm run export

ECHO "Copy to release dir"
xcopy /s .\out %sourcedir% 

ECHO "Commit and push"

cd %sourcedir% 

echo "">%sourcedir%\.nojekyll

CMD /C git add .

CMD /C git commit -m "release"

CMD /C git push

GOTO :EOF