import React from "react";
import { Modal } from "react-bootstrap";
import GameSettings from "./GameSettings";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { switchInGameSettings } from "../../actions/prizeAction";

const InGameSettingsModal = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const showInGameSettings = useSelector(
    state => state.managePrizesSettings.showInGameSettings
  );

  const handleSaveClick = () => {
    dispatch(switchInGameSettings());
  };

  const handleResetGameClick = () => {
    window.location.reload();
    return false;
  }

  return (
    <Modal show={showInGameSettings} backdrop={`static`} size="lg" centered>
      <Modal.Header>
        <Modal.Title>{t("generics.settings")}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <GameSettings />
      </Modal.Body>
      <Modal.Footer>
        <div className="container">
          <div className="row justify-content-between">
            <button className="btn btn-outline-danger" onClick={handleResetGameClick}>{t("generics.reset")}</button>
            <button className="btn btn-primary" onClick={handleSaveClick}>{t("generics.save")}</button>
          </div>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default InGameSettingsModal;
