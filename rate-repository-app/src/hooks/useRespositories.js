import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries";

export const useRepositoriesFetch = () => {
  const [repositories, setRepositories] = useState();
  const [loading, setLoading] = useState(false);

  const fetchRepositories = async () => {
    setLoading(true);

    // Replace the IP address part with your own IP address!
    const response = await fetch("http://192.168.0.46:5001/api/repositories");
    const json = await response.json();

    setLoading(false);
    setRepositories(json);
  };

  useEffect(() => {
    fetchRepositories();
  }, []);

  return { repositories, loading, refetch: fetchRepositories };
};

const useRepositories = () => {
  const { loading, error, data, refetch } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
  });
  return { repositories: data?.repositories, loading, error, refetch };
};

export default useRepositories;
