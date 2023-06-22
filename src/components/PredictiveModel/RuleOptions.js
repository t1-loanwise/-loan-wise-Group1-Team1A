import React, { useEffect, useState } from "react";
import Delete from "../../assets/icons/trash.svg";
import "../../styles/Rule.css";
import PlusSign from "../../assets/icons/ant-design_plus-outlined.svg";

const initialValues = {
  variable: "",
  operator: "",
  valueInput: "",
};

const RuleOptions = () => {
  const [state, setStates] = useState(initialValues);
  const [conditionList, setConditionList] = useState([{ ...initialValues }]);

  //storing the information in local storage
  useEffect(() => {
    const formData = {
      state,
      conditionList,
    };
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [state, conditionList]);

  //retrieving it
  useEffect(() => {
    const formData = localStorage.getItem("formData");
    if (formData) {
      const parsedData = JSON.parse(formData);
      setStates(parsedData.state);
      setConditionList(parsedData.conditionList);
    }
  }, []);

  const handleChange = (event, index) => {
    const { name, value } = event.target;
    const updatedList = conditionList.map((condition, i) => {
      if (i === index) {
        return {
          ...condition,
          [name]: value,
        };
      }
      return condition;
    });
    setConditionList(updatedList);
  };
  //adding new condition
  const handleNewCondition = () => {
    setConditionList([...conditionList, { ...initialValues }]);
  };
  //removing
  const handleDelete = (index) => {
    const fields = [...conditionList];
    fields.splice(index, 1);
    setConditionList(fields);
  };
  return (
    <>
      <div className="labels">
        <div>
          <label>Variable</label>
        </div>
        <div className="operate">
          <label>Operator</label>
        </div>
        <div className="val">
          <label>Value</label>
        </div>
      </div>
      {conditionList.map((singleCondition, index) => (
        <div className="rule" key={index}>
          <div className="rule-options">
            <div className="main-container">
              <div className="variable-container">
                <div className="select">
                  <select
                    value={singleCondition.variable}
                    onChange={(event) => handleChange(event, index)}
                    name="variable"
                  >
                    <option value="">Select</option>
                    <option value="1">Bank Statement Name Match</option>
                    <option value="2">Average balance</option>
                    <option value="3">Closing balance</option>
                    <option value="4">Account Activity</option>
                    <option value="5">Number of Credit Transactions</option>
                    <option value="6">Number of Debit Transactions</option>
                    <option value="7">Number of other loan amount</option>
                    <option value="8">Number of Transacting months</option>
                    <option value="9">Average Salary</option>
                    <option value="10">Total Debit Turnover</option>
                    <option value="11">Total Credit Turnover</option>
                    <option value="12">Current Closing Balance</option>
                    <option value="13">Salary Frequency</option>
                  </select>
                </div>
              </div>
              <div className="Operator-container">
                <div className="select">
                  <select
                    value={singleCondition.operator}
                    onChange={(event) => handleChange(event, index)}
                    name="operator"
                  >
                    <option value="">Select</option>
                    <option value="1">Less than</option>
                    <option value="2">Less than or equal to</option>
                    <option value="3">Greater than</option>
                    <option value="4">Greater than or equal to</option>
                    <option value="5">Equal to</option>
                    <option value="6">Tally with</option>
                  </select>
                </div>
              </div>
              <div className="value">
                <div>
                  <input
                    type="text"
                    placeholder="input"
                    value={singleCondition.valueInput}
                    onChange={(event) => handleChange(event, index)}
                    name="valueInput"
                  />
                  <div className="delete-btn-container">
                    {conditionList.length > 1 && (
                      <div
                        onClick={() => handleDelete(index)}
                        className="delete"
                      >
                        <p>Delete</p>
                        <span>
                          <img
                            src={Delete}
                            alt="Delete"
                            width="18px"
                            height="18px"
                          />
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {conditionList.length - 1 === index && conditionList.length < 6 && (
            <div className="btn">
              <button className="condition-button" onClick={handleNewCondition}>
                <img src={PlusSign} alt="plus" width="14px" />
                <span>New Condition</span>
              </button>
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default RuleOptions;
