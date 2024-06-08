import md5 from "md5";

const time = Number(new Date());
const keyPu = "1819332dc7d58586ce9a9bc528e0b7b2";
const keyPr = "fbdcd44109e6c3664d1217c42bc25417a9421498";
const hash = md5(time + keyPr + keyPu);

export async function api() {
  const response = await fetch (
    `https://gateway.marvel.com:443/v1/public/characters?limit=15&ts=${time}&apikey=${keyPu}&hash=${hash}`
  );
  const json = await response.json()

  return json.data.results;
}
