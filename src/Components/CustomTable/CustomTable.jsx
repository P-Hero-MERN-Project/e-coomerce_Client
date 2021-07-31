import React from 'react'

export const CustomTable = (props) => {
    const { children, items, tableContent } = props;
    console.log(children);
    return (
        <table className="w-full">
        <thead className=" mb-2">
          <tr>
            <th>
              {
                  children
              }
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr>
              <td className=" ">
                {
                   tableContent && tableContent(item)
                }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )
}
