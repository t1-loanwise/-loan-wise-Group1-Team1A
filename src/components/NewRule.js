import React, { useEffect, useState } from "react";
import RuleOptions from "./RuleOptions";
import PlusSign from "../assets/icons/ant-design_plus-outlined.svg";
import NewConditionBtn from "./NewConditionBtn";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";

const NewRule = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    localStorage.setItem("title", { id: nanoid(), ...data });
  };

  const [active, setActive] = useState(false);
  const newCondition = () => {
    if (active == true) {
      setActive(false);
    } else {
      setActive(true);
    }
  };

  return (
    <div className="exitingRule-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="edit-text">
          <div className="rule-header">
            <div>
              <h2>New Rule</h2>
            </div>
          </div>
          <p>
            Create rules that loan applications must meet for approval or
            dismissal
          </p>
        </div>

        <div className="select-option">
          <label>Model Title</label>
          <input
            id="title"
            name="title"
            type="text"
            {...register("title", { required: true })}
          />
          {errors.title && (
            <p className="errorMsg">Kindly input a model title</p>
          )}
        </div>
        <div>
          <div className="select-option-below">
            <RuleOptions />
            {active && <NewConditionBtn />}

            <div className="btn">
              <button className="condition-button" onClick={newCondition}>
                <img src={PlusSign} alt="plus" width="14px" />{" "}
                <span>New Condition</span>
              </button>
            </div>
          </div>
        </div>

        <div className="conditions-container">
          <div>
            <input
              className="conditionsMet"
              type="radio"
              name="condition"
              id="condition"
              {...register("condition", { required: true })}
            />
            All conditions must be met
          </div>
          <div>
            <input
              className="conditionsMet"
              type="radio"
              name="condition"
              id="condition"
              {...register("condition", { required: true })}
            />
            Any of the conditions can be met
          </div>
        </div>
        <button className="save-btn" type="submit">
          Save
        </button>
      </form>
    </div>
  );
};

export default NewRule;
