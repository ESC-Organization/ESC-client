export const API_ENDPOINTS = {
  LOGIN: '/login', // post - 로그인
  RANKING: '/ranking', // get - 랭킹
  GET_INFO: '/me?phone=:phone', // get - 유저 정보
  PUT_COIN: '/coin?phone=:phone&code=:code', // put - 코인
  PUT_QUIZ: '/submit?phone=:phone&correct=:correct&stage=:stage', // put - 퀴즈 제출
};
