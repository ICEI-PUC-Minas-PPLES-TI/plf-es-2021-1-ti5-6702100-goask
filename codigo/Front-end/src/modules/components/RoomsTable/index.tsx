import * as styles from "./styles";

//From next
import Link from "next/link";

//From components
import Tag from "../Tag";

//From models
import { Test } from "@models/Test";
import { Room } from "@models/Room";

//Global
import theme from "src/share/styles/themes";
interface Content {
  tests: Test[];
  rooms: Room[];
}

const RelatoryTable: React.FC<Content> = ({ tests, rooms }) => {
  const getTest = (r: Room) => {
    const test = tests.find((t) => (t.idTest = r.idTest));
    return test.name;
  };

  const formatDate = (stringDate: string): string => {
    const date = new Date(stringDate);
    return date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
  };

  return (
    <styles.Container>
      <styles.TestsTable>
        <thead>
          <tr>
            <th>Sala</th>
            <th>Quiz</th>
            <th>Publico</th>
            <th>Ativo</th>
            <th>Criação</th>
          </tr>
        </thead>
        <tbody>
          {rooms &&
            rooms.map((r: Room, index) => (
              <Link href={`/room/${r.idRoom}`}>
                <tr key={index}>
                  <td>
                    <a>{r.name}</a>
                  </td>
                  <td>{getTest(r)}</td>
                  <td>
                    {r.isPublic ? (
                      <Tag
                        text="Sim"
                        color={theme.colors.borders.lightGreen}
                      ></Tag>
                    ) : (
                      <Tag
                        text="Não"
                        color={theme.colors.borders.lightRed}
                      ></Tag>
                    )}
                  </td>
                  <td>
                    {r.isActive ? (
                      <Tag
                        text="Sim"
                        color={theme.colors.borders.lightGreen}
                      ></Tag>
                    ) : (
                      <Tag
                        text="Não"
                        color={theme.colors.borders.lightRed}
                      ></Tag>
                    )}
                  </td>
                  <td>{formatDate(r.createdAt.toString())}</td>
                </tr>
              </Link>
            ))}
        </tbody>
      </styles.TestsTable>
    </styles.Container>
  );
};

export default RelatoryTable;
