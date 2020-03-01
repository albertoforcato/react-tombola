import React from "react";
import { Modal } from "react-bootstrap";
import GameSettings from "./GameSettings";
import { useTranslation } from "react-i18next";
const GameSettingsModal = ({ show, toggle, reset, firstView }) => {
  const { t } = useTranslation();
  return (
    <Modal show={show} onHide={toggle} backdrop={`static`} size="lg" centered>
      {firstView ? (
        ""
      ) : (
        <Modal.Header closeButton>
          <Modal.Title>{t("generics.settings")}</Modal.Title>
        </Modal.Header>
      )}

      <Modal.Body>
        <GameSettings />
      </Modal.Body>
      <Modal.Footer>
        <div className="container">
          <div className="row justify-content-between">
            <button
              className={`btn btn-outline-danger ${
                firstView ? "invisible" : ""
              }`}
              onClick={reset}
            >
              {t("generics.reset-game")}
            </button>
            <button className="btn btn-primary" onClick={toggle}>
              {firstView ? t("generics.start-the-game") : t("generics.save")}
            </button>
          </div>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default GameSettingsModal;
