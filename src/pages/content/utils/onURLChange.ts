type Callback = (url: string) => Promise<void>;

// watch for url change
export const onURLChange = (callback: Callback) => {
  console.log('🚀 ~ file: onUrlChange.ts:17 ~ onURLChange ~ onURLChange:');

  // location/url change event listener
  window.addEventListener('hashchange', () => {
    console.log('🚀 ~ file: onUrlChange.ts:13 ~ onURLChange ~ location.href:', location.href);

    // call the callback fn, on url change
    callback(location.href);
  });

  // handle location/url change
  //   var pushState = history.pushState;
  //   history.pushState = function () {
  //     pushState.apply(history, arguments);
  //   };
};
