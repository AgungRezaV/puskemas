import React from "react";

const FirstTable = () => {
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

    const [showTable, setShowTable] = React.useState(false);

    const toggleTable = () => {
        setShowTable(!showTable);
    };

    return (
        <div>
            <h1 className="text-center my-5 font-poppins font-bold uppercase">Standar Panjang Badan Menurut Umur (PB/U) Anak Laki-Laki Umur 0 – 24 Bulan</h1>
            <div className="flex flex-col overflow-y-always mb-2 max-h-[300px]">
                <p className="mb-2 text-gray-600 text-[12px] font-poppins">Keterangan: * Pengukuran panjang badan dilakukan dalam keadaan anak telentang.</p>
                <button onClick={toggleTable} className="mb-5 bg-blue-500 rounded-[5px] font-poppins">{showTable ? "Hide" : "Show"} Table</button>
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow border-b border-gray-200 sm:rounded-lg ">
                            {showTable && (
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-center text-[14px] font-bold text-gray-500 uppercase tracking-wider word break-words">
                                                Umur
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-center text-[14px] font-bold text-gray-500 uppercase tracking-wider word break-words">
                                                -3 SD
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-center text-[14px] font-bold text-gray-500 uppercase tracking-wider word break-words"
                                            >
                                                -2 SD
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-center text-[14px] font-bold text-gray-500 uppercase tracking-wider word break-words"
                                            >
                                                -1 SD
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-center text-[14px] font-bold text-gray-500 uppercase tracking-wider word break-words"
                                            >
                                                Median
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-center text-[14px] font-bold text-gray-500 uppercase tracking-wider word break-words"
                                            >
                                                +1 SD
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-center text-[14px] font-bold text-gray-500 uppercase tracking-wider word break-words"
                                            >
                                                +2 SD
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-center text-[14px] font-bold text-gray-500 uppercase tracking-wider word break-words"
                                            >
                                                +3 SD
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {data.map((item) => (
                                            <tr key={item.umur}>
                                                <td className="px-2 py-4 break-words text-center">
                                                    <div className="text-sm text-gray-900">{item.umur}</div>
                                                </td>
                                                <td className="px-2 py-4 break-words text-center">
                                                    <div className="text-sm text-gray-900">{item.min_sd_1}</div>
                                                </td>
                                                <td className="px-2 py-4 break-words text-center">
                                                    <div className="text-sm text-gray-900">{item.min_sd_2}</div>
                                                </td>
                                                <td className="px-2 py-4 break-words text-center">
                                                    <div className="text-sm text-gray-900">{item.min_sd_3}</div>
                                                </td>
                                                <td className="px-2 py-4 break-words text-center">
                                                    <div className="text-sm text-gray-900">{item.rata_rata}</div>
                                                </td>
                                                <td className="px-2 py-4 break-words text-center">
                                                    <div className="text-sm text-gray-900">{item.plus_sd_1}</div>
                                                </td>
                                                <td className="px-2 py-4 break-words text-center">
                                                    <div className="text-sm text-gray-900">{item.plus_sd_2}</div>
                                                </td>
                                                <td className="px-2 py-4 break-words text-center">
                                                    <div className="text-sm text-gray-900">{item.plus_sd_3}</div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

const SecondTable = () => {
    const data2 = [
        { umur: 24, min_sd_1: 78.0, min_sd_2: 81.0, min_sd_3: 84.1, rata_rata: 87.1, plus_sd_1: 90.2, plus_sd_2: 93.2, plus_sd_3: 96.3, },
        { umur: 25, min_sd_1: 78.6, min_sd_2: 81.7, min_sd_3: 84.9, rata_rata: 88.0, plus_sd_1: 91.1, plus_sd_2: 94.2, plus_sd_3: 97.3, },
        { umur: 26, min_sd_1: 79.3, min_sd_2: 82.5, min_sd_3: 85.6, rata_rata: 88.8, plus_sd_1: 92.0, plus_sd_2: 95.2, plus_sd_3: 98.3, },
        { umur: 27, min_sd_1: 79.9, min_sd_2: 83.1, min_sd_3: 86.4, rata_rata: 89.6, plus_sd_1: 92.9, plus_sd_2: 96.1, plus_sd_3: 99.3, },
        { umur: 28, min_sd_1: 80.5, min_sd_2: 83.8, min_sd_3: 87.1, rata_rata: 90.4, plus_sd_1: 93.7, plus_sd_2: 97.0, plus_sd_3: 100.3, },
        { umur: 29, min_sd_1: 81.1, min_sd_2: 84.5, min_sd_3: 87.8, rata_rata: 91.2, plus_sd_1: 94.5, plus_sd_2: 97.9, plus_sd_3: 101.2, },
        { umur: 30, min_sd_1: 81.7, min_sd_2: 85.1, min_sd_3: 88.5, rata_rata: 91.9, plus_sd_1: 95.3, plus_sd_2: 98.7, plus_sd_3: 102.1, },
        { umur: 31, min_sd_1: 82.3, min_sd_2: 85.7, min_sd_3: 89.2, rata_rata: 92.7, plus_sd_1: 96.1, plus_sd_2: 99.6, plus_sd_3: 103.0, },
        { umur: 32, min_sd_1: 82.8, min_sd_2: 86.4, min_sd_3: 89.9, rata_rata: 93.4, plus_sd_1: 96.9, plus_sd_2: 100.4, plus_sd_3: 103.9, },
        { umur: 33, min_sd_1: 83.4, min_sd_2: 86.9, min_sd_3: 90.5, rata_rata: 94.1, plus_sd_1: 97.6, plus_sd_2: 101.2, plus_sd_3: 104.8, },
        { umur: 34, min_sd_1: 83.9, min_sd_2: 87.5, min_sd_3: 91.1, rata_rata: 94.8, plus_sd_1: 98.4, plus_sd_2: 102.0, plus_sd_3: 105.6, },
        { umur: 35, min_sd_1: 84.4, min_sd_2: 88.1, min_sd_3: 91.8, rata_rata: 95.4, plus_sd_1: 99.1, plus_sd_2: 102.7, plus_sd_3: 106.4, },
        { umur: 36, min_sd_1: 85.0, min_sd_2: 88.7, min_sd_3: 92.4, rata_rata: 96.1, plus_sd_1: 99.8, plus_sd_2: 103.5, plus_sd_3: 107.2, },
        { umur: 37, min_sd_1: 85.5, min_sd_2: 89.2, min_sd_3: 93.0, rata_rata: 96.7, plus_sd_1: 100.5, plus_sd_2: 104.2, plus_sd_3: 108.0, },
        { umur: 38, min_sd_1: 86.0, min_sd_2: 89.8, min_sd_3: 93.6, rata_rata: 97.4, plus_sd_1: 101.2, plus_sd_2: 105.0, plus_sd_3: 108.8, },
        { umur: 39, min_sd_1: 86.5, min_sd_2: 90.3, min_sd_3: 94.2, rata_rata: 98.0, plus_sd_1: 101.8, plus_sd_2: 105.7, plus_sd_3: 109.5, },
        { umur: 40, min_sd_1: 87.0, min_sd_2: 90.9, min_sd_3: 94.7, rata_rata: 98.6, plus_sd_1: 102.5, plus_sd_2: 106.4, plus_sd_3: 110.3, },
        { umur: 41, min_sd_1: 87.5, min_sd_2: 91.4, min_sd_3: 95.3, rata_rata: 99.2, plus_sd_1: 103.2, plus_sd_2: 107.1, plus_sd_3: 111.0, },
        { umur: 42, min_sd_1: 88.0, min_sd_2: 91.9, min_sd_3: 95.9, rata_rata: 99.9, plus_sd_1: 103.8, plus_sd_2: 107.8, plus_sd_3: 111.7, },
        { umur: 43, min_sd_1: 88.4, min_sd_2: 92.4, min_sd_3: 96.4, rata_rata: 100.4, plus_sd_1: 104.5, plus_sd_2: 108.5, plus_sd_3: 112.5, },
        { umur: 44, min_sd_1: 88.9, min_sd_2: 93.0, min_sd_3: 97.0, rata_rata: 101.0, plus_sd_1: 105.1, plus_sd_2: 109.1, plus_sd_3: 113.2, },
        { umur: 45, min_sd_1: 89.4, min_sd_2: 93.5, min_sd_3: 97.5, rata_rata: 101.6, plus_sd_1: 105.7, plus_sd_2: 109.8, plus_sd_3: 113.9, },
        { umur: 46, min_sd_1: 89.8, min_sd_2: 94.0, min_sd_3: 98.1, rata_rata: 102.2, plus_sd_1: 106.3, plus_sd_2: 110.4, plus_sd_3: 114.6, },
        { umur: 47, min_sd_1: 90.3, min_sd_2: 94.4, min_sd_3: 98.6, rata_rata: 102.8, plus_sd_1: 106.9, plus_sd_2: 111.1, plus_sd_3: 115.2, },
        { umur: 48, min_sd_1: 90.7, min_sd_2: 94.9, min_sd_3: 99.1, rata_rata: 103.3, plus_sd_1: 107.5, plus_sd_2: 111.7, plus_sd_3: 115.9, },
        { umur: 49, min_sd_1: 91.2, min_sd_2: 95.4, min_sd_3: 99.7, rata_rata: 103.9, plus_sd_1: 108.1, plus_sd_2: 112.4, plus_sd_3: 116.6, },
        { umur: 50, min_sd_1: 91.6, min_sd_2: 95.9, min_sd_3: 100.2, rata_rata: 104.4, plus_sd_1: 108.7, plus_sd_2: 113.0, plus_sd_3: 117.3, },
        { umur: 51, min_sd_1: 92.1, min_sd_2: 96.4, min_sd_3: 100.7, rata_rata: 105.0, plus_sd_1: 109.3, plus_sd_2: 113.6, plus_sd_3: 117.9, },
        { umur: 52, min_sd_1: 92.5, min_sd_2: 96.9, min_sd_3: 101.2, rata_rata: 105.6, plus_sd_1: 109.9, plus_sd_2: 114.2, plus_sd_3: 118.6, },
        { umur: 53, min_sd_1: 93.0, min_sd_2: 97.4, min_sd_3: 101.7, rata_rata: 106.1, plus_sd_1: 110.5, plus_sd_2: 114.9, plus_sd_3: 119.2, },
        { umur: 54, min_sd_1: 93.4, min_sd_2: 97.8, min_sd_3: 102.3, rata_rata: 106.7, plus_sd_1: 111.1, plus_sd_2: 115.5, plus_sd_3: 119.9, },
        { umur: 55, min_sd_1: 93.9, min_sd_2: 98.3, min_sd_3: 102.8, rata_rata: 107.2, plus_sd_1: 111.7, plus_sd_2: 116.1, plus_sd_3: 120.6, },
        { umur: 56, min_sd_1: 94.3, min_sd_2: 98.8, min_sd_3: 103.3, rata_rata: 107.8, plus_sd_1: 112.3, plus_sd_2: 116.7, plus_sd_3: 121.2, },
        { umur: 57, min_sd_1: 94.7, min_sd_2: 99.3, min_sd_3: 103.8, rata_rata: 108.3, plus_sd_1: 112.8, plus_sd_2: 117.4, plus_sd_3: 121.9, },
        { umur: 58, min_sd_1: 95.2, min_sd_2: 99.7, min_sd_3: 104.3, rata_rata: 108.9, plus_sd_1: 113.4, plus_sd_2: 118.0, plus_sd_3: 122.6, },
        { umur: 59, min_sd_1: 95.6, min_sd_2: 100.2, min_sd_3: 104.8, rata_rata: 109.4, plus_sd_1: 114.0, plus_sd_2: 118.6, plus_sd_3: 123.2, },
        { umur: 60, min_sd_1: 96.1, min_sd_2: 100.7, min_sd_3: 105.3, rata_rata: 110.0, plus_sd_1: 114.6, plus_sd_2: 119.2, plus_sd_3: 123.9, },
    ];

    const [showTable, setShowTable] = React.useState(false);

    const toggleTable = () => {
        setShowTable(!showTable);
    };

    return (
        <div>
            <h1 className="text-center my-5 font-poppins font-bold uppercase">Standar Tinggi Badan Menurut Umur (TB/U) Anak Laki-Laki Umur 24 – 60 Bulan</h1>
            <div className="flex flex-col  mb-2 max-h-[400px]">
                <p className="mb-2 text-gray-600 text-[12px] font-poppins">Keterangan: * Pengukuran TB dilakukan dalam keadaan anak berdiri.</p>
                <button onClick={toggleTable} className="mb-5 bg-blue-500 rounded-[5px]">{showTable ? "Hide" : "Show"} Table</button>
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            {showTable && (
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-center text-[14px] font-bold text-gray-500 uppercase tracking-wider word break-words">
                                                Umur
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-center text-[14px] font-bold text-gray-500 uppercase tracking-wider word break-words"
                                            >
                                                -3 SD
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-center text-[14px] font-bold text-gray-500 uppercase tracking-wider word break-words"
                                            >
                                                -2 SD
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-center text-[14px] font-bold text-gray-500 uppercase tracking-wider word break-words"
                                            >
                                                -1 SD
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-center text-[14px] font-bold text-gray-500 uppercase tracking-wider word break-words"
                                            >
                                                Median
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-center text-[14px] font-bold text-gray-500 uppercase tracking-wider word break-words"
                                            >
                                                +1 SD
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-center text-[14px] font-bold text-gray-500 uppercase tracking-wider word break-words"
                                            >
                                                +2 SD
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-center text-[14px] font-bold text-gray-500 uppercase tracking-wider word break-words"
                                            >
                                                +3 SD
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200 overflow-y-scroll">
                                        {data2.map((item) => (
                                            <tr key={item.umur}>
                                                <td className="px-2 py-4 break-words text-center">
                                                    <div className="text-sm text-gray-900">{item.umur}</div>
                                                </td>
                                                <td className="px-2 py-4 break-words text-center">
                                                    <div className="text-sm text-gray-900">{item.min_sd_1}</div>
                                                </td>
                                                <td className="px-2 py-4 break-words text-center">
                                                    <div className="text-sm text-gray-900">{item.min_sd_2}</div>
                                                </td>
                                                <td className="px-2 py-4 break-words text-center">
                                                    <div className="text-sm text-gray-900">{item.min_sd_3}</div>
                                                </td>
                                                <td className="px-2 py-4 break-words text-center">
                                                    <div className="text-sm text-gray-900">{item.rata_rata}</div>
                                                </td>
                                                <td className="px-2 py-4 break-words text-center">
                                                    <div className="text-sm text-gray-900">{item.plus_sd_1}</div>
                                                </td>
                                                <td className="px-2 py-4 break-words text-center">
                                                    <div className="text-sm text-gray-900">{item.plus_sd_2}</div>
                                                </td>
                                                <td className="px-2 py-4 break-words text-center">
                                                    <div className="text-sm text-gray-900">{item.plus_sd_3}</div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ThirdTable = () => {
    const data3 = [
        { umur: 24, min_sd_1: 78.0, min_sd_2: 81.0, min_sd_3: 84.1, rata_rata: 87.1, plus_sd_1: 90.2, plus_sd_2: 93.2, plus_sd_3: 96.3, },
        { umur: 25, min_sd_1: 78.6, min_sd_2: 81.7, min_sd_3: 84.9, rata_rata: 88.0, plus_sd_1: 91.1, plus_sd_2: 94.2, plus_sd_3: 97.3, },
        { umur: 26, min_sd_1: 79.3, min_sd_2: 82.5, min_sd_3: 85.6, rata_rata: 88.8, plus_sd_1: 92.0, plus_sd_2: 95.2, plus_sd_3: 98.3, },
        { umur: 27, min_sd_1: 79.9, min_sd_2: 83.1, min_sd_3: 86.4, rata_rata: 89.6, plus_sd_1: 92.9, plus_sd_2: 96.1, plus_sd_3: 99.3, },
        { umur: 28, min_sd_1: 80.5, min_sd_2: 83.8, min_sd_3: 87.1, rata_rata: 90.4, plus_sd_1: 93.7, plus_sd_2: 97.0, plus_sd_3: 100.3, },
        { umur: 29, min_sd_1: 81.1, min_sd_2: 84.5, min_sd_3: 87.8, rata_rata: 91.2, plus_sd_1: 94.5, plus_sd_2: 97.9, plus_sd_3: 101.2, },
        { umur: 30, min_sd_1: 81.7, min_sd_2: 85.1, min_sd_3: 88.5, rata_rata: 91.9, plus_sd_1: 95.3, plus_sd_2: 98.7, plus_sd_3: 102.1, },
        { umur: 31, min_sd_1: 82.3, min_sd_2: 85.7, min_sd_3: 89.2, rata_rata: 92.7, plus_sd_1: 96.1, plus_sd_2: 99.6, plus_sd_3: 103.0, },
        { umur: 32, min_sd_1: 82.8, min_sd_2: 86.4, min_sd_3: 89.9, rata_rata: 93.4, plus_sd_1: 96.9, plus_sd_2: 100.4, plus_sd_3: 103.9, },
        { umur: 33, min_sd_1: 83.4, min_sd_2: 86.9, min_sd_3: 90.5, rata_rata: 94.1, plus_sd_1: 97.6, plus_sd_2: 101.2, plus_sd_3: 104.8, },
        { umur: 34, min_sd_1: 83.9, min_sd_2: 87.5, min_sd_3: 91.1, rata_rata: 94.8, plus_sd_1: 98.4, plus_sd_2: 102.0, plus_sd_3: 105.6, },
        { umur: 35, min_sd_1: 84.4, min_sd_2: 88.1, min_sd_3: 91.8, rata_rata: 95.4, plus_sd_1: 99.1, plus_sd_2: 102.7, plus_sd_3: 106.4, },
        { umur: 36, min_sd_1: 85.0, min_sd_2: 88.7, min_sd_3: 92.4, rata_rata: 96.1, plus_sd_1: 99.8, plus_sd_2: 103.5, plus_sd_3: 107.2, },
        { umur: 37, min_sd_1: 85.5, min_sd_2: 89.2, min_sd_3: 93.0, rata_rata: 96.7, plus_sd_1: 100.5, plus_sd_2: 104.2, plus_sd_3: 108.0, },
        { umur: 38, min_sd_1: 86.0, min_sd_2: 89.8, min_sd_3: 93.6, rata_rata: 97.4, plus_sd_1: 101.2, plus_sd_2: 105.0, plus_sd_3: 108.8, },
        { umur: 39, min_sd_1: 86.5, min_sd_2: 90.3, min_sd_3: 94.2, rata_rata: 98.0, plus_sd_1: 101.8, plus_sd_2: 105.7, plus_sd_3: 109.5, },
        { umur: 40, min_sd_1: 87.0, min_sd_2: 90.9, min_sd_3: 94.7, rata_rata: 98.6, plus_sd_1: 102.5, plus_sd_2: 106.4, plus_sd_3: 110.3, },
        { umur: 41, min_sd_1: 87.5, min_sd_2: 91.4, min_sd_3: 95.3, rata_rata: 99.2, plus_sd_1: 103.2, plus_sd_2: 107.1, plus_sd_3: 111.0, },
        { umur: 42, min_sd_1: 88.0, min_sd_2: 91.9, min_sd_3: 95.9, rata_rata: 99.9, plus_sd_1: 103.8, plus_sd_2: 107.8, plus_sd_3: 111.7, },
        { umur: 43, min_sd_1: 88.4, min_sd_2: 92.4, min_sd_3: 96.4, rata_rata: 100.4, plus_sd_1: 104.5, plus_sd_2: 108.5, plus_sd_3: 112.5, },
        { umur: 44, min_sd_1: 88.9, min_sd_2: 93.0, min_sd_3: 97.0, rata_rata: 101.0, plus_sd_1: 105.1, plus_sd_2: 109.1, plus_sd_3: 113.2, },
        { umur: 45, min_sd_1: 89.4, min_sd_2: 93.5, min_sd_3: 97.5, rata_rata: 101.6, plus_sd_1: 105.7, plus_sd_2: 109.8, plus_sd_3: 113.9, },
        { umur: 46, min_sd_1: 89.8, min_sd_2: 94.0, min_sd_3: 98.1, rata_rata: 102.2, plus_sd_1: 106.3, plus_sd_2: 110.4, plus_sd_3: 114.6, },
        { umur: 47, min_sd_1: 90.3, min_sd_2: 94.4, min_sd_3: 98.6, rata_rata: 102.8, plus_sd_1: 106.9, plus_sd_2: 111.1, plus_sd_3: 115.2, },
        { umur: 48, min_sd_1: 90.7, min_sd_2: 94.9, min_sd_3: 99.1, rata_rata: 103.3, plus_sd_1: 107.5, plus_sd_2: 111.7, plus_sd_3: 115.9, },
        { umur: 49, min_sd_1: 91.2, min_sd_2: 95.4, min_sd_3: 99.7, rata_rata: 103.9, plus_sd_1: 108.1, plus_sd_2: 112.4, plus_sd_3: 116.6, },
        { umur: 50, min_sd_1: 91.6, min_sd_2: 95.9, min_sd_3: 100.2, rata_rata: 104.4, plus_sd_1: 108.7, plus_sd_2: 113.0, plus_sd_3: 117.3, },
        { umur: 51, min_sd_1: 92.1, min_sd_2: 96.4, min_sd_3: 100.7, rata_rata: 105.0, plus_sd_1: 109.3, plus_sd_2: 113.6, plus_sd_3: 117.9, },
        { umur: 52, min_sd_1: 92.5, min_sd_2: 96.9, min_sd_3: 101.2, rata_rata: 105.6, plus_sd_1: 109.9, plus_sd_2: 114.2, plus_sd_3: 118.6, },
        { umur: 53, min_sd_1: 93.0, min_sd_2: 97.4, min_sd_3: 101.7, rata_rata: 106.1, plus_sd_1: 110.5, plus_sd_2: 114.9, plus_sd_3: 119.2, },
        { umur: 54, min_sd_1: 93.4, min_sd_2: 97.8, min_sd_3: 102.3, rata_rata: 106.7, plus_sd_1: 111.1, plus_sd_2: 115.5, plus_sd_3: 119.9, },
        { umur: 55, min_sd_1: 93.9, min_sd_2: 98.3, min_sd_3: 102.8, rata_rata: 107.2, plus_sd_1: 111.7, plus_sd_2: 116.1, plus_sd_3: 120.6, },
        { umur: 56, min_sd_1: 94.3, min_sd_2: 98.8, min_sd_3: 103.3, rata_rata: 107.8, plus_sd_1: 112.3, plus_sd_2: 116.7, plus_sd_3: 121.2, },
        { umur: 57, min_sd_1: 94.7, min_sd_2: 99.3, min_sd_3: 103.8, rata_rata: 108.3, plus_sd_1: 112.8, plus_sd_2: 117.4, plus_sd_3: 121.9, },
        { umur: 58, min_sd_1: 95.2, min_sd_2: 99.7, min_sd_3: 104.3, rata_rata: 108.9, plus_sd_1: 113.4, plus_sd_2: 118.0, plus_sd_3: 122.6, },
        { umur: 59, min_sd_1: 95.6, min_sd_2: 100.2, min_sd_3: 104.8, rata_rata: 109.4, plus_sd_1: 114.0, plus_sd_2: 118.6, plus_sd_3: 123.2, },
        { umur: 60, min_sd_1: 96.1, min_sd_2: 100.7, min_sd_3: 105.3, rata_rata: 110.0, plus_sd_1: 114.6, plus_sd_2: 119.2, plus_sd_3: 123.9, },
    ];

    const [showTable, setShowTable] = React.useState(false);

    const toggleTable = () => {
        setShowTable(!showTable);
    };

    return (
        <div>
            <h1 className="text-center my-5 font-poppins font-bold uppercase">Standar Panjang Badan Menurut Umur (PB/U) Anak Perempuan Umur 0 – 24 Bulan</h1>
            <div className="flex flex-col  mb-2 max-h-[400px]">
                <p className="mb-2 text-gray-600 text-[12px] font-poppins">Keterangan: * Pengukuran PB dilakukan dalam keadaan anak telentang.</p>
                <button onClick={toggleTable} className="mb-5 bg-blue-500 rounded-[5px]">{showTable ? "Hide" : "Show"} Table</button>
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            {showTable && (
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-center text-[14px] font-bold text-gray-500 uppercase tracking-wider word break-words">
                                                Umur
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-center text-[14px] font-bold text-gray-500 uppercase tracking-wider word break-words"
                                            >
                                                -3 SD
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-center text-[14px] font-bold text-gray-500 uppercase tracking-wider word break-words"
                                            >
                                                -2 SD
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-center text-[14px] font-bold text-gray-500 uppercase tracking-wider word break-words"
                                            >
                                                -1 SD
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-center text-[14px] font-bold text-gray-500 uppercase tracking-wider word break-words"
                                            >
                                                Median
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-center text-[14px] font-bold text-gray-500 uppercase tracking-wider word break-words"
                                            >
                                                +1 SD
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-center text-[14px] font-bold text-gray-500 uppercase tracking-wider word break-words"
                                            >
                                                +2 SD
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-center text-[14px] font-bold text-gray-500 uppercase tracking-wider word break-words"
                                            >
                                                +3 SD
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200 overflow-y-scroll">
                                        {data3.map((item) => (
                                            <tr key={item.umur}>
                                                <td className="px-2 py-4 break-words text-center">
                                                    <div className="text-sm text-gray-900">{item.umur}</div>
                                                </td>
                                                <td className="px-2 py-4 break-words text-center">
                                                    <div className="text-sm text-gray-900">{item.min_sd_1}</div>
                                                </td>
                                                <td className="px-2 py-4 break-words text-center">
                                                    <div className="text-sm text-gray-900">{item.min_sd_2}</div>
                                                </td>
                                                <td className="px-2 py-4 break-words text-center">
                                                    <div className="text-sm text-gray-900">{item.min_sd_3}</div>
                                                </td>
                                                <td className="px-2 py-4 break-words text-center">
                                                    <div className="text-sm text-gray-900">{item.rata_rata}</div>
                                                </td>
                                                <td className="px-2 py-4 break-words text-center">
                                                    <div className="text-sm text-gray-900">{item.plus_sd_1}</div>
                                                </td>
                                                <td className="px-2 py-4 break-words text-center">
                                                    <div className="text-sm text-gray-900">{item.plus_sd_2}</div>
                                                </td>
                                                <td className="px-2 py-4 break-words text-center">
                                                    <div className="text-sm text-gray-900">{item.plus_sd_3}</div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const FourthTable = () => {
    const data4 = [
        { umur: 24, min_sd_1: 78.0, min_sd_2: 81.0, min_sd_3: 84.1, rata_rata: 87.1, plus_sd_1: 90.2, plus_sd_2: 93.2, plus_sd_3: 96.3, },
        { umur: 25, min_sd_1: 78.6, min_sd_2: 81.7, min_sd_3: 84.9, rata_rata: 88.0, plus_sd_1: 91.1, plus_sd_2: 94.2, plus_sd_3: 97.3, },
        { umur: 26, min_sd_1: 79.3, min_sd_2: 82.5, min_sd_3: 85.6, rata_rata: 88.8, plus_sd_1: 92.0, plus_sd_2: 95.2, plus_sd_3: 98.3, },
        { umur: 27, min_sd_1: 79.9, min_sd_2: 83.1, min_sd_3: 86.4, rata_rata: 89.6, plus_sd_1: 92.9, plus_sd_2: 96.1, plus_sd_3: 99.3, },
        { umur: 28, min_sd_1: 80.5, min_sd_2: 83.8, min_sd_3: 87.1, rata_rata: 90.4, plus_sd_1: 93.7, plus_sd_2: 97.0, plus_sd_3: 100.3, },
        { umur: 29, min_sd_1: 81.1, min_sd_2: 84.5, min_sd_3: 87.8, rata_rata: 91.2, plus_sd_1: 94.5, plus_sd_2: 97.9, plus_sd_3: 101.2, },
        { umur: 30, min_sd_1: 81.7, min_sd_2: 85.1, min_sd_3: 88.5, rata_rata: 91.9, plus_sd_1: 95.3, plus_sd_2: 98.7, plus_sd_3: 102.1, },
        { umur: 31, min_sd_1: 82.3, min_sd_2: 85.7, min_sd_3: 89.2, rata_rata: 92.7, plus_sd_1: 96.1, plus_sd_2: 99.6, plus_sd_3: 103.0, },
        { umur: 32, min_sd_1: 82.8, min_sd_2: 86.4, min_sd_3: 89.9, rata_rata: 93.4, plus_sd_1: 96.9, plus_sd_2: 100.4, plus_sd_3: 103.9, },
        { umur: 33, min_sd_1: 83.4, min_sd_2: 86.9, min_sd_3: 90.5, rata_rata: 94.1, plus_sd_1: 97.6, plus_sd_2: 101.2, plus_sd_3: 104.8, },
        { umur: 34, min_sd_1: 83.9, min_sd_2: 87.5, min_sd_3: 91.1, rata_rata: 94.8, plus_sd_1: 98.4, plus_sd_2: 102.0, plus_sd_3: 105.6, },
        { umur: 35, min_sd_1: 84.4, min_sd_2: 88.1, min_sd_3: 91.8, rata_rata: 95.4, plus_sd_1: 99.1, plus_sd_2: 102.7, plus_sd_3: 106.4, },
        { umur: 36, min_sd_1: 85.0, min_sd_2: 88.7, min_sd_3: 92.4, rata_rata: 96.1, plus_sd_1: 99.8, plus_sd_2: 103.5, plus_sd_3: 107.2, },
        { umur: 37, min_sd_1: 85.5, min_sd_2: 89.2, min_sd_3: 93.0, rata_rata: 96.7, plus_sd_1: 100.5, plus_sd_2: 104.2, plus_sd_3: 108.0, },
        { umur: 38, min_sd_1: 86.0, min_sd_2: 89.8, min_sd_3: 93.6, rata_rata: 97.4, plus_sd_1: 101.2, plus_sd_2: 105.0, plus_sd_3: 108.8, },
        { umur: 39, min_sd_1: 86.5, min_sd_2: 90.3, min_sd_3: 94.2, rata_rata: 98.0, plus_sd_1: 101.8, plus_sd_2: 105.7, plus_sd_3: 109.5, },
        { umur: 40, min_sd_1: 87.0, min_sd_2: 90.9, min_sd_3: 94.7, rata_rata: 98.6, plus_sd_1: 102.5, plus_sd_2: 106.4, plus_sd_3: 110.3, },
        { umur: 41, min_sd_1: 87.5, min_sd_2: 91.4, min_sd_3: 95.3, rata_rata: 99.2, plus_sd_1: 103.2, plus_sd_2: 107.1, plus_sd_3: 111.0, },
        { umur: 42, min_sd_1: 88.0, min_sd_2: 91.9, min_sd_3: 95.9, rata_rata: 99.9, plus_sd_1: 103.8, plus_sd_2: 107.8, plus_sd_3: 111.7, },
        { umur: 43, min_sd_1: 88.4, min_sd_2: 92.4, min_sd_3: 96.4, rata_rata: 100.4, plus_sd_1: 104.5, plus_sd_2: 108.5, plus_sd_3: 112.5, },
        { umur: 44, min_sd_1: 88.9, min_sd_2: 93.0, min_sd_3: 97.0, rata_rata: 101.0, plus_sd_1: 105.1, plus_sd_2: 109.1, plus_sd_3: 113.2, },
        { umur: 45, min_sd_1: 89.4, min_sd_2: 93.5, min_sd_3: 97.5, rata_rata: 101.6, plus_sd_1: 105.7, plus_sd_2: 109.8, plus_sd_3: 113.9, },
        { umur: 46, min_sd_1: 89.8, min_sd_2: 94.0, min_sd_3: 98.1, rata_rata: 102.2, plus_sd_1: 106.3, plus_sd_2: 110.4, plus_sd_3: 114.6, },
        { umur: 47, min_sd_1: 90.3, min_sd_2: 94.4, min_sd_3: 98.6, rata_rata: 102.8, plus_sd_1: 106.9, plus_sd_2: 111.1, plus_sd_3: 115.2, },
        { umur: 48, min_sd_1: 90.7, min_sd_2: 94.9, min_sd_3: 99.1, rata_rata: 103.3, plus_sd_1: 107.5, plus_sd_2: 111.7, plus_sd_3: 115.9, },
        { umur: 49, min_sd_1: 91.2, min_sd_2: 95.4, min_sd_3: 99.7, rata_rata: 103.9, plus_sd_1: 108.1, plus_sd_2: 112.4, plus_sd_3: 116.6, },
        { umur: 50, min_sd_1: 91.6, min_sd_2: 95.9, min_sd_3: 100.2, rata_rata: 104.4, plus_sd_1: 108.7, plus_sd_2: 113.0, plus_sd_3: 117.3, },
        { umur: 51, min_sd_1: 92.1, min_sd_2: 96.4, min_sd_3: 100.7, rata_rata: 105.0, plus_sd_1: 109.3, plus_sd_2: 113.6, plus_sd_3: 117.9, },
        { umur: 52, min_sd_1: 92.5, min_sd_2: 96.9, min_sd_3: 101.2, rata_rata: 105.6, plus_sd_1: 109.9, plus_sd_2: 114.2, plus_sd_3: 118.6, },
        { umur: 53, min_sd_1: 93.0, min_sd_2: 97.4, min_sd_3: 101.7, rata_rata: 106.1, plus_sd_1: 110.5, plus_sd_2: 114.9, plus_sd_3: 119.2, },
        { umur: 54, min_sd_1: 93.4, min_sd_2: 97.8, min_sd_3: 102.3, rata_rata: 106.7, plus_sd_1: 111.1, plus_sd_2: 115.5, plus_sd_3: 119.9, },
        { umur: 55, min_sd_1: 93.9, min_sd_2: 98.3, min_sd_3: 102.8, rata_rata: 107.2, plus_sd_1: 111.7, plus_sd_2: 116.1, plus_sd_3: 120.6, },
        { umur: 56, min_sd_1: 94.3, min_sd_2: 98.8, min_sd_3: 103.3, rata_rata: 107.8, plus_sd_1: 112.3, plus_sd_2: 116.7, plus_sd_3: 121.2, },
        { umur: 57, min_sd_1: 94.7, min_sd_2: 99.3, min_sd_3: 103.8, rata_rata: 108.3, plus_sd_1: 112.8, plus_sd_2: 117.4, plus_sd_3: 121.9, },
        { umur: 58, min_sd_1: 95.2, min_sd_2: 99.7, min_sd_3: 104.3, rata_rata: 108.9, plus_sd_1: 113.4, plus_sd_2: 118.0, plus_sd_3: 122.6, },
        { umur: 59, min_sd_1: 95.6, min_sd_2: 100.2, min_sd_3: 104.8, rata_rata: 109.4, plus_sd_1: 114.0, plus_sd_2: 118.6, plus_sd_3: 123.2, },
        { umur: 60, min_sd_1: 96.1, min_sd_2: 100.7, min_sd_3: 105.3, rata_rata: 110.0, plus_sd_1: 114.6, plus_sd_2: 119.2, plus_sd_3: 123.9, },
    ];

    const [showTable, setShowTable] = React.useState(false);

    const toggleTable = () => {
        setShowTable(!showTable);
    };

    return (
        <div>
            <h1 className="text-center my-5 font-poppins font-bold uppercase">Standar Tinggi Badan Menurut Umur (TB/U) Anak Perempuan Umur 24 – 60 Bulan</h1>
            <div className="flex flex-col  mb-2 max-h-[400px]">
                <p className="mb-2 text-gray-600 text-[12px] font-poppins">Keterangan: * Pengukuran TB dilakukan dalam keadaan anak berdiri.</p>
                <button onClick={toggleTable} className="mb-5 bg-blue-500 rounded-[5px]">{showTable ? "Hide" : "Show"} Table</button>
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            {showTable && (
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-center text-[14px] font-bold text-gray-500 uppercase tracking-wider word break-words">
                                                Umur
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-center text-[14px] font-bold text-gray-500 uppercase tracking-wider word break-words"
                                            >
                                                -3 SD
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-center text-[14px] font-bold text-gray-500 uppercase tracking-wider word break-words"
                                            >
                                                -2 SD
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-center text-[14px] font-bold text-gray-500 uppercase tracking-wider word break-words"
                                            >
                                                -1 SD
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-center text-[14px] font-bold text-gray-500 uppercase tracking-wider word break-words"
                                            >
                                                Median
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-center text-[14px] font-bold text-gray-500 uppercase tracking-wider word break-words"
                                            >
                                                +1 SD
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-center text-[14px] font-bold text-gray-500 uppercase tracking-wider word break-words"
                                            >
                                                +2 SD
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-center text-[14px] font-bold text-gray-500 uppercase tracking-wider word break-words"
                                            >
                                                +3 SD
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200 overflow-y-scroll">
                                        {data4.map((item) => (
                                            <tr key={item.umur}>
                                                <td className="px-2 py-4 break-words text-center">
                                                    <div className="text-sm text-gray-900">{item.umur}</div>
                                                </td>
                                                <td className="px-2 py-4 break-words text-center">
                                                    <div className="text-sm text-gray-900">{item.min_sd_1}</div>
                                                </td>
                                                <td className="px-2 py-4 break-words text-center">
                                                    <div className="text-sm text-gray-900">{item.min_sd_2}</div>
                                                </td>
                                                <td className="px-2 py-4 break-words text-center">
                                                    <div className="text-sm text-gray-900">{item.min_sd_3}</div>
                                                </td>
                                                <td className="px-2 py-4 break-words text-center">
                                                    <div className="text-sm text-gray-900">{item.rata_rata}</div>
                                                </td>
                                                <td className="px-2 py-4 break-words text-center">
                                                    <div className="text-sm text-gray-900">{item.plus_sd_1}</div>
                                                </td>
                                                <td className="px-2 py-4 break-words text-center">
                                                    <div className="text-sm text-gray-900">{item.plus_sd_2}</div>
                                                </td>
                                                <td className="px-2 py-4 break-words text-center">
                                                    <div className="text-sm text-gray-900">{item.plus_sd_3}</div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Table = () => {
    return (
        <div>
            <FirstTable />
            <SecondTable />
            <ThirdTable />
            <FourthTable />
        </div>
    );
};

export default Table;
