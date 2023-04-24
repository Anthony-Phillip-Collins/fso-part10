import { useEffect, useState } from "react";
import Select from "../Select";
import Text from "../Text";
import RepositoryListContainer from "./RepositoryListContainer";
import useRespositories from "../../hooks/useRespositories";
import { Searchbar } from "react-native-paper";
import theme from "../../theme";
import { View } from "react-native";
import { useDebounce } from "use-debounce";

const RepositoryList = () => {
  const { repositories, error, refetch, fetchMore } = useRespositories({
    first: 4,
  });
  const [selectedOption, setSelectedOption] = useState(null);

  const [searchQuery, setSearchQuery] = useState("");
  const [searchQueryDebounce] = useDebounce(searchQuery, 500);

  const onChangeSearch = (query) => setSearchQuery(query);

  const onEndReached = async () => {
    await fetchMore();
    // console.log("You have reached the end of the list", fetchMoreResult);
  };

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
      searchKeyword: searchQueryDebounce,
    });
  }, [selectedOption, searchQueryDebounce]);

  if (error) return <Text>{error.message}</Text>;

  return (
    <>
      <RepositoryListContainer
        repositories={repositories}
        onEndReached={onEndReached}
        onEndReachThreshold={0.5}
        ListHeaderComponent={
          <>
            <View
              style={{
                marginHorizontal: theme.spacing.large,
                marginTop: theme.spacing.large,
                marginBottom: 0,
                backgroundColor: theme.colors.secondary,
              }}
            >
              <Searchbar
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchQuery}
                style={{
                  backgroundColor: "white",
                  borderRadius: 5,
                  shadowOffset: {
                    width: 0,
                    height: 0,
                  },
                  shadowOpacity: 0.2,
                  shadowRadius: 3,
                }}
              />
            </View>
            <Select
              data={options}
              onSelect={setSelectedOption}
              selected={selectedOption}
              placeholder="Select an item..."
            />
          </>
        }
      />
    </>
  );
};

export default RepositoryList;
