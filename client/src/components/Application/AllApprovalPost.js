import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { formatDate } from "../../utils/timeDateFormate";


import { useDispatch, useSelector } from 'react-redux';
import { getAllJobPosts, clearErrors } from '../../redux/actions/gatePassPostAction';
import Loader from '../../common/Loader/Loader';

const AllApprovalPost = () => {
  const { jobPosts, error, loading, } = useSelector(state => state.jobpost);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllJobPosts());

    if (error) {
      dispatch(clearErrors());
    }

  }, [dispatch, error])



  return (
    <div>
      {
        loading ? <Loader /> : (
          <section className="events-area_event events-area bg-color ptb-100">
            <div className="container">

              <div className="row align-items-center">
                <div className="">
                  <div className="events-content events-content_event">
                    <ul className="events-list">
                      {jobPosts?.jobPosts?.map((post, index) => (
                        post?.isApprove === "no" ?
                          
                        <li key={index} className="d-flex my-5 pb-3 ">
                          <div className="events-date">

                            <span className="mb-2">{formatDate(post?.date).slice(0, 6)}</span>
                            <span className="mb-2">{formatDate(post?.date).slice(7)}</span>

                          </div>

                          <div>
                            <h3>



                              <Link to={`/post/${post._id}`} className="read-more">
                                {post?.title}
                              </Link>
                            </h3>
                            <p>
                              {post?.description?.slice(0, 250)}
                            </p>

                            <Link to={`/post/${post._id}`} className="read-more">
                              Find out more
                              <FontAwesomeIcon
                                icon={faArrowRight}
                                style={{ marginLeft: "0.4rem" }}
                              />
                            </Link>
                          </div>

                        </li>
                          : <div key={post._id}></div>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
    </div>
  )
}

export default AllApprovalPost;