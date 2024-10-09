import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import Cart from './Cart';

// Example items, to simulate fetching from another resources.
// const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];



const Paginate = ({ itemsPerPage }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const [items, setItems] = useState([]);

  useEffect(() => {

    const getData = async () => {
      try {
        const responds = await fetch('https://dummyjson.com/products')
      const data = await responds.json()
      setItems(data.products)
      }catch(error) {
        console.error("products is not found" + error)
      }
    }

    getData() 
  },[])

  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <div>
        <div className='grid grid-cols-3'>
          <Items currentItems={currentItems} />
        </div>
        <div className='flex justify-between items-end mt-12'>
          <div className=''>
            <ReactPaginate
              breakLabel="..."
              nextLabel="next >"
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={pageCount}
              previousLabel="< previous"
              renderOnZeroPageCount={null}
              pageLinkClassName="page-link"
              previousClassName="hidden"
              nextClassName="hidden"
              containerClassName="ul flex gap-3"
              pageClassName="page-item w-9 h-9 border flex justify-center items-center"
              activeClassName="active bg-black text-white"
            />
          </div>
          <p>Products from {itemOffset + 1} to {endOffset > items.length ? items.length : endOffset} of {items.length}</p>
        </div>
      </div>
    </>
  );

}

let Items =({ currentItems }) => {
  return (
    <>
      {currentItems &&
        currentItems.map((item, i) => (
          <div key={i} >
            <Cart src={item.thumbnail} productName={item.title} productPrice={item.price} brand={item.brand} offer={item.discountPercentage} />
          </div>
        ))}
    </>
  );
}

export default Paginate