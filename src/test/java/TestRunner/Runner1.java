package TestRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="src/test/java/Features1",
glue="Pageobjects1",
format={"pretty","html:test-output","json:json-output/cucumber.json","junit:junit_xml/cucumber.xml"},
monochrome=true,strict=true,//will check if any step is not defined in step definition file 
dryRun=false)
public class Runner1 {

}
