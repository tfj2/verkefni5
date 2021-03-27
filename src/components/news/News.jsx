import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import s from './News.module.scss';

const apiUrl = process.env.REACT_APP_API_URL;

NewsId.prototype = {
  id: PropTypes.string,
  link: PropTypes.string,
}


function NewsId({ id = '', link = '',}){
  return (

      <div>
        <dl>
        <a href= {link} rel="noreferrer">
        {id}
       </a>
        </dl>
      </div>

  )
}

export function News({title, newsId, index}) {
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
      async function fetchData() {
        setLoading(true);
        setError(null);
        let json;
        
        try {
          console.log(title)
          const result = await fetch(apiUrl.concat(title));
  
          if (!result.ok) {
            throw new Error('result not ok');
          }
  
          json = await result.json();
        } catch (e) {
          setError('Gat ekki sótt gögn.');
          return
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
  
  let newslist = data || [];
  return (
      <li className={s.News}>
        <h2>{newsId}</h2>
        {newslist.length === 0 && (
          <li> nothing, {apiUrl}</li>
        )}
        {newslist.length !== 0 && index && newslist.items.map((items, i) => {
          newslist.items.splice(5);
          const {
            body, link, published, publisher, title
          } = items;
  
          return(
               <NewsId
                id = {title}
                link = {link}
               />
          );  
        })}
        {newslist.length !== 0 && !index && newslist.items.map((items, i) => {
          const {
          link,  title
          } = items;
  
          return(
               <NewsId
                id = {title}
                link = {link}
               />
          );  
        })}
        {!index && (<p><NavLink to="/">til baka</NavLink></p>  )}  
      </li>
  )

} 