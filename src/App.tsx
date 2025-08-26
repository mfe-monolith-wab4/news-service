import React, { useEffect, useState } from 'react';


export default function App() {
    type NewsItem = { id: number; title: string };
    const [items, setItems] = useState<NewsItem[]>([]);

    useEffect(() => {
        // Optional: hol dir Daten vom Mock-Backend (Hono) – sonst Demo‑Daten
        fetch('http://localhost:3000/api/news')
            .then(r => r.ok ? r.json() : [])
            .then(setItems)
            .catch(() => setItems([{ id: 1, title: 'Demo News (fallback)' }]));
    }, []);

    return (
        <div style={{ padding: 12, border: '1px solid #eee', borderRadius: 12 }}>
            <h3>News Service</h3>
            <ul>
                {items.map(n => <li key={n.id}>{n.title}</li>)}
            </ul>
        </div>
    );
}


