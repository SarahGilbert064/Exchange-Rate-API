export default class ExchangeService {
  static async getExchange(currencyType) {
    try {
    const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/${currencyType}`)
      if(!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    } catch(error) {
      return Error(error);
    }
  }
}
