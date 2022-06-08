import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FcAdvance } from "react-icons/fc";
import { AppWrap, MotionWrap } from "../../Wrapper";
import { urlFor, client } from "../../client";
import "./Skills.scss";
const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [experiences, setExperience] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillquery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      setExperience(data.sort((a, b) => b.order - a.order));
    });
    client.fetch(skillquery).then((data) => {
      setSkills(data);
    });
  }, []);
  return (
    <>
      <h2 className="head-text">Skills & Experience</h2>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills?.map((skill, index) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={`${skill.name}+${index}`}
            >
              <div className="app__flex" style={{ backgroundColor: skill.bgColor }}>
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="app__skills-exp" style={{ paddingTop: "5rem" }}>
          <div className="app__skilss-exp-heading head-text">Experiences</div>
          {experiences.map((experience) => (
            <motion.div className="app__skills-exp-item" key={experience.order}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work, index) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={`${work.name}+${index}`}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    <div className="app__skills-exp-desc">
                      {work.desc.split("#").map((item, index) => {
                        return (
                          <div
                            className="app__skills-exp-desc-row"
                            key={`${work.company}-${index}`}
                          >
                            <span style={{ marginRight: "1rem" }}>
                              <FcAdvance />
                            </span>
                            <div className="app__skills-exp-desc-item">{item}</div>
                          </div>
                        );
                      })}
                    </div>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(Skills, "app__skills"), "skills", "app__whitebg");
