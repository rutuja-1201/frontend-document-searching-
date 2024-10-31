import React, { useState } from 'react';
import { searchDocuments } from '../services/api';
import 'bootstrap/dist/css/bootstrap.min.css';

interface Props {
    onSearch: (results: any[]) => void;
}

const SearchBar: React.FC<Props> = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSearch = async () => {
        if (query.trim()) {
            const results = await searchDocuments(query);
            onSearch(results);
        }
    };

    return (
        <div className="container mt-4">
            <div className="input-group">
                <input
                    type="text"
                    className="form-control"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search documents"
                    aria-label="Search documents"
                />
                <button
                    className="btn btn-primary"
                    onClick={handleSearch}
                    disabled={!query.trim()}
                >
                    Search
                </button>
            </div>
        </div>
    );
};

export default SearchBar;
