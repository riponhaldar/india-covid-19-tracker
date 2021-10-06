export default function Total() {
  return (
    <>
      <div className='mt-20 flex cursor-pointer'>
        <div className='w-40 h-52 ml-8 text-red-600'>
          <p className='text-center mt-4 text-xl font-bold '>Confromd</p>
          <p className='text-center mt-16 text-xl font-bold '>1445584762</p>
          <p className='text-center mt-4 text-sm font-bold '>+2323</p>
        </div>
        {/*anther div */}
        <div className='w-40 h-52 ml-8 text-blue-600'>
          <p className='text-center mt-4 text-xl font-bold '>Confromd</p>
          <p className='text-center mt-16 text-xl font-bold '>1445584762</p>
          <p className='text-center mt-4 text-sm font-bold '>+2323</p>
        </div>
        {/*anther div */}
        <div className='w-40 h-52  ml-8 text-green-500'>
          <p className='text-center mt-4 text-xl font-bold'>Confromd</p>
          <p className='text-center mt-16 text-xl font-bold '>1445584762</p>
          <p className='text-center mt-4  text-sm font-bold '>+2323</p>
        </div>
      </div>
    </>
  );
}
