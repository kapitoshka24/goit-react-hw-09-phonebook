import React from "react";
import "../styles/filter.scss";
import { useDispatch, useSelector } from "react-redux";
import { contactsActions, contactsSelectors } from "../redux/contacts";

export default function Filter() {
  const dispatch = useDispatch();
  const onChangeFilter = (value) =>
    dispatch(contactsActions.changeFilter(value));

  const value = useSelector(contactsSelectors.getFilter);

  return (
    <label className="filter-label">
      Find contacts by name
      <input
        className="filter-input"
        type="text"
        value={value}
        onChange={(e) => onChangeFilter(e.target.value)}
      />
    </label>
  );
}
