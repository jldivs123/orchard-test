import { useState, useEffect } from 'react';

export function Header() {
  const [img, setImg] = useState<null | string>(null);

  useEffect(() => {
    const dialog: HTMLDialogElement | null = document.getElementById('modal') as HTMLDialogElement;
    if (img) {
      if (!dialog?.open) {
        dialog?.showModal();
      }
    } else {
      dialog?.close();
    }
  }, [img]);

  return (
    <>
      <div className='flex w-full flex-col lg:flex-row'>
        <div className='image flex basis-2/3 overflow-hidden'>
          <div className='flex basis-1/2 m-2 border-b-4 border-b-transparent overflow-hidden cursor-pointer hover:border-b-4 hover:border-b-rose-700'>
            <picture
              className='h-full'
              onClick={() => setImg('/assets/component-01/Image-01.jpg')}
            >
              <source
                media='(max-width: 320px)'
                srcSet='/assets/component-01/Image-01.jpg'
              />
              <img
                src='/assets/component-01/Image-01@2x.jpg'
                className='object-fill w-full h-full sm:object-fill'
              />
            </picture>
          </div>
          <div className='flex flex-col basis-1/2 m-2'>
            <div className='flex grow basis-1/2 mb-2 cursor-pointer hover:border-b-4 hover:border-b-rose-700'>
              <picture
                className='max-h-80'
                onClick={() => setImg('/assets/component-01/Image-02.jpg')}
              >
                <source
                  media='(max-width: 320px)'
                  srcSet='/assets/component-01/Image-02.jpg'
                />
                <img
                  src='/assets/component-01/Image-02@2x.jpg'
                  className='object-cover w-full h-full'
                />
              </picture>
            </div>
            <div className='flex grow basis-1/2 mt-2 cursor-pointer hover:border-b-4 hover:border-b-rose-700'>
              <picture
                className='max-h-80'
                onClick={() => setImg('/assets/component-01/Image-03.jpg')}
              >
                <source
                  media='(max-width: 320px)'
                  srcSet='/assets/component-01/Image-03.jpg'
                />
                <img
                  src='/assets/component-01/Image-03@2x.jpg'
                  className='object-cover w-full h-full'
                />
              </picture>
            </div>
          </div>
        </div>
        <div className='flex flex-col basis-1/3 px-3 mt-5 lg:mt-0'>
          <div className='flex flex-col'>
            <h1 className='text-2xl text-left font-light'>
              ANSWER YOUR BODY'S NEEDS
            </h1>
            <hr className='h-px my-8 bg-white border-0'></hr>
            <p className='text-lg text-left font-light'>
              The way ingredients are sourced affects the way we nourished our
              bodies. Author Mark Schatzer belives our body naturally develops
              an appetite for the foods and nutrients it needs to be healthy,
              but that artificial flavourings are getting in the way. This can
              ve reversed by focusing on high-quality ingredients and being
              mindful as your appetite guides you to consume according to your
              body's needs.
            </p>
          </div>
          <div>&nbsp;</div>
          &nbsp;
          <div className='flex flex-col'>
            <h5 className='text-left text-lg text-rose-700'>
              BE MINDFUL
            </h5>
            &nbsp;
            <p className='text-left text-xl font-regular'>
              Sourcing local or organic food is a good way to start being more
              mindful about what you're cooking and eating
            </p>
          </div>
        </div>
      </div>
      <dialog id='modal' className='modal'>
        <picture className='h-64 w-64'>
          <source
            media='(max-width: 320px)'
            srcSet='/assets/component-01/Image-01.jpg'
          />
          <img
            src={img ?? ''}
            className='object-fill w-full h-full sm:object-fill'
          />
        </picture>
        <button className='btn my-4 border-b-4 border-b-rose-700' onClick={() => setImg(null)}>Close</button>
      </dialog>
    </>
  );
}
