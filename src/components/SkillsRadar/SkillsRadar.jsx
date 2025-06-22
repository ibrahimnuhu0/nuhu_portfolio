import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import skillsData from "../../assets/data/skills.json";
import "./SkillsRadar.css";

const SkillsRadar = () => (
  <section className="skills-radar" id="skills">
    <h2 className="section-title">My Skills</h2>
    <p className="section-description">
      A snapshot of my core technical strengths.
    </p>
    <div className="chart-wrapper">
      <ResponsiveContainer width="100%" height={400}>
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={skillsData}>
          <PolarGrid stroke="#ccc" />
          <PolarAngleAxis dataKey="skill" tick={{ fill: "var(--text-color)" }} />
          <PolarRadiusAxis
            angle={30}
            domain={[0, 100]}
            stroke="var(--text-color)"
          />
          <Radar
            name="Skill Level"
            dataKey="level"
            stroke="#4e91fc"
            fill="#4e91fc"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  </section>
);

export default SkillsRadar;
