import React, { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleJobPost } from '../../redux/actions/gatePassPostAction';
import Loader from '../../common/Loader/Loader';
import { formatDateTimeWithAMPM } from '../../utils/timeDateFormate';
import axios from 'axios';
import { baseUrl } from '../../utils/baseUrl';
import { config } from '@fortawesome/fontawesome-svg-core';

const GatePassDetailsComponent = () => {
  const { id } = useParams();
  const { loading, singleJobPost } = useSelector(state => state.jobpost);
  const { user } = useSelector(state => state.auth);
  const navigate = useNavigate();


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleJobPost(id));
  }, [dispatch, id]);

  if (loading) {
    return <Loader />;
  }

  if (!singleJobPost) {
    return <div>No Post found.</div>;
  }

  const handleApprove = async (id) => {

    const config = {

      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
      },
      withCredentials: true

    }
    await axios.put(baseUrl + '/post/' + id, {
      "isApprove": "yes",
    },
      config

    )
    alert("Updated");
    navigate("/application");

  }
  const handleDelete = async (id) => {

    const config = {

      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
      },
      withCredentials: true

    }
    await axios.delete(baseUrl + '/post/' + id, {
    },
      config

    )
    alert("Deleted");
    navigate("/application");

  }

  return (
    <div>
      {
        loading ? <Loader /> : (
          <section className="blog-details">

            <div className="container">
              <div className="row">
                <div className="col-xl-12 col-lg-12">

                  <div className="blog-details__left">

                    <div className="blog-details__content">

                      <h2 className="blog-details__title">{singleJobPost?.post?.title}</h2>

                      <h4 className='pb-2'>Date : </h4>
                      <p className="blog-details__text-1 pb-4">{formatDateTimeWithAMPM(singleJobPost?.post?.date)} </p>

                      <h4 className='pb-2'>Description : </h4>
                      <p className="blog-details__text-1 pb-4">{singleJobPost?.post?.description} </p>

                    </div>

                  </div>

                </div>
                <div>
                  <h4 className='pb-2'>Application From </h4>
                  <p className="blog-details__text-1 pb-2">{singleJobPost?.post?.postedBy?.name
                  } </p>

                </div>

                {singleJobPost?.post?.isApprove === "no" && user?.role === "officer" ?
                  <div className='p-5 d-flex align-items-center justify-content-center bg-light'>
                    <button className='btn btn-outline-primary mx-2' onClick={() => handleApprove(singleJobPost?.post?._id)}> Approve </button>
                    <button className='btn btn-outline-danger mx-2' onClick={() => handleDelete(singleJobPost?.post?._id)}> Delete </button>
                  </div>
                  : <></>}


              </div>
            </div>
          </section>
        )}
    </div>
  )
}

export default GatePassDetailsComponent;