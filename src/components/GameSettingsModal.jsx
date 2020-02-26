import React from "react";
import { Modal } from "react-bootstrap";
import GameSettings from "./GameSettings";
import { useTranslation } from "react-i18next";
const GameSettingsModal = ({ show, toggle }) => {
  const { t } = useTranslation();
  return (
    <Modal show={show} onHide={toggle} backdrop={`static`} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>{t("generics.settings")}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <GameSettings />
      </Modal.Body>
      <Modal.Footer>
        <button className="btn btn-primary" onClick={toggle}>
          {t("generics.save")}
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default GameSettingsModal;
