export function Link({
  src,
  title,
  desc,
}: {
  src: string;
  title: string;
  desc: string;
}) {
  return (
    <>
      <div className='flex flex-col w-96 sm:w-96  overflow-hidden p-4'>
        <div className='flex w-full h-64 border-b-rose-600 border-b-4 overflow-hidden'>
          <picture className="w-full h-full">
            <source media='(max-width: 320px)' srcSet={`/assets/component-02/${src}.jpg`} />
            <img src={`/assets/component-02/${src}@2x.jpg`} />
          </picture>
        </div>
        <h4 className="text-xl mt-7 text-left font-medium">{title}</h4>
        <p className="text-left mt-4 font-light">{desc}</p>
        <a className="mt-4 uppercase border-b-rose-600 border-b-2 w-24 cursor-pointer font-medium" onClick={(e) => console.log(e.target)}>Read more</a>
      </div>
    </>
  );
}
