import * as styles from "./styles";

//From next
import Link from "next/link";

//From models
import { Test } from "@models/Test";
import { Room } from "@models/Room";
import { getRooms } from "src/share/api/api";

interface Content {
  tests: Test[];
  rooms: Room[];
}

const RelatoryTable: React.FC<Content> = ({ tests, rooms }) => {
  const getHits = (test: Test, percentage?: boolean) => {
    if (!rooms) {
      return 0 + "%";
    }
    const questions = test.questions.length;
    let corrects: number = 0;
    const roomsOfThisTest = rooms.filter((r) => r.idTest === test.idTest);
    let totalPlays = 0;

    for (let r of roomsOfThisTest) {
      for (let data of r.roomData) {
        corrects += data.right_answers;
        totalPlays++;
      }
    }

    const totalQuestions = totalPlays * questions;

    if (totalQuestions === 0) return 0;

    return percentage
      ? ((corrects * 100) / totalQuestions).toFixed(2) + "%"
      : corrects;
  };

  const getPlayers = (test: Test) => {
    if (!rooms) {
      return 0;
    }
    const roomsOfThisTest = rooms.filter((r) => r.idTest === test.idTest);
    let players = 0;

    for (let r of roomsOfThisTest) {
      players += r.roomData.length;
    }

    return players;
  };

  const getAvg = (test: Test) => {
    const divisor = getPlayers(test);
    return divisor > 0 ? (+getHits(test) / divisor).toFixed(2) : 0;
  };

  const getMax = (test: Test) => {
    if (!rooms) {
      return 0;
    }
    const roomsOfThisTest = rooms.filter((r) => r.idTest === test.idTest);
    let max = 0;

    for (let r of roomsOfThisTest) {
      for (let rd of r.roomData) {
        max = Math.max(max, rd.right_answers);
      }
    }

    return max;
  };

  const getRooms = (test: Test) => {
    if (!rooms) {
      return 0;
    }
    return rooms.filter((r) => r.idTest === test.idTest).length;
  };

  return (
    <styles.Container>
      <styles.TestsTable>
        <thead>
          <tr>
            <th>Quiz</th>
            <th>Questões</th>
            <th>Acertos Total</th>
            <th>Acertos %</th>
            <th>Média</th>
            <th>Maior Nota</th>
            <th>Jogadores</th>
            <th>Salas</th>
          </tr>
        </thead>
        <tbody>
          {tests.map((t: Test, index) => (
            <Link href={`/test/${t.idTest}`}>
              <tr key={index}>
                <td>
                  <a>{t.name}</a>
                </td>
                <td>{t.questions.length}</td>
                <td>{getHits(t)}</td>
                <td>{getHits(t, true)}</td>
                <td>{getAvg(t)}</td>
                <td>{getMax(t)}</td>
                <td>{getPlayers(t)}</td>
                <td>{getRooms(t)}</td>
              </tr>
            </Link>
          ))}
        </tbody>
      </styles.TestsTable>
    </styles.Container>
  );
};

export default RelatoryTable;
