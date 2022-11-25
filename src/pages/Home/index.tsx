import React from "react";
import Header from "../../components/Header";
import { useDispatch } from "react-redux";
import { setBlocked } from "../../redux/slices/overlaySlice";
import {
  useCollectionData,
  useDocumentData,
} from "react-firebase-hooks/firestore";
import {
  collection,
  doc,
  DocumentData,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../firebase";
import { userLocation } from "../../firebase/services/userLocation";
import * as C from "./styles";
import SwipeCard from "../../components/SwipeCard";
import { UserType } from "../../firebase/types/userTypes";
import { userMatch } from "../../firebase/services/userMatch";
import { geoDistance } from "../../firebase/helpers/geoDistance";
import Footer from "../../components/Footer";

export default function Home() {
  let userPreferenceGender =
    localStorage.getItem("preferenceGender") == "MF"
      ? false
      : localStorage.getItem("preferenceGender");
  if (userPreferenceGender != false)
    userPreferenceGender = userPreferenceGender == "F" ? "M" : "F";

  const dispatch = useDispatch();
  const uid = localStorage.getItem("user_id") ?? "...";
  const [userData, loading, error] = useDocumentData(
    doc(db, "/usersData/", uid)
  );
  let [othersData] = useCollectionData(
    query(
      collection(db, "/usersData"),
      where("profile.userGender", "!=", userPreferenceGender)
    )
  );
  const [list, setList] = React.useState<DocumentData[] | undefined>(undefined);
  const [data, setData] = React.useState<DocumentData[] | undefined>(undefined);

  const cardContent = list?.map((user, index) => {
    let distance = geoDistance(
      userData?.latitude,
      userData?.longitude,
      (user as UserType).latitude,
      (user as UserType).longitude
    );

    return (
      <SwipeCard
        key={index}
        zIndex={index}
        isOnline={(user as UserType).online}
        photoUrl={(user as UserType).profile.photoUrl}
        age={(user as UserType).profile.age}
        distance={parseFloat(distance)}
        name={(user as UserType).profile.name}
        onAccept={() => {
          let arr = data != undefined ? [...data] : [];
          arr?.pop();
          setData(arr);
          userMatch.like(uid, (user as UserType).profile.uid, user);
        }}
        onReject={() => {
          let arr = data != undefined ? [...data] : [];

          arr?.pop();

          setData(arr);
          userMatch.unlike(uid, (user as UserType).profile.uid);
        }}
      />
    );
  });

  React.useEffect(() => {
    let filteredData =
      othersData?.filter((user, index) => {
        return (
          (user as UserType).profile.uid != uid &&
          !(user as UserType).profile.likedBy.includes(uid) &&
          !(user as UserType).profile.unlikedBy.includes(uid)
        );
      }) ?? [];
    setData(filteredData);
  }, [othersData]);

  React.useEffect(() => {
    setList(data);
  }, [data]);

  React.useEffect(() => {
    if (!userData?.latitude as any) {
      navigator.geolocation.getCurrentPosition(
        (geo) => {
          dispatch(setBlocked(false));
          userLocation.setUserLocation(
            uid,
            {
              latitude: geo.coords.latitude,
              longitude: geo.coords.longitude,
            },
            () => dispatch(setBlocked(true))
          );
        },
        () => {
          dispatch(setBlocked(true));
        }
      );
    }
    if (userData) {
      dispatch(setBlocked(false));
    }
  }, [userData]);

  return (
    <C.Container>
      <Header title="Home" />
      <C.MainContainer>
        {loading && <C.Text>Carregando</C.Text>}
        {!userData?.profile && (
          <>
            <C.Text>Você precisa de um perfil, para criar um</C.Text>
            <C.LinkTo to={"/create-profile"}>clique aqui</C.LinkTo>
          </>
        )}
        {list && userData?.profile && (
          <C.SwipeCardContainer>
            {cardContent && cardContent}
            {data?.length == 0 && (
              <>
                <C.Text>
                  Acabaram os usuários compatíveis com a sua preferência
                </C.Text>
                <C.LinkTo to={"/create-profile"}>
                  tente reconfigurar seu perfil
                </C.LinkTo>
              </>
            )}
          </C.SwipeCardContainer>
        )}
      </C.MainContainer>
      <Footer />
    </C.Container>
  );
}
