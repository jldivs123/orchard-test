export function Header() {
  return (
    <>
      <div className='flex bg-white'>
        <div className='image flex border border-yellow-100'>
          <div className='flex '>
            <picture className="">
              <source media='(max-width: 320px)' srcSet='/assets/component-01/Image-01.jpg' />
              <img src='/assets/component-01/Image-01@2x.jpg' />
            </picture>
          </div>
          <div className='flex flex-col'>
            <picture className="max-h-80">
              <source media='(max-width: 320px)' srcSet='/assets/component-01/Image-02.jpg' />
              <img src='/assets/component-01/Image-02@2x.jpg' />
            </picture>
            <picture className="max-h-80">
              <source media='(max-width: 320px)' srcSet='/assets/component-01/Image-03.jpg' />
              <img src='/assets/component-01/Image-03@2x.jpg' />
            </picture>
          </div>
        </div>
        <div className='flex flex-col'>
          <div className='flex flex-col'>
            <h1 className="capitalize">Answer your body's needs</h1>
            <hr className='h-px my-8 bg-gray-200 border-0 dark:bg-gray-700'></hr>
            <p>
              The way ingredients are sourced affects the way we nourished our
              bodies. Author Mark Schatzer belives our body naturally develops
              an appetite for the foods and nutrients it needs to be healthy,
              but that artificial flavourings are getting in the way. This can
              ve reversed by focusing on high-quality ingredients and being
              mindful as your appetite guides you to consume according to your
              body's needs.
            </p>
          </div>
          <div className='flex flex-col'>
            <h5 className='capitalize'>Be mindful</h5>
            <p>
              Sourcing local or organic food is a good way to start being more
              mindful about what you're cooking and eating
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
