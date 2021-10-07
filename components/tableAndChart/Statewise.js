import { useState, useEffect } from 'react';

export default function Statewise({ statewiseData }) {
  const short = statewiseData.statewise.slice(1, 38);

  // cl.....
  // const [data, setData] = useState([]);
  // useEffect(() => {
  // const short = statewiseData.statewise.slice(1, 38);
  // const sliceAll = short;
  // setData(short);
  // }, []);
  return (
    <div className=''>
      <table className='border border-gray-200  w-full'>
        <thead>
          <tr>
            <th className='border-2 border-gray-200 p-2'>State</th>
            <th className='border-2 border-gray-200 '>Confirmed</th>
            <th className='border-2 border-gray-200 '>Recover</th>
            <th className='border-2 border-gray-200 '>Deaths</th>
            <th className='border-2 border-gray-200 '>Active</th>
          </tr>
        </thead>
        <tbody>
          {short.map((data) => {
            return (
              <tr>
                <td className='border-2 border-gray-200 font-bold text-gray-700'>
                  {data.state}
                </td>
                <td className='border-2 border-gray-200 text-right pr-2 '>
                  <p className='text-red-500 font-bold text-sm mr-2  '>
                    + {data.deltaconfirmed}
                  </p>
                  <span className='text-gray-700 font-bold text-md '>
                    {data.confirmed}
                  </span>
                </td>
                <td className='border-2 border-gray-200 text-right pr-2'>
                  <p className='text-red-500 font-bold text-sm mr-2  '>
                    +{data.deltarecovered}
                  </p>
                  <span className='text-gray-700 font-bold text-md '>
                    {data.recovered}
                  </span>
                </td>
                <td className='border-2 border-gray-200 text-right pr-2'>
                  <p className='text-green-700 font-bold text-sm mr-2  '>
                    +{data.deltadeaths}
                  </p>
                  <span className='text-gray-600 font-bold text-md '>
                    {data.deaths}
                  </span>
                </td>
                <td className='border-2 border-gray-200 text-right pr-2'>
                  <span className='text-gray-600 font-bold text-md '>
                    {data.active}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
