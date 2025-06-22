import React from 'react';
import {
  Radar, RadarChart, PolarGrid,
  PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer
} from 'recharts';

import skillsData from '../../assets/data/skills.json';
import './SkillsRadar.css';

const SkillsRadar = () => {
  return (
    <section className="skills-radar">
      <h2>My Skills</h2>
      <ResponsiveContainer width="100%" height={400}>
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={skillsData}>
          <PolarGrid />
          <PolarAngleAxis dataKey="skill" />
          <PolarRadiusAxis angle={30} domain={[0, 100]} />
          <Radar
            name="Skill Level"
            dataKey="level"
            stroke="#4e91fc"
            fill="#4e91fc"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </section>
  );
};

export default SkillsRadar;
