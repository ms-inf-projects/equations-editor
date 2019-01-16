*** Settings ***
Library  SeleniumLibrary

*** Test Cases ***
The user can execute more complicated mathematical operation
    Open browser    http://localhost:8080   Chrome
    Click Element   //img[contains(@class,'empty-input-img')]
    Click Element   //span[contains(text(),'√')]
    Click Element   //div[contains(@class, 'equation-input base')]
    Click Element   //div[contains(@class, 'change-palet-btn right')]
    Click Element   //img[contains(@src, '/img/superscript_img.0953c6aa.png')]
    Click Element   //div[contains(@class, 'change-palet-btn right')]
    Click Element   //div[contains(@class, 'change-palet-btn right')]
    Click Element   //div[contains(@class, 'equation-input nested-input')]
    Click Element   //span[contains(text(), '2')]
    Click Element   //div[contains(@class, 'equation-input superscript nested-input')]
    Click Element   //span[contains(text(), '4')]
    Click Element   //div[contains(@class, 'equation-input degree')]
    Click Element   //span[contains(text(), '2')]
    Click Button    //button[contains(text(), 'Process to latex')]
    Element Text Should Be    //div[contains(@class, 'latex-display')]  \\sqrt[2]{2^{4} }
    Close All Browsers