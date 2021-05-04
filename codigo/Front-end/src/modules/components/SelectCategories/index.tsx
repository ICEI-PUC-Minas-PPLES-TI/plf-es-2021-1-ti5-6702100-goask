import { Category } from "@models/Test";
//Hooks
import { useEffect, useState } from "react";
import { useAppContext } from "../../components/ContextWrapper";

//API
import { getCategories } from "src/share/api/api";

import * as styles from "./styles";
interface InputConfig {
  label: string;
  name: string;
  idSelected?: number;
}

const Select: React.FC<InputConfig> = ({ label, name, idSelected }) => {
  const context = useAppContext();
  const [categories, setCategories] = useState<Category[]>([]);

  const setup = async () => {
    const res = await getCategories(context.token);
    setCategories(res);
  };

  useEffect(() => {
    setup();
  }, []);

  return (
    <styles.Container>
      <styles.SelectDiv>
        <label htmlFor={name}>{label}:</label>
        <styles.SelectDefault name={name} disabled={!!idSelected}>
          {categories?.map((c: Category) => (
            <option selected={idSelected === c.idCategory} value={c.idCategory}>
              {c.name}
            </option>
          ))}
        </styles.SelectDefault>
      </styles.SelectDiv>
    </styles.Container>
  );
};

export default Select;
