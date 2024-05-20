import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

const TBDB_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYWJjYTQ0ZTY2NDEwZDc3N2ZkMTFiY2UwZjRhMTE3ZiIsInN1YiI6IjY2M2M1ODdiZDEzYTMzNDFjZTc4NTYyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K_1MfRKXyVyK7FGJfmz4SsQVAVP3IqA695rx5qJmkLI";

const headers = {
  Authorization: "bearer " + TBDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
    console.log(data);

    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
