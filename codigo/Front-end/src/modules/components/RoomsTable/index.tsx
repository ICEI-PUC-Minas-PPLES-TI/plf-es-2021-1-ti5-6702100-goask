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
  return (
    <styles.Container>
      <styles.TestsTable>
        <thead>
          <tr>
            <th>Sala</th>
            <th>Quiz</th>
            <th>Criação</th>
            <th>Publico</th>
            <th>Ativo</th>
          </tr>
        </thead>
        <tbody>
          {rooms &&
            rooms.map((r: Room, index) => (
              <tr key={index}>
                <td>{r.name}</td>
                <td>
                  {() => {
                    const test = tests.find((t) => (t.idTest = r.idTest));
                    return test.name;
                  }}
                </td>
                <td>{r.createdAt}</td>
                <td>{r.isPublic}</td>
                <td>{r.isActive}</td>
              </tr>
            ))}
        </tbody>
      </styles.TestsTable>
    </styles.Container>
  );
};

export default RelatoryTable;
