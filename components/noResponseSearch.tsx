import React from 'react';

interface NoSearchResultProps {
  searchQuery: string;
}

const NoSearchResult: React.FC<NoSearchResultProps> = ({searchQuery}) => {
  return (
    <div>
      <h2>No Results Found</h2>
      <p> The search for <strong>{searchQuery}</strong> had 0 results.</p>
      <p> Please try again with a different search term.</p>
    </div>
  );
};

export default NoSearchResult;