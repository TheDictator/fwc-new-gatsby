/**
 * THIS SCRIPT DELETES DATA!
 *
 * To use this script:
 * 1. Put this script in your studio-folder
 * 2. Write a GROQ filter that outputs the documents you want to delete
 * 3. Run `sanity dataset export` to backup your dataset before deleting a bunch of documents
 * 4. Run `sanity exec deleteDocsByFilter.js --with-user-token` to delete the documents
 *
 * NOTE: For the time being you should not delete more than ~1000 documents in one transaction. This will change in the future.
 * See docs:https://www.sanity.io/docs/http-api/http-mutations#deleting-multiple-documents-by-query
 */
const sanityClient = require('@sanity/client')

const client = sanityClient({
  projectId: 'pwxafpa5',
  dataset: 'production',
  token: 'skfWivRl2lA7FBk7aZnP3PkMhEUHmsx4RvcbtuxeT78XMWU5aWV3KNrrsRjfJwJBrX1WYycYjugvuRIgqtUgSxKkCclLJMGaAGOqfcU6b6ClzqRVJR6KqrX2uU0eACAahnHJ8XK3fT9MgpseosbBp1tCm3OSSgJOH4ElpqxwnKzsUfzdtieJ',
  useCdn: false,
  apiVersion: '2021-12-28'
})
client
  .delete({ query: '*[_type == "post"][0...999]' })
  .then(console.log)
  .catch(console.error)
