export function Header() {
  return (
    <>
      <div className='flex w-full flex-col lg:flex-row'>
        <div className='image flex basis-2/3 overflow-hidden'>
          <div className='flex basis-1/2 m-2 border-b-4 border-b-transparent overflow-hidden cursor-pointer hover:border-b-4 hover:border-b-rose-600'>
            <picture className='max-h-full h-96 object-cover md:h-auto'>
              <source
                media='(max-width: 320px)'
                srcSet='/assets/component-01/Image-01.jpg'
              />
              <img src='/assets/component-01/Image-01@2x.jpg' />
            </picture>
          </div>
          <div className='flex flex-col basis-1/2 m-2'>
            <div className="flex grow basis-1/2 mb-2 cursor-pointer hover:border-b-4 hover:border-b-rose-600">
              <picture className='max-h-80'>
                <source
                  media='(max-width: 320px)'
                  srcSet='/assets/component-01/Image-02.jpg'
                />
                <img src='/assets/component-01/Image-02@2x.jpg' />
              </picture>
            </div>
            <div className="flex grow basis-1/2 mt-2 cursor-pointer hover:border-b-4 hover:border-b-rose-600">
              <picture className='max-h-80'>
                <source
                  media='(max-width: 320px)'
                  srcSet='/assets/component-01/Image-03.jpg'
                />
                <img src='/assets/component-01/Image-03@2x.jpg' />
              </picture>
            </div>
          </div>
        </div>
        <div className='flex flex-col basis-1/3 px-3'>
          <div className='flex flex-col'>
            <h1 className='uppercase text-3xl text-left'>Answer your body's needs</h1>
            <hr className='h-px my-8 bg-gray-200 border-0 dark:bg-gray-700'></hr>
            <p className='text-xl text-left'>
              The way ingredients are sourced affects the way we nourished our
              bodies. Author Mark Schatzer belives our body naturally develops
              an appetite for the foods and nutrients it needs to be healthy,
              but that artificial flavourings are getting in the way. This can
              ve reversed by focusing on high-quality ingredients and being
              mindful as your appetite guides you to consume according to your
              body's needs.
            </p>
          </div>
          <div>
            &nbsp;
          </div>
          &nbsp;
          <div className='flex flex-col'>
            <h5 className='uppercase text-left text-lg text-rose-600'>Be mindful</h5>
            &nbsp;
            <p className='text-left text-xl'>
              Sourcing local or organic food is a good way to start being more
              mindful about what you're cooking and eating
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
