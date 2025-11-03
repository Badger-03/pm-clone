import { supabase } from '../lib/supabaseClient';
import { useEffect, useState } from 'react';

export default function Home() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function loadProjects() {
      const { data } = await supabase.from('projects').select('*').limit(5);
      setProjects(data || []);
    }
    loadProjects();
  }, []);

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>🚀 ProjectManager Clone</h1>
      <p>Подключение к Supabase установлено!</p>
      <h3>Пример запроса:</h3>
      {projects.length > 0 ? (
        <ul>
          {projects.map((p) => (
            <li key={p.id}>{p.name}</li>
          ))}
        </ul>
      ) : (
        <p>Нет проектов в базе (и это нормально)</p>
      )}
    </main>
  );
}
