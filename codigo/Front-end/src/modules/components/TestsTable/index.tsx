import * as styles from "./styles";
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
            <th>Número da Sala</th>
            <th>Data de criação</th>
          </tr>
        </thead>
        <tbody>
          {tests.map((t: Test, index) => (
            <tr key={index}>
              <td>{t.name}</td>
              <td>{t.description}</td>
              <td>{t.idTest}</td>
              <td>{t.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </styles.TestsTable>
    </styles.Container>
  );
};

export default TestsTable;
