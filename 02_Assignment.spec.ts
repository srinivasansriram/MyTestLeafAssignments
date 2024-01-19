import { chromium, test  } from "@playwright/test";

test.only('02_Assignment Edit Lead',async () => {


    //setup
    const browser = await chromium.launch();
    const browserContext = await browser.newContext();
    const page = await browserContext.newPage();


    //Test steps
    await page.goto("http://leaftaps.com/opentaps/control/main");
    
    //Login
    await page.fill("#username", "Demosalesmanager");
    await page.fill("[id='password']", "crmsfa");
    await page.click(".decorativeSubmit");


    //Click CRM/SFA
    await page.click("text=CRM/SFA");


    //Click Leads
    await page.click("text=Leads");


    //Click Create Lead
    await page.click("text = Create Lead");


    //Enter the company name
    await page.fill("#createLeadForm_companyName", "Google");



    //Enter the first name
    await page.locator("[name='firstName']").nth(2).fill("Srini");


    //Enter the last name
    await page.fill("#createLeadForm_lastName", "S");


    //Click Submit
    await page.click(".smallSubmit");
    
    //Verify the status
    const status = await page.innerText("#viewLead_statusId_sp");
    console.log(`The status of the lead is ${status}`);

    await page.locator("//*[normalize-space(text())='Edit']").click();

    await page.locator("[name='companyName']").nth(1).fill("microsoft");

    await page.locator(".smallSubmit").nth(0).click();


})