const API_KEY = "bdc_304f61667662475292422b67cb293a59";

export async function getAddress({ latitude, longitude }) {
  const res = await fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&key=${API_KEY}`,
  );
  if (!res.ok) throw Error("Failed getting address");

  const data = await res.json();
  return data;
}
