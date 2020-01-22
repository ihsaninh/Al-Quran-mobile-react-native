import { BASE_URL } from 'react-native-dotenv';

const quranList = `${BASE_URL}/surat`;
const quranDetail = (surahId, jmlAyat) =>
  `${BASE_URL}/ayatweb/${surahId}/0/0/${jmlAyat}`;
export { quranList, quranDetail };
