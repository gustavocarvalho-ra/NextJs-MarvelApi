// import md5 from "md5";
// import { useState } from "react";

// const time = Number(new Date());
// const keyPu = "1819332dc7d58586ce9a9bc528e0b7b2";
// const keyPr = "fbdcd44109e6c3664d1217c42bc25417a9421498";
// const hash = md5(time + keyPr + keyPu);

// const [search, setSearch] = useState<string>("")

// export async function api() {
//   const test = search !== "" ? `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${search}&limit=20&ts=${time}&apikey=${keyPu}&hash=${hash}` : `https://gateway.marvel.com:443/v1/public/characters?limit=20&ts=${time}&apikey=${keyPu}&hash=${hash}`

//   const response = await fetch (
//     test
//   );

//   const json = await response.json()
//   return json.data.results;
// }
