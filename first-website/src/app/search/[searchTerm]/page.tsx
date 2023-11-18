import React from "react";
type pageProps = {
  params: {
    searchTerm: string;
  };
};
const search = async (searchTerm: string) => {
  const res = await fetch(
    `"https://serpapi.com/search.json?q=${searchTerm}&api_key=${process.env.API_KEY}`
  );
};

const SearchResults = async ({ params: { searchTerm } }: pageProps) => {
  const searchResults = await search(searchTerm);
  return <div>SearchResults</div>;
};

export default SearchResults;
