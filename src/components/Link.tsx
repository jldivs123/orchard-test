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
      <div className='flex flex-col'>
        <div className='flex'>
          <picture>
            <source media='(max-width: 320px)' srcSet={`/assets/component-02/${src}.jpg`} />
            <img src={`/assets/component-02/${src}@2x.jpg`} />
          </picture>
        </div>
        <h4 className="">{title}</h4>
        <p>{desc}</p>
        <button onClick={(e) => console.log(e.target)}>Read more</button>
      </div>
    </>
  );
}
