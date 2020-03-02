import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import CheckboxPrizesList from "../CheckboxPrizesList";
import AutomaticDrawSwitch from "../AutomaticDrawSwitch";

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
  
  const GameSettings = () => {
    return (
      <form>
        <div className="form-group">
          <small className="form-check-label">
            {t("welcome-page.settings-checkbox-tip")}
          </small>
          <div className="row">
            <CheckboxPrizesList />
          </div>
        </div>
        <div className="form-group d-flex flex-wrap">
          <AutomaticDrawSwitch />
        </div>
      </form>
    );
  };

  return (
    <Modal
      show={showSettingsModal}
      backdrop={`static`}
      size="lg"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>{t("generics.settings")}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <GameSettings />
      </Modal.Body>
      <Modal.Footer>
        <button className="btn btn-primary" onClick={handleFunctionOnHide}>
          {t("generics.save")}
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default InitialGameSettingsModal;
