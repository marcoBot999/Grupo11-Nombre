import React, { useEffect, useState } from "react";

function LastUserInDb() {

  const [lastUser, setLastUser] = useState({});

  useEffect(() => {
    const getLastUser = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/user/lastUser");
        const json = await response.json();
        //console.log(json.data);
        //return json.total;
        setLastUser(json.data);

      } catch (error) {
        console.log("error", error);
        // return 0;
        setLastUser({});
      }
    };

    getLastUser();
  }, []);

  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Last User in Data Base
          </h5>
        </div>
        <div className="card-body">
          <div className="text-center">
            <img
              className="img-fluid px-3 px-sm-4 mt-3 mb-4"
              style={{ width: "40rem" }}
              src={"http://localhost:3001" + lastUser.url_img}
              alt="imagen usuario"
            />
          </div>
          <h4>
            {lastUser.firstname + ' ' + lastUser.lastname}
          </h4>
          <a className="btn btn-dark" target="_blank" rel="nofollow" href="/">
            View user detail
          </a>
        </div>
      </div>
    </div>
  );
}

export default LastUserInDb;
