// components/NewBook/NewBook.tsx
import React, { useState } from 'react';
import './NewBook.css';

const NewBook: React.FC = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [isbn, setIsbn] = useState('');
    const [description, setDescription] = useState('');
    const [year, setYear] = useState('');
    const [bookState, setBookState] = useState('New');

    const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (/^\d{0,4}$/.test(value)) {
            setYear(value);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (year.length > 4) {
            alert('Year of Release must be a valid');
            return;
        }
        alert(`New book added: Title: ${title}, Author: ${author}, ISBN: ${isbn}, Year: ${year}, State: ${bookState}, Description: ${description}`);
    };

    return (
        <div className="NewBook">
            <h2>Add a New Book</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="author">Author:</label>
                    <input
                        type="text"
                        id="author"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="isbn">ISBN:</label>
                    <input
                        type="text"
                        id="isbn"
                        value={isbn}
                        onChange={(e) => setIsbn(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="year">Year of Release:</label>
                    <input
                        type="text"
                        id="year"
                        value={year}
                        onChange={handleYearChange}
                        required
                        pattern="\d{4}"
                        maxLength={4}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="bookState">Book State:</label>
                    <select
                        id="bookState"
                        value={bookState}
                        onChange={(e) => setBookState(e.target.value)}
                        required
                    >
                        <option value="New">New</option>
                        <option value="Bad">Bad</option>
                        <option value="Mixed">Mixed</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Add Book</button>
            </form>
        </div>
    );
};

export default NewBook;
