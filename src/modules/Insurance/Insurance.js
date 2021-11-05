import React, {useEffect} from "react";
import {useLocation} from "react-router-dom";

import {Header} from "./Header/Header";
import {Main} from "./Main/Main";

export const Insurance = () => {
  const routePath = useLocation();
  const onTop = () => {
    window.scrollTo(0, 0);
  }
  useEffect(() => {
    onTop()
  }, [routePath]);

  return (
    <>
      <Header/>
      <Main/>
    </>
  )
}