import { chromium, test  } from "@playwright/test";



test('03_Assignment Create Individuals',async () => {


    //setup
    const browser = await chromium.launch();
    const browserContext = await browser.newContext();
    const page = await browserContext.newPage();


    //Test steps
    await page.goto("https://login.salesforce.com/?locale=in");
    
    //Login
    await page.fill("#username", "nivas@microsoft.sandbox");
    await page.fill("[id='password']", "Pas@12345");
    await page.click("#Login");
    await page.waitForLoadState("load");

    //Click App Launcher
    await page.click(".slds-icon-waffle");
    await page.waitForLoadState("domcontentloaded");
    await page.click("//lightning-button[contains(@class,'slds-button slds-p-horizontal--small')]");
    //Click Individuals
    await page.waitForLoadState("domcontentloaded");
    await page. click("//*[normalize-space(text())='Individuals']");
    await page.waitForLoadState("domcontentloaded");
      await page. click("//*[normalize-space(text())='New']");
    await page.waitForLoadState("load");
    //Enter the Details
    let lastname = "Srini";
    await page.fill("//*[normalize-space(text())='Last Name']", lastname);
    await page. locator("//*[normalize-space(text())='Save']").nth(1).click();
    await page.waitForLoadState("domcontentloaded");
    const Leadcreated = page.locator("//*[normalize-space(text())='Name']");
    await Leadcreated.isVisible();
    console.log("Individuals is Created");
    
     


})