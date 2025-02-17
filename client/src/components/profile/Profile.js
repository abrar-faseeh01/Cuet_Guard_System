import React from "react";
import { Link } from "react-router-dom";
import "./Profile.css";

import { useSelector } from "react-redux";
import Loader from "../../common/Loader/Loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Profile = () => {
  const { user, loading } = useSelector((state) => state.auth);
  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <section className="project-details ">
          <div className="shadow p-5 mb-5 bg-white rounded">
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-6">
                  <div className="project-details__left">
                    <div className="project-details__img d-flex justify-content-center align-items-center">
                      <img src={user.avatar.url} alt={user.name} className="rounded-circle profile-image " />
                    </div>
                    <div className="text-center left pt-5">
                      <h2>{user.name}</h2>
                    </div>
                    <div className="text-center">
                      <p>{user.role}</p>
                    </div>
                    <div className="text-center">
                      <FontAwesomeIcon icon="fas fa-edit" />
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                  <div className="project-details__right">

                    <h3 className="project-details__title">Profile</h3>
                    <ul className="list-unstyled project-details__list">
                      <li>
                        <div className="left">
                          <h4> Name :</h4>
                        </div>
                        <div className="right">
                          <p>{user.name}</p>
                        </div>
                      </li>

                      <li>
                        <div className="left">
                          <h4>Email:</h4>
                        </div>
                        <div className="right">
                          <p>{user.email}</p>
                        </div>
                      </li>

                    </ul>
                  </div>
             


                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Profile;
