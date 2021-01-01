/**
 * Represents the Summoner
 */
class Summoner {
  // --------------------------------------------------
  // GET
  // --------------------------------------------------
  static async getBySummonerName({ api, summonerName }) {
    const response = await api.request({
      method: "GET",
      path: `/lol/summoner/v4/summoners/by-name/${summonerName}`,
      params: {},
    });

    const json = await response.json();
    const { status } = response;

    if (status >= 200 && status < 300) {
      return new this(json);
    }

    // If the request failed, we need to throw an error with the text.
    const error = new Error(response.statusText);

    error.response = response;
    throw error;
  }

  // --------------------------------------------------
  // Properties
  // --------------------------------------------------
  constructor(props) {
    this.props = props;
  }

  get id() {
    return this.props.id;
  }

  get accountId() {
    return this.props.accountId;
  }
}

export default Summoner;
