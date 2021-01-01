import { RiotAPI } from "../src/index.js";

const run = async () => {
  const api = new RiotAPI({ apiKey: process.env.RIOT_API_KEY, region: "na1" });
  const summoner = await api.summoner.getBySummonerName({
    summonerName: "I AM METAPOD",
  });

  console.log({ summoner });

  const matches = await api.match.getListByAccountId({
    accountId: summoner.accountId,
  });

  const match = await api.match.getByGameId({
    gameId: matches[0].gameId,
  });

  console.log({ match });
};

run();
