Feature: close the login page and print the elements 
from dropdown
Scenario: close the login page and print the elements
Given open the browser 
Then navigate to "https://www.flipkart.com/"
Then close the login page
Then move the mouse to Electronics button and count the number of subitems in electronics
And close the browser