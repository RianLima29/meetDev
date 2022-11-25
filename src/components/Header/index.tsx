import React from "react";
import * as C from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import Logo from "../Logo";
import { auth } from "../../firebase";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../redux/slices/userSlice";
import userPresence from "../../firebase/services/userPresence";
import Dropdown from "../Dropdown";
import DropdownItem from "../DropdownItem";

interface Props {
  title?: string;
}

export default function Header(props: Props) {
  const user = useSelector((state: RootState) => state.user);
  const [dropdown, setDropdown] = React.useState(false);
  const [alreadyAuthUser] = useAuthState(auth);
  const dispatch = useDispatch();

  const [signOut] = useSignOut(auth);
  const navigate = useNavigate();

  const logOut = () => {
    signOut().then(async () => {
      userPresence.setOffline(alreadyAuthUser?.uid);
      dispatch(setUser(null));
      localStorage.clear();
      navigate("/");
    });
  };

  return (
    <C.Container>
      <Logo redirectTo="/" />
      <C.HeaderTitle>{props.title}</C.HeaderTitle>
      <C.PhotoContainer
        onClick={() => setDropdown(!dropdown)}
        path={user.user?.photoURL ?? ""}
      >
        {dropdown && (
          <Dropdown
            parentSize={{ height: "35px", width: "35px" }}
            position="bottom-left"
          >
            <DropdownItem onClick={logOut}>Sair</DropdownItem>
          </Dropdown>
        )}
      </C.PhotoContainer>
    </C.Container>
  );
}
