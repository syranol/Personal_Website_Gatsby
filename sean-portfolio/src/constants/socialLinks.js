import React from "react"
import {
  FaLinkedin,
  FaGithubSquare,
  FaInstagramSquare,
  FaRegIdBadge,
} from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/in/syranol",
  },
  {
    id: 2,
    icon: <FaGithubSquare className="social-icon"></FaGithubSquare>,
    url: "https://www.github.com/syranol",
  },
  {
    id: 3,
    icon: <FaRegIdBadge className="social-icon"></FaRegIdBadge>,
    url: "https://syranol.github.io/markdown-cv/",
  },
  {
    id: 4,
    icon: <FaInstagramSquare className="social-icon"></FaInstagramSquare>,
    url: "https://www.instagram.com/syranol",
  },
]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url} className="social-link">
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}
