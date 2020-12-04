Feature: print all the masalas and spices from masalas page

Scenario Outline: print all the masalas and spices from masalas page

Given open the browser 
Then navigate to "https://www.koovs.com/"
Then enter "<brands>"
Then hover mouse on men
Then  click on jeans
Then print all the final prices of the masala spices
And close the browser

Examples:
|brands|
|shirt|
|t-shirt|