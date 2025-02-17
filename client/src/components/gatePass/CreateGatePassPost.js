import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "../../common/Loader/Loader";
import { clearErrors, createJobPost } from "../../redux/actions/gatePassPostAction";

const CreateGatePassPost = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");


  const [titleValidation, setTitleValidation] = useState(false);
  const [descriptionValidation, setDescriptionValidation] = useState(false);

  const { user, error, loading } = useSelector((state) => state.auth);

  const alert = useAlert();
  const dispatch = useDispatch();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };


  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, alert, error, navigate]);

  const handleSubmit = (e) => {
    setTitleValidation(true);
    setDescriptionValidation(true);
    e.preventDefault();

    const formData = {
      title: title,
      description: description,
      postedBy: user._id,
    };
    if (title && description) {
      dispatch(createJobPost(formData));
      setTitle("");
      setDescription("");
      navigate("/");
    }
  };

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <section className=" p-5 mt-5 ">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-6">
                <div className="contact-page__left">
                  <div className="section-title text-left">
                    <h2 className="section-title__title text-center">
                      Create a Gate Pass Post{" "}
                    </h2>
                  </div>
                  <div className="contact-page__form">
                    <form
                      onSubmit={handleSubmit}
                      className="comment-one__form contact-form-validated"
                    >
                      <div className="row">
                        <div className="col-xl-12">
                          <div className="comment-form__input-box pb-2 my-3">
                            <input
                              type="text"
                              placeholder="Post title"
                              name="Posttitle"
                              value={title}
                              onChange={handleTitleChange}
                            />
                          </div>
                          {title.length === 0 && titleValidation && (
                            <p className="pb-5 text-danger">
                              Title is empty !!
                            </p>
                          )}
                        </div>

                        <div className="col-xl-12">
                          <div className="comment-form__input-box pb-2 my-3">
                            <textarea
                              type="text"
                              placeholder="Post Description"
                              name="jobdescription"
                              value={description}
                              onChange={handleDescriptionChange}
                            />
                          </div>
                          {description.length === 0 &&
                            descriptionValidation && (
                              <p className="pb-5 text-danger">
                                Job Description is empty !!
                              </p>
                            )}
                        </div>





                        <div className="col-xl-12 ">
                          <div className="comment-form__btn-box d-flex justify-content-center">
                            <button
                              type="submit"
                              onClick={(e) => handleSubmit(e)}
                              className="thm-btn comment-form__btn "
                            >
                              Create
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
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

export default CreateGatePassPost;
