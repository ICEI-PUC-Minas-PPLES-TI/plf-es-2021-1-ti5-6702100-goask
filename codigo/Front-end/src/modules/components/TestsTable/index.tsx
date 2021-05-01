import * as styles from "./styles";

//From next
import Link from "next/link";

//From models
import { Test } from "@models/Test";

interface Content {
  tests: Test[];
}

const TestsTable: React.FC<Content> = ({ tests }) => {
  return (
    <styles.Container>
      <styles.TestsTable>
        <thead>
          <tr>
            <th>Nome do Quiz</th>
            <th>Descrição</th>
            <th>Categoria</th>
            <th>Data de criação</th>
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
              <td>{t.description}</td>
              <td>{t.category.name}</td>
              <td>{t.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </styles.TestsTable>
    </styles.Container>
  );
};

export default TestsTable;
