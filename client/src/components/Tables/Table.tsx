import React, { useEffect } from "react";
import M from "materialize-css";

const Table = ({ destractObjects }: any) => {

  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <div className="row">
      <table className="center" style={{ color: "white", background: "#1F1F1F", borderRadius: 15 }}>
        <thead>
        <tr>
          <th className={"center-align"}>Номер</th>
          <th className={"center-align"}>Заголовок</th>
          <th className={"center-align"}>Поштовий індекс</th>
          <th className={"center-align"}>Адреса</th>
          <th className={"center-align"}>...</th>
          <th className={"center-align"}>Інформація</th>
        </tr>
        </thead>
        <tbody>
        {destractObjects.map((item: any, index: number) => {
          return (
            <tr key={index}>
              <td className={"center-align"}>{index + 1}.</td>
              <td className={"center-align"}>{item.title}</td>
              <td className={"center-align"}>{item.postName}</td>
              <td className={"center-align"}>{item.address}</td>
              <td className={"center-align"}>...</td>
              <td className={"center-align"}>
                <button
                  data-target={"modal" + index}
                  className={"btn modal-trigger purple darken-1"}
                >
                  <span>Повна інформація</span>
                </button>

                <div id={"modal" + index} className="modal" style={{ borderRadius: 15}}>
                  <div className="modal-content" style={{backgroundColor: "#1F1F1F"}}>
                    <h4>{item.title}</h4>
                    <div className={"row"}>
                      <div className={"col s5"} style={{borderRight: "2px solid #E1E1E1"}}>
                        <img src={item.imgPath} alt="none" style={{width: "100%"}}/>
                        <div className={"left-align"}>
                          <b>Адреса:</b> {item.address};
                        </div>
                        <div className={"left-align"}>
                          <b>Площа:</b> {item.area} м²;
                        </div>
                        <div className={"left-align"}>
                          <b>Тип об'єкту:</b> {item.type};
                        </div>
                        <div className={"left-align"}>
                          <b>Опис:</b> {item.text}
                        </div>
                        <div className={"left-align"}>
                          <b>Зруйновано:</b> {item.percentageOfDestruction}%
                        </div>
                        <div className={"left-align"}>
                          <b>Дата руйнації:</b> {item.dateOfDestruction};
                        </div>
                        <div className={"left-align"}>
                          <b>Дата відновлення:</b> {item.dateOfRecovery? item.dateOfRecovery : "невідома"}.
                        </div>
                      </div>
                      <div className={"col s7"}>
                        {/*<div><b>Координати:</b> [{item.position[0]}] - [{item.position[1]}]</div>*/}
                        <h6>Змінити дані</h6>
                        <form>
                          <div className="input-field col s6">
                            <input
                              id="title"
                              name="title"
                              type="text"
                              className="validate"
                              onChange={() => "1"}
                            />
                            <label htmlFor="title">Заголовок</label>
                          </div>
                          <div className="input-field col s6">
                            <input
                              id="area"
                              name="area"
                              type="text"
                              className="validate"
                              onChange={() => "1"}
                            />
                            <label htmlFor="area">Площа</label>
                          </div>
                          <div className="input-field col s12">
                            <input
                              id="text"
                              name="text"
                              type="text"
                              className="validate"
                              onChange={() => "1"}
                            />
                            <label htmlFor="text">Опис</label>
                          </div>
                          <div className="input-field col s6">
                            <input
                              id="firstPosition"
                              name="firstPosition"
                              type="text"
                              className="validate"
                              onChange={() => "1"}
                            />
                            <label htmlFor="firstPosition">Х позиція</label>
                          </div>
                          <div className="input-field col s6">
                            <input
                              id="secondPosition"
                              name="secondPosition"
                              type="text"
                              className="validate"
                              onChange={() => "1"}
                            />
                            <label htmlFor="secondPosition">Y позиція</label>
                          </div>
                          <div className="input-field col s6">
                            <input
                              id="type"
                              name="type"
                              type="text"
                              className="validate"
                              onChange={() => "1"}
                            />
                            <label htmlFor="type">Тип об'єкту</label>
                          </div>
                          <div className="input-field col s6">
                            <input
                              id="percentageOfDestruction"
                              name="percentageOfDestruction"
                              type="text"
                              className="validate"
                              onChange={() => "1"}
                            />
                            <label htmlFor="percentageOfDestruction">Відсоток руйнацій</label>
                          </div>
                          <div className="input-field col s6">
                            <input
                              id="dateOfDestruction"
                              name="dateOfDestruction"
                              type="text"
                              className="validate"
                              onChange={() => "1"}
                            />
                            <label htmlFor="dateOfDestruction">Дата руйнування</label>
                          </div>
                          <div className="input-field col s6">
                            <input
                              id="dateOfRecovery"
                              name="dateOfRecovery"
                              type="text"
                              className="validate"
                              onChange={() => "1"}
                            />
                            <label htmlFor="dateOfRecovery">Дата відновлення</label>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer" style={{backgroundColor: "#1F1F1F"}}>
                    <button className="btn green darken-3" style={{marginRight: 10}}>Оновити</button>
                    <button className="btn red darken-3" style={{marginRight: 10}}>Видалити</button>
                    <button className="modal-close btn purple darken-1" style={{marginRight: 10}}>Закрити</button>
                  </div>
                </div>
                {/*<button className={"btn green darken-3"} style={{ marginBottom: 10, display:"flex", alignItems: "center !important" }}>*/}
                {/*  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#E1E1E1">*/}
                {/*    <path d="M0 0h24v24H0z" fill="none" />*/}
                {/*    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />*/}
                {/*  </svg>*/}
                {/*</button>*/}
                {/*<button className={"btn red darken-3"} style={{display:"flex", alignItems: "center !important"}}>*/}
                {/*  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#E1E1E1">*/}
                {/*    <path d="M0 0h24v24H0z" fill="none" />*/}
                {/*    <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />*/}
                {/*  </svg>*/}
                {/*</button>*/}
              </td>
            </tr>
          );
        })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;