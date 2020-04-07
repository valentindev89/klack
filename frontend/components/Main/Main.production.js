import { useEffect } from 'react';

export default () => {
  useEffect(() => {
    const script = document.createElement('script');
    const scriptText = document.createTextNode(`
      (function (w,d,s,o,f,js,fjs) {
      w['klack-widget']=o;w[o] = w[o] || function () { (w[o].q = w[o].q || []).push(arguments) };
      js = d.createElement(s), fjs = d.getElementsByTagName(s)[0];
      js.id = o; js.src = f; js.async = 1; fjs.parentNode.insertBefore(js, fjs);
      }(window, document, 'script', 'mw', 'https://xy883.s3.amazonaws.com/widget.js'));
      mw('appid', '31a2457f36b7172c3b8ade7597e734a59040c62853399ff252b4896c3d104447EiP79ipSYJOmXxeomGJBjiXrNZckBZXKK6Qd/fmP8TgxsljeyoWG6IPtAjSm51/sr/0Zn7+mdsgLbc2iLamJBw==');
    `);

    script.appendChild(scriptText);
    document.head.appendChild(script);
  }, []);

  return <div />;
};
