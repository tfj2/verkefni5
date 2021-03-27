import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {News} from '../news/News'
import { NavLink } from 'react-router-dom';
import s from './NewsList.module.scss';

const apiUrl = process.env.REACT_APP_API_URL;

NewsId.prototype = {
  id: PropTypes.string,
  url: PropTypes.string,
  title: PropTypes.string,
}

function NewsId({ id = '', url = '', title = '' }){
  return (
      <div>
        <dl>
          <dt>{title}</dt>
          <dt>{id}</dt>
          <dt>{url}</dt>
        </dl>
      </div>
  )
}

export function NewsList() {
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);
      let json;

      try {
        const result = await fetch(apiUrl);

        if (!result.ok) {
          throw new Error('result not ok');
        }

        json = await result.json();
      } catch (e) {
        setError('Gat ekki sótt gögn.');
        return;
      } finally {
        setLoading(false);
      }

      setData(json);
    }
    fetchData()
  }, []);

if (error) {
  return (
    <p>Villa kom upp: {error}</p>
  );
} 

if (loading) {
  return (
    <p>Sæki gögn...</p>
  );
}

let index = true;

let newslist = data || [];
return (
  <section>
    <ul className = {s.section}>
      {newslist.length === 0 && (
        <li> nothing, {apiUrl}</li>
      )}
      {newslist.length > 0 && newslist.map((item, i) => {
        const {
          id, url, title
        } = item;
        console.log(id)
        return(
          <div className={s.News}>
            <News
            title = {id}
            newsId = {title}
            index = {index}
            />
          <p><NavLink to={`/${id}`}>Allar Fréttir</NavLink></p>
          </div>
          
        );  
      })}    
    </ul>
  </section>
)
}
