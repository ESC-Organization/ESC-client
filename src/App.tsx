import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Landing from './pages/landing/Landing';
import QuizOne from './pages/quiz1/QuizOne';
import TestPage from '@/pages/test-page';
import Main from '@/pages/main-page';
import Onboarding from '@/pages/onboarding';
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
    path: '/onboarding',
    element: <Onboarding />,
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
