import { useEffect, useState } from "react";
import Select from "../Select";
import Text from "../Text";
import RepositoryListContainer from "./RepositoryListContainer";
import useRespositories from "../../hooks/useRespositories";

const RepositoryList = () => {
  const { repositories, error, refetch } = useRespositories();
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    {
      label: "Latest repositories",
      orderBy: "CREATED_AT",
      orderDirection: "DESC",
    },
    {
      label: "Highest rated repositories",
      orderBy: "RATING_AVERAGE",
      orderDirection: "DESC",
    },
    {
      label: "Lowest rated repositories",
      orderBy: "RATING_AVERAGE",
      orderDirection: "ASC",
    },
  ];

  useEffect(() => {
    setSelectedOption(options[0]);
  }, []);

  useEffect(() => {
    refetch({
      orderBy: selectedOption?.orderBy,
      orderDirection: selectedOption?.orderDirection,
    });
  }, [selectedOption]);

  if (error) return <Text>{error.message}</Text>;

  return (
    <>
      <RepositoryListContainer
        repositories={repositories}
        ListHeaderComponent={
          <Select
            data={options}
            onSelect={setSelectedOption}
            selected={selectedOption}
            placeholder="Select an item..."
          />
        }
      />
    </>
  );
};

export default RepositoryList;
