import { useEffect } from 'react';

export function PageHead({ title, description }) {
  const baseTitle = 'Dogs';

  useEffect(() => {
    document.title = title ? ` ${title} | ${baseTitle}` : baseTitle;
  }, [title]);

  useEffect(() => {
    if (!description) return;

    let meta = document.querySelector("meta[name='description']");
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', description);
  }, [description]);

  return null;
}
