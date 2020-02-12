import React from "react";
import GameSettings from "./GameSettings";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="card">
          <div className="card-body">
            <h1 className="card-title">{t("tombola")}</h1>
            <GameSettings />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
