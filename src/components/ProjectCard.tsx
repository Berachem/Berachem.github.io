import { Link } from 'react-router-dom';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Link
      to={`/project/${project.id}`}
      className="block bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-[1.02] transition-transform duration-300"
    >
      {project.videoUrl && (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-96 object-cover"
        >
          <source src={project.videoUrl} type="video/mp4" />
        </video>
      )}
 
      
 <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm text-gray-700 dark:text-gray-300"
            >
              <img src={"https://skillicons.dev/icons?i=" + tech.toLowerCase()} alt={tech} className="inline-block mr-2 h-10 w-10" />
           
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};