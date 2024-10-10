import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import TestPage from '@/pages/test-page';
import Main from '@/pages/main-page';
import Onboarding from '@/pages/onboarding';
import StepOne from './pages/quiz/StepOne';
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
    path: '/step1',
    element: <StepOne />,
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
