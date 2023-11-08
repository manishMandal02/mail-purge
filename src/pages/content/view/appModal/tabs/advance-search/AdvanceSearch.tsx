import { useState } from 'react';
import { Spinner } from '../../../elements/Spinner';
import SearchForm, { SearchFormData } from './SearchForm';

const AdvanceSearch = () => {
  const [errorMsg, setErrorMsg] = useState('');
  const [searchResultCount, setSearchResultCount] = useState('');
  const [isLoadingSearchRes, setIsLoadingSearchRes] = useState(false);

  // handle search click
  const handleSearch = async (formData: SearchFormData) => {
    console.log('🚀 ~ file: AdvanceSearch.tsx:16 ~ handleSearch ~ formData:', formData);

    //TODO: handle search
  };

  return (
    <div className='w-full h-full max-h-full'>
      <p className='h-[5%] m-0 text-slate-700 mb[2px] font-light text-sm flex items-center justify-center'>
        Use Advance Search to filter out for emails you want to delete.
      </p>

      <hr className='bg-slate-200 opacity-30 p-0 m-0 my-2' />

      {/* search input container (filter options) */}
      <div className='flex flex-col px-12 py-4'>
        {/* search form */}
        <SearchForm onSubmit={handleSearch} isSubmitting={true} />
      </div>

      {/* search result container */}
      <div className='w-full h-[95%] flex flex-col justify-center items-start'>
        {/*  */}
        {isLoadingSearchRes ? (
          <Spinner size='lg' />
        ) : !errorMsg ? (
          // search result count
          <span>{searchResultCount}</span>
        ) : (
          // search error
          <p className='text-red-400 bg-red-100/75 px-8  py-2 text font-light '>{errorMsg}</p>
        )}
      </div>
    </div>
  );
};

export default AdvanceSearch;
