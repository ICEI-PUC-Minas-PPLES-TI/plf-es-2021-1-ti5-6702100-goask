import * as styles from "./styles";

import EditUserInput from "../EditUserInput";

//Hooks
import { useRouter } from "next/router";
import { useState } from "react";

//From components
import ButtonForm from "../../ButtonForm";
import SnackBar from "../../SnackBar";

//From next
import Link from "next/link";
import React from "react";

//componentes
import { useAppContext } from "../../../../modules/components/ContextWrapper";

//models
import { User,UpdateUser } from "../../../../models/User";
import { Token } from "../../../../models/Token";

//api
import { updateUser } from "src/share/api/api"



const EditUserForm: React.FC = () => {
    const router = useRouter();
    const context = useAppContext();
    const token:Token = {
        access_token: context.token.access_token,
        token_type: context.token.token_type
    }
    const user:User = context.user;
    const [signinError, setSigninError] = useState(false);
    console.log(user)
    const update = async (e:React.FormEvent<HTMLFormElement>) => {
        setSigninError(false);
        e.preventDefault();
        const name = e.currentTarget.username.value;
        const email = e.currentTarget.email.value;
        if(name && email){
          const userUpdate:UpdateUser = {
            name: name,
            email:email
          }
          const response: User = await updateUser(token,userUpdate);
          if(response){
            context.setUser(response);
            router.push("/");
          } else {
            setSigninError(true);
          }

          console.log("response",response);
          
        } 
    }

    return(
            <div>
                {signinError ? (
                 <SnackBar
                   message="Já existe uma conta com esse email"
                   backgroundColor="#BD232F"
                   timer={5000}
                />
             ) : (
               <></>
              )}
              <form onSubmit={update}>
                <styles.Container>
                  <EditUserInput
                    type="text"
                    icon="/user.svg"
                    placeHolder="novo nome"
                    alt="Nome"
                    name="username"
                    value={user.name}
                  />
                  <EditUserInput
                    type="text"
                    icon="/mail-icon.svg"
                    placeHolder="novo e-mail"
                    alt="E-mail"
                    name="email"
                    value={user.email}
                  />{" "}
                  <Link href="/">
                    <a>Retornar</a>
                  </Link>
                  <styles.ButtonDiv>
                    <ButtonForm icon="/arrow-right.svg" alt="Enviar" />
                  </styles.ButtonDiv>
                </styles.Container>
              </form>
            </div>
          );
}

export default EditUserForm;