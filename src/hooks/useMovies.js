import { useQuery } from "@tanstack/react-query";
import APIConnect from "../services/apiConnect";

const getPopularMovies = async () => {
  const { data } = await APIConnect.get("/movie/popular");
  return data;
};

export function usePopularMovies() {
  return useQuery({
    queryKey: ["movies", "popular"],
    queryFn: getPopularMovies,
    staleTime: 1000 * 60 * 30,
  });
}
