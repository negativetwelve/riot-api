import { RiotAPI } from "riot-sdk";

const run = async () => {
  const api = new RiotAPI({ apiKey: process.env.RIOT_API_KEY, region: "na1" });
  const summoner = await api.summoner.getBySummonerName({
    summonerName: "I AM METAPOD",
  });

  console.log({ summoner });
};

run();
