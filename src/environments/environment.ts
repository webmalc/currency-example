export const environment = {
  production: false,
  projectTitle: 'currency example',
  httpRetry: 3,
  httpDelay: 1000,
  currencyCode: 'EUR',
  currencyUpdateInterval: 10000,
  currencySources: {
    cbrJson: 'https://www.cbr-xml-daily.ru/daily_json.js',
    cbrXml: 'https://www.cbr-xml-daily.ru/daily_utf8.xml'
  }
};