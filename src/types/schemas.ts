export interface UserInfo {
  phone: number;
  nickname: string;
  stageStatus: number;
  coin: number;
  qr1Used: boolean;
  qr2Used: boolean;
  qr3Used: boolean;
  qr4Used: boolean;
  qr5Used: boolean;
  qr6Used: boolean;
  qr7Used: boolean;
  qr8Used: boolean;
  qr9Used: boolean;
  qr10Used: boolean;
  initTime: string;
  recordTime: string;
}

export interface Ranking {
  rank: number;
  nickname: string;
  score: number;
}

export interface LoginCredentials {
  nickname: string;
  phone: string;
  character: string;
}

export interface CoinUpdateParams {
  phone: string;
  code: string;
}

export interface QuizSubmissionParams {
  phone: string;
  correct: string;
}
