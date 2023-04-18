import useRepositories from "../../hooks/useRespositories";
import RepositoryListContainer from "./RepositoryListContainer";

const RepositoryList = () => {
  const { repositories } = useRepositories();

  return <RepositoryListContainer repositories={repositories} />;
};

export default RepositoryList;
