// components/ProtectedRoute.tsx
import { Navigate, Outlet } from 'react-router-dom';
import { useUserStore } from '@/store/useUserStore';

const ProtectedRoute = ({ redirectPath = '/home' }) => {
  const isLoggedIn = useUserStore((state) => state.isLoggedIn());

  if (!isLoggedIn) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />; // 로그인된 상태면 자식 라우트 렌더링
};

export default ProtectedRoute;
