// App
import Summoner from "./Summoner.js";

/**
 * Represents the Summoner API
 */
class SummonerAPI {
  // --------------------------------------------------
  // Constructor
  // --------------------------------------------------
  constructor({ api }) {
    this.api = api;
  }

  // --------------------------------------------------
  // GET
  // --------------------------------------------------
  async getBySummonerName({ summonerName }) {
    const response = await this.api.request({
      method: "GET",
      path: `/lol/summoner/v4/summoners/by-name/${summonerName}`,
      params: {},
    });

    const json = await response.json();
    const { status } = response;

    if (status >= 200 && status < 300) {
      return new Summoner(json);
    }

    // If the request failed, we need to throw an error with the text.
    const error = new Error(response.statusText);

    error.response = response;
    throw error;
  }
}

export default SummonerAPI;
