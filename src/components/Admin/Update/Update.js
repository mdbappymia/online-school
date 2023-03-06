/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router";

const Update = () => {
  const [course, setCourse] = useState({});
  const { id } = useParams();
  const history = useHistory();
  const { register, handleSubmit, watch, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = `https://online-school-a1pm.onrender.com/courses/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.acknowledged) {
          alert("Update Successfully");
          reset();
          history.push("/admin/deleteORupdate");
        }
      });
  };

  useEffect(() => {
    fetch(`https://online-school-a1pm.onrender.com/courses/${id}`)
      .then((res) => res.json())
      .then((data) => setCourse(data));
  }, []);
  console.log(watch("example"));
  const {
    courseName,
    img,
    instructior,
    trainerIMG,
    include,
    description,
    aboutTrainer,
    price,
    duration,
  } = course;
  return (
    <Container>
      <form className="insert-form" onSubmit={handleSubmit(onSubmit)}>
        <input
          defaultValue={courseName}
          {...register("courseName", { required: true })}
        />
        <input defaultValue={img} {...register("img", { required: true })} />
        <input
          defaultValue={instructior}
          {...register("instructior", { required: true })}
        />
        <input
          defaultValue={trainerIMG}
          {...register("trainerIMG", { required: true })}
        />
        <input
          defaultValue={include}
          {...register("include", { required: true })}
        />
        <textarea
          defaultValue={description}
          {...register("description", { required: true })}
        ></textarea>
        <textarea
          defaultValue={aboutTrainer}
          {...register("aboutTrainer", { required: true })}
        ></textarea>
        <input
          defaultValue={price}
          type="number"
          {...register("price", { required: true })}
        />
        <input
          defaultValue={duration}
          type="number"
          {...register("duration", { required: true })}
        />
        <input className="btn btn-primary" type="submit" />
      </form>
    </Container>
  );
};

export default Update;
