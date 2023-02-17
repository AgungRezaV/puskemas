import React from "react";

const Table = () => {
    const SecondTable = () => {
        const data = [
            { id: 4, name: "Alice Smith", email: "alicesmith@gmail.com" },
            { id: 5, name: "Jack Brown", email: "jackbrown@gmail.com" },
            { id: 6, name: "Mary Johnson", email: "maryjohnson@gmail.com" },
            { id: 4, name: "Alice Smith", email: "alicesmith@gmail.com" },
            { id: 5, name: "Jack Brown", email: "jackbrown@gmail.com" },
            { id: 6, name: "Mary Johnson", email: "maryjohnson@gmail.com" },
            { id: 4, name: "Alice Smith", email: "alicesmith@gmail.com" },
            { id: 5, name: "Jack Brown", email: "jackbrown@gmail.com" },
            { id: 6, name: "Mary Johnson", email: "maryjohnson@gmail.com" },

        ];

        return (
            <div>
                <h1 className="text-center my-5 text-poppins font-bold uppercase">Tabel 2</h1>
                <div className="flex flex-col overflow-y-scroll mb-5 max-h-[400px]">
                    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                                                Umur
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                -3 SD
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                -2 SD
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                -1 SD
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Median
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                +1 SD
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                +2 SD
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                +3 SD
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200 overflow-y-scroll">
                                        {data.map((item) => (
                                            <tr key={item.umur}>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900">{item.umur}</div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900">{item.min_sd_1}</div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900">{item.min_sd_2}</div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900">{item.min_sd_3}</div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900">{item.rata_rata}</div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900">{item.plus_sd_1}</div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900">{item.plus_sd_2}</div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900">{item.plus_sd_3}</div>
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
        );
    };

    const data = [
        { umur: 0, min_sd_1: 44.2, min_sd_2: 46.1, min_sd_3: 48.0, rata_rata: 49.9, plus_sd_1: 51.8, plus_sd_2: 53.7, plus_sd_3: 55.6 },
        { umur: 1, min_sd_1: 48.9, min_sd_2: 50.8, min_sd_3: 52.8, rata_rata: 54.7, plus_sd_1: 56.7, plus_sd_2: 58.6, plus_sd_3: 60.6 },
        { umur: 2, min_sd_1: 52.4, min_sd_2: 54.4, min_sd_3: 56.4, rata_rata: 58.4, plus_sd_1: 60.4, plus_sd_2: 62.4, plus_sd_3: 64.4 },
        { umur: 3, min_sd_1: 55.3, min_sd_2: 57.3, min_sd_3: 59.4, rata_rata: 61.4, plus_sd_1: 63.5, plus_sd_2: 65.5, plus_sd_3: 67.6 },
        { umur: 4, min_sd_1: 57.6, min_sd_2: 59.7, min_sd_3: 61.8, rata_rata: 63.9, plus_sd_1: 66.0, plus_sd_2: 68.0, plus_sd_3: 70.1 },
        { umur: 5, min_sd_1: 59.6, min_sd_2: 61.7, min_sd_3: 63.8, rata_rata: 65.9, plus_sd_1: 68.0, plus_sd_2: 70.1, plus_sd_3: 72.2 },
        { umur: 6, min_sd_1: 61.2, min_sd_2: 63.3, min_sd_3: 65.5, rata_rata: 67.6, plus_sd_1: 69.8, plus_sd_2: 71.9, plus_sd_3: 74.0 },
        { umur: 7, min_sd_1: 62.7, min_sd_2: 64.8, min_sd_3: 67.0, rata_rata: 69.2, plus_sd_1: 71.3, plus_sd_2: 73.5, plus_sd_3: 75.7 },
        { umur: 8, min_sd_1: 64.0, min_sd_2: 66.2, min_sd_3: 68.4, rata_rata: 70.6, plus_sd_1: 72.8, plus_sd_2: 75.0, plus_sd_3: 77.2 },
        { umur: 9, min_sd_1: 65.2, min_sd_2: 67.5, min_sd_3: 69.7, rata_rata: 72.0, plus_sd_1: 74.2, plus_sd_2: 76.5, plus_sd_3: 78.7 },
        { umur: 10, min_sd_1: 66.4, min_sd_2: 68.7, min_sd_3: 71.0, rata_rata: 73.3, plus_sd_1: 75.6, plus_sd_2: 77.9, plus_sd_3: 80.1 },
        { umur: 11, min_sd_1: 67.6, min_sd_2: 69.9, min_sd_3: 72.2, rata_rata: 74.5, plus_sd_1: 76.9, plus_sd_2: 79.2, plus_sd_3: 81.5 },
        { umur: 12, min_sd_1: 68.6, min_sd_2: 71.0, min_sd_3: 73.4, rata_rata: 75.7, plus_sd_1: 78.1, plus_sd_2: 80.5, plus_sd_3: 82.9 },
        { umur: 13, min_sd_1: 69.6, min_sd_2: 72.1, min_sd_3: 74.5, rata_rata: 76.9, plus_sd_1: 79.3, plus_sd_2: 81.8, plus_sd_3: 84.2 },
        { umur: 14, min_sd_1: 70.6, min_sd_2: 73.1, min_sd_3: 75.6, rata_rata: 78.0, plus_sd_1: 80.5, plus_sd_2: 83.0, plus_sd_3: 85.5 },
        { umur: 15, min_sd_1: 71.6, min_sd_2: 74.1, min_sd_3: 76.6, rata_rata: 79.1, plus_sd_1: 81.7, plus_sd_2: 84.2, plus_sd_3: 86.7 },
        { umur: 16, min_sd_1: 72.5, min_sd_2: 75.0, min_sd_3: 77.6, rata_rata: 80.2, plus_sd_1: 82.8, plus_sd_2: 85.4, plus_sd_3: 88.0 },
        { umur: 17, min_sd_1: 73.3, min_sd_2: 76.0, min_sd_3: 78.6, rata_rata: 81.2, plus_sd_1: 83.9, plus_sd_2: 86.5, plus_sd_3: 89.2 },
        { umur: 18, min_sd_1: 74.2, min_sd_2: 76.9, min_sd_3: 79.6, rata_rata: 82.3, plus_sd_1: 85.0, plus_sd_2: 87.7, plus_sd_3: 90.4 },
        { umur: 19, min_sd_1: 75.0, min_sd_2: 77.7, min_sd_3: 80.5, rata_rata: 83.2, plus_sd_1: 86.0, plus_sd_2: 88.8, plus_sd_3: 91.5 },
        { umur: 20, min_sd_1: 75.8, min_sd_2: 78.6, min_sd_3: 81.4, rata_rata: 84.2, plus_sd_1: 87.0, plus_sd_2: 89.8, plus_sd_3: 92.6 },
        { umur: 21, min_sd_1: 76.5, min_sd_2: 79.4, min_sd_3: 82.3, rata_rata: 85.1, plus_sd_1: 88.0, plus_sd_2: 90.9, plus_sd_3: 93.8 },
        { umur: 22, min_sd_1: 77.2, min_sd_2: 80.2, min_sd_3: 83.1, rata_rata: 86.0, plus_sd_1: 89.0, plus_sd_2: 91.9, plus_sd_3: 94.9 },
        { umur: 23, min_sd_1: 78.0, min_sd_2: 81.0, min_sd_3: 83.9, rata_rata: 86.9, plus_sd_1: 89.9, plus_sd_2: 92.9, plus_sd_3: 95.9 },
        { umur: 24, min_sd_1: 78.7, min_sd_2: 81.7, min_sd_3: 84.8, rata_rata: 87.8, plus_sd_1: 90.9, plus_sd_2: 93.9, plus_sd_3: 97.0 },

    ];

    return (
        <div>
            <div>
                <h1 className="text-center my-5 text-poppins font-bold uppercase">Standar Panjang Badan Menurut Umur (PB/U) Anak Laki-Laki Umur 0 – 24 Bulan</h1>
                <div className="flex flex-col overflow-y-scroll mb-5 max-h-[400px]">
                    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                                                Umur
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                -3 SD
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                -2 SD
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                -1 SD
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Median
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                +1 SD
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                +2 SD
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                +3 SD
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200 overflow-y-scroll">
                                        {data.map((item) => (
                                            <tr key={item.umur}>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900">{item.umur}</div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900">{item.min_sd_1}</div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900">{item.min_sd_2}</div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900">{item.min_sd_3}</div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900">{item.rata_rata}</div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900">{item.plus_sd_1}</div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900">{item.plus_sd_2}</div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900">{item.plus_sd_3}</div>
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

            <div>
                <SecondTable />
            </div>
        </div>
    );
};

export default Table;
