import React from "react";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

const InlineCheckboxList = ({ items, handleFunction, labelTip }) => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const handleCheckChange = e => {
    dispatch(handleFunction(parseInt(e.target.id)));
  };

  const list = items.map(item => {
    return (
      <div
        className="custom-control custom-checkbox custom-control-inline"
        key={item.id}
      >
        <input
          type="checkbox"
          className="custom-control-input"
          onChange={handleCheckChange}
          checked={item.checked}
          id={item.id}
        />
        <label htmlFor={item.id} className="custom-control-label">
          {t(item.name)}
        </label>
      </div>
    );
  });

  return (
    <>
      <div className="d-flex flex-wrap justify-content-lg-between justify-content-md-between justify-content-xs-center">
        {list}
      </div>
      <small className="form-check-label">{labelTip}</small>
    </>
  );
};

export default InlineCheckboxList;
