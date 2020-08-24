import React from "react"
import Title from "./Title"
import education from "../constants/education"
const Educations = () => {
  return (
    <section className="section bg-grey">
      <Title title="Education" />
      <div className="section-center services-center">
        {education.map(edu => {
          const { id, icon, title, text } = edu

          return (
            <article key={id} className="service">
              {icon}
              <h4>{title}</h4>
              <div class="underline"></div>
              <p>{text}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Educations
