import React from "react";

const Table = () => {
    const SecondTable = () => {
        const data = [
            { id: 4, name: "Alice Smith", email: "alicesmith@gmail.com" },
            { id: 5, name: "Jack Brown", email: "jackbrown@gmail.com" },
            { id: 6, name: "Mary Johnson", email: "maryjohnson@gmail.com" }
        ];

        return (
            <div className="flex flex-col overflow-y-scroll max-h-[200px] my-10 sm:min-w-[450px] max-w-[300px]">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            ID
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Name
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Email
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200 overflow-y-scroll">
                                    {data.map((item) => (
                                        <tr key={item.id}>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">{item.id}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">{item.name}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">{item.email}</div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    };


    const data = [
        { id: 1, name: "John Doe", email: "johndoe@gmail.com" },
        { id: 2, name: "Jane Doe", email: "janedoe@gmail.com" },
        { id: 3, name: "Bob Smith", email: "bobsmith@gmail.com" },
        { id: 3, name: "Bob Smith", email: "bobsmith@gmail.com" },
        { id: 3, name: "Bob Smith", email: "bobsmith@gmail.com" },
        { id: 1, name: "John Doe", email: "johndoe@gmail.com" },
        { id: 2, name: "Jane Doe", email: "janedoe@gmail.com" },
        { id: 3, name: "Bob Smith", email: "bobsmith@gmail.com" },
        { id: 3, name: "Bob Smith", email: "bobsmith@gmail.com" },
        { id: 3, name: "Bob Smith", email: "bobsmith@gmail.com" },
        { id: 1, name: "John Doe", email: "johndoe@gmail.com" },
        { id: 2, name: "Jane Doe", email: "janedoe@gmail.com" },
        { id: 3, name: "Bob Smith", email: "bobsmith@gmail.com" },
        { id: 3, name: "Bob Smith", email: "bobsmith@gmail.com" },
        { id: 3, name: "Bob Smith", email: "bobsmith@gmail.com" },
    ];

    return (
        <div className="flex flex-wrap">
            <div className="sm:mr-10 mr-0">
                <div className="flex flex-col overflow-y-scroll max-h-[200px] my-10 sm:min-w-[450px] max-w-[300px]">
                    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                ID
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Name
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Email
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200 overflow-y-scroll">
                                        {data.map((item) => (
                                            <tr key={item.id}>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900">{item.id}</div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900">{item.name}</div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900">{item.email}</div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="">
                <SecondTable />
            </div>

        </div>
    );
};

export default Table;
