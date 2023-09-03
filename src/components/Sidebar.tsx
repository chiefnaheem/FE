// import React from 'react';

// export default function Sidebar(props: any) {
//   const { data } = props; // Destructure the 'data' prop from props object

//   return (
//     // Rest of your component code
//     <div className="w-1/5 h-screen bg-gray-800 text-gray-100">
//       <div className="flex items-center justify-center h-14 border-b border-gray-700">
//         <h1 className="text-2xl font-bold">Top Tracks</h1>
//       </div>
//       <div className="p-3">
//         <ul>
//           {data.map((item, index) => (
//             <li key={index} className="py-2">
//               <a href="#" className="flex items-center text-gray-100 hover:text-gray-300">
//                 <span className="text-2xl mr-2">{item.icon}</span>
//                 <span>{item.name}</span>
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }


import React from 'react';

interface SidebarProps {
  data: Array<{
    icon: React.ReactNode;
    name: string;
  }>;
}

const Sidebar: React.FC<SidebarProps> = ({ data }) => {
  return (
    <div className="w-1/5 h-screen bg-gray-800 text-gray-100">
      <div className="flex items-center justify-center h-14 border-b border-gray-700">
        <h1 className="text-2xl font-bold">Top Tracks</h1>
      </div>
      <div className="p-3">
        <ul>
          {data.map((item, index) => (
            <li key={index} className="py-2">
              <a href="#" className="flex items-center text-gray-100 hover:text-gray-300">
                <span className="text-2xl mr-2">{item.icon}</span>
                <span>{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;

