const quranList = 'https://quran.kemenag.go.id/index.php/api/v1/surat';
const quranDetail = (surahId, jmlAyat) =>
  `https://quran.kemenag.go.id/index.php/api/v1/ayatweb/${surahId}/0/0/${jmlAyat}`;
const quranBasmallah =
  'https://quran.kemenag.go.id/index.php/api/v1/ayatweb/1/0/0/1';
export { quranList, quranDetail, quranBasmallah };
