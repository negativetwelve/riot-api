// App
import Match from "../models/Match.js";

/**
 * Represents the Match API
 */
class MatchAPI {
  // --------------------------------------------------
  // Constructor
  // --------------------------------------------------
  constructor({ api }) {
    this.api = api;
  }

  // --------------------------------------------------
  // GET
  // --------------------------------------------------
  async getListByAccountId({ accountId }) {
    const response = await this.api.request({
      method: "GET",
      path: `/lol/match/v4/matchlists/by-account/${accountId}`,
      params: {},
    });

    const json = await response.json();
    const { status } = response;

    if (status >= 200 && status < 300) {
      return json.matches.map((match) => new Match(match));
    }

    // If the request failed, we need to throw an error with the text.
    const error = new Error(response.statusText);

    error.response = response;
    throw error;
  }

  async getByGameId({ gameId }) {
    const response = await this.api.request({
      method: "GET",
      path: `/lol/match/v4/matches/${gameId}`,
      params: {},
    });

    const json = await response.json();
    const { status } = response;

    if (status >= 200 && status < 300) {
      return new Match(json);
    }

    // If the request failed, we need to throw an error with the text.
    const error = new Error(response.statusText);

    error.response = response;
    throw error;
  }
}

export default MatchAPI;
