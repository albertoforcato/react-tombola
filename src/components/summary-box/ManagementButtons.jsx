import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ActionCreators as UndoActionCreators } from "redux-undo";
import { RotateCcw, RotateCw, Settings } from "react-feather";
import { useTranslation } from "react-i18next";
import { switchInGameSettings } from "../../actions/prizeAction";

/**
 * This component contains the button to manage the entire game.
 */
const ManagementButtons = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const canUndo =
    useSelector(state => state.undoRedoManagement.past.length) > 0;
  const canRedo =
    useSelector(state => state.undoRedoManagement.future.length) > 0;

  /**
   * The UNDO button to manage the draw.
   */
  const UndoButton = () => {
    const handleUndoClick = () => {
      dispatch(UndoActionCreators.undo());
    };
    return (
      <button
        className="btn btn-sm btn-warning mx-1 my-1"
        data-toggle="back-arrow"
        title={t("game-page.go-back")}
        onClick={() => handleUndoClick()}
        disabled={!canUndo}
      >
        <RotateCcw size="20" color="white" />
      </button>
    );
  };

  /**
   * The REDO button to manage the draw.
   */
  const RedoButton = () => {
    const handleRedoClick = () => {
      dispatch(UndoActionCreators.redo());
    };

    return (
      <button
        className="btn btn-sm btn-warning mx-1 my-1"
        data-toggle="forth-arrow"
        title={t("game-page.go-forth")}
        onClick={() => handleRedoClick()}
        disabled={!canRedo}
      >
        <RotateCw size="20" color="white" />
      </button>
    );
  };

  /**
   * The setting button to manage prizes and automatic draw.
   */
  const SettingButton = () => {
    const handleSettingsClick = () => {
      dispatch(switchInGameSettings());
    };
    return (
      <button className="btn btn-danger mx-1 my-1"
        data-toggle="settings-button"
        title={t("generics.settings")}
      >
        <Settings
          size="20"
          color="white"
          onClick={() => handleSettingsClick()}

        />
      </button>
    );
  };

  return (
    <div className="card border-0">
      <div className="card-body">
        <div className="container">
          <div className="row justify-content-between">
            <div className="btn-group d-flex ">
              <UndoButton />
              <RedoButton />
            </div>
            <SettingButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagementButtons;
