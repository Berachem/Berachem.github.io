import { Skill } from '../types';

interface SkillSectionProps {
  skills: Skill[];
}

export const SkillSection = ({ skills }: SkillSectionProps) => {
  return (
    <div className="grid ">
      {skills.map((skill) => (
        <div key={skill.category} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 my-4">
          <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
            {skill.category}
          </h3>
          <div className="flex flex-wrap gap-2">
            {skill.items.map((item) => (
              <span
                key={item}
                className="px-2 py-1 text-sm text-gray-700 dark:text-gray-300"
              >
                
                <img src={"https://skillicons.dev/icons?i=" + item.toLowerCase()} alt={item} className="inline-block mr-2 h-10 w-10" />
                {item}
     
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};