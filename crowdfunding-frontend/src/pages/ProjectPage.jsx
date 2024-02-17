import { useParams } from "react-router-dom";
import useProject from "../hooks/use-project";

function ProjectPage() {
    const { id } = useParams();
    const { project, isLoading, error } = useProject(id);
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Something went wrong: {error.message}</p>;
    return (
        <div>
            <h2>{project.title}</h2>
            <h3>Created at: {project.date_created}</h3>
            <img src={project.image} />
            <p>{project.description}</p>
            <h3>Pledges:</h3>
            <ul> {project.pledges.map((pledge, key) => {
                return (
                    <li key={key}>{pledge.amount} from {pledge.supporter}
                    </li>
                );
            })}
            </ul>
        </div >
    );
}
export default ProjectPage
