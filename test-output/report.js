$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("jio.feature");
formatter.feature({
  "line": 1,
  "name": "print all the masalas and spices from masalas page",
  "description": "",
  "id": "print-all-the-masalas-and-spices-from-masalas-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "print all the masalas and spices from masalas page",
  "description": "",
  "id": "print-all-the-masalas-and-spices-from-masalas-page;print-all-the-masalas-and-spices-from-masalas-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "open the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "navigate to \"https://www.koovs.com/\"",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "enter \"\u003cbrands\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "hover mouse on men",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "click on jeans",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "print all the final prices of the masala spices",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "close the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "print-all-the-masalas-and-spices-from-masalas-page;print-all-the-masalas-and-spices-from-masalas-page;",
  "rows": [
    {
      "cells": [
        "brands"
      ],
      "line": 14,
      "id": "print-all-the-masalas-and-spices-from-masalas-page;print-all-the-masalas-and-spices-from-masalas-page;;1"
    },
    {
      "cells": [
        "shirt"
      ],
      "line": 15,
      "id": "print-all-the-masalas-and-spices-from-masalas-page;print-all-the-masalas-and-spices-from-masalas-page;;2"
    },
    {
      "cells": [
        "t-shirt"
      ],
      "line": 16,
      "id": "print-all-the-masalas-and-spices-from-masalas-page;print-all-the-masalas-and-spices-from-masalas-page;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
  "name": "print all the masalas and spices from masalas page",
  "description": "",
  "id": "print-all-the-masalas-and-spices-from-masalas-page;print-all-the-masalas-and-spices-from-masalas-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "open the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "navigate to \"https://www.koovs.com/\"",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "enter \"shirt\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "hover mouse on men",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "click on jeans",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "print all the final prices of the masala spices",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefintion.open_the_browser()"
});
formatter.result({
  "duration": 8014744300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.koovs.com/",
      "offset": 13
    }
  ],
  "location": "Stepdefintion.navigate_to(String)"
});
formatter.result({
  "duration": 25931610000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shirt",
      "offset": 7
    }
  ],
  "location": "Stepdefintion.enter(String)"
});
formatter.result({
  "duration": 750089400,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefintion.hover_mouse_on_men()"
});
formatter.result({
  "duration": 462677600,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefintion.click_on_jeans()"
});
formatter.result({
  "duration": 711758700,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefintion.print_all_the_final_prices_of_the_masala_spices()"
});
formatter.result({
  "duration": 5860128100,
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cdiv class\u003d\"infoView\" data-reactid\u003d\"1292\"\u003e...\u003c/div\u003e is not clickable at point (619, 528). Other element would receive the click: \u003cdiv class\u003d\"message\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d86.0.4240.198)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-I27NA7P\u0027, ip: \u0027192.168.1.8\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.198, chrome: {chromedriverVersion: 85.0.4183.87 (cd6713ebf92fa..., userDataDir: C:\\Users\\HP\\AppData\\Local\\T...}, goog:chromeOptions: {debuggerAddress: localhost:58681}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 505efce31f2f8e1e89bb80df34efaa16\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy15.click(Unknown Source)\r\n\tat jiopageobjects.Koovs.shirt(Koovs.java:53)\r\n\tat jiopageobjects.Stepdefintion.print_all_the_final_prices_of_the_masala_spices(Stepdefintion.java:64)\r\n\tat ✽.Then print all the final prices of the masala spices(jio.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Stepdefintion.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 16,
  "name": "print all the masalas and spices from masalas page",
  "description": "",
  "id": "print-all-the-masalas-and-spices-from-masalas-page;print-all-the-masalas-and-spices-from-masalas-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "open the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "navigate to \"https://www.koovs.com/\"",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "enter \"t-shirt\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "hover mouse on men",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "click on jeans",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "print all the final prices of the masala spices",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefintion.open_the_browser()"
});
formatter.result({
  "duration": 6370160600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.koovs.com/",
      "offset": 13
    }
  ],
  "location": "Stepdefintion.navigate_to(String)"
});
formatter.result({
  "duration": 22503526600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "t-shirt",
      "offset": 7
    }
  ],
  "location": "Stepdefintion.enter(String)"
});
formatter.result({
  "duration": 239911600,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefintion.hover_mouse_on_men()"
});
formatter.result({
  "duration": 412993200,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefintion.click_on_jeans()"
});
formatter.result({
  "duration": 1094588000,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefintion.print_all_the_final_prices_of_the_masala_spices()"
});
formatter.result({
  "duration": 5768026900,
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cdiv class\u003d\"infoView\" data-reactid\u003d\"884\"\u003e...\u003c/div\u003e is not clickable at point (619, 528). Other element would receive the click: \u003cdiv class\u003d\"message\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d86.0.4240.198)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-I27NA7P\u0027, ip: \u0027192.168.1.8\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.198, chrome: {chromedriverVersion: 85.0.4183.87 (cd6713ebf92fa..., userDataDir: C:\\Users\\HP\\AppData\\Local\\T...}, goog:chromeOptions: {debuggerAddress: localhost:58773}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: e59ec31d37b501996452b8c05363ead3\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy15.click(Unknown Source)\r\n\tat jiopageobjects.Koovs.shirt(Koovs.java:53)\r\n\tat jiopageobjects.Stepdefintion.print_all_the_final_prices_of_the_masala_spices(Stepdefintion.java:64)\r\n\tat ✽.Then print all the final prices of the masala spices(jio.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Stepdefintion.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});