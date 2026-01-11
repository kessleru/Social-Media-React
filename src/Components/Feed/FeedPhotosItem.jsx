import React from 'react';

const FeedPhotosItem = ({ photo, setModalPhoto }) => {
  function handleClick() {
    setModalPhoto(photo);
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setModalPhoto(photo);
    }
  }

  return (
    <li
      className='nth-2:col-span-2 nth-2:row-span-2 max-sm:nth-2:col-auto max-sm:nth-2:row-auto grid rounded-md overflow-hidden cursor-pointer group focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 transition-transform duration-150 hover:scale-[1.02]'
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role='button'
      tabIndex={0}
      aria-label={`Ver foto: ${photo.title}`}
    >
      <img src={photo.src} alt={photo.title} className='[grid-area:1/1]' />
      <span
        className='[grid-area:1/1] bg-neutral-950/40 text-white text-center items-center justify-center hidden group-hover:flex group-focus-visible:flex before:size-4 before:inline-block before:mr-1 before:view-icon'
        aria-hidden='true'
      >
        {photo.acessos}
      </span>
    </li>
  );
};

export default FeedPhotosItem;
