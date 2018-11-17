@echo off

IF "%1" == "pdf" GOTO CompilePdf
IF "%1" == "epub" GOTO CompileEpub
IF "%1" == "html" GOTO CompileHtml
IF "%1" == "all" GOTO CompileAll
IF "%1" == "/?" GOTO Help
IF "%1" == "-h" GOTO Help
IF "%1" == "-help" GOTO Help
IF "%1" == "--h" GOTO Help
IF "%1" == "--help" GOTO Help

:CompileHtml
echo Building HTML...
"C:\Program Files\R\R-3.5.1\bin\x64\Rscript.exe" -e "bookdown::render_book('content/index.Rmd', 'bookdown::gitbook')"
GOTO End

:CompilePdf
echo Building PDF...
"C:\Program Files\R\R-3.5.1\bin\x64\Rscript.exe" -e "bookdown::render_book('content/index.Rmd', 'bookdown::pdf_book')"
GOTO End

:CompileEpub
echo Building EPUB...
"C:\Program Files\R\R-3.5.1\bin\x64\Rscript.exe" -e "bookdown::render_book('content/index.Rmd', 'bookdown::epub_book')"
GOTO End

:CompileAll
echo Building HTML PDF EPUB...
"C:\Program Files\R\R-3.5.1\bin\x64\Rscript.exe" -e "bookdown::render_book('content/index.Rmd', 'bookdown::gitbook')"
"C:\Program Files\R\R-3.5.1\bin\x64\Rscript.exe" -e "bookdown::render_book('content/index.Rmd', 'bookdown::pdf_book')"
"C:\Program Files\R\R-3.5.1\bin\x64\Rscript.exe" -e "bookdown::render_book('content/index.Rmd', 'bookdown::epub_book')"
GOTO End

:Help
echo Usage: build [pdf] [html] [epub] [all]
echo   html ..... Build HTML (default when no argument is passed)
echo   pdf ...... Build PDF
echo   epub ..... Build EPUB
echo   all ...... Build HTML, PDF and EPUB
GOTO End

:End