const Constants = {
  DATA_SURAH: {
    AL_FATIHAH: 1,
    AL_TAUBAH: 9,
  },
  RESPONSE_CODE: {
    SUCCESS: 200,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    BAD_REQUEST: 400,
    CREATED: 201,
    INTERNAL_SERVER_ERROR: 500,
  },
  BASE_DIMENSIONS: {
    BASE_WIDTH: 360,
    BASE_HEIGHT: 640,
  },
  LANGUAGE: {
    EN: 'en',
    ID: 'id',
  },
  LangLists: [
    {
      title: 'Indonesia',
      langId: 'id',
    },
    {
      title: 'English',
      langId: 'en',
    },
  ],
};

export { Constants };
