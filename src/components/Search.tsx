export default function Search() {
    return (
      <div>
        <div className="relative mt-4 flex items-center w-full md:w-96">
          <input id="search" name="search" type="text" className="block w-full rounded-md border-0 py-1.5 pr-14 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-300 sm:text-sm sm:leading-6" />
          <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
            <kbd className="inline-flex items-center rounded border border-gray-200 px-1 font-sans text-xs text-gray-400">search</kbd>
          </div>
        </div>
      </div>
    );
  }
  