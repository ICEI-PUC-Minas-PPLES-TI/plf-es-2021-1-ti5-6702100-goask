import * as styles from "./styles";

//From next
import Link from "next/link";

//From models
import { Test } from "@models/Test";
import { Room } from "@models/Room";

interface Content {
    tests: Test[];
    rooms: Room[];
  }

  const RelatoryTable: React.FC<Content> = ({ tests, rooms }) => {
    const getTest = (r: Room) => {
      const test = tests.find((t) => (t.idTest = r.idTest));
      return test;
    };
    const getFilteredRooms = (rooms:Room[]) => {
      return rooms.filter((r:Room) => r.isActive)
    }
    return (
      <styles.Container>
        <styles.TestsTable>
        <thead>
          <tr>
            <th>Sala</th>
            <th>Quiz</th>
          </tr>
        </thead>
        <tbody>
          {
            getFilteredRooms(rooms) && 
              getFilteredRooms(rooms).map((r:Room, index) => (
                <tr>
                  <td>
                    <Link href={`/room/${r.idRoom}`}>
                      <a>{r.name}</a>
                    </Link>
                  </td>
                  <td>
                    <Link href = {`/test/${getTest(r).idTest}`}>
                      <a>{getTest(r).name}</a>
                    </Link>
                  </td>
                </tr>
              ))
          }
        </tbody>

        </styles.TestsTable>
      </styles.Container>
    );
  };
  
  export default RelatoryTable;
  