import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addInitialNumbers } from "../../actions/prizeAction";
import mathUtils from "../../utils/mathUtils";
import GameBoxHeader from "./GameBoxHeader";
import SingleCardBox from "./SingleCardBox";

/**
 * The entire game box that contains the six little boxes.
 * @param {array} gameNumber Contains the generated number to show in game.
 */
const GameBox = () => {
  const dispatch = useDispatch();

  const initialNumbers = mathUtils.range(1, 90);
  const gameNumber = mathUtils.chunkArray(initialNumbers, 15);

  useEffect(() => {
    dispatch(addInitialNumbers(initialNumbers));
  });

  return (
    <div className="card">
      <div className="card-header border-0">
        <GameBoxHeader />
      </div>
      <div className="card-body">
        <div className="container-fluid">
          <div className="row my-3">
            <SingleCardBox array={gameNumber} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameBox;
