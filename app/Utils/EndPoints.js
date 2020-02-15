import { BASE_URL } from 'react-native-dotenv';

const quranList = `${BASE_URL}v1/surat`;
const quranDetail = (surahId, jmlAyat) =>
  `${BASE_URL}v1/ayatweb/${surahId}/0/0/${jmlAyat}`;
export { quranList, quranDetail };
