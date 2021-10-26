import React from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./InsertCourse.css";

const InsertCourse = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    fetch("http://localhost:5000/courses", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("Course Added Successfully");
          reset();
        }
      });
  };

  return (
    <Container>
      <form className="insert-form" onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Course name" {...register("courseName")} />
        <input placeholder="Course Image" {...register("img")} />
        <input placeholder="Course Instructor" {...register("instructior")} />
        <input placeholder="Instructor Image" {...register("trainerIMG")} />
        <input placeholder="Course Include" {...register("include")} />
        <textarea
          placeholder="Course Description"
          {...register("description")}
        ></textarea>
        <textarea
          placeholder="About Trainer"
          {...register("aboutTrainer")}
        ></textarea>
        <input
          type="number"
          placeholder="Course Prise"
          {...register("price")}
        />
        <input
          type="number"
          placeholder="Course Duration Hour"
          {...register("duration")}
        />
        <input className="btn btn-primary" type="submit" />
      </form>
    </Container>
  );
};

export default InsertCourse;
