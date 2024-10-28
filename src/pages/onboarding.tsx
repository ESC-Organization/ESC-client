import { useEffect, useState } from 'react';
import { useUserStore } from '@/store/useUserStore';
import { UserInfo } from '@/types/schemas';

const apiUrl = import.meta.env.VITE_API;

export default function RankingPage() {
  const [rankingData, setRankingData] = useState<UserInfo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // zustand 스토어에서 전화번호 불러오기
  const phoneNumber = useUserStore((state) => state.phone);

  useEffect(() => {
    const fetchRankingData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${apiUrl}/ranking`);

        if (!response.ok) {
          throw new Error('Failed to fetch ranking data');
        }

        const data = await response.json();
        setRankingData(data);
        setError(null);
      } catch (err) {
        console.error('Error fetching ranking data:', err);
        setError('Failed to load ranking data.');
      } finally {
        setLoading(false);
      }
    };

    fetchRankingData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">Ranking</h2>

      {/* 전화번호 표시 */}
      <div className="mb-4">
        {phoneNumber ? (
          <p>Phone Number: {phoneNumber}</p>
        ) : (
          <p>No phone number saved.</p>
        )}
      </div>

      <div className="space-y-2">
        {rankingData.map((rank, index) => (
          <div key={index} className="p-2 border rounded">
            <p>Rank: {rank.phone}</p>
            <p>Nickname: {rank.nickname}</p>
            <p>Score: {rank.stageStatus}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
