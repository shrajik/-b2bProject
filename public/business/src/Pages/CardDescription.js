import React from "react";
const MenuCard = ({ menuData }) => {
  return (
    <>
      <section className="main-card--container">
        {menuData.map((curElem) => {
          return (
            <>
              <div className="card-container" key={curElem.id}>
                <div className="card">
                  <div className="card-body">
                    {
                      <img
                        src={curElem.image}
                        alt="images"
                        className="card-media"
                      />
                    }
                  </div>

                  <div className="card-body">
                    <h2 className="card-title">{curElem.name}</h2>
                    <span className="card-author subtle">
                      Category: {curElem.category} Industry
                    </span>
                    <span className="card-author subtle">
                      Turnover: {curElem.turnover}{" "}
                    </span>
                    <span className="card-author subtle">
                      Location: {curElem.location}{" "}
                    </span>
                    <div className="card-description">
                      <span>{curElem.description}</span>
                    </div>
                    {/* <div className='ratings'></div> NEED TO ADD RATING STAR SYMBOL SHRAJIK */}
                    <div>
                      <button className="card-button"> Visit Profile</button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default MenuCard;
