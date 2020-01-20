// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('teste_nome_menor_2', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('firefox').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('teste_nome_menor_2', async function() {
    await driver.get("http://localhost:8081/cadastroAdm")
    await driver.manage().window().setRect(1284, 812)
    await driver.findElement(By.css(".container:nth-child(4) > .row")).click()
    await driver.findElement(By.name("nome")).click()
    await driver.findElement(By.name("nome")).sendKeys("B")
    await driver.findElement(By.css(".container:nth-child(4) > .row")).click()
    await driver.findElement(By.name("email")).click()
    await driver.findElement(By.name("email")).sendKeys("bruno@gmail.com")
    await driver.findElement(By.css(".container:nth-child(4) > .row")).click()
    await driver.findElement(By.name("senha")).click()
    await driver.findElement(By.name("senha")).sendKeys("12345678")
    await driver.findElement(By.name("senha2")).click()
    await driver.findElement(By.name("senha2")).sendKeys("12345678")
    await driver.findElement(By.name("estado")).click()
    {
      const dropdown = await driver.findElement(By.name("estado"))
      await dropdown.findElement(By.xpath("//option[. = 'Piauí']")).click()
    }
    await driver.findElement(By.css("option:nth-child(4)")).click()
    await driver.findElement(By.css(".btn-outline-secondary")).click()
    await driver.findElement(By.css(".container:nth-child(4) > .row")).click()
    await driver.findElement(By.css(".alert")).click()
    assert(await driver.findElement(By.css(".alert")).getText() == "Nome inválido")
  })
})
