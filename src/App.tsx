import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import QuizOne from './pages/quiz1/QuizOne';
import QuizTwo from './pages/quiz2/QuizTwo';
import QuizThree from './pages/quiz3/QuizThree';
import QuizFour from './pages/quiz4/QuizFour';
import QuizFive from './pages/quiz5/QuizFive';
import Final from './pages/final/Final';
import Ending from './pages/ending/Ending';
import Ranking from './pages/prolog/Ranking';
import ProtectedRoute from './component/route/ProtectRouter';
import Home from './pages/prolog/Home';
import QRPage from './pages/qr/QRPage';
import Prolog from '@/pages/prolog/Prolog';
import Play from '@/pages/prolog/Play';
import CharacterSelection from '@/pages/prolog/CharacterSelection';
import Login from '@/pages/prolog/Login';
import Main from '@/pages/main-page';

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
    path: '/prolog',
    element: <Prolog />,
  },
  {
    path: '/character-selection',
    element: <CharacterSelection />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  { path: '/ranking', element: <Ranking /> },
  {
    element: <ProtectedRoute />, // 로그인 해야만 들어올 수 있는 페이지
    children: [
      { path: '/play', element: <Play /> },
      { path: '/quiz1', element: <QuizOne /> },
      { path: '/quiz2', element: <QuizTwo /> },
      { path: '/quiz3', element: <QuizThree /> },
      { path: '/quiz4', element: <QuizFour /> },
      { path: '/quiz5', element: <QuizFive /> },
      { path: '/final', element: <Final /> },
      { path: '/ending', element: <Ending /> },
      { path: '/qr', element: <QRPage /> },
    ],
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
