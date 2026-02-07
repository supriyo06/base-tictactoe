import Board from "../components/Board";
import MyStats from "../components/MyStats";
import Leaderboard from "../components/Leaderboard";

export default function Home() {
  return (
    <main style={{ padding: 20 }}>
      <h1>Base Tic-Tac-Toe</h1>
      <Board />
      <MyStats />
      <Leaderboard />
    </main>
  );
}
