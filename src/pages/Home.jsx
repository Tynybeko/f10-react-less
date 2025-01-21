import React, { useEffect, useReducer, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router'
import Button from '../components/UI/Button';
import API from '../axios';
import Loader from '../components/Loader';

export default function Home() {
    const [queryParams, setQueryParams] = useSearchParams({
        limit: 5,
        page: 1
    })

    const [data, setData] = useState({
        loading: false,
        data: null,
        error: false
    })

    const [search, setSearch] = useState(queryParams.get('name') ?? '')

    const onSearch = (e) => {
        e.preventDefault()
        setSearchParams(['name', search], ['page', 1])
    }


    const setSearchParams = (...entry) => {
        setQueryParams(prev => {
            for (let [key, value] of entry) {
                console.log(key, value);
                prev.set(key, value)
            }
            for (let [key, value] of prev.entries()) {
                if (!value) {
                    prev.delete(key)
                }
            }
            return prev
        })
    }


    const fetchData = async () => {
        try {
            setData(prev => ({ ...prev, loading: true, error: false }))
            const response = await API.get('users', {
                params: queryParams
            })
            setData(prev => ({ ...prev, data: response.data }))
        } catch (er) {
            setData(prev => ({ ...prev, error: 'Error', data: null }))
        }
    }

    useEffect(() => {
        fetchData().finally(() => setData(prev => ({ ...prev, loading: false })))
    }, [queryParams])
    return (
        <div className=''>
            {
                data.loading && <Loader />
            }

            <form onSubmit={onSearch} className="max-w-md p-5">
                <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input value={search} onChange={(e) => setSearch(e.target.value)} type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." />
                    <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                </div>
            </form>

            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                #
                            </th>

                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                ID
                            </th>
                            <th scope="col" className="px-6 py-3">
                                CreatedAt
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.data ? data.data.map((item, index) => (
                                <tr key={item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <td className="px-6 py-4">
                                        {index + 1}
                                    </td>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {item.name}
                                    </th>
                                    <td className="px-6 py-4">
                                        {item.id}
                                    </td>

                                    <td className="px-6 py-4">
                                        {new Date(item.createdAt).toLocaleString('RU-ru')}
                                    </td>
                                </tr>

                            ))
                                :
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">

                                    <th colSpan={4} scope="row" className="px-6 py-4 text-center font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Пока нету данных!
                                    </th>
                                </tr>

                        }

                    </tbody>
                    <tfoot>
                        <tr>
                            <th colSpan={4} scope="col" className="px-6 py-3">
                                <div className="flex">
                                    <button onClick={() => {
                                        setSearchParams(['page', queryParams.get('page') - 1])

                                    }} disabled={(queryParams.get('page') ?? 1) <= 1} className="flex items-center justify-center px-4 h-10 me-3 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                        <svg className="w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4" />
                                        </svg>
                                        Previous
                                    </button>
                                    <button onClick={() => {
                                        setSearchParams(['page', +queryParams.get('page') + 1])
                                    }} disabled={data.error || queryParams.get('limit') > data.data?.length} className="flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                        Next
                                        <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                        </svg>
                                    </button>
                                </div>
                            </th>

                        </tr>
                    </tfoot>
                </table>
            </div>



        </div>
    )
}
