import { useState } from "react";
import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  //tip button
  let tipPer = [5, 10, 15, 25, 50];

  let [btnActive, setBtnActive] = useState("");

  const toggleActive = (e) => {
    setBtnActive((prev) => {
      return e.target.value;
    });
    saveTip(e);
  };

  const [bill, setBill] = useState();
  const [tip, setTip] = useState();
  const [people, setPeople] = useState();
  const saveBill = (event) => {
    setBill(event.target.value);
    //console.log(event.target.value);
  };
  const saveTip = (event) => {
    setTip(event.target.value);
    console.log(event.target.value);
  };
  const savePeople = (event) => {
    setPeople(event.target.value);
    //console.log(event.target.value);
  };

  // 리셋버튼

  const [goReset, setGoReset] = useState(false);

  const reset = () => {
    setGoReset((current) => !current);
    setBill(0);
    setTip(0);
    setPeople(0);
    //버튼, tip amount, total모두 리셋
  };
  return (
    <div>
      <div id="logoContainer">{/* <img id="logo" src="img/logo.svg" /> */}</div>

      <div id="box">
        <div id="box1">
          <p className="title">Bill</p>
          {/* <img id="billImg" src="img/icon-dollar.svg" /> */}
          <input
            value={bill}
            id="bill"
            placeholder={0}
            type="number"
            onChange={saveBill}
          />
          <div>
            <p className="title">Select Tip %</p>
            <div id="tipGrid">
              {tipPer.map((item, idx) => {
                return (
                  <button
                    value={item}
                    className={"btn" + (item == btnActive ? "active" : "")}
                    onClick={toggleActive}
                  >
                    {item}%
                  </button>
                );
              })}

              <input
                value={tip}
                id="custom"
                placeholder="Custom"
                type="number"
                onChange={saveTip}
              />
            </div>
          </div>
          <p className="title">Number of People</p>
          {/* <img id="personImg" src="img/icon-person.svg" /> */}
          <input
            value={people}
            id="people"
            placeholder={0}
            type="number"
            onChange={savePeople}
          />
        </div>
        <div id="box2">
          <div className="resultBox">
            <div className="titleBox">
              <p className="title2">Tip Amount</p>{" "}
              <p className="subTitle">/ person</p>
            </div>
            <div>
              <input
                //팁을 숫자로 넣어야 함. bill / tip / person
                value={"$" + ((bill / people) * (Number(tip) / 100)).toFixed(2)}
                id="tipAmount"
                placeholder="$0.00"
              />
            </div>
          </div>
          <div className="resultBox">
            <div className="titleBox">
              <p className="title2"> Total</p>{" "}
              <p className="subTitle">/ person</p>
            </div>
            <div>
              <input
                value={
                  "$" +
                  (
                    bill / people +
                    (bill / people) * (Number(tip) / 100)
                  ).toFixed(2)
                }
                id="total"
                placeholder="$0.00"
              />
            </div>
          </div>
          <button onClick={reset} className={setGoReset ? "reset" : "noReset"}>
            RESET
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
