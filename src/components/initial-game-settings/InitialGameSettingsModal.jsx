import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import GameSettings from "./GameSettings";

/**
 * The initial modal to show to let user changing game settings.
 */
const InitialGameSettingsModal = () => {
  const { t } = useTranslation();
  const [showSettingsModal, setShowSettingsModal] = useState(true);

  /**
   * This function handle the onHide event of starting settings modal.
   */
  const handleFunctionOnHide = () => {
    setShowSettingsModal(!showSettingsModal);
  };

  return (
    <Modal show={showSettingsModal} backdrop={`static`} size="lg" centered>
      <Modal.Header>
        <Modal.Title>{t("generics.welcome")}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <GameSettings />
      </Modal.Body>
      <Modal.Footer>
        <button className="btn btn-primary" onClick={handleFunctionOnHide}>
          {t("generics.start-the-game")}
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default InitialGameSettingsModal;
