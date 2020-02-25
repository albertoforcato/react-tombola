import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { ActionCreators as UndoActionCreators } from "redux-undo";
import { RotateCcw, RotateCw, Settings } from "react-feather";

const StyledButton = styled.div`
  pointer-events: none;
  position: relative;
  width: 50%;
  padding-bottom: 50%;
  border-radius: 50%;
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;

  div {
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 6vw;
    transform: translate(-50%, -50%);
  }
`;
const SummaryBox = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const presentStateDrawNumbers = useSelector(
    state => state.drewNumbers.present
  );

  const canUndo = useSelector(state => state.drewNumbers.past.length) > 0;
  const canRedo = useSelector(state => state.drewNumbers.future.length) > 0;
  console.log(canUndo, canRedo);

  const handleBackArrowClick = () => {
    console.log("UNDO");
    dispatch(UndoActionCreators.undo());
  };

  const handleForthArrowClick = () => {
    console.log("REDO");
    dispatch(UndoActionCreators.redo());
  };
  return (
    <div className="card">
      <div className="card-body">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="card">
                <div className="card-header">
                  <div className="card-title">{t("last-draw-number")}</div>
                </div>
                <div className="card-body d-flex justify-content-center">
                  <StyledButton>
                    <div>
                      {presentStateDrawNumbers[
                        presentStateDrawNumbers.length - 1
                      ] == null
                        ? "#"
                        : presentStateDrawNumbers[
                            presentStateDrawNumbers.length - 1
                          ]}
                    </div>
                  </StyledButton>
                </div>
                <div className="card-footer d-flex flex-wrap justify-content-between">
                  <div className="btn-group d-flex ">
                    <button
                      className="btn btn-sm btn-warning mx-1 my-1"
                      data-toggle="back-arrow"
                      title={t("go-back")}
                      onClick={() => handleBackArrowClick()}
                      disabled={!canUndo}
                    >
                      <RotateCcw size="20" color="white" />
                    </button>
                    <button
                      className="btn btn-sm btn-warning mx-1 my-1"
                      data-toggle="forth-arrow"
                      title={t("go-forth")}
                      onClick={() => handleForthArrowClick()}
                      disabled={!canRedo}
                    >
                      <RotateCw size="20" color="white" />
                    </button>
                  </div>
                  <div className="btn btn-sm btn-danger mx-1 my-1">
                    <Settings size="20" color="white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryBox;
