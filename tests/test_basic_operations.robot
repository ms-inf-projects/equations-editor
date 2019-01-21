*** Settings ***
Library  SeleniumLibrary


*** Variables ***
${PAGE URL}     http://localhost:8080
${BROWSER}      Chrome


*** Test Cases ***
The user can use square
    Set Screenshot Directory    ${OUTPUT_DIR}//tests
    Open browser    http://localhost:8080   Chrome
    Click Element   //img[contains(@class,'empty-input-img')]
    Click Element   //span[contains(text(),'√')]
    Click Button    css:button[type='button']
    Click Button    //button[contains(text(), 'Process to latex')]
    Element Text Should Be    //div[contains(@class, 'latex-display')]  \\sqrt
    Close All Browsers

The user can use times
    Set Screenshot Directory    ${OUTPUT_DIR}//tests
    Open browser    http://localhost:8080   Chrome
    Click Element   //img[contains(@class,'empty-input-img')]
    Click Element   //span[contains(text(),'·')]
    Click Button    css:button[type='button']
    Click Button    //button[contains(text(), 'Process to latex')]
    Element Text Should Be    //div[contains(@class, 'latex-display')]  \\times
    Close All Browsers

The user can use plus
    Set Screenshot Directory    ${OUTPUT_DIR}//tests
    Open browser    http://localhost:8080   Chrome
    Click Element   //img[contains(@class,'empty-input-img')]
    Click Element   //span[contains(text(),'+')]
    Click Button    css:button[type='button']
    Click Button    //button[contains(text(), 'Process to latex')]
    Element Text Should Be    //div[contains(@class, 'latex-display')]  +
    Close All Browsers

The user can use mius
    Set Screenshot Directory    ${OUTPUT_DIR}//tests
    Open browser    http://localhost:8080   Chrome
    Click Element   //img[contains(@class,'empty-input-img')]
    Click Element   //span[contains(text(),'-')]
    Click Button    css:button[type='button']
    Click Button    //button[contains(text(), 'Process to latex')]
    Element Text Should Be    //div[contains(@class, 'latex-display')]  -
    Close All Browsers

The user can use equals
    Set Screenshot Directory    ${OUTPUT_DIR}//tests
    Open browser    http://localhost:8080   Chrome
    Click Element   //img[contains(@class,'empty-input-img')]
    Click Element   //span[contains(text(),'=')]
    Click Button    css:button[type='button']
    Click Button    //button[contains(text(), 'Process to latex')]
    Element Text Should Be    //div[contains(@class, 'latex-display')]  =
    Close All Browsers

The user can use lesser than
    Set Screenshot Directory    ${OUTPUT_DIR}//tests
    Open browser    http://localhost:8080   Chrome
    Click Element   //img[contains(@class,'empty-input-img')]
    Click Element   //span[contains(text(),'<')]
    Click Button    css:button[type='button']
    Click Button    //button[contains(text(), 'Process to latex')]
    Element Text Should Be    //div[contains(@class, 'latex-display')]  <
    Close All Browsers

The user can use brackets
    Set Screenshot Directory    ${OUTPUT_DIR}//tests
    Open browser    http://localhost:8080   Chrome
    Click Element   //img[contains(@class,'empty-input-img')]
    Click Element   //img[contains(@src, 'heqe+t4CfBo4DzgD2Dz8d+')]
    Click Button    css:button[type='button']
    Click Button    //button[contains(text(), 'Process to latex')]
    Element Text Should Be    //div[contains(@class, 'latex-display')]  []
    Close All Browsers

The user can use square brackets
    Set Screenshot Directory    ${OUTPUT_DIR}//tests
    Open browser    http://localhost:8080   Chrome
    Click Element   //img[contains(@class,'empty-input-img')]
    Click Element   //img[contains(@src,'brackets_icon.961da933.png')]
    Click Button    css:button[type='button']
    Click Button    //button[contains(text(), 'Process to latex')]
    Element Text Should Be    //div[contains(@class, 'latex-display')]  ()
    Close All Browsers

The user can use bigger than
    Set Screenshot Directory    ${OUTPUT_DIR}//tests
    Open browser    http://localhost:8080   Chrome
    Click Element   //img[contains(@class,'empty-input-img')]
    Click Element   //span[contains(text(),'>')]
    Click Button    css:button[type='button']
    Click Button    //button[contains(text(), 'Process to latex')]
    Element Text Should Be    //div[contains(@class, 'latex-display')]  >
    Close All Browsers

The user can use integral
    Set Screenshot Directory    ${OUTPUT_DIR}//tests
    Open browser    http://localhost:8080   Chrome
    Click Element   //div[contains(@class, 'change-palet-btn right')]
    Click Element   //img[contains(@class,'empty-input-img')]
    Click Element   //span[contains(text(),'∫')]
    Click Button    css:button[type='button']
    Click Button    //button[contains(text(), 'Process to latex')]
    Element Text Should Be    //div[contains(@class, 'latex-display')]  \\int
    Close All Browsers

The user can use sum operator
    Set Screenshot Directory    ${OUTPUT_DIR}//tests
    Open browser    http://localhost:8080   Chrome
    Click Element   //div[contains(@class, 'change-palet-btn right')]
    Click Element   //img[contains(@class,'empty-input-img')]
    Click Element   //span[contains(text(),'Σ')]
    Click Button    css:button[type='button']
    Click Button    //button[contains(text(), 'Process to latex')]
    Element Text Should Be    //div[contains(@class, 'latex-display')]  \\sum
    Close All Browsers
