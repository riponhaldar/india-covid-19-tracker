export default function Total({ totalC }) {
  const totals = totalC.statewise[0];
  return (
    <>
      <div className='mt-20 flex cursor-pointer'>
        <div className='w-40 h-52 ml-8 text-red-600'>
          <p className='text-center mt-4 text-xl font-bold '>Confirmed</p>
          <p className='text-center mt-16 text-xl font-bold '>
            {totals.confirmed}
          </p>
          <p className='text-center mt-4 text-sm font-bold '>
            + {totals.deltaconfirmed}
          </p>
        </div>
        {/*anther div */}
        <div className='w-40 h-52 ml-8 text-blue-600'>
          <p className='text-center mt-4 text-xl font-bold '>Deaths</p>
          <p className='text-center mt-16 text-xl font-bold '>
            {totals.deaths}
          </p>
          <p className='text-center mt-4 text-sm font-bold '>
            + {totals.deltadeaths}
          </p>
        </div>
        {/*anther div */}
        <div className='w-40 h-52  ml-8 text-green-500'>
          <p className='text-center mt-4 text-xl font-bold'>Recovered</p>
          <p className='text-center mt-16 text-xl font-bold '>
            {totals.recovered}
          </p>
          <p className='text-center mt-4  text-sm font-bold '>
            + {totals.deltarecovered}
          </p>
        </div>
        {/*anther div */}
        <div className='w-40 h-52 ml-8 text-blue-600'>
          <p className='text-center mt-4 text-xl font-bold '>Active</p>
          <p className='text-center mt-16 text-xl font-bold '>
            {totals.active}
          </p>
        </div>
      </div>
    </>
  );
}
