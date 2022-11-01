function operator(proxies, targetPlatform) {
  const _ = lodash
  const host = 'tms.dingtalk.com'
  return proxies.map(p => {
     _.set(p, 'ws-opts.headers.Host', host)
     return p
  })
}