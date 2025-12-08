const TableSkeleton = () => {


    return (
      <div className="bg-white shadow rounded-lg md:col-span-3">
        <div className="max-h-64 overflow-y-auto">
          <table className="w-full border-collapse border border-gray-100">
            <tbody>
              {[...Array(5)].map((_, index) => (
                <tr key={index} className="text-center animate-pulse">
                  <td className="border border-gray-200 p-4">
                    <div className="h-4 bg-gray-300 rounded w-24 mx-auto"></div>
                  </td>
                  <td className="border border-gray-200 p-4">
                    <div className="h-4 bg-gray-300 rounded w-20 mx-auto"></div>
                  </td>
                  <td className="border border-gray-200 p-4">
                    <div className="h-4 bg-gray-300 rounded w-16 mx-auto"></div>
                  </td>  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
  export default TableSkeleton;

