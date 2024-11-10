import React, { useState, useEffect } from 'react';
import './AlertLabel.css';

const AlertLabel = ({ message }) => {
    const [show, setShow] = useState(true);

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setShow(false);
    //     }, 3000); // Auto dismiss after 3 seconds

    //     return () => clearTimeout(timer);
    // }, []);

    if (!show) return null;

    return (
        <div className="alert alert-success alert-dismissible fade show alert-label" role="alert">
            {message}
            <button type="button" className="btn-close" aria-label="Close" onClick={() => setShow(false)}></button>
        </div>
    );
};

export default AlertLabel;