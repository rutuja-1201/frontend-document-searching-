import React from 'react';
import { Document } from '@/types/document';
import 'bootstrap/dist/css/bootstrap.min.css';

interface Props {
    results: Document[];
}

const SearchResults: React.FC<Props> = ({ results }) => {
    return (
        <div className="container mt-4">
            <h3 className="text-center mb-4">Search Results</h3>
            <ul className="list-group">
                {results.length > 0 ? (
                    results.map((doc) => (
                        <li key={doc.id} className="list-group-item">
                            <div className="fw-bold">Document ID: {doc.id}</div>
                            <p className="mb-1">{doc.content}</p>
                        </li>
                    ))
                ) : (
                    <li className="list-group-item text-center">
                        No results found.
                    </li>
                )}
            </ul>
        </div>
    );
};

export default SearchResults;
