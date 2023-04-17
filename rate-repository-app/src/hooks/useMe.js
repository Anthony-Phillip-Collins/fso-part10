import { useQuery } from "@apollo/client";
import { ME } from "../graphql/queries";

const useMe = () => {
  const { data, loading, error } = useQuery(ME);
  return { data, loading, error };
};

export default useMe;
