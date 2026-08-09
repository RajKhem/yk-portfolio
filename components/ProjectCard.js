import Link from "next/link";

export default function ProjectCard({ project, featured = false }) {
  return (
    <article className={`project-card ${featured ? "featured" : ""}`}>
      <div className="project-top">
        <span className="project-number">{project.number}</span>

        <div className="project-meta">
          {project.featured && (
            <span className="featured-label">
              FEATURED PROJECT
            </span>
          )}

          <span className="project-status">
            {project.status}
          </span>
        </div>

        <span className="project-arrow">↗</span>
      </div>

      <div className="project-body">
        <p className="project-category">
          {project.category}
        </p>

        <h3>{project.title}</h3>

        <p className="project-description">
          {project.description}
        </p>

        <div className="project-tags">
          {project.technologies.map((technology) => (
            <span key={technology}>
              {technology}
            </span>
          ))}
        </div>

        <Link
          href={`/projects/${project.id}`}
          className="project-link"
        >
          View case study <span>↗</span>
        </Link>
      </div>
    </article>
  );
}