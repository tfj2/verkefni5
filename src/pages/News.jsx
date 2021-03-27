import { useParams } from 'react-router-dom';
import { News } from '../components/news/News'

export function NewsPage() {
  let { types } = useParams();
  let index = false;

  return (
    <News
    title = {types}
    newsId = {types}
    index = {index}
        />
  );
}