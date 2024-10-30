// import { useState } from 'react';
// import { useQueryClient } from '@tanstack/react-query';
// import {
//   useUserInfo,
//   usePutCoin,
//   useSubmitQuiz,
//   useLoginUser,
//   useRanking,
// } from '@/api/hooks';

// export default function Main() {
//   const [phone, setPhone] = useState('');
//   const [nickname, setNickname] = useState('');
//   const [code, setCode] = useState('');
//   const [answer, setAnswer] = useState('');

//   const queryClient = useQueryClient();

//   // 유저 정보 조회
//   const { data: userInfo, refetch: fetchUserInfo } = useUserInfo(phone, {
//     enabled: false,
//   });

//   // 로그인
//   const { mutate: loginUser } = useLoginUser({
//     onSuccess: (data: any) => {
//       console.log('Login successful:', data);
//       queryClient.invalidateQueries({ queryKey: ['userInfo', phone] });
//     },
//     onError: (error: Error) => {
//       console.warn('Login failed:', error);
//     },
//   });

//   // 랭킹 조회
//   const { data: rankingData, refetch: fetchRanking } = useRanking();
//   console.log('🚀 ~ file: main-page.tsx:37 ~ Main ~ rankingData:', rankingData);

//   // 코인 업데이트
//   const { mutate: updateCoin } = usePutCoin({
//     onSuccess: () => {
//       console.log('Coin updated successfully');
//       queryClient.invalidateQueries({ queryKey: ['userInfo', phone] });
//     },
//   });

//   // 퀴즈 제출
//   const { mutate: submitQuiz } = useSubmitQuiz({
//     onSuccess: () => {
//       console.log('Quiz submitted successfully');
//       queryClient.invalidateQueries({ queryKey: ['userInfo', phone] });
//     },
//   });

//   const handleUserInfoFetch = () => {
//     if (!phone) return alert('Phone number is required');
//     fetchUserInfo();
//   };

//   const handleLogin = () => {
//     if (!phone || !nickname) return alert('Phone and nickname are required');
//     loginUser({ phone, nickname });
//   };

//   const handleUpdateCoin = () => {
//     if (!phone || !code) return alert('Phone number and code are required');
//     updateCoin({ phone, code });
//   };

//   const handleSubmitQuiz = () => {
//     if (!phone || !answer) return alert('Phone number and answer are required');
//     submitQuiz({ phone, answer });
//   };

//   return (
//     <div className="p-4 space-y-4">
//       <h2 className="text-lg font-bold">API 테스트</h2>

//       {/* 로그인 필드 */}
//       <div>
//         <label className="block">Phone:</label>
//         <input
//           type="text"
//           value={phone}
//           onChange={(e) => setPhone(e.target.value)}
//           className="border p-1"
//         />
//       </div>

//       <div>
//         <label className="block">Nickname:</label>
//         <input
//           type="text"
//           value={nickname}
//           onChange={(e) => setNickname(e.target.value)}
//           className="border p-1"
//         />
//       </div>

//       <button onClick={handleLogin} className="bg-blue-500 text-white p-2 mt-2">
//         로그인
//       </button>

//       {/* 유저 정보 조회 */}
//       <button
//         onClick={handleUserInfoFetch}
//         className="bg-blue-500 text-white p-2 mt-2"
//       >
//         조회
//       </button>

//       {/* 코인 업데이트 */}
//       <div>
//         <label className="block">Code (for coin update):</label>
//         <input
//           type="text"
//           value={code}
//           onChange={(e) => setCode(e.target.value)}
//           className="border p-1"
//         />
//       </div>
//       <button
//         onClick={handleUpdateCoin}
//         className="bg-green-500 text-white p-2 mt-2"
//       >
//         코인 업데이트
//       </button>

//       {/* 퀴즈 제출 */}
//       <div>
//         <label className="block">Answer (for quiz submission):</label>
//         <input
//           type="text"
//           value={answer}
//           onChange={(e) => setAnswer(e.target.value)}
//           className="border p-1"
//         />
//       </div>
//       <button
//         onClick={handleSubmitQuiz}
//         className="bg-yellow-500 text-white p-2 mt-2"
//       >
//         퀴즈 제출
//       </button>

//       {/* 랭킹 조회 */}
//       <button
//         onClick={fetchRanking}
//         className="bg-purple-500 text-white p-2 mt-2"
//       >
//         랭킹 조회
//       </button>

//       {/* 조회 결과 */}
//       {userInfo && (
//         <div className="mt-4 p-2 border">
//           <h3 className="font-bold">유저 정보</h3>
//           <p>Nickname: {userInfo.nickname}</p>
//           <p>Stage Status: {userInfo.stageStatus}</p>
//           <p>Coin: {userInfo.coin}</p>
//           <p>Init Time: {userInfo.initTime}</p>
//           <p>Record Time: {userInfo.recordTime}</p>
//         </div>
//       )}

//       {/* 랭킹 결과 */}
//       {rankingData && (
//         <div className="mt-4 p-2 border">
//           <h3 className="font-bold">랭킹 정보</h3>
//           {rankingData.map((rank, index) => (
//             <div key={index}>
//               <p>Rank: {rank.rank}</p>
//               <p>Nickname: {rank.nickname}</p>
//               <p>Score: {rank.score}</p>
//               <hr />
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

export default function MainPage() {
  return <div>main-page</div>;
}
