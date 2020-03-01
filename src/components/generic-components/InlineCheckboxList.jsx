import React from "react";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

/**
 * This function component from items list, return a checkbox list.
 * @param {Array} items The items list.
 * @param {function} handleFunction The function to manage the single checkbox change.
 * @param {string} i18nPath [optional] The i18n path to manage the correct translation of checkbox label.
 */
const InlineCheckboxList = ({ items, handleFunction, i18nPath }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  /**
   * This method handle changes from any checkbox in the list.
   * @param {event} e
   */
  const handleCheckChange = e => {
    dispatch(handleFunction(parseInt(e.target.id)));
  };

  const list = items.map(item => {
    return (
      <div className="col-lg-2 col-md-4 col-sm-6 col-12" key={`col-${item.id}`}>
        <div className="custom-control custom-checkbox custom-control-inline">
          <input
            type="checkbox"
            className="custom-control-input"
            onChange={handleCheckChange}
            checked={item.checked}
            id={item.id}
          />
          <label htmlFor={item.id} className="custom-control-label">
            {t(`${i18nPath}.${item.name}`)}
          </label>
        </div>
      </div>
    );
  });

  return <>{list}</>;
};

export default InlineCheckboxList;
