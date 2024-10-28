import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Landing from './pages/landing/Landing';
import QuizOne from './pages/quiz1/QuizOne';
import QuizTwo from './pages/quiz2/QuizTwo';
import Ranking from './pages/prolog/Ranking';
import QuizThree from './pages/quiz3/QuizThree';
import QuizFour from './pages/quiz4/QuizFour';
import QuizFive from './pages/quiz5/QuizFive';
import Final from './pages/final/Final';
import Ending from './pages/ending/Ending';
import LandingIntro from '@/pages/prolog/LandingIntro';
import PrologStory from '@/pages/prolog/PrologStory';
import Play from '@/pages/prolog/Play';
import CharacterSelection from '@/pages/prolog/CharacterSelection';
import Login from '@/pages/prolog/Login';
import Onboarding from '@/pages/onboarding';
import Main from '@/pages/main-page';
import TestPage from '@/pages/test-page';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/onboarding', // 삭제하기
    element: <Onboarding />,
  },
  {
    path: '/landing-intro',
    element: <LandingIntro />,
  },
  {
    path: '/character-selection', // 캐릭터 선택 페이지 추가
    element: <CharacterSelection />,
  },
  {
    path: '/login', // 로그인 페이지 추가
    element: <Login />,
  },
  {
    path: '/prolog',
    element: <PrologStory />,
  },
  {
    path: '/play',
    element: <Play />,
  },
  {
    path: '/ranking',
    element: <Ranking />,
  },
  {
    path: '/landing',
    element: <Landing />,
  },
  {
    path: '/quiz1',
    element: <QuizOne />,
  },
  {
    path: '/quiz2',
    element: <QuizTwo />,
  },
  {
    path: '/quiz3',
    element: <QuizThree />,
  },
  {
    path: '/quiz4',
    element: <QuizFour />,
  },
  {
    path: '/quiz5',
    element: <QuizFive />,
  },
  {
    path: '/final',
    element: <Final />,
  },
  {
    path: '/ending',
    element: <Ending />,
  },

  {
    path: '/test',
    element: <TestPage />,
  },
]);

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
