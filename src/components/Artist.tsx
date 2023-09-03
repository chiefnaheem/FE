import React from 'react'

export default function Artist({ data }: any) {
  return (
    <div className="w-4/5 h-screen overflow-y-scroll">
      <div className="flex flex-wrap justify-center">
        {data.map((item: any, index: number) => (
          <div key={index} className="w-1/4 p-5">
            <div className="relative">
              <img src={item.images[0].url} alt={item.name} className="w-full" />
              <div className="absolute bottom-0 bg-gray-900 bg-opacity-50 w-full py-2">
                <h1 className="text-white text-center font-bold">{item.name}</h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
