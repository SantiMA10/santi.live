async function handleRequest() {
  const destinationURL = 'https://twitch.tv/santima10'
  const statusCode = 302

  return Response.redirect(destinationURL, statusCode)
}

addEventListener('fetch', async event => {
  event.respondWith(handleRequest(event.request))
})
