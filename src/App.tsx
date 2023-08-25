import './App.css';
import { Header } from './components/Header';
import { Link } from './components/Link';

function App() {
  const articles = [
    {
      title: 'Summer Lunch Menu By Mark Best',
      src: 'Image-01',
      desc: 'Lorem ipsum',
    },
    {
      title: 'A traditional Christmas Eve, Mark best style',
      src: 'Image-01',
      desc: 'Lorem ipsum',
    },
    {
      title: 'Taking taste further',
      src: 'Image-01',
      desc: 'Lorem ipsum',
    },
  ];
  return (
    <>
      <div className='bg-white'>
        <Header />
        <div className='flex flex-col'>
          <h1>All the latest from AEG</h1>
          {articles.map((article) => {
            return (
              <Link
                key={article.title}
                src={article.src}
                title={article.title}
                desc={article.desc}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
