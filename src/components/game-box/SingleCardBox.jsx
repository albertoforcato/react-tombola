import React from "react";
import { useSelector, useDispatch } from "react-redux";
import gameUtils from "../../utils/gameUtils";
import { addDrewNumber } from "../../actions/prizeAction";
import mathUtils from "../../utils/mathUtils";

/**
 * This component builds the single button group.
 * @param {array} array
 */
const SingleItems = ({ array }) => {
  const dispatch = useDispatch();

  const drewNumbers = useSelector(state =>
    gameUtils.getNumbers(state.undoRedoManagement.present)
  );

  const handleNumberClick = number => {
    dispatch(addDrewNumber(number));
  };
  return (
    <div key={array}>
      {array.map(chArray => (
        <div className="container-fluid" key={`container-${chArray}`}>
          <div className="row justify-content-between" key={chArray}>
            {chArray.map(item => (
              <button
                className={`btn btn-outline-warning col mx-1 my-1 ${
                  drewNumbers.includes(item) ? "active none" : ""
                }`}
                key={item}
                value={item}
                onClick={() => handleNumberClick(item)}
                style={{
                  pointerEvents: drewNumbers.includes(item) ? "none" : ""
                }}
              >
                <span
                  style={{
                    fontSize: "calc(1.993em * (9/16))",
                    fontWeight: "bold"
                  }}
                >
                  {item}
                </span>
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

/**
 * This component build a single card contains the button group.
 * @param {array} array 
 */
const SingleCardBox = ({ array }) => {
  return (
    <>
      {array.map(box => (
        <div className="col-md-6 my-2 col-12" key={`box-${box}`}>
          <div className="card border-0" key={box}>
            <SingleItems array={mathUtils.chunkArray(box, 5)} />
          </div>
        </div>
      ))}
    </>
  );
};

export default SingleCardBox;
