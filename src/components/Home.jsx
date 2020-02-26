import React from "react";
import GameSettings from "./GameSettings";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  return (
    <div className="container-fluid vh-100 d-flex justify-content-center align-items-center">
      <div className="row">
        <div className="card mx-5">
          <div className="card-body">
            <h1 className="card-title">{t("welcome-page.prizes.tombola")}</h1>
            <GameSettings />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
