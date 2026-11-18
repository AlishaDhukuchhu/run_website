const fs = require('fs');
const https = require('https');
const path = require('path');

const screens = [
  { name: 'Dashboard', url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzkyMGUyMjA5NmNjZTRlNTA5ZWUyNWYwNmRkMzJhNmM2EgsSBxDVz6DK2Q0YAZIBIwoKcHJvamVjdF9pZBIVQhMxNTY0MzQxOTMwOTE1NDMyMzI1&filename=&opi=89354086' },
  { name: 'MobileCompanion', url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sX2ZhYjZlMWEzZWIyNTQ2NjhhZWIyNDYyY2M2YTM0MWVhEgsSBxDVz6DK2Q0YAZIBIwoKcHJvamVjdF9pZBIVQhMxNTY0MzQxOTMwOTE1NDMyMzI1&filename=&opi=89354086' },
  { name: 'CreateAccount', url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzVjN2Y0NjU5NzA2NDRkOGZiMWY2ZWVmMzJmMTRlOTAwEgsSBxDVz6DK2Q0YAZIBIwoKcHJvamVjdF9pZBIVQhMxNTY0MzQxOTMwOTE1NDMyMzI1&filename=&opi=89354086' },
  { name: 'Challenges', url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzkxYzU4OWJhZTMzZDRmNDRiOTFkNmIzNzY0NmVkOTU2EgsSBxDVz6DK2Q0YAZIBIwoKcHJvamVjdF9pZBIVQhMxNTY0MzQxOTMwOTE1NDMyMzI1&filename=&opi=89354086' },
  { name: 'SignIn', url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sX2QxNjFmY2FjMGUxYjQ0OTRhZWRjZjcxNTcyODBjN2Y3EgsSBxDVz6DK2Q0YAZIBIwoKcHJvamVjdF9pZBIVQhMxNTY0MzQxOTMwOTE1NDMyMzI1&filename=&opi=89354086' },
  { name: 'RouteDiscovery', url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzIzNjgxYmE5MzdjNTQ3MGY5MDRmZDA5ZmYyOWZlYzBhEgsSBxDVz6DK2Q0YAZIBIwoKcHJvamVjdF9pZBIVQhMxNTY0MzQxOTMwOTE1NDMyMzI1&filename=&opi=89354086' },
  { name: 'CommunityFeed', url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzEyNDJjMDU1OThhMzRiMWQ4NmVmMTkyZWQ1MmY3MTgwEgsSBxDVz6DK2Q0YAZIBIwoKcHJvamVjdF9pZBIVQhMxNTY0MzQxOTMwOTE1NDMyMzI1&filename=&opi=89354086' },
  { name: 'KnowEveryStep', url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzU1MjRiYTlmZjI2NjRlMTRhODlmYjA4YzI4Y2NkM2I5EgsSBxDVz6DK2Q0YAZIBIwoKcHJvamVjdF9pZBIVQhMxNTY0MzQxOTMwOTE1NDMyMzI1&filename=&opi=89354086' },
  { name: 'UserProfile', url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzhkYWYwMTgwMDczYzRhOTRiZTkzYTk0MWZjNTdjZmE4EgsSBxDVz6DK2Q0YAZIBIwoKcHJvamVjdF9pZBIVQhMxNTY0MzQxOTMwOTE1NDMyMzI1&filename=&opi=89354086' },
  { name: 'EventsGroups', url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sX2NlNTUyZTMxY2FlNDRmNDM4ZTU0MzBhMDRmNWFiNDNjEgsSBxDVz6DK2Q0YAZIBIwoKcHJvamVjdF9pZBIVQhMxNTY0MzQxOTMwOTE1NDMyMzI1&filename=&opi=89354086' },
  { name: 'Analytics', url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sX2FlMjA1Mzc4MDI1NzRkN2U4OTFlZWI4NzI4ZjA5NTlkEgsSBxDVz6DK2Q0YAZIBIwoKcHJvamVjdF9pZBIVQhMxNTY0MzQxOTMwOTE1NDMyMzI1&filename=&opi=89354086' }
];

const dir = path.join(__dirname, 'raw_screens');
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

screens.forEach(screen => {
  https.get(screen.url, (res) => {
    let data = '';
    res.on('data', (chunk) => {
      data += chunk;
    });
    res.on('end', () => {
      fs.writeFileSync(path.join(dir, `${screen.name}.html`), data);
      console.log(`Saved ${screen.name}.html`);
    });
  }).on("error", (err) => {
    console.log("Error: " + err.message);
  });
});
