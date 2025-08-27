import React from "react";

export default function App() {
    type NewsItem = { id: number; title: string };
    const [items, setItems] = React.useState<NewsItem[]>([]);

    React.useEffect(() => {
        fetch('http://localhost:3000/api/news')
            .then(r => r.ok ? r.json() : [])
            .then(setItems)
            .catch(() => setItems([{ id: 1, title: 'Demo News (fallback)' }]));
    }, []);

    return (
        <div>
            <ul className="clean">
                {items.map(n => <li key={n.id}>{n.title}</li>)}
            </ul>
        </div>
    );
}
