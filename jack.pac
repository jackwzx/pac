function FindProxyForURL(url, host) {

  switch(host)
  {
  case "ar.map.xiaojukeji.com":
  return 'PROXY 172.22.116.114:8888;';
  break;
  case "10.164.73.70":
  return 'PROXY 172.22.116.114:8888;';
  break;
  }
  return 'DIRECT;';
}

