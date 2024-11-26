import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, CheckCircle, Target } from 'lucide-react';
import { projects } from '../data/projects';

export const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Projet non trouvé</h1>
          <Link
            to="/"
            className="text-blue-500 hover:text-blue-600 flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour à l'accueil
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        Retour aux projets
      </Link>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      {project.videoUrl && (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-64 object-cover"
        >
          <source src={project.videoUrl} type="video/mp4" />
        </video>
      )}
        {!project.videoUrl && project.imageUrl && (
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-64 object-cover"
          />
        )}

        <div className="p-8">
          <h1 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">
            {project.title}
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {project.role && (
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <User className="w-5 h-5" />
                <span>{project.role}</span>
              </div>
            )}
            {project.duration && (
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <Calendar className="w-5 h-5" />
                <span>{project.duration}</span>
              </div>
            )}
          </div>

          <div className="prose dark:prose-invert max-w-none mb-8">
            <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line">
              {project.longDescription}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {project.challenges && (
              <div>
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-gray-800 dark:text-white">
                  <Target className="w-5 h-5" />
                  Défis
                </h2>
                <ul className="space-y-2">
                  {project.challenges.map((challenge, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-gray-600 dark:text-gray-300"
                    >
                      <span className="mt-1">•</span>
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.outcomes && (
              <div>
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-gray-800 dark:text-white">
                  <CheckCircle className="w-5 h-5" />
                  Résultats
                </h2>
                <ul className="space-y-2">
                  {project.outcomes.map((outcome, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-gray-600 dark:text-gray-300"
                    >
                      <span className="mt-1">•</span>
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
              Technologies utilisées
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};