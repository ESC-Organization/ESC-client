import { useQuery, useMutation } from '@tanstack/react-query';
import apiClient from '@/api/client';
import { API_ENDPOINTS } from '@/api/endpoints';
import {
  UserInfo,
  Ranking,
  LoginCredentials,
  CoinUpdateParams,
  QuizSubmissionParams,
} from '@/types/schemas';

// 로그인
const loginUser = async (credentials: LoginCredentials) => {
  const { data } = await apiClient.post(API_ENDPOINTS.LOGIN, credentials);
  return data;
};

export const useLoginUser = (options = {}) => {
  return useMutation({
    mutationFn: loginUser,
    onError: (error) => {
      console.warn('Login error:', error);
    },
    ...options,
  });
};

// 랭킹 조회
const getRanking = async (): Promise<UserInfo[]> => {
  const { data } = await apiClient.get(API_ENDPOINTS.RANKING);
  return data;
};

export const useRanking = () => {
  return useQuery({
    queryKey: ['ranking'],
    queryFn: getRanking,
    initialData: [],
  });
};

// 유저 정보 조회
const getUserInfo = async (phone: string): Promise<UserInfo> => {
  const { data } = await apiClient.get(
    API_ENDPOINTS.GET_INFO.replace(':phone', phone)
  );
  return data;
};

export const useUserInfo = (phone: string, options = {}) => {
  return useQuery({
    queryKey: ['userInfo', phone],
    queryFn: () => getUserInfo(phone),
    ...options,
  });
};

// 코인 업데이트
const putCoin = async ({ phone, code }: CoinUpdateParams) => {
  const endpoint = API_ENDPOINTS.PUT_COIN.replace(':phone', phone).replace(
    ':code',
    code
  );
  const { data } = await apiClient.put(endpoint);
  return data;
};

export const usePutCoin = (options = {}) => {
  return useMutation({
    mutationFn: putCoin,
    onError: (error) => {
      console.warn('Put Coin error:', error);
    },
    ...options,
  });
};

// 퀴즈 제출
const submitQuiz = async ({
  phone,
  answer,
}: QuizSubmissionParams): Promise<any> => {
  const endpoint = API_ENDPOINTS.PUT_QUIZ.replace(':phone', phone).replace(
    ':answer',
    answer
  );
  const { data } = await apiClient.put(endpoint);
  return data;
};

export const useSubmitQuiz = (options = {}) => {
  return useMutation({
    mutationFn: submitQuiz,
    onError: (error) => {
      console.warn('Submit Quiz error:', error);
    },
    ...options,
  });
};
