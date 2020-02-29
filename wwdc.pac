function FindProxyForURL(url, host) {

  switch(host)
  {
  case "developer.apple.com":
  return 'PROXY 17.253.85.202;';
  break;
  case "devstreaming-cdn.apple.com":
  return 'PROXY 17.253.85.201;';
  break;
  }
  return 'DIRECT;';
}

