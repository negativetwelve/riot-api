// Libraries
import API from "handy-api";

// App
import SummonerAPI from "./modules/SummonerAPI.js";

/**
 * Represents the client that connects to the Riot Games API.
 */
class RiotAPI {
  // --------------------------------------------------
  // Initialize
  // --------------------------------------------------
  constructor({ apiKey, region }) {
    const baseUrl = `https://${region}.api.riotgames.com`;
    this.apiKey = apiKey;
    this.api = new API.default({ baseUrl });
  }

  get headers() {
    return {
      "Content-Type": "application/json",
    };
  }

  // --------------------------------------------------
  // Request
  // --------------------------------------------------
  async request({ method, path, params }) {
    return this.api.request({
      method,
      path,
      params: {
        ...params,
        api_key: this.apiKey,
      },
      headers: this.headers,
    });
  }

  // --------------------------------------------------
  // Methods
  // --------------------------------------------------
  get summoner() {
    return new SummonerAPI({ api: this });
  }
}

export default RiotAPI;
