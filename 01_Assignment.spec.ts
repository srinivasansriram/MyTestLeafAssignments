import { chromium, test  } from "@playwright/test";



test('01_Assignment Create Lead',async () => {


    //setup
    const browser = await chromium.launch();
    const browserContext = await browser.newContext();
    const page = await browserContext.newPage();


    //Test steps
    await page.goto("https://login.salesforce.com/?locale=in");
    
    //Login
    await page.fill("#username", "nivas@microsoft.sandbox");
    await page.fill("[id='password']", "XXXXXXXXX");
    await page.click("#Login");
    await page.waitForLoadState("load");

    //Click Lead
    await page.click(".slds-icon-waffle");
    await page.waitForLoadState("domcontentloaded");
    await page.click("//lightning-button[contains(@class,'slds-button slds-p-horizontal--small')]");
    //Click Sales
    await page.waitForLoadState("domcontentloaded");
    await page. click("//*[normalize-space(text())='Sales']");
    await page.waitForLoadState("domcontentloaded");
      await page. click("[data-id='Lead']");
    await page.waitForLoadState("load");
    await page. click("//*[normalize-space(text())='New']");
    await page.waitForLoadState("load");
    //Enter the Details
    await page.locator("//*[normalize-space(text())='Salutation']").click();
    await page.click("//*[normalize-space(text())='Mr.']");
    await page.fill("//*[normalize-space(text())='Last Name']", "Nivas");
    await page.fill("//label[normalize-space(text())='Company']", "Google");
    await page. click("//*[normalize-space(text())='Save']");
    await page.waitForLoadState("domcontentloaded");
    const Leadcreated = page.locator("//p[normalize-space(text())='Company']").nth(1);
    await Leadcreated.isVisible();
    console.log("Leads name is Created");
     


})