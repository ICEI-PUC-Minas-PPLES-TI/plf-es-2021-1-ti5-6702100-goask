import * as styles from "./styles";

//From next
import Link from "next/link";

//From models
import { Test } from "@models/Test";

interface Content {
  tests: Test[];
}

const RelatoryTable: React.FC<Content> = ({ tests }) => {
  return (
    <styles.Container>
      <styles.TestsTable>
        <thead>
          <tr>
            <th>Nome do Quiz</th>
            <th>XXX</th>
            <th>XXX</th>
            <th>XXX</th>
          </tr>
        </thead>
        <tbody>
          {tests.map((t: Test, index) => (
            <tr key={index}>
              <td>
                <Link href={`/test/${t.idTest}`}>
                  <a>{t.name}</a>
                </Link>
              </td>
              <td>xxx</td>
              <td>xxx</td>
              <td>xxx</td>
            </tr>
          ))}
        </tbody>
      </styles.TestsTable>
    </styles.Container>
  );
};

export default RelatoryTable;
