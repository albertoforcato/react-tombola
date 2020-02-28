import SummaryBox from "./SummaryBox";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addInitialNumbers } from "../actions/prizeAction";
import mathUtils from "../utils/mathUtils";
import GameSettingsModal from "./GameSettingsModal";
import GameBox from "./GameBox";

const TombolaGame = () => {
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(true);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const initialNumbers = mathUtils.range(1, 90);
  const gameNumber = mathUtils.chunkArray(initialNumbers, 15);

  useEffect(() => {
    dispatch(addInitialNumbers(initialNumbers));
  });

  return (
    <div className="d-flex justify-content-center align-items-md-center">
      <div className="container-fluid">
        <div className="row my-2">
          <div className="col-xl-4  col-md-4 offset-md-0 col-12 order-md-1">
            <SummaryBox toggleModal={toggleModal} />
          </div>

          <div className="col-xl-8             col-md-8             col-12 order-md-0">
            <GameBox gameNumber={gameNumber} />
          </div>
        </div>
        <GameSettingsModal show={showModal} toggle={toggleModal} />
      </div>
    </div>
  );
};

export default TombolaGame;
