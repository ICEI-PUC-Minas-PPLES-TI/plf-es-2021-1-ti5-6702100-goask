import * as styles from "./styles";

//Models
import { Test } from "@models/Test";
import { Room } from "@models/Room";

//From components
import Tag from "../Tag";

//From next
import Link from "next/link";

//Global
import theme from "src/share/styles/themes";

//Hooks
import { useEffect, useState } from "react";


interface Content {
  test: Test;
  rooms: Room[];
}
const TestRoomsTable: React.FC<Content> = ({test,rooms}) => {

  const formatDate = (stringDate: string): string => {
    const date = new Date(stringDate);
    return date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
  };

  const getRoomsTest = () => {
    return rooms.filter((r:Room) => r.idTest === test.idTest)
  }
  rooms = getRoomsTest();

    return (
      <styles.Container>
        <styles.TestsTable>
          <thead>
            <tr>
              <th>Sala</th>
              <th>Publico</th>
              <th>Ativo</th>
              <th>Criação</th>
            </tr>
          </thead>
          <tbody>
          {rooms &&
            rooms.map((r: Room, index) => (
              <tr key={index}>
                <td>
                  <Link href={`/room/${r.idRoom}`}>
                    <a>{r.name}</a>
                  </Link>
                </td>
                <td>
                  {r.isPublic ? (
                    <Tag
                      text="Sim"
                      color={theme.colors.borders.lightGreen}
                    ></Tag>
                  ) : (
                    <Tag text="Não" color={theme.colors.borders.lightRed}></Tag>
                  )}
                </td>
                <td>
                  {r.isActive ? (
                    <Tag
                      text="Sim"
                      color={theme.colors.borders.lightGreen}
                    ></Tag>
                  ) : (
                    <Tag text="Não" color={theme.colors.borders.lightRed}></Tag>
                  )}
                </td>
                <td>{formatDate(r.createdAt.toString())}</td>
              </tr>
              ))}
          </tbody>
        </styles.TestsTable>
      </styles.Container>
    );
  };
  
  export default TestRoomsTable;
  