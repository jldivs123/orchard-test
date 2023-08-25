import './App.css';
import { Header } from './components/Header';
import { Link } from './components/Link';

function App() {
  const articles = [
    {
      title: 'Summer Lunch Menu By Mark Best',
      src: 'Image-01',
      desc: "AEG ambassador Mark Best's summer eats are guaranteed to help you make the most of the warmer weather and entertaining at home.",
    },
    {
      title: 'A traditional Christmas Eve, Mark best style',
      src: 'Image-02',
      desc: "One of Austrailia's best chefs and AEG ambassador, Mark Best, shares his favourite Christmas eve menu which is sure to impress your guests.",
    },
    {
      title: 'Taking taste further',
      src: 'Image-03',
      desc: "This exclusive cookbook gives you all the know-how you need. We've designed it to to make sure you get the most of our products — and the best of your food.",
    },
  ];
  return (
    <>
      <div className='pt-8 lg:pt-36'>
        <Header />
        <div className='flex flex-col'>
          <div className='mt-36 mb-16'>
            <h1 className='text-4xl lg:text-5xl uppercase'>
              All the latest from AEG
            </h1>
          </div>
          <div className='flex flex-col justify-center lg:flex-row lg:justify-between'>
            {articles.map((article) => {
              return (
                <div className='grow-0 flex justify-center'>
                  <Link
                    key={article.title}
                    src={article.src}
                    title={article.title}
                    desc={article.desc}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
