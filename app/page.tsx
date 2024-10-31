"use client"
import React, { useState } from 'react';

import { Document } from '../types/document';
import DocumentUpload from './components/DocumentUpload';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';

const Home: React.FC = () => {
    const [results, setResults] = useState<Document[]>([]);

    return (
        <div>
            <h1 className='text-center mt-5'>Document Indexing and Search</h1>
            <DocumentUpload />
            <SearchBar onSearch={setResults} />
            <SearchResults results={results} />
        </div>
    );
};

export default Home;
